/**
 * content.js — single source of truth for all marketing copy and lists.
 * Editing the website's content should rarely require touching components.
 */

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "IT Services", href: "#it-services" },
  { label: "Consulting", href: "#consulting" },
  { label: "Industries", href: "#industries" },
  { label: "Partnership", href: "#partnership" },
  { label: "Contact", href: "#contact" },
];

export const HERO_STATS = [
  { end: 12, suffix: "+", label: "Years of delivery" },
  { end: 320, suffix: "+", label: "Enterprise projects" },
  { end: 40, suffix: "+", label: "Technologies mastered" },
  { end: 9, suffix: "", label: "Global delivery hubs" },
];

export const TRUST_LOGOS = [
  "NorthBridge",
  "Veltrix",
  "Quanta Health",
  "Orbital Pay",
  "Meridian Retail",
  "Hexa Logistics",
  "BluePeak",
  "Aurora Bank",
];

export const ABOUT_PILLARS = [
  {
    icon: "compass",
    title: "Strategy-first thinking",
    text: "We start with your business outcomes, then engineer the technology and operating model to reach them.",
  },
  {
    icon: "handshake",
    title: "True partnership",
    text: "Long-term, accountable engagements — not one-off projects. Your roadmap becomes our roadmap.",
  },
  {
    icon: "globe",
    title: "Global delivery",
    text: "Distributed teams across time zones give you continuous momentum and access to elite talent.",
  },
];

export const IT_SERVICES = [
  {
    icon: "code",
    title: "Custom Software Engineering",
    text: "Scalable web, mobile, and enterprise platforms built with modern, maintainable architectures.",
    tags: ["React", "Node", ".NET", "APIs"],
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    text: "Cloud migration, infrastructure-as-code, and CI/CD pipelines that ship reliably and cost-efficiently.",
    tags: ["AWS", "Azure", "Kubernetes"],
  },
  {
    icon: "cpu",
    title: "AI & Data Analytics",
    text: "Turn raw data into decisions with machine learning, dashboards, and generative-AI accelerators.",
    tags: ["ML", "LLMs", "BI"],
  },
  {
    icon: "shield",
    title: "Cybersecurity",
    text: "Threat assessment, zero-trust architecture, and compliance to keep your business resilient.",
    tags: ["Zero-Trust", "SOC", "ISO"],
  },
  {
    icon: "smartphone",
    title: "Mobile Applications",
    text: "Native and cross-platform apps with delightful UX and rock-solid performance.",
    tags: ["iOS", "Android", "Flutter"],
  },
  {
    icon: "settings",
    title: "Managed IT Services",
    text: "24/7 monitoring, support, and proactive maintenance so your teams stay focused on growth.",
    tags: ["24/7", "SLA", "Support"],
  },
];

export const CONSULTING_SERVICES = [
  {
    icon: "target",
    title: "Digital Transformation",
    text: "Modernize legacy systems and processes with a pragmatic, phased transformation roadmap.",
  },
  {
    icon: "trending",
    title: "Business Strategy",
    text: "Market entry, growth modeling, and operating-model design grounded in real data.",
  },
  {
    icon: "gauge",
    title: "Process Optimization",
    text: "Lean, automated workflows that cut cost and unlock measurable operational efficiency.",
  },
  {
    icon: "lightbulb",
    title: "Technology Advisory",
    text: "Vendor-neutral guidance on architecture, tooling, and investment to de-risk decisions.",
  },
];

export const WHY_CHOOSE = [
  {
    icon: "award",
    title: "Proven expertise",
    text: "A senior-led team with deep industry knowledge and a track record of measurable outcomes.",
  },
  {
    icon: "zap",
    title: "Faster time-to-value",
    text: "Agile pods and reusable accelerators get you to production weeks — not months — sooner.",
  },
  {
    icon: "shield",
    title: "Enterprise security",
    text: "Security and compliance are designed in from day one, never bolted on at the end.",
  },
  {
    icon: "users",
    title: "Dedicated teams",
    text: "Stable, embedded teams that learn your business and grow with you over time.",
  },
  {
    icon: "clock",
    title: "Always-on support",
    text: "Round-the-clock global coverage with transparent SLAs and proactive monitoring.",
  },
  {
    icon: "trending",
    title: "Outcome-driven",
    text: "We measure success by your KPIs — revenue, efficiency, and customer satisfaction.",
  },
];

