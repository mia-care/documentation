---
id: faq
title: Frequently Asked Questions (FAQ)
sidebar_label: FAQ
---

Welcome to the **P4SaMD FAQ page**, where we address the most common questions about our platform. This section is designed to provide clear and detailed answers to help you better understand P4SaMD, its capabilities, and its role in the SaMD development lifecycle.

---

### Is P4SaMD an eQMS?

No, **P4SaMD is not an eQMS**. However, it complements eQMS tools by enhancing their functionality in two key ways:

1. **Integration with eQMS**:  
   P4SaMD integrates seamlessly with your existing eQMS, providing quick access to documents stored in the eQMS directly from its interface. This reduces the need to switch between systems and streamlines workflows.

2. **Policy and Process Enforcement**:  
   P4SaMD enforces the policies and processes defined in your Quality Management System (QMS). For example, it ensures that all development activities comply with procedural requirements outlined in standards like **ISO 13485**, helping teams maintain alignment with regulatory and quality expectations.

While it does not replace an eQMS, P4SaMD serves as a bridge between quality management and software development, ensuring both are tightly integrated and compliant.

---

### Is P4SaMD an ALM?

No, **P4SaMD is not an ALM (Application Lifecycle Management tool)**, nor is it a project specification management tool like Jira or Matrix Requirements. However, P4SaMD enhances these tools through integrations that provide added value:

- **Integration with ALM and Specification Tools**:  
   P4SaMD integrates with platforms like Jira and Matrix Requirements to link project management and specification data with the software development lifecycle.
  
- **Unified Traceability**:  
   These integrations enable full traceability across the development process, linking requirements, risks, and project specifications to design, implementation, and verification activities.

P4SaMD creates a unified access point for governance and development, ensuring compliance while enhancing productivity and collaboration.

---

### What is the relationship between Mia-Platform IDP and Mia-Care P4SaMD?

**Mia-Platform IDP** is a robust, general-purpose tool designed to manage the entire software lifecycle. It is domain-agnostic and supports a wide range of software development needs, from source control to CI/CD pipelines.

**Mia-Care P4SaMD**, on the other hand, is an **extension of Mia-Platform IDP**, specifically developed by Mia-Care to address the unique requirements of SaMD development. Here’s how they relate:

- **Mia-Platform IDP** provides the core capabilities for managing software development processes.
- **Mia-Care P4SaMD** adds functionalities required for compliance with **ISO 13485**, **IEC 62304**, **ISO 14971**, and other SaMD-specific standards.

In essence, Mia-Care P4SaMD builds upon the flexibility of Mia-Platform IDP, tailoring it to meet the stringent regulatory demands of SaMD development.

---

### Is P4SaMD certified as SaMD?

No, **Mia-Care P4SaMD is not a Software as a Medical Device (SaMD)**. It does not have a specific intended medical use and, as a result, cannot be certified as SaMD. However, Mia-Care P4SaMD is validated for use in developing SaMD solutions. This validation ensures that P4SaMD meets the requirements for reliability, quality, and compliance needed to support regulated software development.

For more details about the validation process, refer to the next question or contact Mia-Care for documentation.

---

### Is P4SaMD validated for SaMD development?

Yes, **Mia-Care P4SaMD is validated** for the development of solutions intended to be certified as SaMD. This validation includes:

- **Compliance with Guidelines**:  
   Validation is performed following industry-standard guidelines such as **GAMP5** (Good Automated Manufacturing Practice) and **GMP Annex 11**. This ensures that P4SaMD operates reliably within regulated environments.

- **Purpose of Validation**:  
   The validation process ensures that P4SaMD supports SaMD development without introducing risks and that it aligns with regulatory requirements throughout the software lifecycle.

To learn more about the validation process or request specific validation documentation, please contact Mia-Care.

---

### Can I integrate tools not natively supported by P4SaMD?

Yes, **Mia-Care P4SaMD supports integration with tools outside of its native ecosystem**. Here’s how:

