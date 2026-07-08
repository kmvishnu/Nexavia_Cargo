"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { z } from "zod";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Send } from "lucide-react";
import { servicesList, contactInfo } from "@/components/layout/nav-config";
import { WhatsappIcon } from "@/components/brand/WhatsappIcon";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  service: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a bit more (min 10 chars)").max(2000),
});

type ProposalCtx = { open: (defaultService?: string) => void };
const Ctx = createContext<ProposalCtx | null>(null);

export function useProposal() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useProposal must be used within ProposalProvider");
  return ctx;
}

export function ProposalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [defaultService, setDefaultService] = useState<string | undefined>();

  const api = useMemo<ProposalCtx>(
    () => ({
      open: (svc) => {
        setDefaultService(svc);
        setOpen(true);
      },
    }),
    [],
  );

  return (
    <Ctx.Provider value={api}>
      {children}
      <ProposalDialog
        open={open}
        onOpenChange={setOpen}
        defaultService={defaultService}
      />
    </Ctx.Provider>
  );
}

function ProposalDialog({
  open,
  onOpenChange,
  defaultService,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  defaultService?: string;
}) {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const fd = new FormData(formElement);
    const raw = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Failed to submit request.");
      }

      toast.success("Thank you — our team will be in touch within one business day.");
      formElement.reset();
      onOpenChange(false);
    } catch (err: any) {
      toast.error(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/${contactInfo.phone.replace(/\D/g, "")}?text=I%27d%20like%20to%20know%20about%20the%20services`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg w-[92%] sm:w-full max-h-[90vh] overflow-y-auto p-4 sm:p-6 gap-3 sm:gap-4">
        <DialogHeader>
          <DialogTitle className="text-navy text-2xl">Request a Proposal</DialogTitle>
          <DialogDescription>
            Share a few details and our team will follow up with a tailored solution.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-3 pt-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="Full name" name="name" required placeholder="Jane Doe" />
            <Field label="Email" name="email" type="email" required placeholder="jane@company.com" />
            <Field label="Company" name="company" placeholder="Acme Cargo" />
            <Field label="Phone" name="phone" placeholder="+971 …" />
          </div>
          <div>
            <Label className="text-xs font-semibold uppercase tracking-wide text-navy">
              Service of interest
            </Label>
            <Select name="service" defaultValue={defaultService}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select a service (optional)" />
              </SelectTrigger>
              <SelectContent>
                {servicesList.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-xs font-semibold uppercase tracking-wide text-navy">
              How can we help? *
            </Label>
            <Textarea
              name="message"
              required
              rows={3}
              placeholder="Tell us about your cargo, routes, timelines…"
              className="mt-1"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-navy px-6 py-2.5 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-deep disabled:opacity-70"
          >
            {submitting ? "Sending…" : "Send Request"}
            {submitting ? <Send className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#20ba59] shadow-sm cursor-pointer"
          >
            <WhatsappIcon className="h-4 w-4" />
            Contact via WhatsApp
          </a>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <Label className="text-xs font-semibold uppercase tracking-wide text-navy">
        {label}
        {props.required && " *"}
      </Label>
      <Input {...props} className="mt-1" />
    </div>
  );
}

/** Button-style trigger that opens the proposal modal. */
export function ProposalButton({
  children,
  className,
  service,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  service?: string;
  onClick?: () => void;
}) {
  const { open } = useProposal();
  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        open(service);
      }}
      className={className}
    >
      {children}
    </button>
  );
}
