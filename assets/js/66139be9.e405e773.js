"use strict";(self.webpackChunkrobokop_api_docs=self.webpackChunkrobokop_api_docs||[]).push([[8466],{6979:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>g,default:()=>_,frontMatter:()=>d,metadata:()=>m,toc:()=>y});var s=a(87462),i=(a(67294),a(3905)),r=a(26389),o=a(94891),n=(a(75190),a(47507)),l=a(24310),p=a(63303),c=(a(75035),a(85162));const d={id:"get-sri-testing-data-1-3-sri-testing-data-get-icees-kg-trapi",title:"Test data for usage by the SRI Testing Harness.",description:"Returns a list of edges that are representative examples of the knowledge graph.",sidebar_label:"Test data for usage by the SRI Testing Harness.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["trapi","ICEES KG"],description:"Returns a list of edges that are representative examples of the knowledge graph.",operationId:"get_sri_testing_data_1_3_sri_testing_data_get_icees-kg_trapi",responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"SRITestData",required:["version","source_type","edges"],type:"object",properties:{version:{title:"Version",type:"string"},source_type:{title:"Source Type",type:"string"},edges:{title:"Edges",type:"array",items:{title:"SRITestEdge",required:["subject_id","object_id","predicate","subject_category","object_category"],type:"object",properties:{subject_id:{title:"Subject Id",type:"string"},object_id:{title:"Object Id",type:"string"},predicate:{title:"Predicate",type:"string"},subject_category:{title:"Subject Category",type:"string"},object_category:{title:"Object Category",type:"string"},qualifiers:{title:"Qualifiers",type:"array",items:{}}}}}}}}}}},method:"get",path:"/icees-kg/1.3/sri_testing_data",servers:[{url:"https://automat-u24.apps.renci.org"}],info:{title:"Automat",version:"2.1",termsOfService:"http://loading"},postman:{name:"Test data for usage by the SRI Testing Harness.",description:{content:"Returns a list of edges that are representative examples of the knowledge graph.",type:"text/plain"},url:{path:["icees-kg","1.3","sri_testing_data"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/automat/automat",custom_edit_url:null},g=void 0,m={unversionedId:"automat/get-sri-testing-data-1-3-sri-testing-data-get-icees-kg-trapi",id:"automat/get-sri-testing-data-1-3-sri-testing-data-get-icees-kg-trapi",title:"Test data for usage by the SRI Testing Harness.",description:"Returns a list of edges that are representative examples of the knowledge graph.",source:"@site/docs/automat/get-sri-testing-data-1-3-sri-testing-data-get-icees-kg-trapi.api.mdx",sourceDirName:"automat",slug:"/automat/get-sri-testing-data-1-3-sri-testing-data-get-icees-kg-trapi",permalink:"/api-docs/docs/automat/get-sri-testing-data-1-3-sri-testing-data-get-icees-kg-trapi",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-sri-testing-data-1-3-sri-testing-data-get-icees-kg-trapi",title:"Test data for usage by the SRI Testing Harness.",description:"Returns a list of edges that are representative examples of the knowledge graph.",sidebar_label:"Test data for usage by the SRI Testing Harness.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["trapi","ICEES KG"],description:"Returns a list of edges that are representative examples of the knowledge graph.",operationId:"get_sri_testing_data_1_3_sri_testing_data_get_icees-kg_trapi",responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"SRITestData",required:["version","source_type","edges"],type:"object",properties:{version:{title:"Version",type:"string"},source_type:{title:"Source Type",type:"string"},edges:{title:"Edges",type:"array",items:{title:"SRITestEdge",required:["subject_id","object_id","predicate","subject_category","object_category"],type:"object",properties:{subject_id:{title:"Subject Id",type:"string"},object_id:{title:"Object Id",type:"string"},predicate:{title:"Predicate",type:"string"},subject_category:{title:"Subject Category",type:"string"},object_category:{title:"Object Category",type:"string"},qualifiers:{title:"Qualifiers",type:"array",items:{}}}}}}}}}}},method:"get",path:"/icees-kg/1.3/sri_testing_data",servers:[{url:"https://automat-u24.apps.renci.org"}],info:{title:"Automat",version:"2.1",termsOfService:"http://loading"},postman:{name:"Test data for usage by the SRI Testing Harness.",description:{content:"Returns a list of edges that are representative examples of the knowledge graph.",type:"text/plain"},url:{path:["icees-kg","1.3","sri_testing_data"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/automat/automat",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Meta knowledge graph representation of this TRAPI web service.",permalink:"/api-docs/docs/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-icees-kg-trapi"},next:{title:"Query reasoner via one of several inputs.",permalink:"/api-docs/docs/automat/reasoner-api-1-3-query-post-icees-kg-trapi"}},u={},y=[{value:"Test data for usage by the SRI Testing Harness.",id:"test-data-for-usage-by-the-sri-testing-harness",level:2}],h={toc:y},b="wrapper";function _(e){let{components:t,...a}=e;return(0,i.kt)(b,(0,s.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"test-data-for-usage-by-the-sri-testing-harness"},"Test data for usage by the SRI Testing Harness."),(0,i.kt)("p",null,"Returns a list of edges that are representative examples of the knowledge graph."),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Successful Response")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"version",required:!1,schemaName:"Version",qualifierMessage:void 0,schema:{title:"Version",type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"source_type",required:!1,schemaName:"Source Type",qualifierMessage:void 0,schema:{title:"Source Type",type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"edges"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(l.Z,{collapsible:!1,name:"subject_id",required:!1,schemaName:"Subject Id",qualifierMessage:void 0,schema:{title:"Subject Id",type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"object_id",required:!1,schemaName:"Object Id",qualifierMessage:void 0,schema:{title:"Object Id",type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"predicate",required:!1,schemaName:"Predicate",qualifierMessage:void 0,schema:{title:"Predicate",type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"subject_category",required:!1,schemaName:"Subject Category",qualifierMessage:void 0,schema:{title:"Subject Category",type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"object_category",required:!1,schemaName:"Object Category",qualifierMessage:void 0,schema:{title:"Object Category",type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"qualifiers",required:!1,schemaName:"undefined[]",qualifierMessage:void 0,schema:{title:"Qualifiers",type:"array",items:{}},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "version": "string",\n  "source_type": "string",\n  "edges": [\n    {\n      "subject_id": "string",\n      "object_id": "string",\n      "predicate": "string",\n      "subject_category": "string",\n      "object_category": "string",\n      "qualifiers": [\n        null\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}_.isMDXComponent=!0}}]);