"use strict";(self.webpackChunkrobokop_api_docs=self.webpackChunkrobokop_api_docs||[]).push([[8341],{49348:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>y,toc:()=>h});var i=a(87462),s=(a(67294),a(3905)),l=a(26389),r=a(94891),o=a(75190),n=a(47507),p=a(24310),m=a(63303),c=(a(75035),a(85162));const d={id:"simple-spec-simple-spec-get-gtex",title:"Get one-hop connection schema",description:"Returns a list of available predicates when choosing a single source or target curie. Calling this endpoint with no query parameters will return all possible hops for all types.",sidebar_label:"Get one-hop connection schema",hide_title:!0,hide_table_of_contents:!0,api:{description:"Returns a list of available predicates when choosing a single source or target curie. Calling this endpoint with no query parameters will return all possible hops for all types.",operationId:"simple_spec_simple_spec_get_gtex",parameters:[{required:!1,schema:{title:"Source",type:"string"},name:"source",in:"query"},{required:!1,schema:{title:"Target",type:"string"},name:"target",in:"query"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"Response Simple Spec Simple Spec Get",type:"array",items:{title:"SimpleSpecElement",required:["source_type","target_type","edge_type"],type:"object",properties:{source_type:{title:"Source Type",type:"string"},target_type:{title:"Target Type",type:"string"},edge_type:{title:"Edge Type",type:"string"}}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},tags:["GTEx"],method:"get",path:"/gtex/simple_spec",servers:[{url:"https://automat-u24.apps.renci.org"}],info:{title:"Automat",version:"2.1",termsOfService:"http://loading"},postman:{name:"Get one-hop connection schema",description:{content:"Returns a list of available predicates when choosing a single source or target curie. Calling this endpoint with no query parameters will return all possible hops for all types.",type:"text/plain"},url:{path:["gtex","simple_spec"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"source",value:""},{disabled:!1,key:"target",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/automat/automat",custom_edit_url:null},u=void 0,y={unversionedId:"automat/simple-spec-simple-spec-get-gtex",id:"automat/simple-spec-simple-spec-get-gtex",title:"Get one-hop connection schema",description:"Returns a list of available predicates when choosing a single source or target curie. Calling this endpoint with no query parameters will return all possible hops for all types.",source:"@site/docs/automat/simple-spec-simple-spec-get-gtex.api.mdx",sourceDirName:"automat",slug:"/automat/simple-spec-simple-spec-get-gtex",permalink:"/api-docs/docs/automat/simple-spec-simple-spec-get-gtex",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"simple-spec-simple-spec-get-gtex",title:"Get one-hop connection schema",description:"Returns a list of available predicates when choosing a single source or target curie. Calling this endpoint with no query parameters will return all possible hops for all types.",sidebar_label:"Get one-hop connection schema",hide_title:!0,hide_table_of_contents:!0,api:{description:"Returns a list of available predicates when choosing a single source or target curie. Calling this endpoint with no query parameters will return all possible hops for all types.",operationId:"simple_spec_simple_spec_get_gtex",parameters:[{required:!1,schema:{title:"Source",type:"string"},name:"source",in:"query"},{required:!1,schema:{title:"Target",type:"string"},name:"target",in:"query"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"Response Simple Spec Simple Spec Get",type:"array",items:{title:"SimpleSpecElement",required:["source_type","target_type","edge_type"],type:"object",properties:{source_type:{title:"Source Type",type:"string"},target_type:{title:"Target Type",type:"string"},edge_type:{title:"Edge Type",type:"string"}}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},tags:["GTEx"],method:"get",path:"/gtex/simple_spec",servers:[{url:"https://automat-u24.apps.renci.org"}],info:{title:"Automat",version:"2.1",termsOfService:"http://loading"},postman:{name:"Get one-hop connection schema",description:{content:"Returns a list of available predicates when choosing a single source or target curie. Calling this endpoint with no query parameters will return all possible hops for all types.",type:"text/plain"},url:{path:["gtex","simple_spec"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"source",value:""},{disabled:!1,key:"target",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/automat/automat",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Find `node` by `curie`",permalink:"/api-docs/docs/automat/node-node-type-curie-get-gtex"},next:{title:"GtoPdb",permalink:"/api-docs/docs/automat/gto-pdb"}},g={},h=[{value:"Get one-hop connection schema",id:"get-one-hop-connection-schema",level:2}],k={toc:h},b="wrapper";function f(e){let{components:t,...a}=e;return(0,s.kt)(b,(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-one-hop-connection-schema"},"Get one-hop connection schema"),(0,s.kt)("p",null,"Returns a list of available predicates when choosing a single source or target curie. Calling this endpoint with no query parameters will return all possible hops for all types."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{required:!1,schema:{title:"Source",type:"string"},name:"source",in:"query"},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{required:!1,schema:{title:"Target",type:"string"},name:"target",in:"query"},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(l.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Successful Response")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(p.Z,{collapsible:!1,name:"source_type",required:!1,schemaName:"Source Type",qualifierMessage:void 0,schema:{title:"Source Type",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"target_type",required:!1,schemaName:"Target Type",qualifierMessage:void 0,schema:{title:"Target Type",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"edge_type",required:!1,schemaName:"Edge Type",qualifierMessage:void 0,schema:{title:"Edge Type",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'[\n  {\n    "source_type": "string",\n    "target_type": "string",\n    "edge_type": "string"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(c.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Validation Error")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"detail"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"loc"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)("li",null,(0,s.kt)("span",{className:"badge badge--info"},"anyOf"),(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"string")))),(0,s.kt)(c.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"integer")))))),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(p.Z,{collapsible:!1,name:"msg",required:!1,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"Error Type",qualifierMessage:void 0,schema:{title:"Error Type",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);