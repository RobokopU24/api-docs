"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2321],{52991:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(67294),o=n(86010),r=n(53438),c=n(39960),i=n(13919),s=n(95999);const l="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function p(e){let{href:t,children:n}=e;return a.createElement(c.Z,{href:t,className:(0,o.Z)("card padding--lg",l)},n)}function u(e){let{href:t,icon:n,title:r,description:c}=e;return a.createElement(p,{href:t},a.createElement("h2",{className:(0,o.Z)("text--truncate",d),title:r},n," ",r),c&&a.createElement("p",{className:(0,o.Z)("text--truncate",m),title:c},c))}function g(e){let{item:t}=e;const n=(0,r.Wl)(t);return n?a.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,r.xz)(t.docId??void 0);return a.createElement(u,{href:t.href,icon:n,title:t.label,description:o?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(f,{item:t});case"category":return a.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,r.jA)();return a.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return a.createElement(b,e);const c=(0,r.MN)(t);return a.createElement("section",{className:(0,o.Z)("row",n)},c.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(h,{item:e})))))}},46275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(87462),o=(n(67294),n(3905)),r=n(52991),c=n(53438);const i={id:"gtopdb",title:"gtopdb",description:"gtopdb",custom_edit_url:null},s=void 0,l={unversionedId:"automat/gtopdb",id:"automat/gtopdb",title:"gtopdb",description:"gtopdb",source:"@site/docs/automat/gtopdb.tag.mdx",sourceDirName:"automat",slug:"/automat/gtopdb",permalink:"/api-docs/docs/automat/gtopdb",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"gtopdb",title:"gtopdb",description:"gtopdb",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get one-hop connection schema",permalink:"/api-docs/docs/automat/simple-spec-simple-spec-get-c-936-cd-2-f-6-c-07-4-e-5-a-a-672-36-ac-35-e-95-a-53"},next:{title:"Meta knowledge graph representation of this TRAPI web service.",permalink:"/api-docs/docs/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-b-98725-c-4-275-b-404-a-8-c-4-e-9-ed-8-ea-7154-f-4"}},d={},m=[],p={toc:m};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Operations for gtopdb."),(0,o.kt)(r.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);