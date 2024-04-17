"use strict";(self.webpackChunkrobokop_api_docs=self.webpackChunkrobokop_api_docs||[]).push([[3346],{66242:(t,e,a)=>{a.d(e,{Z:()=>k});var n=a(67294),o=a(86010),r=a(53438),i=a(39960),c=a(13919),s=a(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",info:"info_QY_6"};var d=a(25108);function p(t){let{href:e,children:a}=t;return n.createElement(i.default,{href:e,className:(0,o.default)("card padding--lg",l.cardContainer)},a)}function u(t){let{href:e,icon:a,title:r,description:i,info:c}=t;return n.createElement(p,{href:e},n.createElement("h2",{className:(0,o.default)("text--truncate",l.cardTitle),title:r},a," ",r),i&&n.createElement("p",{className:(0,o.default)("text--truncate",l.cardDescription),title:i},i),c&&n.createElement("p",{title:c,className:l.info},c))}const m=new Map([["BINDING","binding-db"],["CAM Provider KG","cam-kp"],["CTD","ctd"],["DrugCentral","drugcentral"],["Alliance of Genome Resources","genome-alliance"],["GTEx","gtex"],["GtoPdb","gtopdb"],["GWAS Catalog","gwas-catalog"],["Hetionet","hetio"],["HGNC","hgnc"],["HMDB","hmdb"],["Human GOA","human-goa"],["ICEES KG","icees-kg"],["IntAct Molecular Interaction Database","intact"],["Monarch KG","monarch-kg"],["PANTHER","panther"],["Pharos","pharos"],["Reactome","reactome"],["ROBOKOP KG","robokopkg"],["STRING","string-db"],["Text Mining Provider KG","textminingkp"],["Ubergraph","ubergraph"],["Viral Proteome","viral-proteome"]]),g=async t=>{if(!m.has(t))return null;try{const e=await fetch(`https://robokop-automat.apps.renci.org/${m.get(t)}/metadata`,{method:"GET",headers:{"Content-Type":"application/json"}}),{final_node_count:a,final_edge_count:n,graph_description:o}=await e.json();return{final_node_count:parseInt(a).toLocaleString(),final_edge_count:parseInt(n).toLocaleString(),description:o}}catch{return null}};function f(t){let{item:e}=t;const a=(0,r.Wl)(e),[o,i]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(async()=>{i(await g(e.label))})()}),[]),d.log(e),a?n.createElement(u,{href:a,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,s.I)({message:o&&"NaN"!==o.final_edge_count&&"NaN"!==o.final_node_count?"{final_node_count} nodes, {final_edge_count} edges":"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length,final_node_count:null==o?void 0:o.final_node_count,final_edge_count:null==o?void 0:o.final_edge_count}),info:null==o?void 0:o.description}):null}function h(t){let{item:e}=t;const a=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,r.xz)(e.docId??void 0);return n.createElement(u,{href:e.href,icon:a,title:e.label,description:null==o?void 0:o.description})}function b(t){let{item:e}=t;switch(e.type){case"link":return n.createElement(h,{item:e});case"category":return n.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function _(t){let{className:e}=t;const a=(0,r.jA)();return n.createElement(k,{items:a.items,className:e})}function k(t){const{items:e,className:a}=t;if(!e)return n.createElement(_,t);const i=(0,r.MN)(e);return n.createElement("section",{className:(0,o.default)("row",a)},i.map(((t,e)=>n.createElement("article",{key:e,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:t})))))}},47461:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905)),r=a(66242),i=a(53438);const c={id:"gto-pdb",title:"GtoPdb",description:"GtoPdb",custom_edit_url:null},s=void 0,l={unversionedId:"automat/gto-pdb",id:"automat/gto-pdb",title:"GtoPdb",description:"GtoPdb",source:"@site/docs/automat/gto-pdb.tag.mdx",sourceDirName:"automat",slug:"/automat/gto-pdb",permalink:"/api-docs/docs/automat/gto-pdb",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"gto-pdb",title:"GtoPdb",description:"GtoPdb",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Test data for usage by the SRI Testing Harness.",permalink:"/api-docs/docs/automat/get-sri-testing-data-1-4-sri-testing-data-get-gtex-trapi"},next:{title:"Query reasoner via one of several inputs.",permalink:"/api-docs/docs/automat/reasoner-api-1-4-query-post-gtopdb-trapi"}},d={},p=[{value:"Query Endpoints",id:"query-endpoints",level:2},{value:"Metadata Endpoints",id:"metadata-endpoints",level:2}],u={toc:p},m="wrapper";function g(t){let{components:e,...a}=t;return(0,o.kt)(m,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The International Union of Basic and Clinical Pharmacology (IUPHAR) / British Pharmacological Society (BPS) Guide to Pharmacology database (GtoPdb) provides searchable open-source quantitative information on drug targets and the prescription medicines and experimental drugs that act on them."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Version:")," 570e405b674eb991"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"URL:")," ",(0,o.kt)("a",{parentName:"p",href:"http://www.guidetopharmacology.org/"},"http://www.guidetopharmacology.org/")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Files:")," ",(0,o.kt)("a",{parentName:"p",href:"https://stars.renci.org/var/plater/bl-3.5.4/GtoPdb_Automat/570e405b674eb991"},"https://stars.renci.org/var/plater/bl-3.5.4/GtoPdb_Automat/570e405b674eb991")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Nodes:")," 12,642"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Edges:")," 94,375"),(0,o.kt)("h2",{id:"query-endpoints"},"Query Endpoints"),(0,o.kt)(r.Z,{items:(0,i.jA)().items.slice(0,6),mdxType:"DocCardList"}),(0,o.kt)("h2",{id:"metadata-endpoints"},"Metadata Endpoints"),(0,o.kt)(r.Z,{items:(0,i.jA)().items.slice(6),mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);