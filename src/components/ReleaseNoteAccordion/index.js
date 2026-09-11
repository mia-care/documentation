import React, { useState } from 'react';
import styles from './styles.module.css';
import { BadgeIcons, resolveAreaIcon } from './icons';

const BADGE_CONFIG = [
  { key: 'newFeatures', label: 'New Feature', heading: 'New Features', className: styles.badgeNewFeature, Icon: BadgeIcons.newFeature },
  { key: 'improvements', label: 'Improvement', heading: 'Improvements', className: styles.badgeImprovement, Icon: BadgeIcons.improvement },
  { key: 'bugFixes', label: 'Bug fix', heading: 'Bug fixes', className: styles.badgeBugFix, Icon: BadgeIcons.bugFix },
];

function Badge({ count, label, className, Icon }) {
  if (!count) return null;
  return (
    <span className={`${styles.badge} ${className}`}>
      <Icon className={styles.badgeIcon} />
      {label}
      <span className={styles.badgeCount}>{count}</span>
    </span>
  );
}

function AreaRow({ area }) {
  const [open, setOpen] = useState(false);
  const Icon = resolveAreaIcon(area.name);
  const groups = BADGE_CONFIG.map((cfg) => ({
    ...cfg,
    items: area[cfg.key] || [],
  })).filter((g) => g.items.length > 0);

  return (
    <div className={`${styles.areaRow} ${open ? styles.areaRowOpen : ''}`}>
      <button
        type="button"
        className={styles.areaHeader}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.areaIconWrap}>
          <Icon className={styles.areaIcon} />
        </span>
        <span className={styles.areaName}>{area.name}</span>
        <span className={styles.badgeRow}>
          {groups.map((g) => (
            <Badge key={g.key} count={g.items.length} label={g.label} className={g.className} Icon={g.Icon} />
          ))}
        </span>
        <span className={styles.chevron} aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
      {open && (
        <div className={styles.areaBody}>
          {groups.map((g) => (
            <div key={g.key} className={styles.group}>
              <h5 className={styles.groupHeading}>{g.heading}</h5>
              <ul className={styles.groupList}>
                {g.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * ReleaseNoteAccordion: groups a release's changes by functional area.
 * Each area is a collapsible row (collapsed by default) showing pill
 * badges with counts for New Feature / Improvement / Bug fix, and
 * expands to the underlying one-line change descriptions.
 *
 * Usage:
 * <ReleaseNoteAccordion areas={[
 *   { name: "System Design", newFeatures: ["..."], improvements: ["..."], bugFixes: ["..."] },
 * ]} />
 */
export default function ReleaseNoteAccordion({ areas }) {
  if (!areas || areas.length === 0) return null;
  return (
    <div className={styles.wrapper}>
      {areas.map((area) => (
        <AreaRow key={area.name} area={area} />
      ))}
    </div>
  );
}

export { ReleaseNoteAccordion };
