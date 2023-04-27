"use strict";(self.webpackChunkrobokop_api_docs=self.webpackChunkrobokop_api_docs||[]).push([[5314],{66242:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(67294),o=a(86010),r=a(53438),i=a(39960),c=a(13919),s=a(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",info:"info_QY_6"};function d(e){let{href:t,children:a}=e;return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",l.cardContainer)},a)}function p(e){let{href:t,icon:a,title:r,description:i,info:c}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",l.cardTitle),title:r},a," ",r),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",l.cardDescription),title:i},i),c&&n.createElement("p",{title:c,className:l.info},c))}const u=new Map([["RENCI SRI Reference KG","biolink"],["CAM KP","cam-kp"],["CTD","ctd"],["DrugCentral","drugcentral"],["Alliance of Genome Resources Orthology","genome-alliance"],["GTEx","gtex"],["GtoPdb","gtopdb"],["GWAS Catalog","gwas-catalog"],["Hetionet","hetio"],["HGNC","hgnc"],["HMDB","hmdb"],["Human GOA","human-goa"],["ICEES KG","icees-kg"],["IntAct Molecular Interaction Database","intact"],["PANTHER","panther"],["Pharos","pharos"],["ROBOKOP KG","robokopkg"],["SRI Reference KG","sri-reference-kg"],["STRING","string-db"],["Text Mining Provider KG","textminingkp"],["Ubergraph Redundant","ubergraph"],["Viral Proteome","viral-proteome"]]),m=async e=>{if(!u.has(e))return null;try{const t=await fetch(`https://automat-u24.apps.renci.org/${u.get(e)}/metadata`,{method:"GET",headers:{"Content-Type":"application/json"}}),{final_node_count:a,final_edge_count:n,graph_description:o}=await t.json();return{final_node_count:parseInt(a).toLocaleString(),final_edge_count:parseInt(n).toLocaleString(),description:o}}catch{return null}};function g(e){let{item:t}=e;const a=(0,r.Wl)(t),[o,i]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(async()=>{i(await m(t.label))})()}),[]),a?n.createElement(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:o&&"NaN"!==o.final_edge_count&&"NaN"!==o.final_node_count?"{final_node_count} nodes, {final_edge_count} edges":"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length,final_node_count:o?.final_node_count,final_edge_count:o?.final_edge_count}),info:o?.description}):null}function f(e){let{item:t}=e;const a=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,r.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:a,title:t.label,description:o?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function _(e){let{className:t}=e;const a=(0,r.jA)();return n.createElement(b,{items:a.items,className:t})}function b(e){const{items:t,className:a}=e;if(!t)return n.createElement(_,e);const i=(0,r.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",a)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e})))))}},37010:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905)),r=a(66242),i=a(53438);const c={id:"ctd",title:"CTD",description:"CTD",custom_edit_url:null},s=void 0,l={unversionedId:"automat/ctd",id:"automat/ctd",title:"CTD",description:"CTD",source:"@site/docs/automat/ctd.tag.mdx",sourceDirName:"automat",slug:"/automat/ctd",permalink:"/api-docs/docs/automat/ctd",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ctd",title:"CTD",description:"CTD",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get one-hop connection schema",permalink:"/api-docs/docs/automat/simple-spec-simple-spec-get-cam-kp"},next:{title:"Meta knowledge graph representation of this TRAPI web service.",permalink:"/api-docs/docs/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-ctd-trapi"}},d={},p=[],u={toc:p},m="wrapper";function g(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Comparative Toxicogenomics Database (CTD) is an open-source database that provides manually curated information about chemical-gene/protein, chemical-disease, and gene/protein-disease relationships, with additional support for the curated relationships provided by function and pathway data."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Version:")," eb067a5f55c8a4dd"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"URL:")," ",(0,o.kt)("a",{parentName:"p",href:"http://ctdbase.org/about/"},"http://ctdbase.org/about/")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Neo4J:")," ",(0,o.kt)("a",{parentName:"p",href:"https://stars.renci.org/var/plater/bl-3.2.1/CTD_Automat/eb067a5f55c8a4dd/graph_eb067a5f55c8a4dd.db.dump"},"https://stars.renci.org/var/plater/bl-3.2.1/CTD_Automat/eb067a5f55c8a4dd/graph_eb067a5f55c8a4dd.db.dump")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Nodes:")," 441,863"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Edges:")," 1,462,012"),(0,o.kt)(r.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);