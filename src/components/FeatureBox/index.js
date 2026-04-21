import React from 'react';
import styles from './styles.module.css';

/**
 * FeatureBox — a simple card for highlighting features in release notes.
 * Props: icon (emoji), title (string), children (content)
 */
export function FeatureBox({ icon, title, children }) {
  return (
    <div className={styles.featureBox}>
      <div className={styles.featureBoxHeader}>
        {icon && <span className={styles.featureBoxIcon}>{icon}</span>}
        <h4 className={styles.featureBoxTitle}>{title}</h4>
      </div>
      <div className={styles.featureBoxBody}>{children}</div>
    </div>
  );
}

/**
 * FeatureGrid — wrapper for a grid of feature boxes
 */
export function FeatureGrid({ children }) {
  return <div className={styles.featureGrid}>{children}</div>;
}
