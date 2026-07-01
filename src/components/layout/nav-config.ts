export type NavItem = {
  label: string;
  to?: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export const primaryNav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Our Services",
    to: "/services",
    children: [
      { label: "Airline Representation (GSA / CSA)", href: "/services" },
      { label: "Air Charter Solutions", href: "/services" },
      { label: "Freight Brokerage", href: "/services" },
      { label: "Interline Partnership Development", href: "/services" },
      { label: "AWB Stock Solutions", href: "/services" },
      { label: "ACMI & Aircraft Leasing", href: "/services" },
      { label: "Customs Brokerage Coordination", href: "/services" },
      { label: "Automotive Logistics", href: "/services" },
    ],
  },
  { label: "Industries", to: "/industries" },
  { label: "Network", to: "/network" },
  { label: "News & Insights", to: "/news" },
  { label: "Contact Us", to: "/contact" },
];

export const servicesList = [
  "Airline Representation (GSA / CSA)",
  "Air Charter Solutions",
  "Freight Brokerage",
  "Interline Partnership Development",
  "AWB Stock Solutions",
  "ACMI & Aircraft Leasing",
  "Customs Brokerage Coordination",
  "Automotive Logistics",
];

export const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Network", to: "/network" },
  { label: "News & Insights", to: "/news" },
  { label: "Contact Us", to: "/contact" },
];

export const contactInfo = {
  address: "Office 2103, HDS Business Centre, JLT, Dubai, UAE",
  phone: "+971 4 123 4567",
  email: "info@nexaviacargo.com",
  website: "www.nexaviacargo.com",
};
