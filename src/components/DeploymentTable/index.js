import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import clsx from 'clsx';

const CHECK = '✓';
const CROSS = '✗';

function CellValue({value, highlight}) {
  if (value === true)
    return <span className={clsx(styles.cellTrue, highlight && styles.cellHighlight)}>{CHECK}</span>;
  if (value === false)
    return <span className={styles.cellFalse}>{CROSS}</span>;
  if (value === 'plan')
    return <span className={styles.cellPlan} title="Depends on plan">{'Plan'}</span>;
  if (value === null || value === undefined)
    return <span className={styles.cellNa}>{'—'}</span>;
  return <span className={clsx(styles.cellText, highlight && styles.cellHighlight)}>{value}</span>;
}
CellValue.propTypes = {
  highlight: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
};

/**
 * DeploymentTable — a visual feature comparison across deployment modes / plans.
 *
 * Props:
 *  - columns: string[]           — column headers (first is the row-label column)
 *  - groups: Array<{
 *      label: string,            — group heading (optional)
 *      rows: Array<{
 *        label: string,          — row label
 *        values: any[],          — one per data column (true/false/'plan'/null/string)
 *        note?: string,          — optional footnote shown under the row label
 *      }>
 *    }>
 *  - highlight: number[]         — 0-based data-column indices to visually highlight
 */
export function DeploymentTable({columns, groups, highlight = []}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.scroll}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((col, i) => (
              <th
                className={clsx(
                  styles.th,
                  i === 0 && styles.thFeature,
                  i > 0 && highlight.includes(i - 1) && styles.thHighlight,
                )}
                key={i}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {groups.map((group, gi) => (
            <React.Fragment key={gi}>
              {group.label && (
                <tr className={styles.groupRow}>
                  <td className={styles.groupLabel} colSpan={columns.length}>
                    {group.label}
                  </td>
                </tr>
              )}
              {group.rows.map((row, ri) => (
                <tr className={styles.dataRow} key={ri}>
                  <td className={styles.tdFeature}>
                    <span className={styles.featureLabel}>{row.label}</span>
                    {row.note && <span className={styles.featureNote}>{row.note}</span>}
                  </td>
                  {row.values.map((val, vi) => (
                    <td
                      className={clsx(
                        styles.tdValue,
                        highlight.includes(vi) && styles.tdHighlight,
                      )}
                      key={vi}
                    >
                      <CellValue highlight={highlight.includes(vi)} value={val} />
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
DeploymentTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  groups: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    rows: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      note: PropTypes.string,
      values: PropTypes.array,
    })),
  })).isRequired,
  highlight: PropTypes.arrayOf(PropTypes.number),
};
