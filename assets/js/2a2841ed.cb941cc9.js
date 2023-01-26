"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6132],{94153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>_,frontMatter:()=>m,metadata:()=>y,toc:()=>h});var r=a(87462),o=(a(67294),a(3905)),s=a(26389),p=a(94891),i=a(75190),n=a(47507),l=a(24310),c=a(63303),d=(a(75035),a(85162));const m={id:"one-hop-source-type-target-type-curie-get-9286-ed-2-e-2-f-6-b-4-f-4-b-a-1-ee-813-ea-8-fe-11-d-6",title:"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source",description:"Returns one hop paths from `source_node_type`  with `curie` to `target_node_type`.",sidebar_label:"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source",hide_title:!0,hide_table_of_contents:!0,api:{description:"Returns one hop paths from `source_node_type`  with `curie` to `target_node_type`.",operationId:"one_hop__source_type___target_type___curie__get-9286ed2e-2f6b-4f4b-a1ee-813ea8fe11d6",parameters:[{required:!0,schema:{title:"Source Type",type:"string"},name:"source_type",in:"path"},{required:!0,schema:{title:"Target Type",type:"string"},name:"target_type",in:"path"},{required:!0,schema:{title:"Curie",type:"string"},name:"curie",in:"path"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"Response One Hop  Source Type   Target Type   Curie  Get",type:"array",items:{}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},tags:["molepro-fda"],method:"get",path:"/molepro-fda/{source_type}/{target_type}/{curie}",servers:[{url:"https://automat.renci.org"}],info:{title:"Automat",version:"2.0",termsOfService:"http://loading"},postman:{name:"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source",description:{content:"Returns one hop paths from `source_node_type`  with `curie` to `target_node_type`.",type:"text/plain"},url:{path:["molepro-fda",":source_type",":target_type",":curie"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"source_type"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"target_type"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"curie"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/automat/automat",custom_edit_url:null},u=void 0,y={unversionedId:"automat/one-hop-source-type-target-type-curie-get-9286-ed-2-e-2-f-6-b-4-f-4-b-a-1-ee-813-ea-8-fe-11-d-6",id:"automat/one-hop-source-type-target-type-curie-get-9286-ed-2-e-2-f-6-b-4-f-4-b-a-1-ee-813-ea-8-fe-11-d-6",title:"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source",description:"Returns one hop paths from `source_node_type`  with `curie` to `target_node_type`.",source:"@site/docs/automat/one-hop-source-type-target-type-curie-get-9286-ed-2-e-2-f-6-b-4-f-4-b-a-1-ee-813-ea-8-fe-11-d-6.api.mdx",sourceDirName:"automat",slug:"/automat/one-hop-source-type-target-type-curie-get-9286-ed-2-e-2-f-6-b-4-f-4-b-a-1-ee-813-ea-8-fe-11-d-6",permalink:"/api-docs/docs/automat/one-hop-source-type-target-type-curie-get-9286-ed-2-e-2-f-6-b-4-f-4-b-a-1-ee-813-ea-8-fe-11-d-6",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"one-hop-source-type-target-type-curie-get-9286-ed-2-e-2-f-6-b-4-f-4-b-a-1-ee-813-ea-8-fe-11-d-6",title:"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source",description:"Returns one hop paths from `source_node_type`  with `curie` to `target_node_type`.",sidebar_label:"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source",hide_title:!0,hide_table_of_contents:!0,api:{description:"Returns one hop paths from `source_node_type`  with `curie` to `target_node_type`.",operationId:"one_hop__source_type___target_type___curie__get-9286ed2e-2f6b-4f4b-a1ee-813ea8fe11d6",parameters:[{required:!0,schema:{title:"Source Type",type:"string"},name:"source_type",in:"path"},{required:!0,schema:{title:"Target Type",type:"string"},name:"target_type",in:"path"},{required:!0,schema:{title:"Curie",type:"string"},name:"curie",in:"path"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"Response One Hop  Source Type   Target Type   Curie  Get",type:"array",items:{}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},tags:["molepro-fda"],method:"get",path:"/molepro-fda/{source_type}/{target_type}/{curie}",servers:[{url:"https://automat.renci.org"}],info:{title:"Automat",version:"2.0",termsOfService:"http://loading"},postman:{name:"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source",description:{content:"Returns one hop paths from `source_node_type`  with `curie` to `target_node_type`.",type:"text/plain"},url:{path:["molepro-fda",":source_type",":target_type",":curie"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"source_type"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"target_type"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"curie"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/automat/automat",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"JSON about dataset",permalink:"/api-docs/docs/automat/about-about-get-4-a-26-d-445-5-dd-9-4-dce-92-ec-f-6-d-54-b-70-c-445"},next:{title:"Find `node` by `curie`",permalink:"/api-docs/docs/automat/node-node-type-curie-get-4-b-3-cced-7-9548-4-dec-aff-1-5-df-435-eac-2-dc"}},g={},h=[{value:"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source",id:"get-one-hop-results-from-source-type-to-target-type-note-please-get-predicates-to-determine-what-target-goes-with-a-source",level:2}],f={toc:h};function _(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"get-one-hop-results-from-source-type-to-target-type-note-please-get-predicates-to-determine-what-target-goes-with-a-source"},"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source"),(0,o.kt)("p",null,"Returns one hop paths from ",(0,o.kt)("inlineCode",{parentName:"p"},"source_node_type"),"  with ",(0,o.kt)("inlineCode",{parentName:"p"},"curie")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"target_node_type"),"."),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(i.Z,{className:"paramsItem",param:{required:!0,schema:{title:"Source Type",type:"string"},name:"source_type",in:"path"},mdxType:"ParamsItem"}),(0,o.kt)(i.Z,{className:"paramsItem",param:{required:!0,schema:{title:"Target Type",type:"string"},name:"target_type",in:"path"},mdxType:"ParamsItem"}),(0,o.kt)(i.Z,{className:"paramsItem",param:{required:!0,schema:{title:"Curie",type:"string"},name:"curie",in:"path"},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(s.Z,{mdxType:"ApiTabs"},(0,o.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Successful Response")),(0,o.kt)("div",null,(0,o.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(c.Z,{mdxType:"SchemaTabs"},(0,o.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema"),(0,o.kt)("span",{style:{opacity:"0.6"}}," array")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}}))),(0,o.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(n.Z,{responseExample:"[\n  null\n]",language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(d.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Validation Error")),(0,o.kt)("div",null,(0,o.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(c.Z,{mdxType:"SchemaTabs"},(0,o.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"detail"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"loc"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",null,(0,o.kt)("div",null,(0,o.kt)("span",{className:"badge badge--info"},"anyOf"),(0,o.kt)(c.Z,{mdxType:"SchemaTabs"},(0,o.kt)(d.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,o.kt)("li",null,(0,o.kt)("div",null,(0,o.kt)("strong",null,"string")))),(0,o.kt)(d.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,o.kt)("li",null,(0,o.kt)("div",null,(0,o.kt)("strong",null,"integer")))))))))),(0,o.kt)(l.Z,{collapsible:!1,name:"msg",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Message",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Error Type",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,o.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(n.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}_.isMDXComponent=!0}}]);