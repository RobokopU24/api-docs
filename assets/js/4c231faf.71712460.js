"use strict";(self.webpackChunkrobokop_api_docs=self.webpackChunkrobokop_api_docs||[]).push([[1807],{6284:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>y,default:()=>v,frontMatter:()=>u,metadata:()=>k,toc:()=>f});var s=t(87462),n=(t(67294),t(3905)),m=t(58219),i=(t(62316),t(51039)),r=t.n(i),l=(t(82723),t(9487)),p=(t(41429),t(5397)),o=t(4667),c=t(9472),d=t(85162);const u={id:"cypher-cypher-post-ubergraph",title:"Run cypher query",description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",sidebar_label:"Run cypher query",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVk1v2zgQ/SsETy3gWGnQU27ZboAssG1ax9lLGhRjamwxlUiWH9kYhv/7zlCyLNtN4u2tNmBLo5nH92aGHK1kiUF57aK2Rp7LSTJBqKWr0IsfCf1SwAK0CVHECsUntO8fBN+CUTgSYErhMSZPQWAE/kj6EWo0kazBWRNQ4JNDFbEUc28bAR3E1XT6WaApndXk/KaK0YXzojD8cKxsU5RWhYJA4km+Usl7gi3ejuVIWocemO9fJTFuyX7r/pwN8VuaoV94cBU5eyJFMH/YcinPV1JZEwmIL8G5WqsMVDwEVr+SQVXYAF9FHWsk+A8Zd9KidHjaI618J3OC5P1IxqVjXzt7IK3k5DxzjBoDQ7VuA8wv2dCHhei1Wcj1ej2S+ASNY6c+TH68mH64Em/MWzG5nN5OPgllk4l030ZsCUWfMBva1Oe1z05P+W+3yDdJKQxhnmox6ZyJzS+npkcY5oZYpDoGsqL31ofX07SJGKww6UG6UPAeOHM6YhN+yoX895goW6fGMEgJEV7nsfEfovcQz/LYK2W32ADjT74/Vgg5p2Y/o/ZfsjR4jAb2HeYxhz6zNJPNqIOAj/gS2XX36Ws7iLxsLccKze4HBSsxKw0BFnhMwUrcrVaO3yvJFnBHZ2v6yV7cSHx/dna4g/6BWpd5f4iNgv+9ffgM3OJsYF6WWlJddL3TVq3l9XwfLjXMeW0VpzwsNkivZp0jBvB/21bwC0zALK/ntNjBbhn1FpoGuEAv1/e5K4nOMcXaGPa6UEzZ+mxpOQwWgdXf9gPjPu+FyvJk4VnCsiFWdFf0U6VoZw09CugfkfufNCVPdZGbSebtzH637gRStA3EMbVEGNMIU3psPZGgdbgzJtvpdHl48m/1aTO3Q30XLSxR4PXbnjwbv2Ox6JtwPb8hZlphx4gI1RbKDox1NZC70kCD7dTfGfp8Vg77fTA3f4s3hK7iEZ9i4Wpix7JzgVZdOe/k8CWhKygVpeKa09PVagYBb329XrO5q8gdXT6C1zDjKtzdE2qFUFIod8B3XObTJ2fqpGs+Upvybtg/E7jr24gLmsYuvug7bMvP1zdTcp51bzRNPv2kBz7i+fdcfqVvfk9ihHYeQJ4HNZhFykegbHH58x/wI3My",sidebar_class_name:"post api-method",info_path:"docs/automat/automat",custom_edit_url:null},y=void 0,k={unversionedId:"automat/cypher-cypher-post-ubergraph",id:"automat/cypher-cypher-post-ubergraph",title:"Run cypher query",description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",source:"@site/docs/automat/cypher-cypher-post-ubergraph.api.mdx",sourceDirName:"automat",slug:"/automat/cypher-cypher-post-ubergraph",permalink:"/api-docs/docs/automat/cypher-cypher-post-ubergraph",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"cypher-cypher-post-ubergraph",title:"Run cypher query",description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",sidebar_label:"Run cypher query",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVk1v2zgQ/SsETy3gWGnQU27ZboAssG1ax9lLGhRjamwxlUiWH9kYhv/7zlCyLNtN4u2tNmBLo5nH92aGHK1kiUF57aK2Rp7LSTJBqKWr0IsfCf1SwAK0CVHECsUntO8fBN+CUTgSYErhMSZPQWAE/kj6EWo0kazBWRNQ4JNDFbEUc28bAR3E1XT6WaApndXk/KaK0YXzojD8cKxsU5RWhYJA4km+Usl7gi3ejuVIWocemO9fJTFuyX7r/pwN8VuaoV94cBU5eyJFMH/YcinPV1JZEwmIL8G5WqsMVDwEVr+SQVXYAF9FHWsk+A8Zd9KidHjaI618J3OC5P1IxqVjXzt7IK3k5DxzjBoDQ7VuA8wv2dCHhei1Wcj1ej2S+ASNY6c+TH68mH64Em/MWzG5nN5OPgllk4l030ZsCUWfMBva1Oe1z05P+W+3yDdJKQxhnmox6ZyJzS+npkcY5oZYpDoGsqL31ofX07SJGKww6UG6UPAeOHM6YhN+yoX895goW6fGMEgJEV7nsfEfovcQz/LYK2W32ADjT74/Vgg5p2Y/o/ZfsjR4jAb2HeYxhz6zNJPNqIOAj/gS2XX36Ws7iLxsLccKze4HBSsxKw0BFnhMwUrcrVaO3yvJFnBHZ2v6yV7cSHx/dna4g/6BWpd5f4iNgv+9ffgM3OJsYF6WWlJddL3TVq3l9XwfLjXMeW0VpzwsNkivZp0jBvB/21bwC0zALK/ntNjBbhn1FpoGuEAv1/e5K4nOMcXaGPa6UEzZ+mxpOQwWgdXf9gPjPu+FyvJk4VnCsiFWdFf0U6VoZw09CugfkfufNCVPdZGbSebtzH637gRStA3EMbVEGNMIU3psPZGgdbgzJtvpdHl48m/1aTO3Q30XLSxR4PXbnjwbv2Ox6JtwPb8hZlphx4gI1RbKDox1NZC70kCD7dTfGfp8Vg77fTA3f4s3hK7iEZ9i4Wpix7JzgVZdOe/k8CWhKygVpeKa09PVagYBb329XrO5q8gdXT6C1zDjKtzdE2qFUFIod8B3XObTJ2fqpGs+Upvybtg/E7jr24gLmsYuvug7bMvP1zdTcp51bzRNPv2kBz7i+fdcfqVvfk9ihHYeQJ4HNZhFykegbHH58x/wI3My",sidebar_class_name:"post api-method",info_path:"docs/automat/automat",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Query reasoner via one of several inputs.",permalink:"/api-docs/docs/automat/reasoner-api-1-4-query-post-trapi-ubergraph"},next:{title:"Overlay results with available connections between each node.",permalink:"/api-docs/docs/automat/overlay-overlay-post-translator-ubergraph"}},h={},f=[{value:"Request",id:"request",level:2}],g={toc:f},b="wrapper";function v(e){let{components:a,...t}=e;return(0,n.kt)(b,(0,s.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Run cypher query"),(0,n.kt)(r(),{method:"post",path:"/ubergraph/cypher",mdxType:"MethodEndpoint"}),(0,n.kt)("p",null,"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (",(0,n.kt)("a",{parentName:"p",href:"https://neo4j.com/docs/rest-docs/current/"},"https://neo4j.com/docs/rest-docs/current/"),")."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Schema"),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)(l.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,n.kt)(d.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,n.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,n.kt)("strong",{className:"openapi-schema__required"},"required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!1,name:"query",required:!0,schemaName:"Query",qualifierMessage:void 0,schema:{title:"Query",type:"string"},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(m.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Successful Response")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"results"),(0,n.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,n.kt)("span",{className:"openapi-schema__divider"}),(0,n.kt)("span",{className:"openapi-schema__required"},"required"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(o.Z,{collapsible:!1,name:"columns",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{title:"Columns",type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"data"),(0,n.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,n.kt)("span",{className:"openapi-schema__divider"}),(0,n.kt)("span",{className:"openapi-schema__required"},"required"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(o.Z,{collapsible:!1,name:"row",required:!0,schemaName:"undefined[]",qualifierMessage:void 0,schema:{title:"Row",type:"array",items:{}},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"meta",required:!0,schemaName:"undefined[]",qualifierMessage:void 0,schema:{title:"Meta",type:"array",items:{}},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"errors"),(0,n.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,n.kt)("span",{className:"openapi-schema__divider"}),(0,n.kt)("span",{className:"openapi-schema__required"},"required"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(o.Z,{collapsible:!1,name:"code",required:!0,schemaName:"Code",qualifierMessage:void 0,schema:{title:"Code",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"message",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,n.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "results": [\n    {\n      "columns": [\n        "string"\n      ],\n      "data": [\n        {\n          "row": [\n            null\n          ],\n          "meta": [\n            null\n          ]\n        }\n      ]\n    }\n  ],\n  "errors": [\n    {\n      "code": "string",\n      "message": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(d.default,{label:"422",value:"422",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Validation Error")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"detail"),(0,n.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"loc"),(0,n.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,n.kt)("span",{className:"openapi-schema__divider"}),(0,n.kt)("span",{className:"openapi-schema__required"},"required"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)("div",null,(0,n.kt)("span",{className:"badge badge--info"},"anyOf"),(0,n.kt)(c.default,{mdxType:"SchemaTabs"},(0,n.kt)(d.default,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"}},(0,n.kt)("p",null,"string"))),(0,n.kt)(d.default,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"}},(0,n.kt)("p",null,"integer"))))),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(o.Z,{collapsible:!1,name:"msg",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"Error Type",qualifierMessage:void 0,schema:{title:"Error Type",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,n.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))))}v.isMDXComponent=!0}}]);