"use strict";(self.webpackChunkmia_platform_doc=self.webpackChunkmia_platform_doc||[]).push([[596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});n(7294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={id:"e2e-tests",title:"E2E Tests",sidebar_label:"E2E Tests"},l=void 0,c={unversionedId:"tests/e2e-tests",id:"tests/e2e-tests",title:"E2E Tests",description:"End-to-end Tests, often abbreviated in E2E Tests, are a category of tests designed to replicate user interactions with an application, ensuring the seamless integration of all system components. These tests emulate the actions of a genuine user who, engaging with the user interface, executes a sequence of operations.",source:"@site/docs/tests/e2e-tests.md",sourceDirName:"tests",slug:"/tests/e2e-tests",permalink:"/documentation/docs/tests/e2e-tests",draft:!1,editUrl:"https://github.com/mia-platform/documentation/edit/main/docs/tests/e2e-tests.md",tags:[],version:"current",frontMatter:{id:"e2e-tests",title:"E2E Tests",sidebar_label:"E2E Tests"},sidebar:"P4SaMD",previous:{title:"Integration Tests",permalink:"/documentation/docs/tests/integration-tests"}},p={},u=[{value:"Functional requirements",id:"functional-requirements",level:2},{value:"Example",id:"example",level:3},{value:"Setup of E2E Tests",id:"setup-of-e2e-tests",level:2},{value:"Run the E2E tests suite",id:"run-the-e2e-tests-suite",level:2}],d={toc:u},h="wrapper";function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)(h,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"End-to-end Tests"),", often abbreviated in ",(0,r.kt)("strong",{parentName:"p"},"E2E Tests"),", are a category of tests designed to replicate user interactions with an application, ensuring the seamless integration of all system components. These tests emulate the actions of a genuine user who, engaging with the user interface, executes a sequence of operations."),(0,r.kt)("h1",{id:"e2e-tests-in-p4samd"},"E2E Tests in P4SaMD"),(0,r.kt)("p",null,"Mia-Care P4SaMD makes use of ",(0,r.kt)("a",{parentName:"p",href:"https://playwright.dev/"},"Playwright")," as tool to manage the ",(0,r.kt)("strong",{parentName:"p"},"System Testing")," phase.\n",(0,r.kt)("a",{parentName:"p",href:"https://playwright.dev/"},"Playwright")," is an open-source library dedicated to end-to-end test automation. Developed by Microsoft, it aims to streamline and enhance the creation, execution, and maintenance of end-to-end tests for improved efficiency."),(0,r.kt)("h2",{id:"functional-requirements"},"Functional requirements"),(0,r.kt)("p",null,"During the design phase of e2e testing, developers define a test suite that covers all the functional requirements of the application. Each e2e test is then designed to verify specific behaviors or scenarios corresponding to a functional requirement."),(0,r.kt)("p",null,"The goal of mapping each e2e test to a functional requirement is to ensure that all requirements are adequately tested and that the application meets user expectations in terms of functionalities. Additionally, this practice helps identify any discrepancies between the requirements and the application's implementation, allowing for timely detection and resolution of any bugs."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"For example, let us suppose a functional requirement of the application is ",(0,r.kt)("em",{parentName:"p"},'"Users should be able to log in using their credentials"'),". An e2e test associated with this requirement might include the following actions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"opening the browser and navigating to the login page;"),(0,r.kt)("li",{parentName:"ol"},"entering the user's credentials (username and password) into the respective fields;"),(0,r.kt)("li",{parentName:"ol"},"clicking the login button;"),(0,r.kt)("li",{parentName:"ol"},"verifying that the user is successfully authenticated and redirected to the main page of the application.")),(0,r.kt)("p",null,"This way, the e2e test covers the functional requirement of user login and ensures that the application can handle this scenario correctly."),(0,r.kt)("h2",{id:"setup-of-e2e-tests"},"Setup of E2E Tests"),(0,r.kt)("p",null,"The tool-chain needed to run the e2e test suite in Mia-Care P4SaMD is composed by two main components:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"E2E Test Repository: the repository that contains the source code describing the test suite. The repository can be found in the Gitlab group of the project at this path: ",(0,r.kt)("inlineCode",{parentName:"li"},"Tests > E2E Tests"),". This repository already includes a Node.js project with Playwright pre-installed that is used to run the test suite;"),(0,r.kt)("li",{parentName:"ol"},"E2E Test Pipeline: the pipeline that runs the test suite using Playwright.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you need to configure environment variables that may vary based on the environment, you can add and manage them in the CI/CD variables section: ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings > CI/CD > Variables"),".")),(0,r.kt)("h2",{id:"run-the-e2e-tests-suite"},"Run the E2E tests suite"),(0,r.kt)("p",null,"The e2e tests are triggered from the execution of a pipeline the ",(0,r.kt)("inlineCode",{parentName:"p"},"E2E Tests")," repository. The execution of the tests will generate also a report that is saved in the pipeline artifacts."),(0,r.kt)("p",null,"When generating the report, make sure to download the version-specific report that corresponds to the project version. Therefore, it is advisable to apply the same tag as the project to the E2E Test repository. For instance, if you're currently working on version ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.0.0"),", ensure that the E2E Test repository is tagged with ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.0.0"),"."))}f.isMDXComponent=!0}}]);