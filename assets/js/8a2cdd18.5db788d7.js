"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3787],{91293:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>y,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var s=a(87462),i=(a(67294),a(3905)),r=a(26389),n=a(94891),l=(a(75190),a(47507)),o=a(24310),p=a(63303),d=(a(75035),a(85162));const c={id:"get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-f-35-b-67-f-3-4-bc-2-44-b-9-a-9-ac-3-b-5-ae-5-c-76-a-88",title:"Meta knowledge graph representation of this TRAPI web service.",description:"Returns meta knowledge graph representation of this TRAPI web service.",sidebar_label:"Meta knowledge graph representation of this TRAPI web service.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["trapi","gwas-catalog"],description:"Returns meta knowledge graph representation of this TRAPI web service.",operationId:"get_meta_knowledge_graph_1_3_meta_knowledge_graph_get-f35b67f3-4bc2-44b9-a9ac-3b5ae5c76a88",responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"MetaKnowledgeGraph",required:["nodes","edges"],type:"object",properties:{nodes:{title:"HashableMapping[str, MetaNode]",type:"object",additionalProperties:{title:"MetaNode",required:["id_prefixes"],type:"object",properties:{id_prefixes:{title:"HashableSequence[str]",type:"array",items:{type:"string"},description:"Custom class that implements MutableSequence and is hashable",default:[]},attributes:{title:"HashableSequence[MetaAttribute]",type:"array",items:{title:"MetaAttribute",required:["attribute_type_id"],type:"object",properties:{attribute_type_id:{title:"Attribute Type Id",type:"string"},attribute_source:{title:"Attribute Source",type:"string"},original_attribute_names:{title:"HashableSequence[str]",type:"array",items:{type:"string"},description:"Custom class that implements MutableSequence and is hashable",default:[]},constraint_use:{title:"Constraint Use",type:"boolean",default:!1},constraint_name:{title:"Constraint Name",type:"string"}},description:"MetaAttribute."},description:"Custom class that implements MutableSequence and is hashable",default:[]}},additionalProperties:!1,description:"Custom base model for all classes\n\nThis provides hash and equality methods."},description:"Custom class that implements MutableMapping and is hashable",default:{}},edges:{title:"HashableSequence[MetaEdge]",type:"array",items:{title:"MetaEdge",required:["subject","predicate","object"],type:"object",properties:{subject:{title:"Subject",pattern:"^biolink:[A-Z][a-zA-Z]*$",type:"string"},predicate:{title:"Predicate",pattern:"^biolink:[a-z][a-z_]*$",type:"string"},object:{title:"Object",pattern:"^biolink:[A-Z][a-zA-Z]*$",type:"string"},attributes:{title:"HashableSequence[MetaAttribute]",type:"array",items:{title:"MetaAttribute",required:["attribute_type_id"],type:"object",properties:{attribute_type_id:{title:"Attribute Type Id",type:"string"},attribute_source:{title:"Attribute Source",type:"string"},original_attribute_names:{title:"HashableSequence[str]",type:"array",items:{type:"string"},description:"Custom class that implements MutableSequence and is hashable",default:[]},constraint_use:{title:"Constraint Use",type:"boolean",default:!1},constraint_name:{title:"Constraint Name",type:"string"}},description:"MetaAttribute."},description:"Custom class that implements MutableSequence and is hashable",default:[]},knowledge_types:{title:"HashableSequence[KnowledgeType]",type:"array",items:{title:"KnowledgeType",enum:["lookup","inferred"],type:"string",description:"Knowledge Type."},description:"Custom class that implements MutableSequence and is hashable",default:[]}},additionalProperties:!1,description:"Custom base model for all classes\n\nThis provides hash and equality methods."},description:"Custom class that implements MutableSequence and is hashable",default:[]}},description:"Custom base model for all classes\n\nThis provides hash and equality methods."}}}}},method:"get",path:"/gwas-catalog/1.3/meta_knowledge_graph",servers:[{url:"https://automat.renci.org"}],info:{title:"Automat",version:"2.0",termsOfService:"http://loading"},postman:{name:"Meta knowledge graph representation of this TRAPI web service.",description:{content:"Returns meta knowledge graph representation of this TRAPI web service.",type:"text/plain"},url:{path:["gwas-catalog","1.3","meta_knowledge_graph"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/automat/automat",custom_edit_url:null},m=void 0,u={unversionedId:"automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-f-35-b-67-f-3-4-bc-2-44-b-9-a-9-ac-3-b-5-ae-5-c-76-a-88",id:"automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-f-35-b-67-f-3-4-bc-2-44-b-9-a-9-ac-3-b-5-ae-5-c-76-a-88",title:"Meta knowledge graph representation of this TRAPI web service.",description:"Returns meta knowledge graph representation of this TRAPI web service.",source:"@site/docs/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-f-35-b-67-f-3-4-bc-2-44-b-9-a-9-ac-3-b-5-ae-5-c-76-a-88.api.mdx",sourceDirName:"automat",slug:"/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-f-35-b-67-f-3-4-bc-2-44-b-9-a-9-ac-3-b-5-ae-5-c-76-a-88",permalink:"/api-docs/docs/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-f-35-b-67-f-3-4-bc-2-44-b-9-a-9-ac-3-b-5-ae-5-c-76-a-88",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-f-35-b-67-f-3-4-bc-2-44-b-9-a-9-ac-3-b-5-ae-5-c-76-a-88",title:"Meta knowledge graph representation of this TRAPI web service.",description:"Returns meta knowledge graph representation of this TRAPI web service.",sidebar_label:"Meta knowledge graph representation of this TRAPI web service.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["trapi","gwas-catalog"],description:"Returns meta knowledge graph representation of this TRAPI web service.",operationId:"get_meta_knowledge_graph_1_3_meta_knowledge_graph_get-f35b67f3-4bc2-44b9-a9ac-3b5ae5c76a88",responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"MetaKnowledgeGraph",required:["nodes","edges"],type:"object",properties:{nodes:{title:"HashableMapping[str, MetaNode]",type:"object",additionalProperties:{title:"MetaNode",required:["id_prefixes"],type:"object",properties:{id_prefixes:{title:"HashableSequence[str]",type:"array",items:{type:"string"},description:"Custom class that implements MutableSequence and is hashable",default:[]},attributes:{title:"HashableSequence[MetaAttribute]",type:"array",items:{title:"MetaAttribute",required:["attribute_type_id"],type:"object",properties:{attribute_type_id:{title:"Attribute Type Id",type:"string"},attribute_source:{title:"Attribute Source",type:"string"},original_attribute_names:{title:"HashableSequence[str]",type:"array",items:{type:"string"},description:"Custom class that implements MutableSequence and is hashable",default:[]},constraint_use:{title:"Constraint Use",type:"boolean",default:!1},constraint_name:{title:"Constraint Name",type:"string"}},description:"MetaAttribute."},description:"Custom class that implements MutableSequence and is hashable",default:[]}},additionalProperties:!1,description:"Custom base model for all classes\n\nThis provides hash and equality methods."},description:"Custom class that implements MutableMapping and is hashable",default:{}},edges:{title:"HashableSequence[MetaEdge]",type:"array",items:{title:"MetaEdge",required:["subject","predicate","object"],type:"object",properties:{subject:{title:"Subject",pattern:"^biolink:[A-Z][a-zA-Z]*$",type:"string"},predicate:{title:"Predicate",pattern:"^biolink:[a-z][a-z_]*$",type:"string"},object:{title:"Object",pattern:"^biolink:[A-Z][a-zA-Z]*$",type:"string"},attributes:{title:"HashableSequence[MetaAttribute]",type:"array",items:{title:"MetaAttribute",required:["attribute_type_id"],type:"object",properties:{attribute_type_id:{title:"Attribute Type Id",type:"string"},attribute_source:{title:"Attribute Source",type:"string"},original_attribute_names:{title:"HashableSequence[str]",type:"array",items:{type:"string"},description:"Custom class that implements MutableSequence and is hashable",default:[]},constraint_use:{title:"Constraint Use",type:"boolean",default:!1},constraint_name:{title:"Constraint Name",type:"string"}},description:"MetaAttribute."},description:"Custom class that implements MutableSequence and is hashable",default:[]},knowledge_types:{title:"HashableSequence[KnowledgeType]",type:"array",items:{title:"KnowledgeType",enum:["lookup","inferred"],type:"string",description:"Knowledge Type."},description:"Custom class that implements MutableSequence and is hashable",default:[]}},additionalProperties:!1,description:"Custom base model for all classes\n\nThis provides hash and equality methods."},description:"Custom class that implements MutableSequence and is hashable",default:[]}},description:"Custom base model for all classes\n\nThis provides hash and equality methods."}}}}},method:"get",path:"/gwas-catalog/1.3/meta_knowledge_graph",servers:[{url:"https://automat.renci.org"}],info:{title:"Automat",version:"2.0",termsOfService:"http://loading"},postman:{name:"Meta knowledge graph representation of this TRAPI web service.",description:{content:"Returns meta knowledge graph representation of this TRAPI web service.",type:"text/plain"},url:{path:["gwas-catalog","1.3","meta_knowledge_graph"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/automat/automat",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"gwas-catalog",permalink:"/api-docs/docs/automat/gwas-catalog"},next:{title:"Test data for usage by the SRI Testing Harness.",permalink:"/api-docs/docs/automat/get-sri-testing-data-1-3-sri-testing-data-get-f-3-abdc-4-a-d-6-d-2-4-a-87-9-dfc-0-e-506-b-394260"}},b={},h=[{value:"Meta knowledge graph representation of this TRAPI web service.",id:"meta-knowledge-graph-representation-of-this-trapi-web-service",level:2}],g={toc:h};function y(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"meta-knowledge-graph-representation-of-this-trapi-web-service"},"Meta knowledge graph representation of this TRAPI web service."),(0,i.kt)("p",null,"Returns meta knowledge graph representation of this TRAPI web service."),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Successful Response")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"nodes"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"Custom class that implements MutableMapping and is hashable")),(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("code",null,"property name*")))))),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"edges"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"Custom class that implements MutableSequence and is hashable")),(0,i.kt)(o.Z,{collapsible:!1,name:"subject",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Subject",qualifierMessage:"**Possible values:** Value must match regular expression `^biolink:[A-Z][a-zA-Z]*$`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"predicate",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Predicate",qualifierMessage:"**Possible values:** Value must match regular expression `^biolink:[a-z][a-z_]*$`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"object",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Object",qualifierMessage:"**Possible values:** Value must match regular expression `^biolink:[A-Z][a-zA-Z]*$`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"attributes"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"Custom class that implements MutableSequence and is hashable")),(0,i.kt)(o.Z,{collapsible:!1,name:"attribute_type_id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Attribute Type Id",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"attribute_source",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Attribute Source",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"original_attribute_names",required:!1,deprecated:void 0,schemaDescription:"Custom class that implements MutableSequence and is hashable",schemaName:"string[]",qualifierMessage:void 0,defaultValue:[],mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"constraint_use",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Constraint Use",qualifierMessage:void 0,defaultValue:!1,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"constraint_name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Constraint Name",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{collapsible:!1,name:"knowledge_types",required:!1,deprecated:void 0,schemaDescription:"Custom class that implements MutableSequence and is hashable",schemaName:"KnowledgeType[]",qualifierMessage:"**Possible values:** [`lookup`, `inferred`]",defaultValue:[],mdxType:"SchemaItem"}))))))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "nodes": {},\n  "edges": [\n    {\n      "subject": "string",\n      "predicate": "string",\n      "object": "string",\n      "attributes": [\n        {\n          "attribute_type_id": "string",\n          "attribute_source": "string",\n          "original_attribute_names": [\n            "string"\n          ],\n          "constraint_use": false,\n          "constraint_name": "string"\n        }\n      ],\n      "knowledge_types": [\n        "lookup"\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}y.isMDXComponent=!0}}]);