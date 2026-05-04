import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";

import styles from "./styles.module.css";

const handbookSections = [
  {
    title: "What is P4SaMD?",
    icon: "🏥",
    href: "/docs/p4samd/overview",
    description:
      "Learn how P4SaMD supports compliant Software as a Medical Device development across the full lifecycle.",
  },
  {
    title: "Getting Started",
    icon: "🚀",
    href: "/docs/p4samd/handbook/getting_started",
    description:
      "Log in, select your organization, and navigate the platform for the first time.",
  },
  {
    title: "Organizations & Multi-Tenancy",
    icon: "🏢",
    href: "/docs/p4samd/handbook/organizations",
    description:
      "Understand how to switch between organizations and manage per-tenant settings.",
  },
  {
    title: "Products & Projects",
    icon: "📋",
    href: "/docs/p4samd/handbook/products",
    description:
      "Create and manage medical device software projects with full lifecycle governance.",
  },
  {
    title: "Requirements",
    icon: "📝",
    href: "/docs/p4samd/handbook/requirements",
    description:
      "Capture, organize, and trace software requirements through design and verification.",
  },
  {
    title: "Brownfield Import",
    icon: "🔄",
    href: "/docs/p4samd/handbook/brownfield/overview",
    description:
      "Onboard existing software projects and run automated compliance gap analysis.",
  },
];

const v3Features = [
  {
    icon: "🏗️",
    tag: "Architecture",
    title: "Standalone Platform",
    body: "P4SaMD v3 runs independently — no longer embedded in any third-party platform. A dedicated UI built specifically for compliance governance.",
    link: "/docs/p4samd/overview",
  },
  {
    icon: "🏢",
    tag: "Multi-Tenancy",
    title: "Multiple Organizations",
    body: "A single installation serves multiple independent organizations simultaneously, with complete database-level data isolation between tenants.",
    link: "/docs/p4samd/handbook/organizations",
  },
  {
    icon: "📝",
    tag: "Work Items",
    title: "Native Work-Item Management",
    body: "Requirements, risks, tests, and changes are managed natively inside P4SaMD. No external ALM tool required — Jira and others are now optional.",
    link: "/docs/p4samd/handbook/requirements",
  },
  {
    icon: "📦",
    tag: "Projects",
    title: "Multiple Projects per Organization",
    body: "Manage all your medical device software projects in one place. Each project has its own team, compliance context, and version history.",
    link: "/docs/p4samd/handbook/products",
  },
  {
    icon: "🔄",
    tag: "Brownfield",
    title: "Brownfield Import & Gap Analysis",
    body: "Onboard existing software through a guided wizard, then receive an automated compliance gap analysis and prioritized remediation plan.",
    link: "/docs/p4samd/handbook/brownfield/overview",
  },
  {
    icon: "⚙️",
    tag: "Self-Service",
    title: "Self-Service Configuration",
    body: "Organizations configure projects, integrations, and settings autonomously — without requiring Mia-Care to intervene.",
    link: "/docs/p4samd/handbook/getting_started",
  },
];

function SectionCard({ title, icon, href, description }) {
  return (
    <Link className={styles.sectionCard} to={href}>
      <span className={styles.sectionCardIcon}>{icon}</span>
      <h3 className={styles.sectionCardTitle}>{title}</h3>
      <p className={styles.sectionCardDesc}>{description}</p>
    </Link>
  );
}

function FeatureCard({ icon, tag, title, body, link }) {
  return (
    <Link className={styles.featureCard} to={link}>
      <div className={styles.featureCardHeader}>
        <span className={styles.featureIcon}>{icon}</span>
        <span className={styles.featureTag}>{tag}</span>
      </div>
      <h4 className={styles.featureTitle}>{title}</h4>
      <p className={styles.featureBody}>{body}</p>
      <span className={styles.featureLearnMore}>Learn more →</span>
    </Link>
  );
}

function Home() {
  const { siteConfig = {} } = useDocusaurusContext();

  return (
    <Layout
      description="The official handbook for Mia-Care P4SaMD — the Platform for Software as a Medical Device."
      title={siteConfig.title}
    >
      {/* Announcement Banner */}
      <div className={styles.announcementBanner}>
        <span>🎉 P4SaMD v3 is now available — redesigned as a standalone platform.</span>
        <Link className={styles.announcementLink} to="/docs/p4samd/release-notes/v3.0">
          View release notes →
        </Link>
      </div>

      {/* Hero */}
      <header className={styles.hero}>
        <div className={clsx("container", styles.heroInner)}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              The Compliance Platform<br />for Medical Device Software
            </h1>
            <p className={styles.heroSubtitle}>
              {siteConfig.tagline}
            </p>
            <div className={styles.heroCtas}>
              <Link className={clsx("button button--primary button--lg", styles.ctaPrimary)} to="/docs/p4samd/overview">
                Get Started
              </Link>
              <Link className={clsx("button button--secondary button--lg", styles.ctaSecondary)} to="/docs/p4samd/release-notes/v3.0">
                What&apos;s New in v3
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Handbook Sections Grid */}
        <section className={styles.sectionsArea}>
          <div className="container">
            <h2 className={styles.sectionHeading}>Explore the Handbook</h2>
            <div className={styles.sectionsGrid}>
              {handbookSections.map((props, idx) => (
                <SectionCard key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>

        {/* What's New in v3 */}
        <section className={styles.highlightsArea}>
          <div className="container">
            <h2 className={styles.sectionHeading}>What&apos;s New in v3</h2>
            <p className={styles.sectionSubheading}>
              Version 3 is a complete re-architecture of P4SaMD. Here are the key changes.
            </p>
            <div className={styles.featuresShowcase}>
              {v3Features.map((props, idx) => (
                <FeatureCard key={idx} {...props} />
              ))}
            </div>
            <div className={styles.highlightsCta}>
              <Link to="/docs/p4samd/overview">
                Read the full overview →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ + Release Notes shortcuts */}
        <section className={styles.resourcesArea}>
          <div className="container">
            <div className={styles.resourcesGrid}>
              <div className={styles.resourceCard}>
                <h3>📖 FAQ</h3>
                <p>Find answers to common questions about P4SaMD capabilities, compliance, and deployment.</p>
                <Link to="/docs/p4samd/faq">Read FAQ →</Link>
              </div>
              <div className={styles.resourceCard}>
                <h3>📦 Release Notes</h3>
                <p>Stay up to date with every version of P4SaMD, including patch-level improvements.</p>
                <Link to="/docs/p4samd/release-notes/v3.0">View release notes →</Link>
              </div>
              <div className={styles.resourceCard}>
                <h3>🔒 Security & Roles</h3>
                <p>Understand user roles, permissions, and the authentication model used in P4SaMD v3.</p>
                <Link to="/docs/p4samd/security/roles_permissions">View roles →</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
