export const serviceLinks = [
  { id: "hardware-vapt", label: "Hardware VAPT" },
  { id: "ot-ics-assessment", label: "OT / ICS assessment" },
  { id: "iot-security", label: "IoT security testing" },
  { id: "scada-penetration-testing", label: "SCADA network testing" },
  { id: "red-team-operations", label: "Red team operations" },
  { id: "compliance-risk-advisory", label: "Compliance & risk advisory" },
] as const;

export const navLinkGroups = [
  {
    title: "Services",
    links: serviceLinks.map(({ id, label }) => ({
      label,
      href: `/#${id}`,
    })),
  },
  {
    title: "Company",
    links: [
      { label: "About Shyena", href: "/about" },
      { label: "Projects", href: "/projects" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Journal", href: "/blog" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
] as const;

export const footerLinkGroups = [
  {
    title: "Services",
    links: serviceLinks.slice(0, 4).map(({ id, label }) => ({
      label,
      href: `/#${id}`,
    })),
  },
  {
    title: "Company",
    links: [
      { label: "About Shyena", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Journal", href: "/blog" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
] as const;
