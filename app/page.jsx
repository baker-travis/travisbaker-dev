"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    number: "01",
    slug: "composable-platform",
    title: "Composable frontend and delivery platform",
    summary:
      "A typed, configuration-driven platform that replaced partner-specific application paths with smaller, independently deployable release units.",
    role: "Originator, architect, primary contributor",
    scope: "Runtime, tooling, migration, observability",
    outcome: "12–56% smaller Brotli bundles",
    context:
      "Partner experiences required separate application paths, while monolithic releases created large testing and rollback units. Runtime-loaded modules also made bundle weight a direct performance constraint.",
    contribution:
      "I chose isolated, data-owning modules assembled through configuration and typed contracts, then led the runtime, developer tooling, deployment, migration, governance, and observability work.",
    result:
      "The platform replaced partner-specific paths with a reusable composition model, aligned release boundaries with vertical product-team ownership, and reduced measured Brotli bundle sizes by approximately 12% to 56% across three modules.",
  },
  {
    number: "02",
    slug: "shared-application-platform",
    title: "Shared application platform",
    summary:
      "A shared NX and Vite foundation that made reuse and cross-application validation part of everyday delivery.",
    role: "Initiative owner and technical lead",
    scope: "Applications, libraries, identity, infrastructure",
    outcome: "Adoption grew from 4 to 10+ applications",
    context:
      "Separate repositories limited code sharing, required manual dependency updates, and made compatibility difficult to validate before shared changes shipped.",
    contribution:
      "I selected NX and Vite, set the platform direction, and sequenced an application-by-application migration so teams could keep shipping. I established shared-library conventions and collaborated closely on implementation.",
    result:
      "The platform expanded from four applications to more than ten. Teams gained atomic design-system updates, reusable libraries, and cross-application validation of breaking changes before release.",
  },
  {
    number: "03",
    slug: "production-hotfix-delivery",
    title: "Fast-path production delivery",
    summary:
      "A controlled hotfix path that reduced urgent release time while preserving explicit production safety checks.",
    role: "Designer and owner",
    scope: "All frontend applications and services",
    outcome: "90 minutes to 20 minutes — 78% faster",
    context:
      "Urgent production fixes took roughly 90 minutes to traverse the standard delivery pipeline, delaying remediation when response time mattered most.",
    contribution:
      "I designed and owned a dedicated hotfix pipeline with branch-scoped permissions, per-service checks, and explicit production-delivery safeguards.",
    result:
      "The fast path reduced delivery time to approximately 20 minutes, saving about 70 minutes per urgent release. It covered all frontend applications and services and was used successfully multiple times.",
  },
  {
    number: "04",
    slug: "bff-authorization-pattern",
    title: "Authorization-aware backend-for-frontend",
    summary:
      "A NestJS integration layer that closed a user-authorization gap in three days and became a reusable cross-application pattern.",
    role: "Solution designer and initial implementer",
    scope: "Authorization, orchestration, team guardrails",
    outcome: "Delivered in 3 days; adopted by all applications",
    context:
      "A time-sensitive feature depended on a backend request that could not enforce the required user authorization, while a direct client call with machine credentials would not preserve user-level access control.",
    contribution:
      "After the per-application BFF direction was selected, I evaluated implementation options in a technical bake-off and built a NestJS service that authorized the user before making backend calls with machine credentials. I also established reusable guardrails and coached the team on the pattern.",
    result:
      "The initial service and endpoint shipped in three days, keeping the feature on schedule. The authorization and orchestration pattern later expanded from one application to all applications.",
  },
];

const experience = [
  {
    dates: "Jul 2021–Present",
    company: "Bestow",
    roles: [
      "Principal Software Engineer · Feb 2025–Present",
      "Staff Software Engineer · Feb 2023–Jan 2025",
      "Senior Software Engineer 2 · Jul 2021–Jan 2023",
    ],
    summary:
      "Set application and web-platform direction across composable frontend architecture, secure API integration, delivery systems, and developer enablement while remaining hands-on and mentoring engineers.",
  },
  {
    dates: "Jan 2020–Jul 2021",
    company: "Pumpjack Dataworks",
    roles: ["Lead Software Engineer"],
    summary:
      "Architected configurable multi-tenant SaaS foundations, a rich GraphQL API, and shared frontend systems while leading and mentoring engineers; reduced CI/CD effort from about one hour of manual work to two minutes.",
  },
  {
    dates: "Mar 2019–Jan 2020",
    company: "Intuit",
    roles: ["Software Engineer"],
    summary:
      "Delivered full-stack product work, led first-use experience experiments and stack modernization, and mentored engineers through recurring technical collaboration.",
  },
  {
    dates: "Jan 2016–Feb 2019",
    company: "USAA",
    roles: ["Software Engineer"],
    summary:
      "Built reusable enterprise React infrastructure that reduced application build-and-release time from roughly three months to two weeks.",
  },
];

