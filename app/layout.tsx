import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Travis Baker — Principal Software Engineer",
    template: "%s — Travis Baker",
  },
  description:
    "Principal software engineer and web platform architect building durable application platforms, developer systems, and safer delivery foundations.",
  keywords: [
    "Travis Baker",
    "principal software engineer",
    "web platform architect",
    "frontend architecture",
    "developer platforms",
    "developer experience",
    "Idaho",
  ],
  authors: [{ name: "Travis Baker" }],
  creator: "Travis Baker",
  openGraph: {
    type: "website",
    title: "Travis Baker — Principal Software Engineer",
    description:
      "Application architecture, developer platforms, and delivery systems that create lasting leverage.",
  },
  twitter: {
    card: "summary",
    title: "Travis Baker — Principal Software Engineer",
    description:
      "Application architecture, developer platforms, and delivery systems that create lasting leverage.",
  },
};

const themeScript = `
  try {
    const saved = localStorage.getItem("portfolio-theme");
    const theme = saved === "light" || saved === "dark"
      ? saved
      : matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
