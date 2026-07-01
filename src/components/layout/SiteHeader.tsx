"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import { NexaviaLogo } from "@/components/brand/NexaviaLogo";
import { Container } from "./Container";
import { primaryNav } from "./nav-config";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ProposalButton } from "@/components/marketing/ProposalModal";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-background transition-shadow ${
        scrolled ? "shadow-sm" : ""
      } border-b border-border/60`}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="shrink-0">
          <NexaviaLogo />
        </Link>

        {/* desktop nav */}
        <nav className="hidden xl:flex items-center gap-7 text-sm font-medium text-foreground/80">
          {primaryNav.map((item) => {
            if (item.children) {
              return (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger className="flex items-center gap-1 outline-none hover:text-navy transition-colors">
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-72">
                    {item.children.map((c) => (
                      <DropdownMenuItem key={c.label} asChild>
                        <Link href={c.href}>{c.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            if (item.to) {
              const isActive =
                item.to === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.to);
              return (
                <Link
                  key={item.label}
                  href={item.to}
                  className={`relative hover:text-navy transition-colors ${
                    isActive
                      ? "text-navy after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-gold"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-navy transition-colors"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden xl:flex">
          <ProposalButton className="inline-flex items-center gap-2 rounded-md border border-navy bg-navy px-5 py-2.5 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-deep">
            Request a Proposal
            <ArrowRight className="h-4 w-4" />
          </ProposalButton>
        </div>

        {/* mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="xl:hidden inline-flex items-center justify-center rounded-md p-2 text-navy hover:bg-muted"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="mt-2 mb-6">
              <NexaviaLogo />
            </div>
            <nav className="flex flex-col gap-1">
              {primaryNav.map((item) =>
                item.to ? (
                  <Link
                    key={item.label}
                    href={item.to}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                  >
                    {item.label}
                  </a>
                )
              )}
              <ProposalButton
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground"
              >
                Request a Proposal
                <ArrowRight className="h-4 w-4" />
              </ProposalButton>
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
