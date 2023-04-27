"use strict";(self.webpackChunkrobokop_api_docs=self.webpackChunkrobokop_api_docs||[]).push([[7561],{66242:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(67294),r=n(86010),o=n(53438),i=n(39960),c=n(13919),s=n(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",info:"info_QY_6"};function d(e){let{href:t,children:n}=e;return a.createElement(i.Z,{href:t,className:(0,r.Z)("card padding--lg",l.cardContainer)},n)}function u(e){let{href:t,icon:n,title:o,description:i,info:c}=e;return a.createElement(d,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",l.cardTitle),title:o},n," ",o),i&&a.createElement("p",{className:(0,r.Z)("text--truncate",l.cardDescription),title:i},i),c&&a.createElement("p",{title:c,className:l.info},c))}const p=new Map([["RENCI SRI Reference KG","biolink"],["CAM KP","cam-kp"],["CTD","ctd"],["DrugCentral","drugcentral"],["Alliance of Genome Resources Orthology","genome-alliance"],["GTEx","gtex"],["GtoPdb","gtopdb"],["GWAS Catalog","gwas-catalog"],["Hetionet","hetio"],["HGNC","hgnc"],["HMDB","hmdb"],["Human GOA","human-goa"],["ICEES KG","icees-kg"],["IntAct Molecular Interaction Database","intact"],["PANTHER","panther"],["Pharos","pharos"],["ROBOKOP KG","robokopkg"],["SRI Reference KG","sri-reference-kg"],["STRING","string-db"],["Text Mining Provider KG","textminingkp"],["Ubergraph Redundant","ubergraph"],["Viral Proteome","viral-proteome"]]),m=async e=>{if(!p.has(e))return null;try{const t=await fetch(`https://automat-u24.apps.renci.org/${p.get(e)}/metadata`,{method:"GET",headers:{"Content-Type":"application/json"}}),{final_node_count:n,final_edge_count:a,graph_description:r}=await t.json();return{final_node_count:parseInt(n).toLocaleString(),final_edge_count:parseInt(a).toLocaleString(),description:r}}catch{return null}};function g(e){let{item:t}=e;const n=(0,o.Wl)(t),[r,i]=(0,a.useState)(null);return(0,a.useEffect)((()=>{(async()=>{i(await m(t.label))})()}),[]),n?a.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:r&&"NaN"!==r.final_edge_count&&"NaN"!==r.final_node_count?"{final_node_count} nodes, {final_edge_count} edges":"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length,final_node_count:r?.final_node_count,final_edge_count:r?.final_edge_count}),info:r?.description}):null}function h(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.xz)(t.docId??void 0);return a.createElement(u,{href:t.href,icon:n,title:t.label,description:r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(h,{item:t});case"category":return a.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,o.jA)();return a.createElement(_,{items:n.items,className:t})}function _(e){const{items:t,className:n}=e;if(!t)return a.createElement(b,e);const i=(0,o.MN)(t);return a.createElement("section",{className:(0,r.Z)("row",n)},i.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(f,{item:e})))))}},73879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(66242),i=n(53438);const c={id:"ubergraph-redundant",title:"Ubergraph Redundant",description:"Ubergraph Redundant",custom_edit_url:null},s=void 0,l={unversionedId:"automat/ubergraph-redundant",id:"automat/ubergraph-redundant",title:"Ubergraph Redundant",description:"Ubergraph Redundant",source:"@site/docs/automat/ubergraph-redundant.tag.mdx",sourceDirName:"automat",slug:"/automat/ubergraph-redundant",permalink:"/api-docs/docs/automat/ubergraph-redundant",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ubergraph-redundant",title:"Ubergraph Redundant",description:"Ubergraph Redundant",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get one-hop connection schema",permalink:"/api-docs/docs/automat/simple-spec-simple-spec-get-textminingkp"},next:{title:"Meta knowledge graph representation of this TRAPI web service.",permalink:"/api-docs/docs/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-trapi-ubergraph"}},d={},u=[],p={toc:u},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The redundant version of Ubergraph contains the complete inference closure for all subclass and existential relations, including transitive, reflexive subclass relations."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Version:")," 4b41581778f020c3"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"URL:")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/INCATools/ubergraph"},"https://github.com/INCATools/ubergraph")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Neo4J:")," ",(0,r.kt)("a",{parentName:"p",href:"https://stars.renci.org/var/plater/bl-3.2.1/UbergraphRedundant_Automat/4b41581778f020c3/graph_4b41581778f020c3.db.dump"},"https://stars.renci.org/var/plater/bl-3.2.1/UbergraphRedundant_Automat/4b41581778f020c3/graph_4b41581778f020c3.db.dump")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nodes:")," 3,098,316"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Edges:")," 142,239,591"),(0,r.kt)(o.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);