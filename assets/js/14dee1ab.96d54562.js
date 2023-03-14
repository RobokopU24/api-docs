"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2050],{25466:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>h,frontMatter:()=>m,metadata:()=>y,toc:()=>b});var i=a(87462),n=(a(67294),a(3905)),r=a(26389),o=a(94891),s=a(75190),l=a(47507),p=a(24310),d=a(63303),c=(a(75035),a(85162));const m={id:"node-node-type-curie-get-ba-5-f-3-e-6-a-89-c-0-4-ea-4-969-a-eba-3-fc-1-ba-2-ce",title:"Find `node` by `curie`",description:"Returns `node` matching `curie`.",sidebar_label:"Find `node` by `curie`",hide_title:!0,hide_table_of_contents:!0,api:{description:"Returns `node` matching `curie`.",operationId:"node__node_type___curie__get-ba5f3e6a-89c0-4ea4-969a-eba3fc1ba2ce",parameters:[{required:!0,schema:{title:"Node Type",type:"string"},name:"node_type",in:"path"},{required:!0,schema:{title:"Curie",type:"string"},name:"curie",in:"path"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"Response Node  Node Type   Curie  Get",type:"array",items:{}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},tags:["ctd"],method:"get",path:"/ctd/{node_type}/{curie}",servers:[{url:"https://automat.renci.org"}],info:{title:"Automat",version:"2.0",termsOfService:"http://loading"},postman:{name:"Find `node` by `curie`",description:{content:"Returns `node` matching `curie`.",type:"text/plain"},url:{path:["ctd",":node_type",":curie"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"node_type"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"curie"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/automat/automat",custom_edit_url:null},u=void 0,y={unversionedId:"automat/node-node-type-curie-get-ba-5-f-3-e-6-a-89-c-0-4-ea-4-969-a-eba-3-fc-1-ba-2-ce",id:"automat/node-node-type-curie-get-ba-5-f-3-e-6-a-89-c-0-4-ea-4-969-a-eba-3-fc-1-ba-2-ce",title:"Find `node` by `curie`",description:"Returns `node` matching `curie`.",source:"@site/docs/automat/node-node-type-curie-get-ba-5-f-3-e-6-a-89-c-0-4-ea-4-969-a-eba-3-fc-1-ba-2-ce.api.mdx",sourceDirName:"automat",slug:"/automat/node-node-type-curie-get-ba-5-f-3-e-6-a-89-c-0-4-ea-4-969-a-eba-3-fc-1-ba-2-ce",permalink:"/api-docs/docs/automat/node-node-type-curie-get-ba-5-f-3-e-6-a-89-c-0-4-ea-4-969-a-eba-3-fc-1-ba-2-ce",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"node-node-type-curie-get-ba-5-f-3-e-6-a-89-c-0-4-ea-4-969-a-eba-3-fc-1-ba-2-ce",title:"Find `node` by `curie`",description:"Returns `node` matching `curie`.",sidebar_label:"Find `node` by `curie`",hide_title:!0,hide_table_of_contents:!0,api:{description:"Returns `node` matching `curie`.",operationId:"node__node_type___curie__get-ba5f3e6a-89c0-4ea4-969a-eba3fc1ba2ce",parameters:[{required:!0,schema:{title:"Node Type",type:"string"},name:"node_type",in:"path"},{required:!0,schema:{title:"Curie",type:"string"},name:"curie",in:"path"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"Response Node  Node Type   Curie  Get",type:"array",items:{}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},tags:["ctd"],method:"get",path:"/ctd/{node_type}/{curie}",servers:[{url:"https://automat.renci.org"}],info:{title:"Automat",version:"2.0",termsOfService:"http://loading"},postman:{name:"Find `node` by `curie`",description:{content:"Returns `node` matching `curie`.",type:"text/plain"},url:{path:["ctd",":node_type",":curie"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"node_type"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"curie"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/automat/automat",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source",permalink:"/api-docs/docs/automat/one-hop-source-type-target-type-curie-get-a-70-c-1-f-0-f-ca-04-4731-93-f-4-c-293174-c-26-d-9"},next:{title:"Get one-hop connection schema",permalink:"/api-docs/docs/automat/simple-spec-simple-spec-get-3-db-6-fdc-8-de-9-f-4-f-0-d-864-b-ca-6-e-0663-f-3-bb"}},g={},b=[{value:"Find <code>node</code> by <code>curie</code>",id:"find-node-by-curie",level:2}],k={toc:b},f="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"find-node-by-curie"},"Find ",(0,n.kt)("inlineCode",{parentName:"h2"},"node")," by ",(0,n.kt)("inlineCode",{parentName:"h2"},"curie")),(0,n.kt)("p",null,"Returns ",(0,n.kt)("inlineCode",{parentName:"p"},"node")," matching ",(0,n.kt)("inlineCode",{parentName:"p"},"curie"),"."),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(s.Z,{className:"paramsItem",param:{required:!0,schema:{title:"Node Type",type:"string"},name:"node_type",in:"path"},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{required:!0,schema:{title:"Curie",type:"string"},name:"curie",in:"path"},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Successful Response")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:"[\n  null\n]",language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Validation Error")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"detail"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"loc"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)("li",null,(0,n.kt)("span",{className:"badge badge--info"},"anyOf"),(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string")))),(0,n.kt)(c.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"integer")))))),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(p.Z,{collapsible:!1,name:"msg",required:!1,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"Error Type",qualifierMessage:void 0,schema:{title:"Error Type",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);