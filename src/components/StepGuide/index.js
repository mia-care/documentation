import React from 'react';
import PropTypes from 'prop-types';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

/**
 * Wraps all <Step> children in the guide container.
 */
export function StepGuide({children}) {
  return <div className={styles.stepGuide}>{children}</div>;
}
StepGuide.propTypes = {
  children: PropTypes.node,
};

/**
 * A single step in the guide.
 * Props: number (int), icon (emoji string), title (string), children (content)
 */
export function Step({number, icon, title, children}) {
  return (
    <div className={styles.step}>
      <div className={styles.stepLeft}>
        <div className={styles.stepBadge}>
          {icon ? <span className={styles.stepBadgeIcon}>{icon}</span> : number}
        </div>
        <div aria-hidden="true" className={styles.stepLine} />
      </div>
      <div className={styles.stepRight}>
        <div className={styles.stepHeader}>
          <span className={styles.stepNum}>{`Step ${number}`}</span>
          <h3 className={styles.stepTitle}>{title}</h3>
        </div>
        <div className={styles.stepBody}>{children}</div>
      </div>
    </div>
  );
}
Step.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  number: PropTypes.number,
  title: PropTypes.string.isRequired,
};

/**
 * Prerequisite checklist shown above the steps.
 * Props: items (string[])
 */
export function Prerequisites({items}) {
  return (
    <div className={styles.prerequisites}>
      <p className={styles.prereqHeading}>{'Before you begin'}</p>
      <ul className={styles.prereqList}>
        {items.map((item, i) => (
          <li className={styles.prereqItem} key={i}>
            <span aria-hidden="true" className={styles.prereqCheck}>{'✓'}</span>
            <span dangerouslySetInnerHTML={{__html: item}} />
          </li>
        ))}
      </ul>
    </div>
  );
}
Prerequisites.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

/**
 * Inline tip callout — replaces :::tip admonitions inside steps.
 */
export function Tip({children}) {
  return (
    <div className={styles.tip}>
      <span aria-hidden="true" className={styles.tipIcon}>{'💡'}</span>
      <div className={styles.tipBody}>{children}</div>
    </div>
  );
}
Tip.propTypes = {
  children: PropTypes.node,
};

/**
 * "Where to go next" card row at the bottom of the guide.
 * Props: items = [{ icon, label, to }]
 */
export function NextSteps({items}) {
  return (
    <div className={styles.nextSteps}>
      <p className={styles.nextStepsHeading}>{'Where to go next'}</p>
      <div className={styles.nextStepsGrid}>
        {items.map((item, i) => (
          <Link className={styles.nextStepCard} key={i} to={item.to}>
            {item.icon && <span className={styles.nextStepIcon}>{item.icon}</span>}
            <span className={styles.nextStepLabel}>{item.label}</span>
            <span aria-hidden="true" className={styles.nextStepArrow}>{'→'}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
NextSteps.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.node,
    label: PropTypes.string,
    to: PropTypes.string,
  })).isRequired,
};
