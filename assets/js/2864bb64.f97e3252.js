"use strict";(self.webpackChunkrobokop_api_docs=self.webpackChunkrobokop_api_docs||[]).push([[5042],{75834:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>m,metadata:()=>c,toc:()=>g});var i=a(87462),s=(a(67294),a(3905)),r=a(26389),n=a(94891),l=(a(75190),a(47507)),o=a(24310),p=a(63303),d=(a(75035),a(85162));const m={id:"get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-panther-trapi",title:"Meta knowledge graph representation of this TRAPI web service.",description:"Returns meta knowledge graph representation of this TRAPI web service.",sidebar_label:"Meta knowledge graph representation of this TRAPI web service.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["trapi","PANTHER"],description:"Returns meta knowledge graph representation of this TRAPI web service.",operationId:"get_meta_knowledge_graph_1_3_meta_knowledge_graph_get_panther_trapi",responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"MetaKnowledgeGraph",required:["nodes","edges"],type:"object",properties:{nodes:{title:"HashableMapping[str, MetaNode]",type:"object",additionalProperties:{title:"MetaNode",required:["id_prefixes"],type:"object",properties:{id_prefixes:{title:"HashableSequence[str]",type:"array",items:{type:"string"},description:"Custom class that implements MutableSequence and is hashable",default:[]},attributes:{title:"HashableSequence[MetaAttribute]",type:"array",items:{title:"MetaAttribute",required:["attribute_type_id"],type:"object",properties:{attribute_type_id:{title:"Attribute Type Id",type:"string"},attribute_source:{title:"Attribute Source",type:"string"},original_attribute_names:{title:"HashableSequence[str]",type:"array",items:{type:"string"},description:"Custom class that implements MutableSequence and is hashable",default:[]},constraint_use:{title:"Constraint Use",type:"boolean",default:!1},constraint_name:{title:"Constraint Name",type:"string"}},description:"MetaAttribute."},description:"Custom class that implements MutableSequence and is hashable",default:[]}},additionalProperties:!1,description:"Custom base model for all classes\n\nThis provides hash and equality methods."},description:"Custom class that implements MutableMapping and is hashable",default:{}},edges:{title:"HashableSequence[MetaEdge]",type:"array",items:{title:"MetaEdge",required:["subject","predicate","object"],type:"object",properties:{subject:{title:"Subject",pattern:"^biolink:[A-Z][a-zA-Z]*$",type:"string"},predicate:{title:"Predicate",pattern:"^biolink:[a-z][a-z_]*$",type:"string"},object:{title:"Object",pattern:"^biolink:[A-Z][a-zA-Z]*$",type:"string"},attributes:{title:"HashableSequence[MetaAttribute]",type:"array",items:{title:"MetaAttribute",required:["attribute_type_id"],type:"object",properties:{attribute_type_id:{title:"Attribute Type Id",type:"string"},attribute_source:{title:"Attribute Source",type:"string"},original_attribute_names:{title:"HashableSequence[str]",type:"array",items:{type:"string"},description:"Custom class that implements MutableSequence and is hashable",default:[]},constraint_use:{title:"Constraint Use",type:"boolean",default:!1},constraint_name:{title:"Constraint Name",type:"string"}},description:"MetaAttribute."},description:"Custom class that implements MutableSequence and is hashable",default:[]},knowledge_types:{title:"HashableSequence[KnowledgeType]",type:"array",items:{title:"KnowledgeType",enum:["lookup","inferred"],type:"string",description:"Knowledge Type."},description:"Custom class that implements MutableSequence and is hashable",default:[]}},additionalProperties:!1,description:"Custom base model for all classes\n\nThis provides hash and equality methods."},description:"Custom class that implements MutableSequence and is hashable",default:[]}},description:"Custom base model for all classes\n\nThis provides hash and equality methods."}}}}},method:"get",path:"/panther/1.3/meta_knowledge_graph",servers:[{url:"https://automat-u24.apps.renci.org"}],info:{title:"Automat",version:"2.1",termsOfService:"http://loading"},postman:{name:"Meta knowledge graph representation of this TRAPI web service.",description:{content:"Returns meta knowledge graph representation of this TRAPI web service.",type:"text/plain"},url:{path:["panther","1.3","meta_knowledge_graph"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/automat/automat",custom_edit_url:null},u=void 0,c={unversionedId:"automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-panther-trapi",id:"automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-panther-trapi",title:"Meta knowledge graph representation of this TRAPI web service.",description:"Returns meta knowledge graph representation of this TRAPI web service.",source:"@site/docs/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-panther-trapi.api.mdx",sourceDirName:"automat",slug:"/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-panther-trapi",permalink:"/api-docs/docs/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-panther-trapi",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-panther-trapi",title:"Meta knowledge graph representation of this TRAPI web service.",description:"Returns meta knowledge graph representation of this TRAPI web service.",sidebar_label:"Meta knowledge graph representation of this TRAPI web service.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["trapi","PANTHER"],description:"Returns meta knowledge graph representation of this TRAPI web service.",operationId:"get_meta_knowledge_graph_1_3_meta_knowledge_graph_get_panther_trapi",responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"MetaKnowledgeGraph",required:["nodes","edges"],type:"object",properties:{nodes:{title:"HashableMapping[str, MetaNode]",type:"object",additionalProperties:{title:"MetaNode",required:["id_prefixes"],type:"object",properties:{id_prefixes:{title:"HashableSequence[str]",type:"array",items:{type:"string"},description:"Custom class that implements MutableSequence and is hashable",default:[]},attributes:{title:"HashableSequence[MetaAttribute]",type:"array",items:{title:"MetaAttribute",required:["attribute_type_id"],type:"object",properties:{attribute_type_id:{title:"Attribute Type Id",type:"string"},attribute_source:{title:"Attribute Source",type:"string"},original_attribute_names:{title:"HashableSequence[str]",type:"array",items:{type:"string"},description:"Custom class that implements MutableSequence and is hashable",default:[]},constraint_use:{title:"Constraint Use",type:"boolean",default:!1},constraint_name:{title:"Constraint Name",type:"string"}},description:"MetaAttribute."},description:"Custom class that implements MutableSequence and is hashable",default:[]}},additionalProperties:!1,description:"Custom base model for all classes\n\nThis provides hash and equality methods."},description:"Custom class that implements MutableMapping and is hashable",default:{}},edges:{title:"HashableSequence[MetaEdge]",type:"array",items:{title:"MetaEdge",required:["subject","predicate","object"],type:"object",properties:{subject:{title:"Subject",pattern:"^biolink:[A-Z][a-zA-Z]*$",type:"string"},predicate:{title:"Predicate",pattern:"^biolink:[a-z][a-z_]*$",type:"string"},object:{title:"Object",pattern:"^biolink:[A-Z][a-zA-Z]*$",type:"string"},attributes:{title:"HashableSequence[MetaAttribute]",type:"array",items:{title:"MetaAttribute",required:["attribute_type_id"],type:"object",properties:{attribute_type_id:{title:"Attribute Type Id",type:"string"},attribute_source:{title:"Attribute Source",type:"string"},original_attribute_names:{title:"HashableSequence[str]",type:"array",items:{type:"string"},description:"Custom class that implements MutableSequence and is hashable",default:[]},constraint_use:{title:"Constraint Use",type:"boolean",default:!1},constraint_name:{title:"Constraint Name",type:"string"}},description:"MetaAttribute."},description:"Custom class that implements MutableSequence and is hashable",default:[]},knowledge_types:{title:"HashableSequence[KnowledgeType]",type:"array",items:{title:"KnowledgeType",enum:["lookup","inferred"],type:"string",description:"Knowledge Type."},description:"Custom class that implements MutableSequence and is hashable",default:[]}},additionalProperties:!1,description:"Custom base model for all classes\n\nThis provides hash and equality methods."},description:"Custom class that implements MutableSequence and is hashable",default:[]}},description:"Custom base model for all classes\n\nThis provides hash and equality methods."}}}}},method:"get",path:"/panther/1.3/meta_knowledge_graph",servers:[{url:"https://automat-u24.apps.renci.org"}],info:{title:"Automat",version:"2.1",termsOfService:"http://loading"},postman:{name:"Meta knowledge graph representation of this TRAPI web service.",description:{content:"Returns meta knowledge graph representation of this TRAPI web service.",type:"text/plain"},url:{path:["panther","1.3","meta_knowledge_graph"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/automat/automat",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"PANTHER",permalink:"/api-docs/docs/automat/panther"},next:{title:"Test data for usage by the SRI Testing Harness.",permalink:"/api-docs/docs/automat/get-sri-testing-data-1-3-sri-testing-data-get-panther-trapi"}},h={},g=[{value:"Meta knowledge graph representation of this TRAPI web service.",id:"meta-knowledge-graph-representation-of-this-trapi-web-service",level:2}],b={toc:g},y="wrapper";function k(e){let{components:t,...a}=e;return(0,s.kt)(y,(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"meta-knowledge-graph-representation-of-this-trapi-web-service"},"Meta knowledge graph representation of this TRAPI web service."),(0,s.kt)("p",null,"Returns meta knowledge graph representation of this TRAPI web service."),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Successful Response")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"nodes"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Custom class that implements MutableMapping and is hashable")),(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("code",null,"property name*")))))),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"edges"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Custom class that implements MutableSequence and is hashable")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(o.Z,{collapsible:!1,name:"subject",required:!1,schemaName:"Subject",qualifierMessage:"**Possible values:** Value must match regular expression `^biolink:[A-Z][a-zA-Z]*$`",schema:{title:"Subject",pattern:"^biolink:[A-Z][a-zA-Z]*$",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"predicate",required:!1,schemaName:"Predicate",qualifierMessage:"**Possible values:** Value must match regular expression `^biolink:[a-z][a-z_]*$`",schema:{title:"Predicate",pattern:"^biolink:[a-z][a-z_]*$",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"object",required:!1,schemaName:"Object",qualifierMessage:"**Possible values:** Value must match regular expression `^biolink:[A-Z][a-zA-Z]*$`",schema:{title:"Object",pattern:"^biolink:[A-Z][a-zA-Z]*$",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"attributes"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Custom class that implements MutableSequence and is hashable")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(o.Z,{collapsible:!1,name:"attribute_type_id",required:!1,schemaName:"Attribute Type Id",qualifierMessage:void 0,schema:{title:"Attribute Type Id",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"attribute_source",required:!1,schemaName:"Attribute Source",qualifierMessage:void 0,schema:{title:"Attribute Source",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"original_attribute_names",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{title:"HashableSequence[str]",type:"array",items:{type:"string"},description:"Custom class that implements MutableSequence and is hashable",default:[]},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"constraint_use",required:!1,schemaName:"Constraint Use",qualifierMessage:void 0,schema:{title:"Constraint Use",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"constraint_name",required:!1,schemaName:"Constraint Name",qualifierMessage:void 0,schema:{title:"Constraint Name",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(o.Z,{collapsible:!1,name:"knowledge_types",required:!1,schemaName:"KnowledgeType[]",qualifierMessage:"**Possible values:** [`lookup`, `inferred`]",schema:{title:"HashableSequence[KnowledgeType]",type:"array",items:{title:"KnowledgeType",enum:["lookup","inferred"],type:"string",description:"Knowledge Type."},description:"Custom class that implements MutableSequence and is hashable",default:[]},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "nodes": {},\n  "edges": [\n    {\n      "subject": "string",\n      "predicate": "string",\n      "object": "string",\n      "attributes": [\n        {\n          "attribute_type_id": "string",\n          "attribute_source": "string",\n          "original_attribute_names": [\n            "string"\n          ],\n          "constraint_use": false,\n          "constraint_name": "string"\n        }\n      ],\n      "knowledge_types": [\n        "lookup"\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);