import React from 'react';
import styles from './styles.module.css';

export function RoadmapItem({ icon, title, quarter, status = 'planned', children }) {
  const statusLabels = {
    'in-progress': 'In Development',
    'planned': 'Planned',
    'soon': 'Coming Soon'
  };

  return (
    <div className={styles.roadmapItem}>
      <div className={styles.timeline}>
        <div className={`${styles.timelineDot} ${styles[`status_${status}`]}`}></div>
        <div className={styles.timelineLine}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.icon}>{icon}</span>
          <div className={styles.headerText}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.meta}>
              {quarter && <span className={styles.quarter}>{quarter}</span>}
              <span className={`${styles.statusBadge} ${styles[`status_${status}`]}`}>
                {statusLabels[status]}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.description}>
          {children}
        </div>
      </div>
    </div>
  );
}

export function Roadmap({ children }) {
  return (
    <div className={styles.roadmap}>
      {children}
    </div>
  );
}