- **API Support**:  
   P4SaMD provides a comprehensive set of APIs that allow you to integrate it into any technology stack or development process. These APIs enable you to connect with tools specific to your workflows, even if they are not natively supported by P4SaMD.

- **Flexible Implementation**:  
   Integration with non-native tools can be carried out directly by your team or with the assistance of Mia-Care. In collaboration with your team, Mia-Care can ensure a seamless connection tailored to your specific requirements.

This flexibility ensures that P4SaMD can adapt to your existing infrastructure and processes, making it a versatile addition to any development environment.

---

### Does using Mia-Care P4SaMD automatically grant certification?

No, **Mia-Care P4SaMD does not provide automatic certification** for the software developed with it. Mia-Care is not a notified body and therefore cannot certify your product. However:

- **Support for Certification**:  
   Mia-Care has a network of partners, including notified bodies, who can assist you in obtaining certification for your software. P4SaMD facilitates compliance with standards and simplifies the certification process by ensuring that your development process aligns with regulatory requirements.

Using P4SaMD significantly reduces the effort needed to prepare for certification, but the certification itself must be conducted by an authorized body.

---

### How does Mia-Care P4SaMD deal with Artificial Intelligence functionalities and the generated information?

P4SaMD includes functionalities based on artificial intelligence, the intellectual property of which remains with the Provider. The Client acknowledges that the results generated by artificial intelligence systems may be inaccurate, incomplete, and/or irrelevant. Consequently, prior to any use thereof, the Client undertakes to verify their accuracy and remains solely responsible for their utilization. The Client agrees not to provide P4SaMD with any personal data, whether sensitive or not, and shall in any case remain responsible for compliance with applicable data protection regulations, including EU Regulation 2016/679 (GDPR). 

**Mia-Care P4SaMD** will share data with specific external parties only when AI-powered features are triggered by the user, in particular:

- [Microsoft OpenAI Azure][azure-openai-service]: to provide AI-based functionalities, **Mia-Care P4SaMD** will share data received from the integrated ALM.

  - [GDPR compliance][azure-openai-gdpr]
  - [Terms of Use][azure-openai-tos]
  - [Data Protection Addendum][azure-openai-dpa]
  - [Data, privacy, and security][azure-openai-data-privacy-security]

You should always check the privacy policy and terms of use of the services your are going to use, to ensure their data processing practices are compliant with applicable regulations and company policies, especially if sensitive or confidential information are involved.

---

### Does Mia-Care P4SaMD integrate with a specific ALM / eQMS / … ?

Currently, we can integrate with the following products:

- **ALM**: [Jira][jira] or, using [Jira][jira] as a bridge, any ALM that can be integrated with [Jira][jira] 
- **Testing framework**: any solution capable of generating JUnit reports in XML format, such as [Jest][jest] or [Playwright][playwright]
- **SBOM generator**: any solution capable of generating SBOM in [CycloneDX format][cyclone-dx], like [trivy][trivy]

More other integrations are in product roadmap, contact us to find them out! 

---

If you have further questions or need additional assistance, feel free to reach out to our team. We are here to help you succeed with P4SaMD!

[azure-openai-service]: https://azure.microsoft.com/en-us/products/ai-services/openai-service
[azure-openai-gdpr]: https://learn.microsoft.com/en-us/legal/gdpr
[azure-openai-tos]: https://learn.microsoft.com/en-us/legal/termsofuse
[azure-openai-dpa]: https://aka.ms/DPA
[azure-openai-data-privacy-security]: https://learn.microsoft.com/en-us/legal/cognitive-services/openai/data-privacy
[cyclone-dx]: https://cyclonedx.org/
[jest]: https://github.com/jest-community/jest-junit
[jira]: https://www.atlassian.com/it/software/jira
[playwright]: https://playwright.dev/docs/test-reporters#junit-reporter
[trivy]: https://trivy.dev/latest/
