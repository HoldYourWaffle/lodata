(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{334:function(e,t,a){"use strict";a.r(t);var s=a(7),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"quick-start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[e._v("#")]),e._v(" Quick start")]),e._v(" "),t("p",[e._v("This page gives you a three step quick start to getting your data exposed through an OData API. Once you're up and running\ncheck out the rest of the docs!")]),e._v(" "),t("h2",{attrs:{id:"step-1-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-installation"}},[e._v("#")]),e._v(" Step 1: Installation")]),e._v(" "),t("p",[e._v("Install Lodata into your Laravel application using "),t("a",{attrs:{href:"https://getcomposer.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Composer"),t("OutboundLink")],1)]),e._v(" "),t("div",{attrs:{"data-event-label":"composer-install"}},[t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("composer")]),e._v(" require flat3/lodata\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("p",[e._v("Now (re)start your app. The OData API endpoint will be available at: "),t("a",{attrs:{href:"http://127.0.0.1:8000/odata/",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("http://127.0.0.1:8000/odata/")]),t("OutboundLink")],1),e._v("\n(or whichever URL prefix your application normally runs on).")]),e._v(" "),t("p",[e._v("Accessing that endpoint in a browser or an API client such as "),t("a",{attrs:{href:"https://www.postman.com/product/api-client/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Postman"),t("OutboundLink")],1),e._v(" will show you\nthe "),t("a",{attrs:{href:"https://docs.oasis-open.org/odata/odata/v4.01/os/part1-protocol/odata-v4.01-os-part1-protocol.html#sec_ServiceDocumentRequest",target:"_blank",rel:"noopener noreferrer"}},[e._v("Service Document"),t("OutboundLink")],1),e._v("\nthat describes the services available at this endpoint. This will show an empty array of services at the moment.")]),e._v(" "),t("h2",{attrs:{id:"step-2-discovery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-discovery"}},[e._v("#")]),e._v(" Step 2: Discovery")]),e._v(" "),t("p",[e._v("The first thing we'll try is exposing the data managed by an Eloquent model.\nWe can use auto-discovery to introspect the schema and find the available fields.")]),e._v(" "),t("p",[e._v("As we're just starting out we'll use the existing service provider at "),t("code",[e._v("app/Providers/AppServiceProvider.php")]),e._v(".")]),e._v(" "),t("p",[e._v("Open this file and add the following to the "),t("code",[e._v("boot()")]),e._v(" method.")]),e._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Lodata")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("discover")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("App"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("User")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("You can now access "),t("a",{attrs:{href:"http://127.0.0.1:8000/odata/Users",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("http://127.0.0.1:8000/odata/Users")]),t("OutboundLink")],1),e._v(" and see the users in your database.\nNote that the properties of the model have been discovered, and their types automatically detected.")]),e._v(" "),t("p",[e._v("Lodata uses the same casing and pluralisation approach as Laravel, and OData URLs are "),t("strong",[e._v("case-sensitive")]),e._v(".\nTherefore, the "),t("code",[e._v("User")]),e._v(" model is exposed as "),t("code",[e._v("Users")]),e._v(" in the URL.")]),e._v(" "),t("h2",{attrs:{id:"step-3-try-a-query"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-3-try-a-query"}},[e._v("#")]),e._v(" Step 3: Try a query")]),e._v(" "),t("p",[e._v("OData has an extensive set of filtering, searching and sorting capabilities.")]),e._v(" "),t("p",[e._v("We'll exercise it with this request that returns the first three users that have email addresses ending in "),t("code",[e._v("@gmail.com")]),e._v(", sorted by recently created first, and we're only interested in the name, email and created_at properties:")]),e._v(" "),t("p",[t("a",{attrs:{href:"http://127.0.0.1:8000/odata/Users?filter=endswith%28email,%20'@gmail.com'%29&top=3&orderby=created_at%20desc&select=name,email,created_at",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("http://127.0.0.1:8000/odata/Users?filter=endswith(email, '@gmail.com')&top=3&orderby=created_at desc&select=name,email,created_at")]),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("This might look a bit complex at first, but we'll go into more detail on the available query options later in this documentation.")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("Now you're up and running! There's a ton more you can do with OData, have a look through the rest of the docs to find out more...")])])}),[],!1,null,null,null);t.default=r.exports}}]);