export const PARTNERSHIP_STEPS = [
  {
    step: "01",
    icon: "search",
    title: "Discovery & Alignment",
    text: "We learn your goals, market, and constraints to define a shared vision and success metrics.",
  },
  {
    step: "02",
    icon: "compass",
    title: "Strategy & Roadmap",
    text: "A tailored partnership plan with milestones, ownership, and a clear commercial model.",
  },
  {
    step: "03",
    icon: "rocket",
    title: "Build & Deliver",
    text: "Dedicated global teams execute in agile sprints with full transparency and reporting.",
  },
  {
    step: "04",
    icon: "trending",
    title: "Scale & Grow",
    text: "We optimize, expand, and co-innovate — turning the engagement into long-term growth.",
  },
];

export const INDUSTRIES = [
  { icon: "bank", name: "Banking & Finance" },
  { icon: "heart", name: "Healthcare" },
  { icon: "cart", name: "Retail & E-commerce" },
  { icon: "factory", name: "Manufacturing" },
  { icon: "truck", name: "Logistics & Supply Chain" },
  { icon: "graduation", name: "Education" },
  { icon: "signal", name: "Telecommunications" },
  { icon: "building", name: "Government & Public" },
];

export const TECHNOLOGIES = [
  { name: "React", icon: "code" },
  { name: "Node.js", icon: "network" },
  { name: "AWS", icon: "cloud" },
  { name: "Azure", icon: "cloud" },
  { name: "Kubernetes", icon: "layers" },
  { name: "Python", icon: "cpu" },
  { name: "TypeScript", icon: "code" },
  { name: "PostgreSQL", icon: "database" },
  { name: "TensorFlow", icon: "cpu" },
  { name: "Docker", icon: "layers" },
  { name: "GraphQL", icon: "network" },
  { name: "Snowflake", icon: "database" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Clarus didn't just deliver software — they became an extension of our leadership team. Our digital revenue grew 40% in the first year.",
    name: "Sarah Whitman",
    role: "CTO, NorthBridge Financial",
    rating: 5,
  },
  {
    quote:
      "Their consulting reshaped how we operate. The roadmap was practical, the delivery flawless, and the partnership genuine.",
    name: "Daniel Osei",
    role: "COO, Hexa Logistics",
    rating: 5,
  },
  {
    quote:
      "From cloud migration to AI analytics, Clarus handled everything with senior expertise. A truly long-term technology partner.",
    name: "Aiko Tanaka",
    role: "VP Engineering, Quanta Health",
    rating: 5,
  },
];

export const OPPORTUNITIES = [
  {
    icon: "handshake",
    title: "Channel & Reseller Partners",
    text: "Resell our solutions and services under attractive margins with full enablement and support.",
  },
  {
    icon: "globe",
    title: "Global Delivery Alliances",
    text: "Co-deliver large programs with shared teams, methodologies, and a unified quality bar.",
  },
  {
    icon: "rocket",
    title: "Joint Go-to-Market",
    text: "Build and market joint offerings to enter new regions and verticals faster, together.",
  },
  {
    icon: "briefcase",
    title: "Investment & Ventures",
    text: "Partner on ventures and co-investments that bring innovative products to market.",
  },
];

export const COUNTRIES = [
  "United States", "United Kingdom", "Canada", "Australia", "Germany",
  "France", "Netherlands", "United Arab Emirates", "Saudi Arabia", "India",
  "Singapore", "Japan", "South Africa", "Brazil", "Other",
];

export const FORM_INDUSTRIES = [
  "Banking & Finance", "Healthcare", "Retail & E-commerce", "Manufacturing",
  "Logistics & Supply Chain", "Education", "Telecommunications",
  "Government & Public", "Technology", "Other",
];

export const FORM_SERVICES = [
  "Custom Software Engineering", "Cloud & DevOps", "AI & Data Analytics",
  "Cybersecurity", "Mobile Applications", "Managed IT Services",
  "Digital Transformation", "Business Consulting", "Global Partnership",
];

export const CONTACT_INFO = [
  { icon: "mail", label: "Email", value: "partners@clarusit.com", href: "mailto:partners@clarusit.com" },
  { icon: "phone", label: "Phone", value: "+1 (415) 555-0192", href: "tel:+14155550192" },
  { icon: "mapPin", label: "Headquarters", value: "One Market Plaza, San Francisco, CA", href: "#" },
];
