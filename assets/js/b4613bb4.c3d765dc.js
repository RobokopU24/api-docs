"use strict";(self.webpackChunkrobokop_api_docs=self.webpackChunkrobokop_api_docs||[]).push([[7018],{66242:(e,t,a)=>{a.d(t,{Z:()=>k});var r=a(67294),o=a(86010),n=a(53438),i=a(39960),c=a(13919),l=a(95999);const s={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",info:"info_QY_6"};function p(e){let{href:t,children:a}=e;return r.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",s.cardContainer)},a)}function m(e){let{href:t,icon:a,title:n,description:i,info:c}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",s.cardTitle),title:n},a," ",n),i&&r.createElement("p",{className:(0,o.Z)("text--truncate",s.cardDescription),title:i},i),c&&r.createElement("p",{title:c,className:s.info},c))}const d=new Map([["RENCI SRI Reference KG","biolink"],["CAM KP","cam-kp"],["CTD","ctd"],["DrugCentral","drugcentral"],["Alliance of Genome Resources Orthology","genome-alliance"],["GTEx","gtex"],["GtoPdb","gtopdb"],["GWAS Catalog","gwas-catalog"],["Hetionet","hetio"],["HGNC","hgnc"],["HMDB","hmdb"],["Human GOA","human-goa"],["ICEES KG","icees-kg"],["IntAct Molecular Interaction Database","intact"],["PANTHER","panther"],["Pharos","pharos"],["ROBOKOP KG","robokopkg"],["SRI Reference KG","sri-reference-kg"],["STRING","string-db"],["Text Mining Provider KG","textminingkp"],["Ubergraph","ubergraph"],["Viral Proteome","viral-proteome"]]),u=async e=>{if(!d.has(e))return null;try{const t=await fetch(`https://automat-u24.apps.renci.org/${d.get(e)}/metadata`,{method:"GET",headers:{"Content-Type":"application/json"}}),{final_node_count:a,final_edge_count:r,graph_description:o}=await t.json();return{final_node_count:parseInt(a).toLocaleString(),final_edge_count:parseInt(r).toLocaleString(),description:o}}catch{return null}};function g(e){let{item:t}=e;const a=(0,n.Wl)(t),[o,i]=(0,r.useState)(null);return(0,r.useEffect)((()=>{(async()=>{i(await u(t.label))})()}),[]),a?r.createElement(m,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:o&&"NaN"!==o.final_edge_count&&"NaN"!==o.final_node_count?"{final_node_count} nodes, {final_edge_count} edges":"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length,final_node_count:o?.final_node_count,final_edge_count:o?.final_edge_count}),info:o?.description}):null}function f(e){let{item:t}=e;const a=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,n.xz)(t.docId??void 0);return r.createElement(m,{href:t.href,icon:a,title:t.label,description:o?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function _(e){let{className:t}=e;const a=(0,n.jA)();return r.createElement(k,{items:a.items,className:t})}function k(e){const{items:t,className:a}=e;if(!t)return r.createElement(_,e);const i=(0,n.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",a)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},75193:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var r=a(87462),o=(a(67294),a(3905)),n=a(66242),i=a(53438);const c={id:"viral-proteome",title:"Viral Proteome",description:"Viral Proteome",custom_edit_url:null},l=void 0,s={unversionedId:"automat/viral-proteome",id:"automat/viral-proteome",title:"Viral Proteome",description:"Viral Proteome",source:"@site/docs/automat/viral-proteome.tag.mdx",sourceDirName:"automat",slug:"/automat/viral-proteome",permalink:"/api-docs/docs/automat/viral-proteome",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"viral-proteome",title:"Viral Proteome",description:"Viral Proteome",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get one-hop connection schema",permalink:"/api-docs/docs/automat/simple-spec-simple-spec-get-ubergraph"},next:{title:"Meta knowledge graph representation of this TRAPI web service.",permalink:"/api-docs/docs/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-trapi-viral-proteome"}},p={},m=[],d={toc:m},u="wrapper";function g(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Gene Ontology (GO) Consortium\u2019s Viral Proteome resource provides open access to curated assignment of GO terms to proteins and proteome relationships derived from the UniProt KnowledgeBase for all NCBI taxa classified as viruses."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Version:")," 631a7899574c1c60"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"URL:")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.ebi.ac.uk/GOA/proteomes"},"https://www.ebi.ac.uk/GOA/proteomes")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Neo4J:")," ",(0,o.kt)("a",{parentName:"p",href:"https://stars.renci.org/var/plater/bl-3.2.1/ViralProteome_Automat/631a7899574c1c60/graph_631a7899574c1c60.db.dump"},"https://stars.renci.org/var/plater/bl-3.2.1/ViralProteome_Automat/631a7899574c1c60/graph_631a7899574c1c60.db.dump")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Nodes:")," 87,280"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Edges:")," 359,227"),(0,o.kt)(n.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);