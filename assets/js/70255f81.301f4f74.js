"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3544],{59290:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>h});var r=a(87462),s=(a(67294),a(3905)),i=a(26389),o=a(94891),n=(a(75190),a(47507)),l=a(24310),p=a(63303),c=(a(75035),a(85162));const m={id:"cypher-cypher-post-dd-3-f-6-a-92-6-d-9-a-4-ae-3-a-21-c-8-cea-126088-b-9",title:"Run cypher query",description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",sidebar_label:"Run cypher query",hide_title:!0,hide_table_of_contents:!0,api:{description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",operationId:"cypher_cypher_post-dd3f6a92-6d9a-4ae3-a21c-8cea126088b9",requestBody:{content:{"application/json":{schema:{title:"CypherRequest",required:["query"],type:"object",properties:{query:{title:"Query",type:"string"}}},example:{query:"MATCH (n) RETURN count(n)"}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"CypherResponse",required:["results","errors"],type:"object",properties:{results:{title:"Results",type:"array",items:{title:"CypherResult",required:["columns","data"],type:"object",properties:{columns:{title:"Columns",type:"array",items:{type:"string"}},data:{title:"Data",type:"array",items:{title:"CypherDatum",required:["row","meta"],type:"object",properties:{row:{title:"Row",type:"array",items:{}},meta:{title:"Meta",type:"array",items:{}}}}}}}},errors:{title:"Errors",type:"array",items:{title:"CypherError",required:["code","message"],type:"object",properties:{code:{title:"Code",type:"string"},message:{title:"Message",type:"string"}}}}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},tags:["ontological-hierarchy"],method:"post",path:"/ontological-hierarchy/cypher",servers:[{url:"https://automat.renci.org"}],jsonRequestBodyExample:{query:"string"},info:{title:"Automat",version:"2.0",termsOfService:"http://loading"},postman:{name:"Run cypher query",description:{content:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",type:"text/plain"},url:{path:["ontological-hierarchy","cypher"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/automat/automat",custom_edit_url:null},d=void 0,y={unversionedId:"automat/cypher-cypher-post-dd-3-f-6-a-92-6-d-9-a-4-ae-3-a-21-c-8-cea-126088-b-9",id:"automat/cypher-cypher-post-dd-3-f-6-a-92-6-d-9-a-4-ae-3-a-21-c-8-cea-126088-b-9",title:"Run cypher query",description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",source:"@site/docs/automat/cypher-cypher-post-dd-3-f-6-a-92-6-d-9-a-4-ae-3-a-21-c-8-cea-126088-b-9.api.mdx",sourceDirName:"automat",slug:"/automat/cypher-cypher-post-dd-3-f-6-a-92-6-d-9-a-4-ae-3-a-21-c-8-cea-126088-b-9",permalink:"/api-docs/docs/automat/cypher-cypher-post-dd-3-f-6-a-92-6-d-9-a-4-ae-3-a-21-c-8-cea-126088-b-9",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"cypher-cypher-post-dd-3-f-6-a-92-6-d-9-a-4-ae-3-a-21-c-8-cea-126088-b-9",title:"Run cypher query",description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",sidebar_label:"Run cypher query",hide_title:!0,hide_table_of_contents:!0,api:{description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",operationId:"cypher_cypher_post-dd3f6a92-6d9a-4ae3-a21c-8cea126088b9",requestBody:{content:{"application/json":{schema:{title:"CypherRequest",required:["query"],type:"object",properties:{query:{title:"Query",type:"string"}}},example:{query:"MATCH (n) RETURN count(n)"}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"CypherResponse",required:["results","errors"],type:"object",properties:{results:{title:"Results",type:"array",items:{title:"CypherResult",required:["columns","data"],type:"object",properties:{columns:{title:"Columns",type:"array",items:{type:"string"}},data:{title:"Data",type:"array",items:{title:"CypherDatum",required:["row","meta"],type:"object",properties:{row:{title:"Row",type:"array",items:{}},meta:{title:"Meta",type:"array",items:{}}}}}}}},errors:{title:"Errors",type:"array",items:{title:"CypherError",required:["code","message"],type:"object",properties:{code:{title:"Code",type:"string"},message:{title:"Message",type:"string"}}}}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},tags:["ontological-hierarchy"],method:"post",path:"/ontological-hierarchy/cypher",servers:[{url:"https://automat.renci.org"}],jsonRequestBodyExample:{query:"string"},info:{title:"Automat",version:"2.0",termsOfService:"http://loading"},postman:{name:"Run cypher query",description:{content:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",type:"text/plain"},url:{path:["ontological-hierarchy","cypher"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/automat/automat",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Query reasoner via one of several inputs.",permalink:"/api-docs/docs/automat/reasoner-api-1-3-query-post-4-f-1-fc-8-d-5-b-56-a-4465-93-d-5-68966-f-7-ec-9-a-0"},next:{title:"Overlay results with available connections between each node.",permalink:"/api-docs/docs/automat/overlay-overlay-post-99489-c-32-2-c-33-47-c-9-974-f-1-a-41-d-676-bdc-5"}},u={},h=[{value:"Run cypher query",id:"run-cypher-query",level:2}],g={toc:h},f="wrapper";function k(e){let{components:t,...a}=e;return(0,s.kt)(f,(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"run-cypher-query"},"Run cypher query"),(0,s.kt)("p",null,"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (",(0,s.kt)("a",{parentName:"p",href:"https://neo4j.com/docs/rest-docs/current/"},"https://neo4j.com/docs/rest-docs/current/"),")."),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"query",required:!0,schemaName:"Query",qualifierMessage:void 0,schema:{title:"Query",type:"string"},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Successful Response")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"results"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"columns",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{title:"Columns",type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"data"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"row",required:!1,schemaName:"undefined[]",qualifierMessage:void 0,schema:{title:"Row",type:"array",items:{}},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"meta",required:!1,schemaName:"undefined[]",qualifierMessage:void 0,schema:{title:"Meta",type:"array",items:{}},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"errors"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"Code",qualifierMessage:void 0,schema:{title:"Code",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "results": [\n    {\n      "columns": [\n        "string"\n      ],\n      "data": [\n        {\n          "row": [\n            null\n          ],\n          "meta": [\n            null\n          ]\n        }\n      ]\n    }\n  ],\n  "errors": [\n    {\n      "code": "string",\n      "message": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(c.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Validation Error")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"detail"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"loc"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)("li",null,(0,s.kt)("span",{className:"badge badge--info"},"anyOf"),(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"string")))),(0,s.kt)(c.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"integer")))))),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(l.Z,{collapsible:!1,name:"msg",required:!1,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"type",required:!1,schemaName:"Error Type",qualifierMessage:void 0,schema:{title:"Error Type",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);