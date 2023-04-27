"use strict";(self.webpackChunkrobokop_api_docs=self.webpackChunkrobokop_api_docs||[]).push([[9244],{95262:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>y,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var a=r(87462),s=(r(67294),r(3905)),i=r(26389),n=r(94891),o=(r(75190),r(47507)),l=r(24310),p=r(63303),m=(r(75035),r(85162));const c={id:"cypher-cypher-post-textminingkp",title:"Run cypher query",description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",sidebar_label:"Run cypher query",hide_title:!0,hide_table_of_contents:!0,api:{description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",operationId:"cypher_cypher_post_textminingkp",requestBody:{content:{"application/json":{schema:{title:"CypherRequest",required:["query"],type:"object",properties:{query:{title:"Query",type:"string"}}},example:{query:"MATCH (n) RETURN count(n)"}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"CypherResponse",required:["results","errors"],type:"object",properties:{results:{title:"Results",type:"array",items:{title:"CypherResult",required:["columns","data"],type:"object",properties:{columns:{title:"Columns",type:"array",items:{type:"string"}},data:{title:"Data",type:"array",items:{title:"CypherDatum",required:["row","meta"],type:"object",properties:{row:{title:"Row",type:"array",items:{}},meta:{title:"Meta",type:"array",items:{}}}}}}}},errors:{title:"Errors",type:"array",items:{title:"CypherError",required:["code","message"],type:"object",properties:{code:{title:"Code",type:"string"},message:{title:"Message",type:"string"}}}}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},tags:["Text Mining Provider KG"],method:"post",path:"/textminingkp/cypher",servers:[{url:"https://automat-u24.apps.renci.org"}],jsonRequestBodyExample:{query:"string"},info:{title:"Automat",version:"2.1",termsOfService:"http://loading"},postman:{name:"Run cypher query",description:{content:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",type:"text/plain"},url:{path:["textminingkp","cypher"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/automat/automat",custom_edit_url:null},y=void 0,d={unversionedId:"automat/cypher-cypher-post-textminingkp",id:"automat/cypher-cypher-post-textminingkp",title:"Run cypher query",description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",source:"@site/docs/automat/cypher-cypher-post-textminingkp.api.mdx",sourceDirName:"automat",slug:"/automat/cypher-cypher-post-textminingkp",permalink:"/api-docs/docs/automat/cypher-cypher-post-textminingkp",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"cypher-cypher-post-textminingkp",title:"Run cypher query",description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",sidebar_label:"Run cypher query",hide_title:!0,hide_table_of_contents:!0,api:{description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",operationId:"cypher_cypher_post_textminingkp",requestBody:{content:{"application/json":{schema:{title:"CypherRequest",required:["query"],type:"object",properties:{query:{title:"Query",type:"string"}}},example:{query:"MATCH (n) RETURN count(n)"}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"CypherResponse",required:["results","errors"],type:"object",properties:{results:{title:"Results",type:"array",items:{title:"CypherResult",required:["columns","data"],type:"object",properties:{columns:{title:"Columns",type:"array",items:{type:"string"}},data:{title:"Data",type:"array",items:{title:"CypherDatum",required:["row","meta"],type:"object",properties:{row:{title:"Row",type:"array",items:{}},meta:{title:"Meta",type:"array",items:{}}}}}}}},errors:{title:"Errors",type:"array",items:{title:"CypherError",required:["code","message"],type:"object",properties:{code:{title:"Code",type:"string"},message:{title:"Message",type:"string"}}}}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},tags:["Text Mining Provider KG"],method:"post",path:"/textminingkp/cypher",servers:[{url:"https://automat-u24.apps.renci.org"}],jsonRequestBodyExample:{query:"string"},info:{title:"Automat",version:"2.1",termsOfService:"http://loading"},postman:{name:"Run cypher query",description:{content:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",type:"text/plain"},url:{path:["textminingkp","cypher"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/automat/automat",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Query reasoner via one of several inputs.",permalink:"/api-docs/docs/automat/reasoner-api-1-3-query-post-textminingkp-trapi"},next:{title:"Overlay results with available connections between each node.",permalink:"/api-docs/docs/automat/overlay-overlay-post-textminingkp-translator"}},u={},h=[{value:"Run cypher query",id:"run-cypher-query",level:2}],g={toc:h},k="wrapper";function f(e){let{components:t,...r}=e;return(0,s.kt)(k,(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"run-cypher-query"},"Run cypher query"),(0,s.kt)("p",null,"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (",(0,s.kt)("a",{parentName:"p",href:"https://neo4j.com/docs/rest-docs/current/"},"https://neo4j.com/docs/rest-docs/current/"),")."),(0,s.kt)(n.Z,{mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"query",required:!0,schemaName:"Query",qualifierMessage:void 0,schema:{title:"Query",type:"string"},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Successful Response")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"results"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"columns",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{title:"Columns",type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"data"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"row",required:!1,schemaName:"undefined[]",qualifierMessage:void 0,schema:{title:"Row",type:"array",items:{}},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"meta",required:!1,schemaName:"undefined[]",qualifierMessage:void 0,schema:{title:"Meta",type:"array",items:{}},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"errors"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"Code",qualifierMessage:void 0,schema:{title:"Code",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "results": [\n    {\n      "columns": [\n        "string"\n      ],\n      "data": [\n        {\n          "row": [\n            null\n          ],\n          "meta": [\n            null\n          ]\n        }\n      ]\n    }\n  ],\n  "errors": [\n    {\n      "code": "string",\n      "message": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Validation Error")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"detail"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"loc"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)("li",null,(0,s.kt)("span",{className:"badge badge--info"},"anyOf"),(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"string")))),(0,s.kt)(m.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"integer")))))),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(l.Z,{collapsible:!1,name:"msg",required:!1,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"type",required:!1,schemaName:"Error Type",qualifierMessage:void 0,schema:{title:"Error Type",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);