"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1083],{52991:(e,t,c)=>{c.d(t,{Z:()=>y});var n=c(67294),r=c(86010),a=c(53438),i=c(39960),o=c(13919),m=c(95999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function l(e){let{href:t,children:c}=e;return n.createElement(i.Z,{href:t,className:(0,r.Z)("card padding--lg",s.cardContainer)},c)}function d(e){let{href:t,icon:c,title:a,description:i}=e;return n.createElement(l,{href:t},n.createElement("h2",{className:(0,r.Z)("text--truncate",s.cardTitle),title:a},c," ",a),i&&n.createElement("p",{className:(0,r.Z)("text--truncate",s.cardDescription),title:i},i))}function u(e){let{item:t}=e;const c=(0,a.Wl)(t);return c?n.createElement(d,{href:c,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const c=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,a.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:c,title:t.label,description:r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const c=(0,a.jA)();return n.createElement(y,{items:c.items,className:t})}function y(e){const{items:t,className:c}=e;if(!t)return n.createElement(f,e);const i=(0,a.MN)(t);return n.createElement("section",{className:(0,r.Z)("row",c)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e})))))}},69395:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>l,contentTitle:()=>m,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=c(87462),r=(c(67294),c(3905)),a=c(52991),i=c(53438);const o={id:"mychem",title:"mychem",description:"mychem",custom_edit_url:null},m=void 0,s={unversionedId:"automat/mychem",id:"automat/mychem",title:"mychem",description:"mychem",source:"@site/docs/automat/mychem.tag.mdx",sourceDirName:"automat",slug:"/automat/mychem",permalink:"/api-docs/docs/automat/mychem",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"mychem",title:"mychem",description:"mychem",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get one-hop connection schema",permalink:"/api-docs/docs/automat/simple-spec-simple-spec-get-32-c-04306-91-a-9-4-e-89-812-c-c-68-eac-6-ef-85-d"},next:{title:"Meta knowledge graph representation of this TRAPI web service.",permalink:"/api-docs/docs/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-19322-f-69-4780-4972-b-783-54-aeab-3-aee-77"}},l={},d=[],u={toc:d},p="wrapper";function h(e){let{components:t,...c}=e;return(0,r.kt)(p,(0,n.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Operations for mychem."),(0,r.kt)(a.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);