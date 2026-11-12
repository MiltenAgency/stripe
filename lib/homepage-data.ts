export const stripe = "https://stripe.com";
export const signup = "https://dashboard.stripe.com/register";
export const sales = `${stripe}/contact/sales`;
export const asset = (name: string) => `/assets/${name}`;
export const productTiles = [
  {
    id: "payments",
    title: "Accept and optimize payments globally—online and in person",
    description:
      "Accept payments around the world with a checkout designed to help more customers complete their purchases.",
    benefits: [
      "Accept popular payment methods",
      "Optimize your checkout experience",
      "Bring online and in-person payments together",
    ],
    link: "/payments",
    cta: "Explore Payments",
  },
  {
    id: "billing",
    title: "Enable any billing model",
    description:
      "Launch fast and improve revenue capture with billing software that supports pricing strategies, preferred payment methods, and recurring revenue.",
    benefits: [
      "Enhance pricing flexibility",
      "Offer customers preferred payment methods",
      "Improve revenue capture",
      "Reduce development time",
    ],
    link: "/billing",
    cta: "Explore Billing",
  },
  {
    id: "commerce",
    title: "Monetize through agentic commerce",
    description:
      "Make your products discoverable and shoppable in AI experiences. Connect your catalog and let customers buy wherever inspiration happens.",
    benefits: [
      "Reach customers in AI platforms",
      "Connect your product catalog",
      "Build a familiar, secure checkout",
    ],
    link: "/agentic-commerce",
    cta: "Explore agentic commerce",
  },
  {
    id: "issuing",
    title: "Create a card issuing program",
    description:
      "Create, distribute, and manage branded virtual and physical cards with flexible controls and a single integration.",
    benefits: [
      "Create physical and virtual cards",
      "Set spending controls",
      "Build your own card experience",
    ],
    link: "/issuing",
    cta: "Explore Issuing",
  },
  {
    id: "crypto",
    title: "Access borderless money movement with stablecoins and crypto",
    description:
      "Connect to a new global customer base and move money with financial infrastructure built for the internet.",
    benefits: [
      "Accept stablecoin payments",
      "Reach customers around the world",
      "Move money across borders",
    ],
    link: "/crypto",
    cta: "Explore crypto",
  },
  {
    id: "connect",
    title: "Embed payments in your platform",
    description:
      "Give your users a complete financial experience. Embed payments, manage money movement, and open new revenue streams for your platform.",
    benefits: [
      "Bring users onto your platform",
      "Build new revenue streams",
      "Manage payments in one place",
    ],
    link: "/connect",
    cta: "Explore Connect",
  },
];
export const metrics = [
  { value: "135+", label: "currencies and payment methods supported" },
  { value: "$1.9T", label: "in payments volume processed in 2025" },
  { value: "99.999%", label: "historical uptime for Stripe services" },
  { value: "200M+", label: "active subscriptions managed on Stripe Billing" },
];
export const enterpriseStories = [
  {
    name: "Hertz",
    mark: "H",
    title: "Hertz unifies commerce with Stripe.",
    image: "enterprise-accordion-hertz.webp",
    alt: "Aerial view of an intersection with crosswalks forming a parallelogram.",
    stats: ["160 countries", "11K+ locations globally"],
    products: "Payments, Terminal, Connect, Radar, and Stripe Sigma",
    url: "/customers/hertz",
    color: "#fff500",
  },
  {
    name: "URBN",
    mark: "URBN",
    title:
      "URBN consolidates $5 billion in online and in-store revenue onto Stripe.",
    image: "enterprise-accordion-urbn.webp",
    alt: "Clothing boutique with a display window framing garments.",
    stats: ["5+ consumer brands in retailer portfolio", "700+ store locations"],
    products: "Payments, Terminal, Connect, Stripe Sigma, Radar, and Link",
    url: "/customers/urbn",
    color: "#151515",
  },
  {
    name: "Instacart",
    mark: "✦",
    title: "Instacart powers online grocery delivery with Stripe.",
    image: "enterprise-accordion-instacart.webp",
    alt: "A grocery delivery bag with fresh flowers, vegetables, bread, and olive oil.",
    stats: ["600K+ shoppers", "1.8K retail partners across nearly 100K stores"],
    products: "Payments, Connect, Data Pipeline, and Issuing",
    url: "/customers/instacart",
    color: "#12b76a",
  },
  {
    name: "Le Monde",
    mark: "M",
    title: "Le Monde improves local and international payments with Stripe.",
    image: "enterprise-accordion-lemonde.webp",
    alt: "A traditional Parisian newspaper kiosk.",
    stats: [
      "100% of digital and print payments powered by Stripe",
      "Less than 3 months to implement and go live",
    ],
    products: "Payments, Stripe Sigma, and Radar",
    url: "/customers/le-monde",
    color: "#151515",
  },
];
export const startupStories = [
  {
    name: "Lovable",
    image: "lovable.webp",
    text: "Lovable grows into a vibe-coding juggernaut with Stripe.",
    url: "/customers/lovable",
  },
  {
    name: "Gamma",
    image: "Gamma.webp",
    text: "Gamma expands to $100M ARR and 70 million users with Stripe.",
    url: "/customers/gamma",
  },
  {
    name: "Runway",
    image: "Runway.webp",
    text: "Runway protects developer time with no-code solutions from Stripe.",
    url: "/customers/runway",
  },
  {
    name: "Supabase",
    image: "Supabase.webp",
    text: "Supabase delivers its backend-as-a-service to 150 countries with Stripe.",
    url: "/customers/supabase",
  },
  {
    name: "Linear",
    image: "linear.webp",
    text: "Linear partners with Stripe to handle billing and payments.",
    url: "/customers/linear",
  },
  {
    name: "ElevenLabs",
    image: "Eleven_Labs.webp",
    text: "ElevenLabs grows into a $3B AI audio leader with Stripe.",
    url: "/customers/elevenlabs",
  },
  {
    name: "Browserbase",
    image: "browserbase.webp",
    text: "Browserbase offers usage-based billing for an AI agent browser with Stripe.",
    url: "/customers/browserbase",
  },
  {
    name: "Decagon",
    image: "decagon.webp",
    text: "Decagon decreases support costs by 65% with Stripe-integrated agents.",
    url: "/customers/decagon",
  },
];
export const testimonials = [
  {
    brand: "mindbody",
    name: "Kurtis Moyer",
    role: "Lead Product Manager of Payments, Mindbody",
    image: "KurtisMoyer.webp",
    quote:
      "With Stripe, we have a global technology partner to help our customers—from Canadian yoga studios to British boxing classes—keep growing and evolving in a new wellness world.",
    url: "/customers/mindbody",
  },
  {
    brand: "JOBBER",
    name: "Laura Collinson",
    role: "Director of Fintech, Jobber",
    image: "testimonial-headshot-jobber.webp",
    quote:
      "Without Stripe, it would have taken significant time and engineering effort to offer these resources to our customers. The financial infrastructure Stripe offers is incredibly valuable to Jobber, and we look forward to seeing what comes next.",
    url: "/customers/jobber",
  },
  {
    brand: "substack",
    name: "Seth McMillan",
    role: "Engineering Manager, Substack",
    image: "testimonial-headshot-substack.webp",
    quote:
      "Stripe makes the subscriptions and payment piece really easy for everyone involved. And that helps us make it easy for writers and other creators to do the work they want to do on Substack and get paid for it.",
    url: "/customers/substack",
  },
  {
    brand: "lightspeed",
    name: "Dax Dasilva",
    role: "Founder and CEO, Lightspeed",
    image: "testimonial-headshot-lightspeed.webp",
    quote:
      "Stripe offers an enterprise-grade infrastructure that puts our customers on the cutting edge of modern payments technology. The combination of Terminal and Connect is a powerful integrated solution.",
    url: "/customers/lightspeed",
  },
];
export const news = [
  {
    title: "Businesses on Stripe generated $1.9T in 2025.",
    description:
      "Our annual letter explores the trends defining the internet economy, from international expansion to stablecoin progress and agentic commerce.",
    image: "annual-letter-mobile.webp",
    cta: "Read the letter",
    url: "/annual-updates/2025",
  },
  {
    title: "150K+ users have their best day ever on Stripe.",
    description:
      "From Black Friday through Cyber Monday 2025, Stripe processed more than $40B for businesses while maintaining a 99.9999% uptime.",
    image: "the-happenings-bfcm-mobile.webp",
    cta: "See the numbers",
    url: "/newsroom/news/black-friday-cyber-monday-2025",
  },
  {
    title: "Tidemark’s vertical and SMB SaaS benchmark report.",
    description:
      "Explore what is driving growth in vertical SaaS: going multiproduct, embedding fintech, and integrating AI.",
    image: "the-happenings-tidemark-mobile.webp",
    cta: "Get the report",
    url: "/reports/vertical-saas-benchmark",
  },
  {
    title: "Shopify’s Tobi Lütke sits down with John Collison.",
    description:
      "Hear them discuss the choices that shaped Shopify and Stripe, the future of commerce, and their advice for founders.",
    image: "the-happenings-cheeky-pint-mobile.webp",
    cta: "Watch video",
    url: "https://www.youtube.com/@stripe",
  },
  {
    title: "New tools to process payments outside app stores.",
    description:
      "New regulations mean new opportunities to grow your revenue and give customers more ways to pay.",
    image: "the-happenings-payment-processing-mobile.webp",
    cta: "Learn how",
    url: "/in-app-payments",
  },
  {
    title: "Crypto.com partners with Stripe to enable better crypto payments.",
    description:
      "Tap into a new global customer base by letting customers pay with their crypto balance directly at checkout.",
    image: "the-happenings-crypto-mobile.webp",
    cta: "View announcement",
    url: "/newsroom",
  },
  {
    title: "Make your products shoppable through AI platforms.",
    description:
      "Connect your business to the next generation of commerce with the Agentic Commerce Protocol.",
    image: "the-happenings-agentic-mobile.webp",
    cta: "Read more",
    url: "/agentic-commerce",
  },
  {
    title: "How leading retailers unify customer experiences and drive growth.",
    description:
      "Explore how brands bring online and in-store payments together to create a more connected checkout.",
    image: "the-happenings-payment-retailers-mobile.webp",
    cta: "Get the report",
    url: "/retail",
  },
];
export const footerGroups = [
  {
    title: "Products and pricing",
    links: [
      "Pricing",
      "Atlas",
      "Authorization Boost",
      "Billing",
      "Capital",
      "Capital for platforms",
      "Checkout",
      "Climate",
      "Connect",
      "Crypto",
      "Crypto Onramp",
      "Data Pipeline",
      "Elements",
      "Financial Connections",
      "Global Payouts",
      "Identity",
      "Invoicing",
      "Issuing",
      "Link",
      "Managed Payments",
      "Payment links",
      "Payment methods",
      "Payments",
      "Radar",
      "Revenue Recognition",
      "Stripe Sigma",
      "Subscriptions",
      "Tax",
      "Terminal",
      "Treasury",
      "Treasury for platforms",
      "Usage-based billing",
    ],
  },
  {
    title: "Solutions",
    links: [
      "Enterprises",
      "Startups",
      "Agentic commerce",
      "Crypto",
      "Ecommerce",
      "Embedded finance",
      "Finance automation",
      "Global businesses",
      "In-app payments",
      "Marketplaces",
      "Money management",
      "Platforms",
      "SaaS",
      "AI companies",
      "Creator economy",
      "Fintech",
      "Gaming",
      "Hospitality, travel, and leisure",
      "Insurance",
      "Media and entertainment",
      "Nonprofits",
      "Professional services",
      "Public sector",
      "Retail",
    ],
  },
  {
    title: "Developers",
    links: [
      "Documentation",
      "API reference",
      "API status",
      "API changelog",
      "Libraries and SDKs",
      "Stripe Projects",
      "Developer blog",
    ],
  },
  {
    title: "Integrations and custom solutions",
    links: [
      "Stripe App Marketplace",
      "Stripe Partner ecosystem",
      "Professional services",
    ],
  },
  {
    title: "Resources",
    links: [
      "Product roadmap",
      "Guides",
      "Customer stories",
      "Blog",
      "Community",
      "Sessions annual conference",
      "Privacy and terms",
      "Prohibited and restricted businesses",
      "Licenses",
      "Sitemap",
      "Your privacy choices",
    ],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Newsroom", "Stripe Press", "Contact sales"],
  },
  { title: "Support", links: ["Get support", "Managed support plans"] },
];
export function officialLink(label: string) {
  const special: Record<string, string> = {
    Documentation: "https://docs.stripe.com",
    "API reference": "https://docs.stripe.com/api",
    "API status": "https://status.stripe.com",
    "API changelog": "https://docs.stripe.com/changelog",
    "Libraries and SDKs": "https://docs.stripe.com/sdks",
    "Stripe Projects": "https://docs.stripe.com",
    "Developer blog": "https://stripe.dev",
    "Stripe App Marketplace": "https://marketplace.stripe.com",
    "Stripe Partner ecosystem": `${stripe}/partners`,
    Enterprises: `${stripe}/enterprise`,
    Platforms: `${stripe}/connect`,
    "Global businesses": `${stripe}/global`,
    "Privacy and terms": `${stripe}/privacy`,
    "Your privacy choices": "https://privacy.stripe.com",
    Careers: `${stripe}/jobs`,
    "Get support": "https://support.stripe.com",
    "Stripe Press": "https://press.stripe.com",
    "Customer stories": `${stripe}/customers`,
    "Contact sales": sales,
    "Sessions annual conference": `${stripe}/sessions`,
    "Stripe Sigma": `${stripe}/sigma`,
  };
  return (
    special[label] ??
    `${stripe}/${label.toLowerCase().replaceAll(" ", "-").replaceAll(",", "")}`
  );
}
