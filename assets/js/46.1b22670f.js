(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{445:function(t,s,e){"use strict";e.r(s);var a=e(19),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"eloquent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#eloquent"}},[t._v("#")]),t._v(" Eloquent")]),t._v(" "),e("p",[t._v("Lodata can 'discover' Eloquent models, and the relationships between the models.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("The Eloquent driver extends the SQL driver, so the same "),e("code",[t._v("$filter")]),t._v(" capabilities exist in both.")])]),t._v(" "),e("p",[t._v("Discovery is\nperformed first using "),e("a",{attrs:{href:"https://www.doctrine-project.org/projects/doctrine-dbal/en/2.12/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("DBAL"),e("OutboundLink")],1),t._v(" to\nintrospect the database table, then "),e("a",{attrs:{href:"https://laravel.com/docs/8.x/eloquent-mutators#custom-casts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Eloquent casts"),e("OutboundLink")],1),t._v("\nare used for further type specification. During requests, the Eloquent model getter/setter functions are used\nto refer to the properties, so any additional field processing being performed by the model will be preserved.")]),t._v(" "),e("p",[t._v("To discover a model the "),e("code",[t._v("Lodata")]),t._v(" facade that exists in the root namespace can be used. For example to discover\ntwo models:")]),t._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("LodataServiceProvider")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceProvider")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("boot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Lodata")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("discoverEloquentModel")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Flight")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Lodata")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("discoverEloquentModel")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Passenger")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("p",[t._v("If model "),e("code",[t._v("Flight")]),t._v(" has a method "),e("code",[t._v("passengers")]),t._v(" that returns a "),e("a",{attrs:{href:"https://laravel.com/docs/8.x/eloquent-relationships",target:"_blank",rel:"noopener noreferrer"}},[t._v("relationship"),e("OutboundLink")],1),t._v("\nto "),e("code",[t._v("Passenger")]),t._v(" such as hasOne, hasMany, hasManyThrough, this can be discovered by Lodata as a navigation property on the "),e("code",[t._v("Flights")]),t._v(" entity set.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("The same as Laravel itself, Lodata typically refers to 'entity types' in the singular form and 'entity sets' in\nthe plural form. An entity set and its related entity set must both be defined through discovery before a\nrelationship can be created.")])]),t._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Lodata")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntitySet")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Flights'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("discoverRelationship")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'passengers'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("A navigation property now exists in the "),e("code",[t._v("Flight")]),t._v(" entity set for "),e("code",[t._v("Passengers")]),t._v(". This enables the client to\nnavigate by using the navigation property in a URL similar to\n"),e("a",{attrs:{href:"http://127.0.0.1:8000/odata/Flights(1)/passengers",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("http://127.0.0.1:8000/odata/Flights(1)/passengers")]),e("OutboundLink")],1),t._v("\nto choose the flight with ID 1, and to get the passengers related to this flight. This navigation property can\nalso be used in "),e("code",[t._v("$expand")]),t._v(" requests.")]),t._v(" "),e("p",[t._v("If Lodata is able to determine the relationship cardinality it will be represented in the service metadata\ndocument.")])])}),[],!1,null,null,null);s.default=n.exports}}]);