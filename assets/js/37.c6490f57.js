(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{355:function(t,e,a){"use strict";a.r(e);var s=a(7),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"errors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[t._v("#")]),t._v(" Errors")]),t._v(" "),e("p",[e("code",[t._v("Exception")]),t._v(" and "),e("code",[t._v("Throwable")]),t._v(" exceptions thrown during processing such as SQL driver errors, operation errors etc. will\nbe converted into\n"),e("a",{attrs:{href:"https://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html#sec_ErrorResponse",target:"_blank",rel:"noopener noreferrer"}},[t._v("OData errors"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("OData errors have a suitable HTTP response code and a standard JSON object format to present information about the\nerror.")]),t._v(" "),e("p",[t._v("An example OData error object:")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"no_handler"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"No route handler was able to process this request"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"details"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"innererror"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("h2",{attrs:{id:"streaming-responses"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#streaming-responses"}},[t._v("#")]),t._v(" Streaming responses")]),t._v(" "),e("p",[t._v("Lodata implements "),e("RouterLink",{attrs:{to:"/internals/streaming-json.html"}},[t._v("Streaming JSON")]),t._v(" by default. This is very efficient, but it can encounter a\nsituation where a fatal error occurs part way through sending a response, and after sending a successful HTTP code to\nthe client.")],1),t._v(" "),e("p",[t._v("When this happens Lodata will leave the response as incomplete JSON, but will append\nthe header "),e("code",[t._v("OData-Error")]),t._v(" as a "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Trailer",target:"_blank",rel:"noopener noreferrer"}},[t._v("trailing header"),e("OutboundLink")],1),t._v("\nif supported by the transport protocol (eg HTTP/1.1 with chunked transfer encoding, or HTTP/2).")]),t._v(" "),e("p",[t._v("Calling clients can disable the streaming behaviour by setting the "),e("code",[t._v("Accept")]),t._v(" header with a parameter that includes\n"),e("code",[t._v("streaming=false")]),t._v(".")]),t._v(" "),e("p",[t._v("For example: "),e("code",[t._v("Accept: application/json;streaming=false")]),t._v(". This will buffer the response server-side,\nand return only error information and correct status codes.")]),t._v(" "),e("p",[t._v("Alternatively, you can globally disable the streaming behaviour by setting "),e("code",[t._v("streaming")]),t._v(" to "),e("code",[t._v("false")]),t._v(" in the "),e("code",[t._v("lodata.php")]),t._v(" "),e("RouterLink",{attrs:{to:"/getting-started/configuration.html"}},[t._v("config file")]),t._v(". Clients that want the streaming behaviour in this case can still\nset the "),e("code",[t._v("Accept")]),t._v(" header with a parameter of "),e("code",[t._v("streaming=true")]),t._v(".")],1),t._v(" "),e("p",[t._v("Any calling client in streaming mode must be aware of this in order to deal with JSON responses that cannot be decoded, and in\nthis event should check the trailing header to get the JSON error object.")]),t._v(" "),e("h2",{attrs:{id:"exceptions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exceptions"}},[t._v("#")]),t._v(" Exceptions")]),t._v(" "),e("p",[t._v("To retrieve the original exception that caused the Lodata error, the "),e("code",[t._v("getOriginalException()")]),t._v(" method can be used.")]),t._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// XXX")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProtocolException")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$protocolException")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** @var Throwable $originalException */")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$originalException")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$protocolException")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOriginalException")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[t._v("Or, if you have captured a "),e("code",[t._v("Response")]),t._v(" object the exception can be obtained with:")]),t._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$originalException")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$response")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("exception")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOriginalException")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);