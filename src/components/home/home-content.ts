import svcAirlineRep from "@/assets/svc-airline-rep.jpg";
import svcCharter from "@/assets/svc-charter.jpg";
import svcFreight from "@/assets/svc-freight.jpg";
import svcInterline from "@/assets/svc-interline.jpg";
import svcAwb from "@/assets/svc-awb.jpg";
import svcAcmi from "@/assets/svc-acmi.jpg";
import svcCustoms from "@/assets/svc-customs.jpg";
import svcAutomotive from "@/assets/svc-automotive.jpg";
import {
  User,
  Plane,
  Boxes,
  Handshake,
  ClipboardList,
  Cog,
  ShieldCheck,
  Car,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  sub?: string;
  image: any;
  Icon: LucideIcon;
  details: string[];
  highlights: string[];
}

export const serviceCards: ServiceItem[] = [
  {
    slug: "airline-representation",
    title: "Airline Representation (GSA / CSA)",
    description:
      "Comprehensive commercial representation to expand market presence, maximize cargo revenue and strengthen customer relationships.",
    image: svcAirlineRep,
    Icon: User,
    details: [
      "Acting as a General Sales Agent (GSA) or Cargo Sales Agent (CSA), we represent airlines across the UAE and select international markets, delivering measurable revenue growth.",
      "Our team handles sales, marketing, reservations, capacity management, and customer service on behalf of the carrier, allowing airlines to enter new markets without heavy overhead.",
    ],
    highlights: [
      "Local sales & marketing teams",
      "Cargo capacity forecasting & yield optimization",
      "Customer relationship management",
      "Reporting, invoicing & operational oversight",
    ],
  },
  {
    slug: "air-charter",
    title: "Air Charter Solutions",
    description:
      "Global charter solutions for urgent, oversized, project, humanitarian and time-critical cargo.",
    sub: "Aircraft: B737F, B757F, B767F, B747F, B777F, IL76",
    image: svcCharter,
    Icon: Plane,
    details: [
      "From single ad-hoc missions to long-term ACMI programmes, we source the right aircraft for the mission — anywhere in the world.",
      "Our charter desk works around the clock to secure competitive rates and rapid activation for oversized, dangerous goods, humanitarian, and project cargo movements.",
    ],
    highlights: [
      "24/7 charter desk & rapid quotes",
      "Full range of freighter aircraft: B737F → B747F, B777F, IL76",
      "Oversized, DG, perishable & project cargo",
      "Permits, ground handling & routing coordination",
    ],
  },
  {
    slug: "freight-brokerage",
    title: "Freight Brokerage",
    description:
      "Connecting your cargo with the right capacity at the right price through our global network of trusted partners.",
    image: svcFreight,
    Icon: Boxes,
    details: [
      "We match shipper demand with airline and operator capacity across trade lanes worldwide, negotiating the best commercial and operational terms on your behalf.",
      "Our brokerage team acts as your single point of contact for capacity, documentation, tracking, and problem resolution.",
    ],
    highlights: [
      "Global airline & operator relationships",
      "Competitive spot & contract rates",
      "End-to-end shipment visibility",
      "Dedicated account management",
    ],
  },
  {
    slug: "interline",
    title: "Interline Partnership Development",
    description:
      "Creating interline agreements that expand connectivity, optimize capacity and unlock new commercial opportunities.",
    image: svcInterline,
    Icon: Handshake,
    details: [
      "We help airlines design and negotiate interline and prorate agreements that extend network reach without adding metal.",
      "From SPAs to full commercial partnerships, we translate strategic intent into contractual and operational reality.",
    ],
    highlights: [
      "Interline & SPA negotiation",
      "Prorate structures & revenue accounting",
      "Network gap analysis",
      "Partner onboarding & activation",
    ],
  },
  {
    slug: "awb-stock",
    title: "AWB Stock Solutions",
    description:
      "Access to Air Waybill stock from leading airlines in Dubai for seamless operations and global connectivity.",
    image: svcAwb,
    Icon: ClipboardList,
    details: [
      "We provide neutral and airline-specific AWB stock in Dubai, giving forwarders and consolidators immediate access to major carriers and destinations.",
      "Our team manages allocation, control, and reporting to keep your bookings flowing without administrative friction.",
    ],
    highlights: [
      "Neutral & airline stock in DXB",
      "Fast issuance & allocation",
      "Digital control & reporting",
      "Compliance with IATA standards",
    ],
  },
  {
    slug: "acmi",
    title: "ACMI & Aircraft Leasing",
    description:
      "Flexible ACMI, wet lease, dry lease and damp lease solutions to meet your capacity and operational needs.",
    image: svcAcmi,
    Icon: Cog,
    details: [
      "Whether you need short-term capacity to cover a peak season or a long-term wet-lease programme, we structure ACMI arrangements that balance cost, control, and compliance.",
      "We work with reputable operators and lessors to deliver aircraft, crew, maintenance, and insurance to the exact spec of your operation.",
    ],
    highlights: [
      "ACMI, wet, damp & dry lease",
      "Freighter & combi capacity",
      "Regulatory & permit coordination",
      "Long-term programme support",
    ],
  },
  {
    slug: "customs",
    title: "Customs Brokerage Coordination",
    description:
      "Coordinating with licensed customs broker partners for smooth clearance and regulatory compliance.",
    image: svcCustoms,
    Icon: ShieldCheck,
    details: [
      "Through our network of licensed brokers in the UAE and abroad, we coordinate import, export, and transit clearances with speed and accuracy.",
      "We take ownership of documentation, tariff classification, and regulatory compliance so your cargo moves without delay.",
    ],
    highlights: [
      "Import, export & transit clearance",
      "HS classification & duty optimization",
      "Restricted & dangerous goods expertise",
      "Compliance advisory & audit support",
    ],
  },
  {
    slug: "automotive",
    title: "Automotive Logistics",
    description:
      "Specialized brokerage solutions for automotive, heavy equipment, and high-value vehicle transportation.",
    image: svcAutomotive,
    Icon: Car,
    details: [
      "We move passenger vehicles, luxury cars, heavy equipment, and automotive spares by air and multimodal — protecting value at every touchpoint.",
      "From dealer stock replenishment to one-off collector cars, our team designs solutions with the right insurance, packaging, and handling.",
    ],
    highlights: [
      "Luxury & classic vehicle transport",
      "Heavy equipment & OEM parts",
      "Multimodal air / sea / road",
      "High-value insurance & handling",
    ],
  },
];

export const aircraftRange = ["B737F", "B757F", "B767F", "B747F", "B777F", "IL76"];
