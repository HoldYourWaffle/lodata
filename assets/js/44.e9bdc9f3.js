(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{362:function(e,t,a){"use strict";a.r(t);var r=a(7),n=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"entity-sets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entity-sets"}},[e._v("#")]),e._v(" Entity Sets")]),e._v(" "),t("p",[e._v('OData describes data stores as entity sets, with the records within as entities.\nLodata implements support for several kinds of services handled by Laravel, which are referred to as "drivers".')]),e._v(" "),t("p",[e._v("A Lodata 'driver' represents any data store that could implement one or more of the "),t("code",[e._v("\\Flat3\\Lodata\\Interfaces\\EntitySet")]),e._v(" interfaces\nincluding "),t("code",[e._v("QueryInterface")]),e._v(", "),t("code",[e._v("ReadInterface")]),e._v(", "),t("code",[e._v("UpdateInterface")]),e._v(", "),t("code",[e._v("DeleteInterface")]),e._v(", and "),t("code",[e._v("CreateInterface")]),e._v(".")]),e._v(" "),t("p",[e._v("A wide variety of different services can support these interfaces in whatever way makes sense to that service. Services could be\nother databases, NoSQL services, other REST APIs or simple on-disk text files.")]),e._v(" "),t("p",[e._v("In addition to the query\ninterface the driver may implement "),t("code",[e._v("SearchInterface")]),e._v(" and "),t("code",[e._v("FilterInterface")]),e._v(" to support "),t("code",[e._v("$search")]),e._v(" and "),t("code",[e._v("$filter")]),e._v(", and other system\nquery parameters can be supported through "),t("code",[e._v("ExpandInterface")]),e._v(", "),t("code",[e._v("TokenPaginationInterface")]),e._v(", "),t("code",[e._v("PaginationInterface")]),e._v(" and "),t("code",[e._v("OrderByInterface")]),e._v(".")]),e._v(" "),t("p",[e._v("Implementation of these interfaces is optional, and Lodata will detect support and return a 'Not Implemented' exception\nto a client trying to use an interface that is not available.")])])}),[],!1,null,null,null);t.default=n.exports}}]);