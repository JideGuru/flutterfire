(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var i,r=n(1),a=n(6),o=(n(0),n(142)),c={title:"Using Firebase Authentication",sidebar_label:"Usage"},l={id:"auth/usage",title:"Using Firebase Authentication",description:"Once installed, you can access the `firebase_auth` plugin by importing it in your Dart code:",source:"@site/../docs/auth/usage.mdx",permalink:"/flutterfire/docs/auth/usage",editUrl:"https://github.com/FirebaseExtended/flutterfire/edit/next/docs/../docs/auth/usage.mdx",sidebar_label:"Usage",sidebar:"main",previous:{title:"Authentication",permalink:"/flutterfire/docs/auth/overview"},next:{title:"Social Authentication",permalink:"/flutterfire/docs/auth/social"}},s=[{value:"Listening to authentication state",id:"listening-to-authentication-state",children:[]},{value:"Persisting authentication state",id:"persisting-authentication-state",children:[]},{value:"Anonymous sign-in",id:"anonymous-sign-in",children:[]},{value:"Email/Password sign-in",id:"emailpassword-sign-in",children:[]},{value:"Signing Out",id:"signing-out",children:[]},{value:"Other sign-in methods",id:"other-sign-in-methods",children:[]},{value:"Using secondary apps",id:"using-secondary-apps",children:[]}],u=(i="Highlight",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),p={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Once installed, you can access the ",Object(o.b)("inlineCode",{parentName:"p"},"firebase_auth")," plugin by importing it in your Dart code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-dart"}),"import 'package:firebase_auth/firebase_auth.dart';\n")),Object(o.b)("h2",{id:"listening-to-authentication-state"},"Listening to authentication state"),Object(o.b)(u,{mdxType:"Highlight"},Object(o.b)("li",null,"Introduction Text"),Object(o.b)("li",null,"Add code example")),Object(o.b)("h2",{id:"persisting-authentication-state"},"Persisting authentication state"),Object(o.b)(u,{mdxType:"Highlight"},Object(o.b)("li",null,"Introduction Text"),Object(o.b)("li",null,"Add code example")),Object(o.b)("h2",{id:"anonymous-sign-in"},"Anonymous sign-in"),Object(o.b)(u,{mdxType:"Highlight"},Object(o.b)("li",null,"Introduction Text"),Object(o.b)("li",null,"Add code example")),Object(o.b)("h2",{id:"emailpassword-sign-in"},"Email/Password sign-in"),Object(o.b)(u,{mdxType:"Highlight"},Object(o.b)("li",null,"Introduction Text"),Object(o.b)("li",null,"Add code example")),Object(o.b)("h2",{id:"signing-out"},"Signing Out"),Object(o.b)(u,{mdxType:"Highlight"},Object(o.b)("li",null,"Introduction Text"),Object(o.b)("li",null,"Add code example")),Object(o.b)("h2",{id:"other-sign-in-methods"},"Other sign-in methods"),Object(o.b)("p",null,"Firebase also supports authenticating with external provides. To learn more, view the documentation for your authentication method:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Apple Sign-In."),Object(o.b)("li",{parentName:"ul"},"Facebook Sign-In."),Object(o.b)("li",{parentName:"ul"},"Twitter Sign-In."),Object(o.b)("li",{parentName:"ul"},"Google Sign-In."),Object(o.b)("li",{parentName:"ul"},"Phone Number Sign-In.")),Object(o.b)("h2",{id:"using-secondary-apps"},"Using secondary apps"),Object(o.b)("p",null,"Firebase Authentication supports using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"core/usage#secondary-firebase-apps"}),"secondary Firebase apps"),", allowing you to\nauthenticate users with multiple Firebase projects at once."),Object(o.b)("p",null,"To use a secondary app, pass the ",Object(o.b)("inlineCode",{parentName:"p"},"FirebaseApp")," instance to the ",Object(o.b)("inlineCode",{parentName:"p"},"instanceFor")," method:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-dart"}),"FirebaseApp secondaryApp = FirebaseCore.instance.app('SecondayApp');\n\nFirebaseAuth auth = FirebaseAuth.instanceFor(\n  app: secondaryApp\n);\n")))}b.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,g=p["".concat(o,".").concat(d)]||p[d]||b[d]||a;return n?r.a.createElement(g,c({ref:t},s,{components:n})):r.a.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);