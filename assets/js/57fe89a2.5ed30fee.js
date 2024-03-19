(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[5992],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return p}});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),p=n,h=u["".concat(l,".").concat(p)]||u[p]||m[p]||r;return a?i.createElement(h,s(s({ref:t},c),{},{components:a})):i.createElement(h,s({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var d=2;d<r;d++)s[d]=a[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5480:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return l},default:function(){return c}});var i=a(4034),n=a(9973),r=(a(7294),a(3905)),s={id:"spam",title:"Mitigating Spam",sidebar_label:"Mitigating Spam"},o={unversionedId:"administering/spam",id:"administering/spam",isDocsHomePage:!1,title:"Mitigating Spam",description:"Manifold employs three tactics to guard against bad actors taking advantage of the social components of the system: (1) email verification, coupled with a model of user trust; (2) rate limits levied against user engagements, and (3) integration with the spam-detection service, Akismet.",source:"@site/docs/administering/spam.md",sourceDirName:"administering",slug:"/administering/spam",permalink:"/manifold-docusaurus/docs/administering/spam",editUrl:"https://github.com/ManifoldScholar/manifold-docusaurus/edit/master/docs/administering/spam.md",version:"current",sidebar_label:"Mitigating Spam",frontMatter:{id:"spam",title:"Mitigating Spam",sidebar_label:"Mitigating Spam"},sidebar:"docs",previous:{title:"Securing Manifold",permalink:"/manifold-docusaurus/docs/administering/securing_manifold"},next:{title:"Managing Settings",permalink:"/manifold-docusaurus/docs/administering/configuring/managing_settings"}},l=[{value:"Email Verification",id:"email-verification",children:[]},{value:"User Trust",id:"user-trust",children:[]},{value:"Establishing Existing Users",id:"establishing-existing-users",children:[]},{value:"Rate Limits",id:"rate-limits",children:[]},{value:"Akismet",id:"akismet",children:[]}],d={toc:l};function c(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Manifold employs three tactics to guard against bad actors taking advantage of the social components of the system: (1) email verification, coupled with a model of user trust; (2) rate limits levied against user engagements, and (3) integration with the spam-detection service, ",(0,r.kt)("a",{parentName:"p",href:"https://akismet.com/"},"Akismet"),"."),(0,r.kt)("h2",{id:"email-verification"},"Email Verification"),(0,r.kt)("p",null,"Beginning with v8.1, Manifold requires that new, ",(0,r.kt)("em",{parentName:"p"},"as well as existing"),", users verify the email address associated with their Manifold account. Users who fail to verify their accounts will not be allowed to leave public annotations, comment publicly, or create public reading groups. Until their email address is confirmed, unverified users will only be able to make private annotations or create and engage in private reading groups."),(0,r.kt)("p",null,"Because this step applies to new ",(0,r.kt)("em",{parentName:"p"},"and")," existing users, after upgrading to v8.1 or later, users who could engage publicly before the upgrade will need to verify their email address following the upgrade. See the ",(0,r.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/using/your_account"},"Your Account")," section for more on the verification process."),(0,r.kt)("p",null,"However, there are caveats, and the following two sections describe some exceptions to this verification requirement."),(0,r.kt)("h2",{id:"user-trust"},"User Trust"),(0,r.kt)("p",null,"We constructed a user-trust model where trusted users can engage publicly on the system even if they have not verified their email address."),(0,r.kt)("p",null,"By default, users with Admin, Editor, Project Creator, or Marketeer roles are considered trusted members of the system and thus able to engage publicly, even when they have not verified their email address."),(0,r.kt)("p",null,"Additionally, users who have been granted access to modify a project in the backend using a project\u2019s ",(0,r.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/projects#access"},"Access sidebar")," are also considered trusted by the system and able to engage publicly with others."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/users"},"Users section")," for more about the different account roles available in Manifold."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"What about Authors?")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Currently ",(0,r.kt)("em",{parentName:"p"},"only")," users who have ",(0,r.kt)("strong",{parentName:"p"},"Can Modify Project")," toggled on from the Access sidebar are considered trusted. Users who have either the toggle for ",(0,r.kt)("strong",{parentName:"p"},"Can Modify Resource Metadata")," or ",(0,r.kt)("strong",{parentName:"p"},"Author")," activated are not viewed as trusted accounts and therefore cannot engage with others publicly\u2014unless or until they verify their email address."))),(0,r.kt)("h2",{id:"establishing-existing-users"},"Establishing Existing Users"),(0,r.kt)("p",null,"Through the ",(0,r.kt)("strong",{parentName:"p"},"User")," list view, located under the ",(0,r.kt)("strong",{parentName:"p"},"Records")," menu in the backend, users with Admin roles can bypass the above trust model and verification protocol and opt to manually verify a user as a trusted user. When a user is thusly verified, they will be able to engage publicly on the system, even if they haven\u2019t verified their email or otherwise qualify as a trusted user."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/users"},"Users section")," for more on how Admins can manually verify an account."),(0,r.kt)("h2",{id:"rate-limits"},"Rate Limits"),(0,r.kt)("p",null,"As of v8.0.7, the following rate limits are applied to all users who are ",(0,r.kt)("em",{parentName:"p"},"not")," Admins. These limits are in place as one method to guard against the proliferation of spam content."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A single user can make up to 5 public annotations in a 5 minute period."),(0,r.kt)("li",{parentName:"ul"},"A single IP address can make up to 5 public annotations in a 5 minute period."),(0,r.kt)("li",{parentName:"ul"},"A single user can make up to 10 comments in a 60 minute period."),(0,r.kt)("li",{parentName:"ul"},"A single IP address can make up to 10 comments in a 60 minute period."),(0,r.kt)("li",{parentName:"ul"},"A single user can make up to 10 public reading groups in a 60 minute period."),(0,r.kt)("li",{parentName:"ul"},"A single IP address can make up to 10 public reading groups in a 60 minute period."),(0,r.kt)("li",{parentName:"ul"},"A single real email can attempt to register up to 5 times within a day or else that email is banned for a month (n.b., aliases like ",(0,r.kt)("a",{parentName:"li",href:"mailto:zach+foo@gmail.com"},"zach+foo@gmail.com")," and ",(0,r.kt)("a",{parentName:"li",href:"mailto:zach+bar@gmail.com"},"zach+bar@gmail.com")," are be treated as the same email)."),(0,r.kt)("li",{parentName:"ul"},"A single IP address can attempt to register up to 5 times within a day or else that IP is banned for a month.")),(0,r.kt)("p",null,"It should be noted that the limits on annotations and reading groups described here are only applied if they are public. Comments are limited as noted, even if they are in response to annotations made in a private context."),(0,r.kt)("h2",{id:"akismet"},"Akismet"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://akismet.com/"},"Akismet")," is a spam detection and filtering service. When you associate your Akismet credentials with Manifold, Manifold will pass all comments, public reading group titles, and public annotations through Akismet to see if it\u2019s spam. If Akismet flags the content as spam, Manifold won\u2019t create it."),(0,r.kt)("p",null,"It is important to note that this filtering is applied only to users who have the default Reader role, regardless of whether they have verified their email address or been verified by an Admin. Users with Project Creator, Marketeer, Editor and Admin roles\u2014as well as Readers who have been granted permission to access and edit projects in the backend (i.e., \u201ctrusted\u201d users, as described above)\u2014are except from Akismet filtering. See the ",(0,r.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/users"},"Users section")," for more on these different roles."),(0,r.kt)("p",null,"If your Manifold instance is hosted by Manifold Digital Services, your instance is automatically filtering content against Akismet. If your instance is self-hosted you will need to sign up for Akismet and associate the API key they provide to you with your instance. See the ",(0,r.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/administering/configuring/properties"},"Settings section")," for more on how to connect your instance with Akismet."),(0,r.kt)("p",null,"It is not currently possibly to make use of other spam-filtering services."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"API Limits")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It is important to note that the amount of content that Akismet will filter depends on the Akismet plan you select for your instance and how may API calls per month are allowed through that plan. If your instance makes more calls than the plan you selected from Akismet allows for, filtering will begin to fail silently and spam may appear on your site."))))}c.isMDXComponent=!0}}]);