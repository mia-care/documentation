---
id: regulatory-coverage
title: Regulatory Coverage
sidebar_label: Regulatory Coverage
---

P4SaMD assesses medical device software against the regulatory requirements of three markets: the **European Union**, the **United States** and the **United Kingdom**. Check what each market covers before you start an assessment.

## Supported markets

| Market | Code | Regulatory basis |
|---|---|---|
| European Union | `EU` | MDR (EU) 2017/745 |
| United States | `US` | FDA, under the Federal Food, Drug, and Cosmetic Act |
| United Kingdom | `UK` | UKCA, UK MDR 2002 |

Choose one or more of these markets in the Target Definition step of the [Brownfield Import wizard](./handbook/brownfield/import-wizard.mdx). The market, the regulatory framework and the software safety class together determine which requirements are checked.

## Standards applied in every market

These standards are assessed whichever market you select, because all three markets rely on them.

| Standard | Scope |
|---|---|
| IEC 62304:2006/AMD1:2015 | Software life cycle processes |
| ISO 14971:2019/A11:2021 | Application of risk management to medical devices |
| IEC 62366-1:2015 | Application of usability engineering to medical devices |

## European Union

| Framework | Scope |
|---|---|
| MDR (EU) 2017/745 | Device classification, technical documentation, clinical evaluation, post-market surveillance, UDI and registration |
| GDPR (EU) 2016/679 | Lawful basis, data minimization, retention, right to erasure, data protection by design, DPIA and security measures |
| EU AI Act (EU) 2024/1689 | High-risk AI classification, risk management system, data governance, technical documentation, transparency and human oversight |
| NIS2 (EU) 2022/2555 | Security risk management, incident handling, business continuity and vulnerability management |
| MDCG 2019-16 | Cybersecurity guidance for medical devices |

## United States

| Framework | Scope |
|---|---|
| FD&C Act section 524B | Premarket cybersecurity: security risk management, security architecture, cybersecurity testing and software bill of materials |
| FD&C Act section 502 | Labeling and postmarket obligations |

United States coverage addresses cybersecurity and labeling obligations. It is not an assessment of 510(k) or PMA submission readiness.

## United Kingdom

The United Kingdom is available as a target market, assessed against the international standards listed above. The platform does not currently carry rule content specific to UK MDR 2002 or UKCA conformity assessment. If your submission depends on UK-specific requirements, [contact us][contact-us] to have coverage scoped.

## Support for individual EU member states

The European Union is assessed at Union level, against the EU regulations listed above. National implementations of EU law differ between member states, for example in registration routes, language requirements and national annexes. P4SaMD does not assess member-state requirements as delivered.

:::info Available on request
Coverage for a specific EU member state can be enabled for your organization. It requires new regulatory rule content, so it is scoped as part of your engagement with Mia-Care rather than switched on from the settings page. [Contact us][contact-us] with the member states you need.
:::

## Markets outside this list

No market other than the three above is assessed today. If you are placing a device in an unlisted market, [contact us][contact-us] before you start an assessment to find out which of your evidence carries over.

[contact-us]: https://mia-care.io
