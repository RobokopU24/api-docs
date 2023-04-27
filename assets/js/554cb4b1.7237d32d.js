"use strict";(self.webpackChunkrobokop_api_docs=self.webpackChunkrobokop_api_docs||[]).push([[3932],{66242:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(67294),a=n(86010),o=n(53438),i=n(39960),c=n(13919),s=n(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",info:"info_QY_6"};function d(e){let{href:t,children:n}=e;return r.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",l.cardContainer)},n)}function p(e){let{href:t,icon:n,title:o,description:i,info:c}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",l.cardTitle),title:o},n," ",o),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",l.cardDescription),title:i},i),c&&r.createElement("p",{title:c,className:l.info},c))}const u=new Map([["RENCI SRI Reference KG","biolink"],["CAM KP","cam-kp"],["CTD","ctd"],["DrugCentral","drugcentral"],["Alliance of Genome Resources Orthology","genome-alliance"],["GTEx","gtex"],["GtoPdb","gtopdb"],["GWAS Catalog","gwas-catalog"],["Hetionet","hetio"],["HGNC","hgnc"],["HMDB","hmdb"],["Human GOA","human-goa"],["ICEES KG","icees-kg"],["IntAct Molecular Interaction Database","intact"],["PANTHER","panther"],["Pharos","pharos"],["ROBOKOP KG","robokopkg"],["SRI Reference KG","sri-reference-kg"],["STRING","string-db"],["Text Mining Provider KG","textminingkp"],["Ubergraph Redundant","ubergraph"],["Viral Proteome","viral-proteome"]]),m=async e=>{if(!u.has(e))return null;try{const t=await fetch(`https://automat-u24.apps.renci.org/${u.get(e)}/metadata`,{method:"GET",headers:{"Content-Type":"application/json"}}),{final_node_count:n,final_edge_count:r,graph_description:a}=await t.json();return{final_node_count:parseInt(n).toLocaleString(),final_edge_count:parseInt(r).toLocaleString(),description:a}}catch{return null}};function g(e){let{item:t}=e;const n=(0,o.Wl)(t),[a,i]=(0,r.useState)(null);return(0,r.useEffect)((()=>{(async()=>{i(await m(t.label))})()}),[]),n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:a&&"NaN"!==a.final_edge_count&&"NaN"!==a.final_node_count?"{final_node_count} nodes, {final_edge_count} edges":"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length,final_node_count:a?.final_node_count,final_edge_count:a?.final_edge_count}),info:a?.description}):null}function f(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:a?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const n=(0,o.jA)();return r.createElement(_,{items:n.items,className:t})}function _(e){const{items:t,className:n}=e;if(!t)return r.createElement(k,e);const i=(0,o.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},39529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(66242),i=n(53438);const c={id:"renci-sri-reference-kg",title:"RENCI SRI Reference KG",description:"RENCI SRI Reference KG",custom_edit_url:null},s=void 0,l={unversionedId:"automat/renci-sri-reference-kg",id:"automat/renci-sri-reference-kg",title:"RENCI SRI Reference KG",description:"RENCI SRI Reference KG",source:"@site/docs/automat/renci-sri-reference-kg.tag.mdx",sourceDirName:"automat",slug:"/automat/renci-sri-reference-kg",permalink:"/api-docs/docs/automat/renci-sri-reference-kg",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"renci-sri-reference-kg",title:"RENCI SRI Reference KG",description:"RENCI SRI Reference KG",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get one-hop connection schema",permalink:"/api-docs/docs/automat/simple-spec-simple-spec-get-robokopkg"},next:{title:"Meta knowledge graph representation of this TRAPI web service.",permalink:"/api-docs/docs/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-biolink-trapi"}},d={},p=[],u={toc:p},m="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The RENCI Standards and Reference Implementation (SRI) Reference KG represents a subset of the SRI Reference KG."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Version:")," 11163199d3ca8a16"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL:")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Knowledge-Graph-Hub/sri-reference-kg"},"https://github.com/Knowledge-Graph-Hub/sri-reference-kg")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Neo4J:")," ",(0,a.kt)("a",{parentName:"p",href:"https://stars.renci.org/var/plater/bl-3.2.1/Biolink_Automat/11163199d3ca8a16/graph_11163199d3ca8a16.db.dump"},"https://stars.renci.org/var/plater/bl-3.2.1/Biolink_Automat/11163199d3ca8a16/graph_11163199d3ca8a16.db.dump")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Nodes:")," 604,067"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Edges:")," 4,616,569"),(0,a.kt)(o.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);