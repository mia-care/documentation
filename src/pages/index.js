import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

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

const v3Highlights = [
  {
    badge: "NEW",
    title: "Standalone Platform",
    body:
      "P4SaMD v3 runs independently — no longer embedded in Mia-Platform Console. A dedicated UI built specifically for compliance governance.",
  },
  {
    badge: "NEW",
    title: "Multi-Tenant Architecture",
    body:
      "A single installation can serve multiple independent organizations with complete data isolation between tenants.",
  },
  {
    badge: "IMPROVED",
    title: "Native Work-Item Management",
    body:
      "Requirements, risks, and tests are managed directly inside P4SaMD. External ALM tools are optional, not required.",
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

function HighlightCard({ badge, title, body }) {
  const isBadgeNew = badge === "NEW";
  return (
    <div className={styles.highlightCard}>
      <span className={clsx(styles.badge, isBadgeNew ? styles.badgeNew : styles.badgeImproved)}>
        {badge}
      </span>
      <h4 className={styles.highlightTitle}>{title}</h4>
      <p className={styles.highlightBody}>{body}</p>
    </div>
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
              Version 3 is a complete re-architecture of P4SaMD. Here are the most impactful changes.
            </p>
            <div className={styles.highlightsGrid}>
              {v3Highlights.map((props, idx) => (
                <HighlightCard key={idx} {...props} />
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
                <Link to="/docs/p4samd/release_notes">View release notes →</Link>
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
