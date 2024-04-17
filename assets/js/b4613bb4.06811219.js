"use strict";(self.webpackChunkrobokop_api_docs=self.webpackChunkrobokop_api_docs||[]).push([[7018],{66242:(e,t,a)=>{a.d(t,{Z:()=>b});var o=a(67294),r=a(86010),n=a(53438),i=a(39960),s=a(13919),l=a(95999);const c={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",info:"info_QY_6"};var d=a(25108);function p(e){let{href:t,children:a}=e;return o.createElement(i.default,{href:t,className:(0,r.default)("card padding--lg",c.cardContainer)},a)}function m(e){let{href:t,icon:a,title:n,description:i,info:s}=e;return o.createElement(p,{href:t},o.createElement("h2",{className:(0,r.default)("text--truncate",c.cardTitle),title:n},a," ",n),i&&o.createElement("p",{className:(0,r.default)("text--truncate",c.cardDescription),title:i},i),s&&o.createElement("p",{title:s,className:c.info},s))}const u=new Map([["BINDING","binding-db"],["CAM Provider KG","cam-kp"],["CTD","ctd"],["DrugCentral","drugcentral"],["Alliance of Genome Resources","genome-alliance"],["GTEx","gtex"],["GtoPdb","gtopdb"],["GWAS Catalog","gwas-catalog"],["Hetionet","hetio"],["HGNC","hgnc"],["HMDB","hmdb"],["Human GOA","human-goa"],["ICEES KG","icees-kg"],["IntAct Molecular Interaction Database","intact"],["Monarch KG","monarch-kg"],["PANTHER","panther"],["Pharos","pharos"],["Reactome","reactome"],["ROBOKOP KG","robokopkg"],["STRING","string-db"],["Text Mining Provider KG","textminingkp"],["Ubergraph","ubergraph"],["Viral Proteome","viral-proteome"]]),f=async e=>{if(!u.has(e))return null;try{const t=await fetch(`https://robokop-automat.apps.renci.org/${u.get(e)}/metadata`,{method:"GET",headers:{"Content-Type":"application/json"}}),{final_node_count:a,final_edge_count:o,graph_description:r}=await t.json();return{final_node_count:parseInt(a).toLocaleString(),final_edge_count:parseInt(o).toLocaleString(),description:r}}catch{return null}};function g(e){let{item:t}=e;const a=(0,n.Wl)(t),[r,i]=(0,o.useState)(null);return(0,o.useEffect)((()=>{(async()=>{i(await f(t.label))})()}),[]),d.log(t),a?o.createElement(m,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:r&&"NaN"!==r.final_edge_count&&"NaN"!==r.final_node_count?"{final_node_count} nodes, {final_edge_count} edges":"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length,final_node_count:null==r?void 0:r.final_node_count,final_edge_count:null==r?void 0:r.final_edge_count}),info:null==r?void 0:r.description}):null}function h(e){let{item:t}=e;const a=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,n.xz)(t.docId??void 0);return o.createElement(m,{href:t.href,icon:a,title:t.label,description:null==r?void 0:r.description})}function _(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(h,{item:t});case"category":return o.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const a=(0,n.jA)();return o.createElement(b,{items:a.items,className:t})}function b(e){const{items:t,className:a}=e;if(!t)return o.createElement(k,e);const i=(0,n.MN)(t);return o.createElement("section",{className:(0,r.default)("row",a)},i.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(_,{item:e})))))}},75193:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var o=a(87462),r=(a(67294),a(3905)),n=a(66242),i=a(53438);const s={id:"viral-proteome",title:"Viral Proteome",description:"Viral Proteome",custom_edit_url:null},l=void 0,c={unversionedId:"automat/viral-proteome",id:"automat/viral-proteome",title:"Viral Proteome",description:"Viral Proteome",source:"@site/docs/automat/viral-proteome.tag.mdx",sourceDirName:"automat",slug:"/automat/viral-proteome",permalink:"/api-docs/docs/automat/viral-proteome",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"viral-proteome",title:"Viral Proteome",description:"Viral Proteome",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Test data for usage by the SRI Testing Harness.",permalink:"/api-docs/docs/automat/get-sri-testing-data-1-4-sri-testing-data-get-trapi-ubergraph"},next:{title:"Query reasoner via one of several inputs.",permalink:"/api-docs/docs/automat/reasoner-api-1-4-query-post-trapi-viral-proteome"}},d={},p=[{value:"Query Endpoints",id:"query-endpoints",level:2},{value:"Metadata Endpoints",id:"metadata-endpoints",level:2}],m={toc:p},u="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Gene Ontology (GO) Consortium\u2019s Viral Proteome resource provides open access to curated assignment of GO terms to proteins and proteome relationships derived from the UniProt KnowledgeBase for all NCBI taxa classified as viruses."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Version:")," 8a78ab9faf52b16d"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"URL:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.ebi.ac.uk/GOA/proteomes"},"https://www.ebi.ac.uk/GOA/proteomes")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Files:")," ",(0,r.kt)("a",{parentName:"p",href:"https://stars.renci.org/var/plater/bl-3.5.4/ViralProteome_Automat/8a78ab9faf52b16d"},"https://stars.renci.org/var/plater/bl-3.5.4/ViralProteome_Automat/8a78ab9faf52b16d")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nodes:")," 77,747"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Edges:")," 310,367"),(0,r.kt)("h2",{id:"query-endpoints"},"Query Endpoints"),(0,r.kt)(n.Z,{items:(0,i.jA)().items.slice(0,6),mdxType:"DocCardList"}),(0,r.kt)("h2",{id:"metadata-endpoints"},"Metadata Endpoints"),(0,r.kt)(n.Z,{items:(0,i.jA)().items.slice(6),mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);