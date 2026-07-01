"use client";

import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { contactInfo, servicesList } from "@/components/layout/nav-config";
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
import { ArrowRight, Mail, MapPin, Phone, Clock, Globe } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  service: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a bit more (min 10 chars)").max(2000),
});

export default function ContactPageClient() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success("Thank you — our team will be in touch within one business day.");
    form.reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's Talk Aviation"
        description="Whether you're an airline, forwarder, operator or shipper — our team in Dubai is ready to help."
      />

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.25fr]">
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                Contact Details
              </p>
              <h2 className="mt-3 text-3xl font-bold text-navy">
                Speak to our team
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Reach out for commercial enquiries, charter requests or general
                information. We respond within one business day.
              </p>
            </div>
            <div className="space-y-5">
              <ContactRow Icon={MapPin} title="Head Office">
                {contactInfo.address}
              </ContactRow>
              <ContactRow Icon={Phone} title="Phone">
                <a href={`tel:${contactInfo.phone}`} className="hover:text-navy">
                  {contactInfo.phone}
                </a>
              </ContactRow>
              <ContactRow Icon={Mail} title="Email">
                <a href={`mailto:${contactInfo.email}`} className="hover:text-navy">
                  {contactInfo.email}
                </a>
              </ContactRow>
              <ContactRow Icon={Globe} title="Website">
                {contactInfo.website}
              </ContactRow>
              <ContactRow Icon={Clock} title="Hours">
                MON-FRI 09:00 to 18:00, SAT 09:00 to 13:00 GST
              </ContactRow>
            </div>
          </div>

          <div className="rounded-lg bg-card p-8 ring-1 ring-border/60 shadow-sm">
            <h3 className="text-xl font-bold text-navy">Send us a message</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill in the form and we'll get back to you shortly.
            </p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Full name" name="name" required placeholder="Jane Doe" />
                <Field label="Email" name="email" type="email" required placeholder="jane@company.com" />
                <Field label="Company" name="company" placeholder="Acme Cargo" />
                <Field label="Phone" name="phone" placeholder="+971 …" />
              </div>
              <div>
                <Label className="text-xs font-semibold uppercase tracking-wide text-navy">
                  Service of interest
                </Label>
                <Select name="service">
                  <SelectTrigger className="mt-1.5">
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
                  Message *
                </Label>
                <Textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your cargo, routes, timelines…"
                  className="mt-1.5"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-deep disabled:opacity-70"
              >
                {submitting ? "Sending…" : "Send Message"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactRow({
  Icon,
  title,
  children,
}: {
  Icon: typeof Mail;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-navy">
        <Icon className="h-5 w-5 text-gold" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wide text-navy">
          {title}
        </div>
        <div className="mt-1 text-sm text-muted-foreground leading-relaxed">
          {children}
        </div>
      </div>
    </div>
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
      <Input {...props} className="mt-1.5" />
    </div>
  );
}
