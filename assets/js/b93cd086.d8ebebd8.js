"use strict";(self.webpackChunkmia_platform_doc=self.webpackChunkmia_platform_doc||[]).push([[515],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=u(n),c=a,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return n?r.createElement(k,i(i({ref:e},p),{},{components:n})):r.createElement(k,i({ref:e},p))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9963:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>u,toc:()=>d});n(7294);var r=n(3905);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const o={id:"system_requirement",title:"System Requirements",sidebar_label:"System Requirements"},s=void 0,u={unversionedId:"p4samd/system_requirement",id:"p4samd/system_requirement",title:"System Requirements",description:"This page provides an overview of the system requirements necessary for deploying P4SaMD and explains how the installation process is carried out by the Mia-Care team.",source:"@site/docs/p4samd/system_requirement.md",sourceDirName:"p4samd",slug:"/p4samd/system_requirement",permalink:"/docs/p4samd/system_requirement",draft:!1,editUrl:"https://github.com/mia-platform/documentation/edit/main/docs/p4samd/system_requirement.md",tags:[],version:"current",frontMatter:{id:"system_requirement",title:"System Requirements",sidebar_label:"System Requirements"},sidebar:"P4SaMD",previous:{title:"What is P4SaMD?",permalink:"/docs/p4samd/overview"},next:{title:"Configuration",permalink:"/docs/p4samd/configuration"}},p={},d=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Kubernetes Cluster Setup",id:"kubernetes-cluster-setup",level:3},{value:"Installation Procedure",id:"installation-procedure",level:2}],m={toc:d},c="wrapper";function k(t){var{components:e}=t,n=i(t,["components"]);return(0,r.kt)(c,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){a(t,e,n[e])}))}return t}({},m,n),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page provides an overview of the system requirements necessary for deploying P4SaMD and explains how the installation process is carried out by the Mia-Care team."),(0,r.kt)("p",null,"The deployment of Mia-Care P4SaMD involves a structured process to ensure compatibility with your existing infrastructure and alignment with regulatory and operational needs. It includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A detailed list of system requirements, including prerequisites for the Mia-Platform IDP, the need for an ALM tool, and the supported adoption models."),(0,r.kt)("li",{parentName:"ul"},"A description of the installation process, highlighting the infrastructure assessment, installation steps, and the validation phase conducted by Mia-Care.")),(0,r.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,r.kt)("p",null,"Mia-Care P4SaMD is installed on behalf of Mia-Platform IDP, meaning the system requirement list contains both Mia-Platform IDP and Mia-Care P4SaMD components. For every component, a list of supported tool is presented. In the end, a target tech stack is presented."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,(0,r.kt)("strong",null,"Required for")),(0,r.kt)("th",null),(0,r.kt)("th",null,(0,r.kt)("strong",null,"Tool")),(0,r.kt)("th",null,(0,r.kt)("strong",null,"Version")),(0,r.kt)("th",null,(0,r.kt)("strong",null,"Mandatory")))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{rowspan:"7"},"Mia-Platform IDP ",(0,r.kt)("br",null)," Mia-Care P4SaMD"),(0,r.kt)("td",{rowspan:"7"},(0,r.kt)("strong",null,"Auth Provider")),(0,r.kt)("td",null,"Okta"),(0,r.kt)("td",null,"SaaS"),(0,r.kt)("td",{rowspan:"7"},"Yes")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GitLab"),(0,r.kt)("td",null,"> 14.x")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GitHub"),(0,r.kt)("td",null,"> 3.x")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Microsoft"),(0,r.kt)("td",null,"SaaS")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Azure AD B2C"),(0,r.kt)("td",null,"SaaS")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Bitbucket Server"),(0,r.kt)("td",null,"> 8.x")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Keycloak"),(0,r.kt)("td",null,"SaaS")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowspan:"4"},"Mia-Platform IDP"),(0,r.kt)("td",{rowspan:"4"},(0,r.kt)("strong",null,"Git Provider")),(0,r.kt)("td",null,"GitLab"),(0,r.kt)("td",null,"> 14.x"),(0,r.kt)("td",{rowspan:"4"},"Yes")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GitHub"),(0,r.kt)("td",null,"> 3.x")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Azure Repos"),(0,r.kt)("td",null,"SaaS")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Bitbucket Server"),(0,r.kt)("td",null,"> 8.x")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowspan:"2"},"Mia-Platform IDP"),(0,r.kt)("td",{rowspan:"2"},(0,r.kt)("strong",null,"Secret Manager")),(0,r.kt)("td",null,"GitLab"),(0,r.kt)("td",null,"SaaS"),(0,r.kt)("td",{rowspan:"2"},"Yes")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Vault"),(0,r.kt)("td",null,"SaaS")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowspan:"4"},"Mia-Platform IDP"),(0,r.kt)("td",{rowspan:"4"},(0,r.kt)("strong",null,"CI/CD Tool")),(0,r.kt)("td",null,"GitLab CI Runners"),(0,r.kt)("td",null,"> 14.x"),(0,r.kt)("td",{rowspan:"4"},"Yes")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GitHub Actions"),(0,r.kt)("td",null,"SaaS")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Azure Pipelines"),(0,r.kt)("td",null,"SaaS")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Jenkins"),(0,r.kt)("td",null,"SaaS")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Mia-Platform IDP ",(0,r.kt)("br",null)," Mia-Care P4SaMD"),(0,r.kt)("td",null,(0,r.kt)("strong",null,"NoSQL database")),(0,r.kt)("td",null,"MongoDB Enterprise"),(0,r.kt)("td",null,"> 5",(0,r.kt)("br",null),"<= 7"),(0,r.kt)("td",null,"Yes")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Mia-Platform IDP ",(0,r.kt)("br",null)," Mia-Care P4SaMD"),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Redis Cache")),(0,r.kt)("td",null,"Redis"),(0,r.kt)("td",null,">= 6",(0,r.kt)("br",null),"<= 7"),(0,r.kt)("td",null,"Yes")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Mia-Platform IDP ",(0,r.kt)("br",null)," Mia-Care P4SaMD"),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Runtime")),(0,r.kt)("td",null,"Kubernetes"),(0,r.kt)("td",null,">= 1.21",(0,r.kt)("br",null),"<= 1.30"),(0,r.kt)("td",null,"Yes")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowspan:"3"},"Mia-Platform IDP ",(0,r.kt)("br",null)," Mia-Care P4SaMD"),(0,r.kt)("td",{rowspan:"3"},(0,r.kt)("strong",null,"Object Storage")),(0,r.kt)("td",null,"Google Cloud Storage"),(0,r.kt)("td",null,"SaaS"),(0,r.kt)("td",{rowspan:"3"},"Yes")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"S3-Compatible Object Storages"),(0,r.kt)("td",null,"SaaS")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"MongoDB"),(0,r.kt)("td",null,"SaaS")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Mia-Care P4SaMD"),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Application Lifecycle Manager (ALM)")),(0,r.kt)("td",null,"JIRA"),(0,r.kt)("td",null,"SaaS"),(0,r.kt)("td",null,"Yes")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowspan:"2"},"Mia-Platform IDP"),(0,r.kt)("td",{rowspan:"2"},(0,r.kt)("strong",null,"Key Management Service")),(0,r.kt)("td",null,"Google Cloud Platform"),(0,r.kt)("td",null,"SaaS"),(0,r.kt)("td",{rowspan:"2"},"Optional")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Local Key"),(0,r.kt)("td",null,"SaaS")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Mia-Platform IDP"),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Container image registry")),(0,r.kt)("td",null,"Any container image registry"),(0,r.kt)("td",null,"SaaS"),(0,r.kt)("td",null,"Optional")))),(0,r.kt)("h3",{id:"kubernetes-cluster-setup"},"Kubernetes Cluster Setup"),(0,r.kt)("p",null,"The Kubernetes cluster must be configured with a set of components that ensure the correct operation and monitoring of the application.\nThe components needed for the Kubernetes runtime are shown below.\nFor every component is provided a set of recommended tools.\nCustomers can customize the Kubernetes cluster setup based on tools available in their portfolio."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Component"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Recommended Tools"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Ingress Controller"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Traefik")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Certificate Manager"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Optional"),(0,r.kt)("td",{parentName:"tr",align:"left"},"cert-manager")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Monitoring & Logging Stack"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Optional"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Grafana + Prometheus + Loki + Fluentd + Fluentbit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Disaster Recovery"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Optional"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Velero")))),(0,r.kt)("h2",{id:"installation-procedure"},"Installation Procedure"),(0,r.kt)("p",null,"The installation of Mia-Care P4SaMD is a structured process performed exclusively by Mia-Care's qualified personnel. This ensures that the solution is implemented efficiently and adheres to high-quality standards. Below is an overview of the installation procedure, divided into specific stages:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"System Requirements Check"),": Mia-Care personnel begin by validating the system environment to ensure compatibility and readiness for installation. This step includes:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Infrastructure Assessment:")," Verifying hardware and software configurations meet minimum requirements."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Networking Validation:")," Ensuring that network settings align with the operational needs of Mia-Care P4SaMD."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Security Checks:")," Conducting security assessments to verify compliance with relevant standards and safeguard the installation environment."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Installation of Mia-Platform IDP"),": Mia-Platform IDP (Integrated Development Platform), a foundational component, is installed in the prepared environment. This phase involves deploying the platform and configuring it according to project-specific requirements.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Post-Installation Testing of Mia-Platform IDP"),": Once Mia-Platform IDP is installed, rigorous post-installation testing is conducted to ensure the platform operates correctly. This includes:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Functionality testing to confirm all features are accessible."),(0,r.kt)("li",{parentName:"ul"},"Performance testing to ensure stability under expected workloads."),(0,r.kt)("li",{parentName:"ul"},"Validation of integrations to confirm compatibility with the overall ecosystem.")))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Installation of Mia-Care P4SaMD"),": After verifying the successful installation of Mia-Platform IDP, the Mia-Care P4SaMD application is installed. This involves configuring the solution to align with the intended use and environment specifications.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Post-Installation Testing of Mia-Care P4SaMD"),": Following the installation, comprehensive testing of Mia-Care P4SaMD is performed to validate:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Core functionalities and workflows operate as designed."),(0,r.kt)("li",{parentName:"ul"},"Performance and responsiveness meet predefined benchmarks."),(0,r.kt)("li",{parentName:"ul"},"Security measures are effectively implemented."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Installation and Operation Qualification Report"),": Upon successful completion of all tests, Mia-Care personnel prepare the ",(0,r.kt)("strong",{parentName:"p"},"Installation & Operation Qualification Report"),". This document serves as formal evidence of a completed installation process, including:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A summary of activities conducted during the installation."),(0,r.kt)("li",{parentName:"ul"},"Results of system checks and testing."),(0,r.kt)("li",{parentName:"ul"},"Approval and sign-off by the Mia-Care team, certifying that the system is operational and meets quality standards.")))),(0,r.kt)("p",null,"This phased approach ensures a smooth deployment of Mia-Care P4SaMD, with high levels of reliability and performance, while adhering to strict security and compliance requirements. For further information or support, please contact Mia-Care's technical support team."))}k.isMDXComponent=!0}}]);