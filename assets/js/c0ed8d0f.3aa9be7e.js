"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2012],{52991:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(67294),a=n(86010),c=n(53438),i=n(39960),o=n(13919),s=n(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:n}=e;return r.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",l.cardContainer)},n)}function d(e){let{href:t,icon:n,title:c,description:i}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",l.cardTitle),title:c},n," ",c),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",l.cardDescription),title:i},i))}function p(e){let{item:t}=e;const n=(0,c.Wl)(t);return n?r.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,c.xz)(t.docId??void 0);return r.createElement(d,{href:t.href,icon:n,title:t.label,description:a?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(u,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,c.jA)();return r.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return r.createElement(f,e);const i=(0,c.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},93572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),c=n(52991),i=n(53438);const o={id:"panther",title:"panther",description:"panther",custom_edit_url:null},s=void 0,l={unversionedId:"automat/panther",id:"automat/panther",title:"panther",description:"panther",source:"@site/docs/automat/panther.tag.mdx",sourceDirName:"automat",slug:"/automat/panther",permalink:"/api-docs/docs/automat/panther",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"panther",title:"panther",description:"panther",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get one-hop connection schema",permalink:"/api-docs/docs/automat/simple-spec-simple-spec-get-d-7-e-192-ce-af-27-4-e-93-9-c-8-c-d-90906486454"},next:{title:"Meta knowledge graph representation of this TRAPI web service.",permalink:"/api-docs/docs/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-fbc-5-c-276-970-b-447-e-97-da-b-81-bf-1-abcf-00"}},m={},d=[],p={toc:d},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Operations for panther."),(0,a.kt)(c.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);