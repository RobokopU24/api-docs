"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2392],{52991:(t,e,n)=>{n.d(e,{Z:()=>E});var a=n(67294),i=n(86010),c=n(53438),r=n(39960),o=n(13919),s=n(95999);const l="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function u(t){let{href:e,children:n}=t;return a.createElement(r.Z,{href:e,className:(0,i.Z)("card padding--lg",l)},n)}function p(t){let{href:e,icon:n,title:c,description:r}=t;return a.createElement(u,{href:e},a.createElement("h2",{className:(0,i.Z)("text--truncate",m),title:c},n," ",c),r&&a.createElement("p",{className:(0,i.Z)("text--truncate",d),title:r},r))}function f(t){let{item:e}=t;const n=(0,c.Wl)(e);return n?a.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function h(t){let{item:e}=t;const n=(0,o.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(e.docId??void 0);return a.createElement(p,{href:e.href,icon:n,title:e.label,description:i?.description})}function g(t){let{item:e}=t;switch(e.type){case"link":return a.createElement(h,{item:e});case"category":return a.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function k(t){let{className:e}=t;const n=(0,c.jA)();return a.createElement(E,{items:n.items,className:e})}function E(t){const{items:e,className:n}=t;if(!e)return a.createElement(k,t);const r=(0,c.MN)(e);return a.createElement("section",{className:(0,i.Z)("row",n)},r.map(((t,e)=>a.createElement("article",{key:e,className:"col col--6 margin-bottom--lg"},a.createElement(g,{item:t})))))}},40912:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),c=n(52991),r=n(53438);const o={id:"intact",title:"intact",description:"intact",custom_edit_url:null},s=void 0,l={unversionedId:"automat/intact",id:"automat/intact",title:"intact",description:"intact",source:"@site/docs/automat/intact.tag.mdx",sourceDirName:"automat",slug:"/automat/intact",permalink:"/api-docs/docs/automat/intact",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"intact",title:"intact",description:"intact",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get one-hop connection schema",permalink:"/api-docs/docs/automat/simple-spec-simple-spec-get-275-e-3-c-2-b-f-34-c-478-c-b-674-b-6-ef-08-a-0-bddf"},next:{title:"Meta knowledge graph representation of this TRAPI web service.",permalink:"/api-docs/docs/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-c-01-e-5-f-23-aed-2-4-e-22-99-dc-3-d-3-d-381-ae-822"}},m={},d=[],u={toc:d};function p(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Operations for intact."),(0,i.kt)(c.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);