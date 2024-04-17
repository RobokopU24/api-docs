"use strict";(self.webpackChunkrobokop_api_docs=self.webpackChunkrobokop_api_docs||[]).push([[4039],{82801:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>y,default:()=>b,frontMatter:()=>u,metadata:()=>k,toc:()=>f});var s=t(87462),m=(t(67294),t(3905)),n=t(58219),i=(t(62316),t(51039)),r=t.n(i),l=(t(82723),t(9487)),o=(t(41429),t(5397)),p=t(4667),c=t(9472),d=t(85162);const u={id:"cypher-cypher-post-monarch-kg",title:"Run cypher query",description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",sidebar_label:"Run cypher query",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVk1v2zAM/SuCTi2Qxl3RU29dV6zF1o+l6S5ZUTAyE6u1JVeSuwZB/vtI2UmcpB/ZbkuAxKbJp/dISvRUpuiV02XQ1sgj2auMF2pSZujEU4VuImAM2vggQobiEu3hg+BbMAo7AkwqHIbKURAYgU+VfoYcTSCrL63xKPClRBUwFSNnCwENxFm/fy3QpKXV5LyThVD6oyQx/LCrbJGkVvmEQMJevFKVcwSb7HZlR9oSHTDf85QY12Tvm7/S+nBfWANOZXuPY/J2xIpwPtt0Io+mUlkTCIkvoSxzrSJS8uBZ/lR6lWEBfBV0yJHwTyJwr0Zp8LRDWnogY4bkXUeGScm+dvhAYsmpdEwyaPQMVbu1MH9EwyLMB6fNWM5ms47EFyhKdlqEyYvj/smZ2DG7onfav+1dCmUrE+i+jlgSCq7CaKhzH9c+2N/nv9Uq31RKofejKhe9xpnY/HNqFgjt3BCLKg+erOicdf7jNM0jWiv0FiBNKDgHnDkdsPCvciH/NSbK5lVhGCSFAB/zmPu30RcQb/JYK2WzWAvjC99vK4Scq2I9o/Y3WQrcRgP7tvMYQ99YmslG1FbABb5HdtZ8FrVtRZ7Wlm2FRveNgqUYlXoPY9ymYCmuVivGr5VkCbiisza9shfnEg8PDjZ30E/IdRr3h5gr+Ovtw4fgEmcO877UlOqi85W2qi0f53tzqXbOc6s45X48R/ow6xzRgv9ua8HvMAEzuRrRYhu7pbOw0DjAMTo5u4tdSXS2KdbcsNaFos/WN0vLYTD2rP6md04n4QhpyCgU376yetoSmeUJwzOF1UPI6C5ZTpekHjr0zKN7Rt4HpK1yVB85H2nODu2jLfegCraA0KXW8F1eRnetIzK0EHdIbzmlTjcnwFKnNiPb1nlcwxIFXr/uzYPuJxaNrvBXoxtiphU2jIhQbiFtwFhYAbE7DRRYj/+V6c9nZrvvW/Pzv3hVaCof8CUkZU7sWHYs0LSp50CuvC00FaWqZFx1ejydDsHjrctnMzY3JRnQ5TM4DUMuw+COYDOElEK5BR5xEo+hmKq9pgtJbhW3xfrhwO1fRxzTWC7Du77txry+uumT87B5tSniMSgd8FnPv0fyF33jGxMj1IMB4mDIwYyreBbKGpc/fwDYXHVW",sidebar_class_name:"post api-method",info_path:"docs/automat/automat",custom_edit_url:null},y=void 0,k={unversionedId:"automat/cypher-cypher-post-monarch-kg",id:"automat/cypher-cypher-post-monarch-kg",title:"Run cypher query",description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",source:"@site/docs/automat/cypher-cypher-post-monarch-kg.api.mdx",sourceDirName:"automat",slug:"/automat/cypher-cypher-post-monarch-kg",permalink:"/api-docs/docs/automat/cypher-cypher-post-monarch-kg",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"cypher-cypher-post-monarch-kg",title:"Run cypher query",description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",sidebar_label:"Run cypher query",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVk1v2zAM/SuCTi2Qxl3RU29dV6zF1o+l6S5ZUTAyE6u1JVeSuwZB/vtI2UmcpB/ZbkuAxKbJp/dISvRUpuiV02XQ1sgj2auMF2pSZujEU4VuImAM2vggQobiEu3hg+BbMAo7AkwqHIbKURAYgU+VfoYcTSCrL63xKPClRBUwFSNnCwENxFm/fy3QpKXV5LyThVD6oyQx/LCrbJGkVvmEQMJevFKVcwSb7HZlR9oSHTDf85QY12Tvm7/S+nBfWANOZXuPY/J2xIpwPtt0Io+mUlkTCIkvoSxzrSJS8uBZ/lR6lWEBfBV0yJHwTyJwr0Zp8LRDWnogY4bkXUeGScm+dvhAYsmpdEwyaPQMVbu1MH9EwyLMB6fNWM5ms47EFyhKdlqEyYvj/smZ2DG7onfav+1dCmUrE+i+jlgSCq7CaKhzH9c+2N/nv9Uq31RKofejKhe9xpnY/HNqFgjt3BCLKg+erOicdf7jNM0jWiv0FiBNKDgHnDkdsPCvciH/NSbK5lVhGCSFAB/zmPu30RcQb/JYK2WzWAvjC99vK4Scq2I9o/Y3WQrcRgP7tvMYQ99YmslG1FbABb5HdtZ8FrVtRZ7Wlm2FRveNgqUYlXoPY9ymYCmuVivGr5VkCbiisza9shfnEg8PDjZ30E/IdRr3h5gr+Ovtw4fgEmcO877UlOqi85W2qi0f53tzqXbOc6s45X48R/ow6xzRgv9ua8HvMAEzuRrRYhu7pbOw0DjAMTo5u4tdSXS2KdbcsNaFos/WN0vLYTD2rP6md04n4QhpyCgU376yetoSmeUJwzOF1UPI6C5ZTpekHjr0zKN7Rt4HpK1yVB85H2nODu2jLfegCraA0KXW8F1eRnetIzK0EHdIbzmlTjcnwFKnNiPb1nlcwxIFXr/uzYPuJxaNrvBXoxtiphU2jIhQbiFtwFhYAbE7DRRYj/+V6c9nZrvvW/Pzv3hVaCof8CUkZU7sWHYs0LSp50CuvC00FaWqZFx1ejydDsHjrctnMzY3JRnQ5TM4DUMuw+COYDOElEK5BR5xEo+hmKq9pgtJbhW3xfrhwO1fRxzTWC7Du77txry+uumT87B5tSniMSgd8FnPv0fyF33jGxMj1IMB4mDIwYyreBbKGpc/fwDYXHVW",sidebar_class_name:"post api-method",info_path:"docs/automat/automat",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Query reasoner via one of several inputs.",permalink:"/api-docs/docs/automat/reasoner-api-1-4-query-post-monarch-kg-trapi"},next:{title:"Overlay results with available connections between each node.",permalink:"/api-docs/docs/automat/overlay-overlay-post-monarch-kg-translator"}},h={},f=[{value:"Request",id:"request",level:2}],g={toc:f},v="wrapper";function b(e){let{components:a,...t}=e;return(0,m.kt)(v,(0,s.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,m.kt)("h1",{className:"openapi__heading"},"Run cypher query"),(0,m.kt)(r(),{method:"post",path:"/monarch-kg/cypher",mdxType:"MethodEndpoint"}),(0,m.kt)("p",null,"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (",(0,m.kt)("a",{parentName:"p",href:"https://neo4j.com/docs/rest-docs/current/"},"https://neo4j.com/docs/rest-docs/current/"),")."),(0,m.kt)("details",null,(0,m.kt)("summary",null,"Schema"),(0,m.kt)("h2",{id:"request"},"Request"),(0,m.kt)(l.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,m.kt)(d.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,m.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,m.kt)("strong",{className:"openapi-schema__required"},"required")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(p.Z,{collapsible:!1,name:"query",required:!0,schemaName:"Query",qualifierMessage:void 0,schema:{title:"Query",type:"string"},mdxType:"SchemaItem"}))))),(0,m.kt)("div",null,(0,m.kt)("div",null,(0,m.kt)(n.Z,{mdxType:"ApiTabs"},(0,m.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Successful Response")),(0,m.kt)("div",null,(0,m.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"results"),(0,m.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,m.kt)("span",{className:"openapi-schema__divider"}),(0,m.kt)("span",{className:"openapi-schema__required"},"required"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,m.kt)(p.Z,{collapsible:!1,name:"columns",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{title:"Columns",type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"data"),(0,m.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,m.kt)("span",{className:"openapi-schema__divider"}),(0,m.kt)("span",{className:"openapi-schema__required"},"required"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,m.kt)(p.Z,{collapsible:!1,name:"row",required:!0,schemaName:"undefined[]",qualifierMessage:void 0,schema:{title:"Row",type:"array",items:{}},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"meta",required:!0,schemaName:"undefined[]",qualifierMessage:void 0,schema:{title:"Meta",type:"array",items:{}},mdxType:"SchemaItem"}),(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,m.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"errors"),(0,m.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,m.kt)("span",{className:"openapi-schema__divider"}),(0,m.kt)("span",{className:"openapi-schema__required"},"required"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,m.kt)(p.Z,{collapsible:!1,name:"code",required:!0,schemaName:"Code",qualifierMessage:void 0,schema:{title:"Code",type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"message",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,m.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(o.Z,{responseExample:'{\n  "results": [\n    {\n      "columns": [\n        "string"\n      ],\n      "data": [\n        {\n          "row": [\n            null\n          ],\n          "meta": [\n            null\n          ]\n        }\n      ]\n    }\n  ],\n  "errors": [\n    {\n      "code": "string",\n      "message": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(d.default,{label:"422",value:"422",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Validation Error")),(0,m.kt)("div",null,(0,m.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"detail"),(0,m.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,m.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"loc"),(0,m.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,m.kt)("span",{className:"openapi-schema__divider"}),(0,m.kt)("span",{className:"openapi-schema__required"},"required"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,m.kt)("div",null,(0,m.kt)("span",{className:"badge badge--info"},"anyOf"),(0,m.kt)(c.default,{mdxType:"SchemaTabs"},(0,m.kt)(d.default,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"}},(0,m.kt)("p",null,"string"))),(0,m.kt)(d.default,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"}},(0,m.kt)("p",null,"integer"))))),(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,m.kt)(p.Z,{collapsible:!1,name:"msg",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"type",required:!0,schemaName:"Error Type",qualifierMessage:void 0,schema:{title:"Error Type",type:"string"},mdxType:"SchemaItem"}),(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,m.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(o.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))))}b.isMDXComponent=!0}}]);