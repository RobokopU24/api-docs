"use strict";(self.webpackChunkrobokop_api_docs=self.webpackChunkrobokop_api_docs||[]).push([[9204],{66242:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(67294),r=a(86010),o=a(53438),i=a(39960),c=a(13919),l=a(95999);const s={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",info:"info_QY_6"};var d=a(25108);function u(e){let{href:t,children:a}=e;return n.createElement(i.default,{href:t,className:(0,r.default)("card padding--lg",s.cardContainer)},a)}function p(e){let{href:t,icon:a,title:o,description:i,info:c}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,r.default)("text--truncate",s.cardTitle),title:o},a," ",o),i&&n.createElement("p",{className:(0,r.default)("text--truncate",s.cardDescription),title:i},i),c&&n.createElement("p",{title:c,className:s.info},c))}const m=new Map([["BINDING","binding-db"],["CAM Provider KG","cam-kp"],["CTD","ctd"],["DrugCentral","drugcentral"],["Alliance of Genome Resources","genome-alliance"],["GTEx","gtex"],["GtoPdb","gtopdb"],["GWAS Catalog","gwas-catalog"],["Hetionet","hetio"],["HGNC","hgnc"],["HMDB","hmdb"],["Human GOA","human-goa"],["ICEES KG","icees-kg"],["IntAct Molecular Interaction Database","intact"],["Monarch KG","monarch-kg"],["PANTHER","panther"],["Pharos","pharos"],["Reactome","reactome"],["ROBOKOP KG","robokopkg"],["STRING","string-db"],["Text Mining Provider KG","textminingkp"],["Ubergraph","ubergraph"],["Viral Proteome","viral-proteome"]]),g=async e=>{if(!m.has(e))return null;try{const t=await fetch(`https://robokop-automat.apps.renci.org/${m.get(e)}/metadata`,{method:"GET",headers:{"Content-Type":"application/json"}}),{final_node_count:a,final_edge_count:n,graph_description:r}=await t.json();return{final_node_count:parseInt(a).toLocaleString(),final_edge_count:parseInt(n).toLocaleString(),description:r}}catch{return null}};function f(e){let{item:t}=e;const a=(0,o.Wl)(t),[r,i]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(async()=>{i(await g(t.label))})()}),[]),d.log(t),a?n.createElement(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:r&&"NaN"!==r.final_edge_count&&"NaN"!==r.final_node_count?"{final_node_count} nodes, {final_edge_count} edges":"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length,final_node_count:null==r?void 0:r.final_node_count,final_edge_count:null==r?void 0:r.final_edge_count}),info:null==r?void 0:r.description}):null}function h(e){let{item:t}=e;const a=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:a,title:t.label,description:null==r?void 0:r.description})}function _(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const a=(0,o.jA)();return n.createElement(v,{items:a.items,className:t})}function v(e){const{items:t,className:a}=e;if(!t)return n.createElement(k,e);const i=(0,o.MN)(t);return n.createElement("section",{className:(0,r.default)("row",a)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(_,{item:e})))))}},32153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),o=a(66242),i=a(53438);const c={id:"drug-central",title:"DrugCentral",description:"DrugCentral",custom_edit_url:null},l=void 0,s={unversionedId:"automat/drug-central",id:"automat/drug-central",title:"DrugCentral",description:"DrugCentral",source:"@site/docs/automat/drug-central.tag.mdx",sourceDirName:"automat",slug:"/automat/drug-central",permalink:"/api-docs/docs/automat/drug-central",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"drug-central",title:"DrugCentral",description:"DrugCentral",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Test data for usage by the SRI Testing Harness.",permalink:"/api-docs/docs/automat/get-sri-testing-data-1-4-sri-testing-data-get-ctd-trapi"},next:{title:"Query reasoner via one of several inputs.",permalink:"/api-docs/docs/automat/reasoner-api-1-4-query-post-drugcentral-trapi"}},d={},u=[{value:"Query Endpoints",id:"query-endpoints",level:2},{value:"Metadata Endpoints",id:"metadata-endpoints",level:2}],p={toc:u},m="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"DrugCentral provides open-source data on active ingredients, chemical entities, pharmaceutical products, drug mode of action, indications, and pharmacologic action for approved drugs, derived from information provided by the US Food & Drug Administration, the European Medicines Agency, and the Pharmaceutical and Medical Devices Agency. Note that DrugCentral provides limited information on discontinued drugs and drugs approved outside of the US, but that information has not been validated."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Version:")," 25acfc0e82d4f8c5"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"URL:")," ",(0,r.kt)("a",{parentName:"p",href:"https://drugcentral.org/"},"https://drugcentral.org/")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Files:")," ",(0,r.kt)("a",{parentName:"p",href:"https://stars.renci.org/var/plater/bl-3.5.4/DrugCentral_Automat/25acfc0e82d4f8c5"},"https://stars.renci.org/var/plater/bl-3.5.4/DrugCentral_Automat/25acfc0e82d4f8c5")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nodes:")," 77,648"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Edges:")," 648,622"),(0,r.kt)("h2",{id:"query-endpoints"},"Query Endpoints"),(0,r.kt)(o.Z,{items:(0,i.jA)().items.slice(0,6),mdxType:"DocCardList"}),(0,r.kt)("h2",{id:"metadata-endpoints"},"Metadata Endpoints"),(0,r.kt)(o.Z,{items:(0,i.jA)().items.slice(6),mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);