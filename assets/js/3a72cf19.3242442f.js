"use strict";(self.webpackChunkrobokop_api_docs=self.webpackChunkrobokop_api_docs||[]).push([[3885],{33574:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>h});var r=a(87462),o=(a(67294),a(3905)),i=a(26389),s=a(94891),p=a(75190),n=a(47507),l=a(24310),m=a(63303),c=(a(75035),a(85162));const u={id:"one-hop-source-type-target-type-curie-get-hetio",title:"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source",description:"Returns one hop paths from `source_node_type`  with `curie` to `target_node_type`.",sidebar_label:"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source",hide_title:!0,hide_table_of_contents:!0,api:{description:"Returns one hop paths from `source_node_type`  with `curie` to `target_node_type`.",operationId:"one_hop__source_type___target_type___curie__get_hetio",parameters:[{required:!0,schema:{title:"Source Type",type:"string"},name:"source_type",in:"path"},{required:!0,schema:{title:"Target Type",type:"string"},name:"target_type",in:"path"},{required:!0,schema:{title:"Curie",type:"string"},name:"curie",in:"path"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"Response One Hop  Source Type   Target Type   Curie  Get",type:"array",items:{}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},tags:["Hetionet"],method:"get",path:"/hetio/{source_type}/{target_type}/{curie}",servers:[{url:"https://automat-u24.apps.renci.org"}],info:{title:"Automat",version:"2.1",termsOfService:"http://loading"},postman:{name:"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source",description:{content:"Returns one hop paths from `source_node_type`  with `curie` to `target_node_type`.",type:"text/plain"},url:{path:["hetio",":source_type",":target_type",":curie"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"source_type"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"target_type"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"curie"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/automat/automat",custom_edit_url:null},y=void 0,d={unversionedId:"automat/one-hop-source-type-target-type-curie-get-hetio",id:"automat/one-hop-source-type-target-type-curie-get-hetio",title:"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source",description:"Returns one hop paths from `source_node_type`  with `curie` to `target_node_type`.",source:"@site/docs/automat/one-hop-source-type-target-type-curie-get-hetio.api.mdx",sourceDirName:"automat",slug:"/automat/one-hop-source-type-target-type-curie-get-hetio",permalink:"/api-docs/docs/automat/one-hop-source-type-target-type-curie-get-hetio",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"one-hop-source-type-target-type-curie-get-hetio",title:"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source",description:"Returns one hop paths from `source_node_type`  with `curie` to `target_node_type`.",sidebar_label:"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source",hide_title:!0,hide_table_of_contents:!0,api:{description:"Returns one hop paths from `source_node_type`  with `curie` to `target_node_type`.",operationId:"one_hop__source_type___target_type___curie__get_hetio",parameters:[{required:!0,schema:{title:"Source Type",type:"string"},name:"source_type",in:"path"},{required:!0,schema:{title:"Target Type",type:"string"},name:"target_type",in:"path"},{required:!0,schema:{title:"Curie",type:"string"},name:"curie",in:"path"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"Response One Hop  Source Type   Target Type   Curie  Get",type:"array",items:{}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},tags:["Hetionet"],method:"get",path:"/hetio/{source_type}/{target_type}/{curie}",servers:[{url:"https://automat-u24.apps.renci.org"}],info:{title:"Automat",version:"2.1",termsOfService:"http://loading"},postman:{name:"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source",description:{content:"Returns one hop paths from `source_node_type`  with `curie` to `target_node_type`.",type:"text/plain"},url:{path:["hetio",":source_type",":target_type",":curie"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"source_type"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"target_type"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"curie"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/automat/automat",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Metadata about the knowledge graph.",permalink:"/api-docs/docs/automat/metadata-metadata-get-hetio"},next:{title:"Find `node` by `curie`",permalink:"/api-docs/docs/automat/node-node-type-curie-get-hetio"}},g={},h=[{value:"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source",id:"get-one-hop-results-from-source-type-to-target-type-note-please-get-predicates-to-determine-what-target-goes-with-a-source",level:2}],k={toc:h},_="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(_,(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"get-one-hop-results-from-source-type-to-target-type-note-please-get-predicates-to-determine-what-target-goes-with-a-source"},"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source"),(0,o.kt)("p",null,"Returns one hop paths from ",(0,o.kt)("inlineCode",{parentName:"p"},"source_node_type"),"  with ",(0,o.kt)("inlineCode",{parentName:"p"},"curie")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"target_node_type"),"."),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(p.Z,{className:"paramsItem",param:{required:!0,schema:{title:"Source Type",type:"string"},name:"source_type",in:"path"},mdxType:"ParamsItem"}),(0,o.kt)(p.Z,{className:"paramsItem",param:{required:!0,schema:{title:"Target Type",type:"string"},name:"target_type",in:"path"},mdxType:"ParamsItem"}),(0,o.kt)(p.Z,{className:"paramsItem",param:{required:!0,schema:{title:"Curie",type:"string"},name:"curie",in:"path"},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(i.Z,{mdxType:"ApiTabs"},(0,o.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Successful Response")),(0,o.kt)("div",null,(0,o.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(m.Z,{mdxType:"SchemaTabs"},(0,o.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,o.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(n.Z,{responseExample:"[\n  null\n]",language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(c.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Validation Error")),(0,o.kt)("div",null,(0,o.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(m.Z,{mdxType:"SchemaTabs"},(0,o.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"detail"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"loc"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,o.kt)("li",null,(0,o.kt)("span",{className:"badge badge--info"},"anyOf"),(0,o.kt)(m.Z,{mdxType:"SchemaTabs"},(0,o.kt)(c.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,o.kt)("li",null,(0,o.kt)("div",null,(0,o.kt)("strong",null,"string")))),(0,o.kt)(c.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,o.kt)("li",null,(0,o.kt)("div",null,(0,o.kt)("strong",null,"integer")))))),(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,o.kt)(l.Z,{collapsible:!1,name:"msg",required:!1,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"type",required:!1,schemaName:"Error Type",qualifierMessage:void 0,schema:{title:"Error Type",type:"string"},mdxType:"SchemaItem"}),(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,o.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(n.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);