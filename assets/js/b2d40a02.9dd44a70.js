"use strict";(self.webpackChunkmia_platform_doc=self.webpackChunkmia_platform_doc||[]).push([[776],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),p=r,m=f["".concat(l,".").concat(p)]||f[p]||d[p]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>f});n(7294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"software_verification",title:"Software Verification",sidebar_label:"Software Verification"},l="Software Verification",c={unversionedId:"p4samd/handbook/software_verification",id:"p4samd/handbook/software_verification",title:"Software Verification",description:"Ensuring the reliability and safety of Software as a Medical Device (SaMD) requires a balanced approach between automated and manual testing. Automated testing is crucial for early and efficient assessment of software quality, allowing fast execution of unit, integration, and regression tests and ensuring regulatory compliance, such as adherence to IEC 62304 and FDA guidelines, thanks to consistent and continuous validation during the entire software lifecycle.",source:"@site/docs/p4samd/handbook/verification.md",sourceDirName:"p4samd/handbook",slug:"/p4samd/handbook/software_verification",permalink:"/docs/p4samd/handbook/software_verification",draft:!1,editUrl:"https://github.com/mia-platform/documentation/edit/main/docs/p4samd/handbook/verification.md",tags:[],version:"current",frontMatter:{id:"software_verification",title:"Software Verification",sidebar_label:"Software Verification"},sidebar:"P4SaMD",previous:{title:"Getting Started",permalink:"/docs/p4samd/handbook/getting_started"},next:{title:"SBOM",permalink:"/docs/p4samd/handbook/sbom"}},u={},f=[{value:"Overview",id:"overview",level:2},{value:"Test suites",id:"test-suites",level:2}],d={toc:f},p="wrapper";function m(e){var{components:t}=e,s=o(e,["components"]);return(0,a.kt)(p,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},d,s),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"software-verification"},"Software Verification"),(0,a.kt)("p",null,"Ensuring the reliability and safety of Software as a Medical Device (SaMD) requires a balanced approach between automated and manual testing. Automated testing is crucial for early and efficient assessment of software quality, allowing fast execution of unit, integration, and regression tests and ensuring regulatory compliance, such as adherence to IEC 62304 and FDA guidelines, thanks to consistent and continuous validation during the entire software lifecycle."),(0,a.kt)("p",null,"Manual testing remains relevant, especially for usability and exploratory testing, where human judgment is necessary to evaluate how clinicians and patients interact with the software, and for edge-case validation, ensuring the system correctly handles unexpected inputs or real-world complexities that automated tests might overlook. By combining automation for efficiency and coverage with manual testing for critical judgment and user experience, SaMD developers can create software that is not only compliant and robust but also practical and safe for medical use."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"P4SaMD provides a comprehensive overview of all the tests planned for a version of the software system."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tests table",src:n(2903).Z,width:"1599",height:"895"})),(0,a.kt)("p",null,"For each test the following information are provided:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Title"),": the unique identifier (ID or key) and title of the test;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Suggestions"),": a list of suggestions generated by P4SaMD (for example if a test has never been executed or is not linked to a requirement);"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Type"),": the type of test, like integration or system;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Execution Mode"),": if the test is executed automatically or manually;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Test Suite"),": if the test is part of an ",(0,a.kt)("a",{parentName:"li",href:"#test-suites"},"automated test suite"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Latest Execution"),": details about the last text execution, including when it was performed and the outcome (passed or failed);"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Software Items"),": the number of software items associated to the test;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Requirements"),": the number of requirements covered by the test.")),(0,a.kt)("p",null,"If you select a row, a detailed view is available with additional information about the test, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"who performed the latest execution;"),(0,a.kt)("li",{parentName:"ul"},"the full list of text executions;"),(0,a.kt)("li",{parentName:"ul"},"the list of linked software items, requirements and risks, that you can explore by clicking on the respective label.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Details section of a test drawer",src:n(6372).Z,width:"476",height:"601"})),(0,a.kt)("p",null,"You can navigate between the linked entities - tests, requirements, risks and software items - by selecting them under the ",(0,a.kt)("em",{parentName:"p"},"Traceability")," section in the detailed view."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Traceability section of a test drawer",src:n(1887).Z,width:"483",height:"356"})),(0,a.kt)("p",null,"You can browse back to previous entities by accessing the history menu at the top of the detailed view and selecting the entity of interest."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"History menu of the test drawer",src:n(2379).Z,width:"460",height:"152"})),(0,a.kt)("h2",{id:"test-suites"},"Test suites"),(0,a.kt)("p",null,"P4SaMD enables developers to manage automated tests, including integration and system tests, organized in test suites."),(0,a.kt)("p",null,"A test suite is a collection of tests that you can managed directly from P4SaMD, although you cannot yet create them directly from the P4SaMD Control Panel."))}m.isMDXComponent=!0},6372:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/test-details-ea301c8aabc95903402831699d84f33a.png"},2379:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/test-history-1c55151e41003cebf623ea4812af3ad1.png"},1887:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/test-traceability-177ea2a7eb5a4b828b085128f8712459.png"},2903:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tests-section-ef43b5ab3ddbe63a9540e85c96bef0f8.png"}}]);