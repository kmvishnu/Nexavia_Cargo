import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Globe,
} from "lucide-react";
import { NexaviaLogo } from "@/components/brand/NexaviaLogo";
import { Container } from "./Container";
import { contactInfo, quickLinks, servicesList } from "./nav-config";
import { WhatsappIcon } from "@/components/brand/WhatsappIcon";

export function SiteFooter() {
  const whatsappUrl = `https://wa.me/${contactInfo.phone.replace(/\D/g, "")}?text=I%27d%20like%20to%20know%20about%20the%20services`;
  const emailSubject = encodeURIComponent("Inquiry regarding Nexavia Cargo Services");
  const emailBody = encodeURIComponent("Hello Nexavia Cargo Team,\n\nI would like to inquire about your aviation services and freight solutions.\n\nBest regards,");
  const emailUrl = `mailto:${contactInfo.email}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <footer className="bg-navy text-navy-foreground">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* brand */}
          <div className="space-y-5">
            <NexaviaLogo variant="light" />
            <p className="text-sm leading-relaxed text-white/70">
              A Dubai-based aviation services and freight brokerage company
              connecting airlines, operators and global cargo markets with
              expertise, integrity and excellence.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/company/nexaviaglobalcargo", label: "LinkedIn" },
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Instagram, href: "https://www.instagram.com/nexavia_global_cargo/", label: "Instagram" },
                { Icon: WhatsappIcon, href: whatsappUrl, label: "WhatsApp" },
                { Icon: Mail, href: emailUrl, label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/80 hover:border-gold hover:text-gold transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* quick links */}
          <FooterCol title="Quick Links">
            {quickLinks.map((l) => (
              <Link
                key={l.label}
                href={l.to}
                className="text-sm text-white/70 hover:text-gold transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </FooterCol>

          {/* services */}
          <FooterCol title="Our Services">
            {servicesList.map((s) => (
              <Link
                key={s}
                href="/services"
                className="text-sm text-white/70 hover:text-gold transition-colors"
              >
                {s}
              </Link>
            ))}
          </FooterCol>

          {/* contact */}
          <FooterCol title="Contact Us">
            <div className="flex gap-3 text-sm text-white/70">
              <MapPin className="h-4 w-4 shrink-0 text-gold mt-0.5" />
              <span>{contactInfo.address}</span>
            </div>
            <div className="flex gap-3 text-sm text-white/70">
              <Phone className="h-4 w-4 shrink-0 text-gold mt-0.5" />
              <a href={`tel:${contactInfo.phone}`} className="hover:text-gold transition-colors">{contactInfo.phone}</a>
            </div>
            <div className="flex gap-3 text-sm text-white/70">
              <WhatsappIcon className="h-4 w-4 shrink-0 text-gold mt-0.5" />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                {contactInfo.phone} (WhatsApp)
              </a>
            </div>
            <div className="flex gap-3 text-sm text-white/70">
              <Mail className="h-4 w-4 shrink-0 text-gold mt-0.5" />
              <a href={emailUrl} className="hover:text-gold transition-colors">{contactInfo.email}</a>
            </div>
            <div className="flex gap-3 text-sm text-white/70">
              <Globe className="h-4 w-4 shrink-0 text-gold mt-0.5" />
              <span>{contactInfo.website}</span>
            </div>
          </FooterCol>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Nexavia Global Cargo LLC. All Rights
            Reserved.
          </p>
          <p className="text-center sm:text-right">
            Developed by{" "}
            <a
              href="https://kmvishnu.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline transition-all font-medium"
            >
              Vishnu K M
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="mb-5 text-base font-semibold text-white">{title}</h4>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}
