import React, { useState, useMemo } from "react";
import styles from "./styles.module.css";

const FAQ_DATA = [
  {
    category: "Platform & Positioning",
    items: [
      {
        q: "Is P4SaMD an eQMS?",
        a: "No. P4SaMD is not an Electronic Quality Management System (eQMS). It complements your eQMS by integrating with it — providing quick access to documents stored in your eQMS directly from the platform interface — and by enforcing the policies defined in your QMS. P4SaMD acts as a bridge between your quality management processes and your software development lifecycle, but it does not replace your eQMS.",
      },
      {
        q: "Is P4SaMD an ALM tool?",
        a: "No. P4SaMD is not an Application Lifecycle Management tool. In version 3, however, P4SaMD includes native work-item management — requirements, risks, tests, and changes are managed directly inside the platform. External ALM tools such as Jira are supported as optional integrations offering bidirectional synchronization, but they are no longer a prerequisite. If you do not have an existing ALM setup, P4SaMD works fully out of the box.",
      },
      {
        q: "Does P4SaMD v3 require Mia-Platform Console or any other specific platform?",
        a: "No. P4SaMD version 3 operates as a standalone platform. It does not require Mia-Platform Console to be deployed or in use by your organization. Authentication is handled via a federated OIDC identity provider that is part of the P4SaMD installation, independent of any third-party platform. This is a major change from version 2, which was integrated with Mia-Platform Console.",
      },
    ],
  },
  {
    category: "Compliance & Certification",
    items: [
      {
        q: "Is P4SaMD certified as SaMD?",
        a: "No. P4SaMD does not have a specific intended medical use and therefore cannot be certified as Software as a Medical Device. However, P4SaMD is validated for use in developing SaMD solutions. This validation confirms that the platform meets the requirements for reliability and quality needed to support regulated software development.",
      },
      {
        q: "Is P4SaMD validated for SaMD development?",
        a: "Yes. P4SaMD is validated for use in the development of solutions intended to be certified as SaMD. Validation is performed following industry guidelines such as GAMP 5 (Good Automated Manufacturing Practice) and GMP Annex 11, ensuring that the platform operates reliably in regulated environments. For validation documentation, contact Mia-Care.",
      },
      {
        q: "Does using P4SaMD automatically grant regulatory certification?",
        a: "No. P4SaMD does not provide automatic certification for the software developed with it. Mia-Care is not a notified body. However, Mia-Care has a network of partners — including notified bodies — who can assist you in obtaining certification. P4SaMD significantly simplifies the preparation process by ensuring your development activities are aligned with regulatory expectations and by generating the necessary compliance documentation.",
      },
    ],
  },
  {
    category: "Integrations",
    items: [
      {
        q: "Can I integrate tools that P4SaMD does not natively support?",
        a: "Yes. P4SaMD exposes a comprehensive set of APIs that allow you to connect it to any tool or technology stack. Integrations can be built by your team or in collaboration with Mia-Care. This flexibility ensures that P4SaMD adapts to your existing infrastructure.",
      },
    ],
  },
  {
    category: "Artificial Intelligence",
    items: [
      {
        q: "How does P4SaMD support Artificial Intelligence features in medical software?",
        a: "P4SaMD includes a dedicated AI Validation module designed to support medical software that incorporates machine learning and AI components. This module addresses requirements under the EU AI Act, FDA Good Machine Learning Practices (GMLP), and Predetermined Change Control Plans (PCCP). It provides structured management of training datasets, model versions, and performance metrics, and automates assessments of substantial modifications when AI models are updated. Additionally, the Smart Insight (Whisper) module uses AI to proactively evaluate project artifacts against regulatory rules, identify quality issues in requirements, and highlight gaps in test coverage. AI-powered features can be enabled or disabled per organization by an administrator.",
      },
    ],
  },
  {
    category: "Deployment & Architecture",
    items: [
      {
        q: "What deployment models are available?",
        a: "P4SaMD v3 supports three deployment models: Multi-Tenant SaaS (shared cloud instance managed by Mia-Care with logical data isolation), Dedicated SaaS (dedicated cloud infrastructure per customer with physical database isolation), and On-Premise (self-hosted by the customer for complete data sovereignty and air-gapped network support). All three models provide the same feature set.",
      },
      {
        q: "Can multiple teams in my organization use P4SaMD simultaneously?",
        a: "Yes. P4SaMD v3 is built on a multi-tenant architecture. Within your organization, you can create and manage multiple independent projects, each with its own team, configuration, compliance context, and version history. Users can be assigned to specific projects with role-based access.",
      },
      {
        q: "What happens to my v2 configuration if I migrate to v3?",
        a: "P4SaMD v3 is a new platform with a different architecture. Direct in-place migration from v2 to v3 is not supported. The recommended path is to use the Brownfield Import feature in v3 to onboard your existing project — the platform will perform a compliance gap analysis and generate a remediation plan. For migration support, contact Mia-Care.",
      },
    ],
  },
];

function AccordionItem({ q, a, isOpen, onToggle }) {
  return (
    <div className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
      <button
        className={styles.question}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{q}</span>
        <span className={styles.chevron}>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className={styles.answer}>
          <p>{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [search, setSearch] = useState("");
  const [openItems, setOpenItems] = useState({});

  const filtered = useMemo(() => {
    if (!search.trim()) return FAQ_DATA;
    const q = search.toLowerCase();
    return FAQ_DATA.map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.q.toLowerCase().includes(q) ||
          item.a.toLowerCase().includes(q)
      ),
    })).filter((cat) => cat.items.length > 0);
  }, [search]);

  function toggleItem(catIdx, itemIdx) {
    const key = `${catIdx}-${itemIdx}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function isOpen(catIdx, itemIdx) {
    return !!openItems[`${catIdx}-${itemIdx}`];
  }

  const totalResults = filtered.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <div className={styles.faqWrapper}>
      {/* Search bar */}
      <div className={styles.searchWrapper}>
        <span className={styles.searchIcon}>🔍</span>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search questions…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search FAQ"
        />
        {search && (
          <button
            className={styles.clearBtn}
            onClick={() => setSearch("")}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {/* Result count when searching */}
      {search && (
        <p className={styles.resultCount}>
          {totalResults === 0
            ? "No matching questions found."
            : `${totalResults} question${totalResults !== 1 ? "s" : ""} found`}
        </p>
      )}

      {/* Categories */}
      {filtered.map((cat, catIdx) => (
        <div key={catIdx} className={styles.category}>
          <h3 className={styles.categoryTitle}>{cat.category}</h3>
          {cat.items.map((item, itemIdx) => (
            <AccordionItem
              key={itemIdx}
              q={item.q}
              a={item.a}
              isOpen={isOpen(catIdx, itemIdx)}
              onToggle={() => toggleItem(catIdx, itemIdx)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
