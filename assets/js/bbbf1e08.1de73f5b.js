"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7680],{52991:(e,t,n)=>{n.d(t,{Z:()=>E});var c=n(67294),r=n(86010),a=n(53438),i=n(39960),o=n(13919),s=n(95999);const l="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function u(e){let{href:t,children:n}=e;return c.createElement(i.Z,{href:t,className:(0,r.Z)("card padding--lg",l)},n)}function p(e){let{href:t,icon:n,title:a,description:i}=e;return c.createElement(u,{href:t},c.createElement("h2",{className:(0,r.Z)("text--truncate",m),title:a},n," ",a),i&&c.createElement("p",{className:(0,r.Z)("text--truncate",d),title:i},i))}function h(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?c.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,a.xz)(t.docId??void 0);return c.createElement(p,{href:t.href,icon:n,title:t.label,description:r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return c.createElement(g,{item:t});case"category":return c.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const n=(0,a.jA)();return c.createElement(E,{items:n.items,className:t})}function E(e){const{items:t,className:n}=e;if(!t)return c.createElement(k,e);const i=(0,a.MN)(t);return c.createElement("section",{className:(0,r.Z)("row",n)},i.map(((e,t)=>c.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},c.createElement(f,{item:e})))))}},88374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var c=n(87462),r=(n(67294),n(3905)),a=n(52991),i=n(53438);const o={id:"hgnc",title:"hgnc",description:"hgnc",custom_edit_url:null},s=void 0,l={unversionedId:"automat/hgnc",id:"automat/hgnc",title:"hgnc",description:"hgnc",source:"@site/docs/automat/hgnc.tag.mdx",sourceDirName:"automat",slug:"/automat/hgnc",permalink:"/api-docs/docs/automat/hgnc",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"hgnc",title:"hgnc",description:"hgnc",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get one-hop connection schema",permalink:"/api-docs/docs/automat/simple-spec-simple-spec-get-45-de-37-b-7-7-d-62-499-c-a-3-fc-36631839-fc-50"},next:{title:"Meta knowledge graph representation of this TRAPI web service.",permalink:"/api-docs/docs/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-808949-b-9-96-de-41-dd-ac-58-684-db-6-f-3-d-012"}},m={},d=[],u={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,c.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Operations for hgnc."),(0,r.kt)(a.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);