const capabilities = [
  {
    label: "Application platforms",
    value: "TypeScript, React, Remix, Node.js, composable frontends, micro-frontends",
  },
  {
    label: "Developer platforms",
    value: "NX, Vite, monorepos, CI/CD, build graphs, reusable tooling",
  },
  {
    label: "APIs and infrastructure",
    value: "GraphQL, NestJS, AWS, Google Cloud, Cloudflare, Terraform, Pulumi",
  },
  {
    label: "Technical leadership",
    value: "Architecture strategy, incremental migrations, AI-assisted engineering workflows, mentorship",
  },
];

function ExternalLink({ href, children, className = "" }) {
  return (
    <a
      className={`external-link ${className}`.trim()}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${children} (opens in a new tab)`}
    >
      {children} ↗
    </a>
  );
}

function ResumeLink({ children = "Résumé", className = "" }) {
  return (
    <a
      className={className}
      href="/travis-baker-resume.pdf"
      target="_blank"
      rel="noreferrer"
      type="application/pdf"
      aria-label={`${children} PDF (opens in a new tab)`}
    >
      {children}
    </a>
  );
}

function ThemeIcon({ preference }) {
  if (preference === "light") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2.5v2M12 19.5v2M4.5 4.5l1.4 1.4M18.1 18.1l1.4 1.4M2.5 12h2M19.5 12h2M4.5 19.5l1.4-1.4M18.1 5.9l1.4-1.4" />
      </svg>
    );
  }

  if (preference === "dark") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8a8.5 8.5 0 1 0 11.3 11.3Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function ThemePicker({ preference, onChange }) {
  const preferenceLabel =
    preference === "light" ? "Light" : preference === "dark" ? "Dark" : "System";

  return (
    <div className="theme-picker-wrap">
      <label
        className="theme-picker"
        title={`Color theme: ${preferenceLabel}`}
      >
        <span className="visually-hidden">Color theme</span>
        <ThemeIcon preference={preference} />
        <select
          value={preference}
          onChange={(event) => onChange(event.target.value)}
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
    </div>
  );
}

export default function Home() {
  const [themePreference, setThemePreference] = useState("system");
  const [themeReady, setThemeReady] = useState(false);
  const themePreferenceRef = useRef("system");

  useEffect(() => {
    const root = document.documentElement;
    const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
    let savedTheme = null;

    try {
      const saved = window.localStorage.getItem("portfolio-theme");
      savedTheme = saved === "light" || saved === "dark" ? saved : null;
    } catch {}

    const initialPreference = savedTheme || "system";
    themePreferenceRef.current = initialPreference;

    const frame = window.requestAnimationFrame(() => {
      setThemePreference(initialPreference);
      setThemeReady(true);
    });

    const followSystemTheme = (event) => {
      if (themePreferenceRef.current !== "system") return;

      const systemTheme = event.matches ? "dark" : "light";
      root.dataset.theme = systemTheme;
      root.style.colorScheme = systemTheme;
    };

    colorScheme.addEventListener("change", followSystemTheme);

    return () => {
      window.cancelAnimationFrame(frame);
      colorScheme.removeEventListener("change", followSystemTheme);
    };
  }, []);

  const [openProject, setOpenProject] = useState(null);

  useEffect(() => {
    if (!themeReady) return;
    const resolvedTheme =
      themePreference === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : themePreference;
    document.documentElement.dataset.theme = resolvedTheme;
    document.documentElement.style.colorScheme = resolvedTheme;
  }, [themePreference, themeReady]);

  const selectThemePreference = (selectedPreference) => {
    themePreferenceRef.current = selectedPreference;
    setThemePreference(selectedPreference);

    try {
      if (selectedPreference === "system") {
        window.localStorage.removeItem("portfolio-theme");
      } else {
        window.localStorage.setItem("portfolio-theme", selectedPreference);
      }
    } catch {}
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Travis Baker",
    url: "https://travisbaker.dev",
    jobTitle: "Principal Software Engineer",
    homeLocation: {
      "@type": "Place",
      name: "Idaho, United States",
    },
    sameAs: [
      "https://github.com/baker-travis",
      "https://www.linkedin.com/in/baker-travis",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Brigham Young University-Idaho",
    },
  };

  return (
    <div className="site-shell" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header">
        <div className="content header-inner">
          <a className="brand" href="#top" aria-label="Travis Baker, home">
            Travis Baker
          </a>
          <nav className="primary-nav" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <ResumeLink />
            <ExternalLink href="https://www.linkedin.com/in/baker-travis">
              LinkedIn
            </ExternalLink>
            <a href="mailto:baker.travis.w@gmail.com">Email</a>
          </nav>
          <ThemePicker
            preference={themePreference}
            onChange={selectThemePreference}
          />
        </div>
      </header>

      <main id="main-content" tabIndex="-1">
        <section className="hero content" aria-labelledby="hero-title">
          <p className="eyebrow">Principal software engineer · Application &amp; web platform architect</p>
          <h1 id="hero-title">I build software platforms that create lasting leverage.</h1>
          <p className="hero-summary">
            I turn complex architecture, delivery, and security constraints into
            durable foundations that help product teams ship independently, operate
            safely, and own more of the stack.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button-link" href="#work">View selected work</a>
            <a className="text-link" href="#experience">View experience</a>
            <ExternalLink className="text-link" href="https://github.com/baker-travis">
              GitHub
            </ExternalLink>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="content">
            <div className="section-heading">
              <h2 id="work-title">Selected work</h2>
              <p>Architecture decisions, hands-on delivery, and measurable leverage.</p>
            </div>

            <div className="project-list">
              {projects.map((project) => {
                const isOpen = openProject === project.slug;
                return (
                  <article className={`project ${isOpen ? "is-open" : ""}`} key={project.slug}>
                    <div className="project-row">
                      <p className="project-number" aria-hidden="true">{project.number}</p>
                      <div className="project-intro">
                        <h3>{project.title}</h3>
                        <p>{project.summary}</p>
                      </div>
                      <dl className="project-evidence">
                        <div>
                          <dt>Role</dt>
                          <dd>{project.role}</dd>
                        </div>
                        <div>
                          <dt>Scope</dt>
                          <dd>{project.scope}</dd>
                        </div>
                        <div>
                          <dt>Outcome</dt>
                          <dd>{project.outcome}</dd>
                        </div>
                      </dl>
                      <button
                        className="case-study-toggle"
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`${project.slug}-details`}
                        aria-label={`${isOpen ? "Close" : "Read"} case study: ${project.title}`}
                        onClick={() => setOpenProject(isOpen ? null : project.slug)}
                      >
                        {isOpen ? "Close case study" : "Read case study"}
                      </button>
                    </div>
                    <div
                      className="project-detail"
                      id={`${project.slug}-details`}
                      hidden={!isOpen}
                    >
                      <div>
                        <h4>Context</h4>
                        <p>{project.context}</p>
                      </div>
                      <div>
                        <h4>Decision &amp; leadership</h4>
                        <p>{project.contribution}</p>
                      </div>
                      <div>
                        <h4>Result &amp; reach</h4>
                        <p>{project.result}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="experience-section content" id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <h2 id="experience-title">Experience</h2>
            <p>Progressive technical leadership across product and platform engineering.</p>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-row" key={item.company}>
                <p className="experience-dates">{item.dates}</p>
                <div>
                  <h3>{item.company}</h3>
                  <ul className="role-list" aria-label={`${item.company} roles`}>
                    {item.roles.map((role) => <li key={role}>{role}</li>)}
                  </ul>
                  <p className="experience-summary">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="content about-grid">
            <h2 id="about-title">About</h2>
            <div>
              <p className="about-lead">
                I’m a hands-on principal engineer who turns recurring application
                problems into shared platforms and safer defaults.
              </p>
              <p>
                I work across frontend architecture, server-side web systems, APIs,
                cloud delivery, performance, and observability. I’m most useful when
                the path is ambiguous: setting direction, making tradeoffs explicit,
                leading incremental migrations, and helping teams adopt a platform
                without stopping product work.
              </p>
              <dl className="capability-list">
                {capabilities.map((capability) => (
                  <div key={capability.label}>
                    <dt>{capability.label}</dt>
                    <dd>{capability.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="contact-section" aria-labelledby="contact-title">
          <div className="content contact-grid">
            <div>
              <h2 id="contact-title">Let’s build durable systems.</h2>
              <p>
                Based in Idaho and open to remote Principal and Staff-level roles in
                web platforms, application architecture, and developer experience.
              </p>
            </div>
            <div className="contact-links" aria-label="Contact links">
              <a href="mailto:baker.travis.w@gmail.com">Email</a>
              <ResumeLink>Résumé</ResumeLink>
              <ExternalLink href="https://www.linkedin.com/in/baker-travis">LinkedIn</ExternalLink>
              <ExternalLink href="https://github.com/baker-travis">GitHub</ExternalLink>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content footer-inner">
          <p>© 2026 Travis Baker</p>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
