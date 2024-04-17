"use strict";(self.webpackChunkrobokop_api_docs=self.webpackChunkrobokop_api_docs||[]).push([[996],{53963:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>k,default:()=>_,frontMatter:()=>y,metadata:()=>h,toc:()=>f});var s=a(87462),o=(a(67294),a(3905)),r=a(58219),m=(a(62316),a(51039)),i=a.n(m),l=(a(82723),a(9487)),p=a(41429),n=a(5397),d=a(4667),c=a(9472),u=a(85162);const y={id:"one-hop-source-type-target-type-curie-get-pharos",title:"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source",description:"Returns one hop paths from `source_node_type`  with `curie` to `target_node_type`.",sidebar_label:"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VU1v2zAM/SuCThuQxV2wk2/DVrQDtrVos12KwlFsxlZrWyoltwsM//eRspM4/RwKrLnEksnHr/foVmbgUtTWa1PLWJ6Bb7B2wtQgCmOFVb5wYoWmEgtnGkwhqU0GiV9bWAhxp30hFmmDmk7eiIVXmIMf2UzlRBoLqDjAt4xCEHRC0Eky4LFZkiSD53AKkEnCN7ZQaBzBWIWqAg/oZHzRSoSbRiMQpMcGJtKlBVRKxq302pdAkc5DADEnSHJnZLp0HnWdy24ia0Lji10aZKW5C1w1WfxLjHlI+6UYo+JeEeMLN+MZ9HR4P8K9nBCus6Z24BhqdnDAf/vDPm/SFJxbNaU4G4wJJTW1h9qzubK21GkYXXTl2Kd9JL2Nrzgh0hwTacSo8UKIUYvoFIoR4gj8riKFqNZcgIeK0+34N5GfZrOHSf9Wpc5CSuIQ0eBrMj6ez093OBuYIRmzvIKUk7PIxPW672AGXulyjPK1v3myiq3hw1C7mV/I0qR0U7l8g3T5UirsMYL/bvqCn8lE1euTVVDNfQ5tbzT1MAck6nDrOZ1RiB9EE5U/ysH+YmcaSnxCD9sfvVE5y1ie9uqmmknaheEFkQdqBB7HMurlH7UjmXZROxIUnYIAOnJygLeb/dAgTUsW3lsXRxGapbk29oNqvKmUnxJR3BShTvXUYB4Eo+uVGVfyuTclWMbs2TebfuSyACt3sjqnaDqFIQoFKY3KhrZY43ylAv8GlRLjt2uVtNmUflisfWWCa+Ed2pcWjlPx03iIxWkJivR1dDgXkSXaMMPBsXHG+7DSBHtXKL/xzQ29DbtZDeiU9J6M2p1o/s/OHybv4Y+PbKloNVFTwkjaYbQXcrvZ4/0dHO+vy7jfbzShgprKjm27pH78wrLr+PqmAVzTPT3eKtRqyeMjBmTa8TNxaqVKB8+04N3ZIMj34qncN9KqWVi3qmz4RI/XsL73EWFRvWHocbPeOHQ/GNoYNBpQGW0Pbnv/7jN9W6wfeT1Yzd1Y9MRt2g9/Aak19Qg=",sidebar_class_name:"get api-method",info_path:"docs/automat/automat",custom_edit_url:null},k=void 0,h={unversionedId:"automat/one-hop-source-type-target-type-curie-get-pharos",id:"automat/one-hop-source-type-target-type-curie-get-pharos",title:"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source",description:"Returns one hop paths from `source_node_type`  with `curie` to `target_node_type`.",source:"@site/docs/automat/one-hop-source-type-target-type-curie-get-pharos.api.mdx",sourceDirName:"automat",slug:"/automat/one-hop-source-type-target-type-curie-get-pharos",permalink:"/api-docs/docs/automat/one-hop-source-type-target-type-curie-get-pharos",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"one-hop-source-type-target-type-curie-get-pharos",title:"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source",description:"Returns one hop paths from `source_node_type`  with `curie` to `target_node_type`.",sidebar_label:"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VU1v2zAM/SuCThuQxV2wk2/DVrQDtrVos12KwlFsxlZrWyoltwsM//eRspM4/RwKrLnEksnHr/foVmbgUtTWa1PLWJ6Bb7B2wtQgCmOFVb5wYoWmEgtnGkwhqU0GiV9bWAhxp30hFmmDmk7eiIVXmIMf2UzlRBoLqDjAt4xCEHRC0Eky4LFZkiSD53AKkEnCN7ZQaBzBWIWqAg/oZHzRSoSbRiMQpMcGJtKlBVRKxq302pdAkc5DADEnSHJnZLp0HnWdy24ia0Lji10aZKW5C1w1WfxLjHlI+6UYo+JeEeMLN+MZ9HR4P8K9nBCus6Z24BhqdnDAf/vDPm/SFJxbNaU4G4wJJTW1h9qzubK21GkYXXTl2Kd9JL2Nrzgh0hwTacSo8UKIUYvoFIoR4gj8riKFqNZcgIeK0+34N5GfZrOHSf9Wpc5CSuIQ0eBrMj6ez093OBuYIRmzvIKUk7PIxPW672AGXulyjPK1v3myiq3hw1C7mV/I0qR0U7l8g3T5UirsMYL/bvqCn8lE1euTVVDNfQ5tbzT1MAck6nDrOZ1RiB9EE5U/ysH+YmcaSnxCD9sfvVE5y1ie9uqmmknaheEFkQdqBB7HMurlH7UjmXZROxIUnYIAOnJygLeb/dAgTUsW3lsXRxGapbk29oNqvKmUnxJR3BShTvXUYB4Eo+uVGVfyuTclWMbs2TebfuSyACt3sjqnaDqFIQoFKY3KhrZY43ylAv8GlRLjt2uVtNmUflisfWWCa+Ed2pcWjlPx03iIxWkJivR1dDgXkSXaMMPBsXHG+7DSBHtXKL/xzQ29DbtZDeiU9J6M2p1o/s/OHybv4Y+PbKloNVFTwkjaYbQXcrvZ4/0dHO+vy7jfbzShgprKjm27pH78wrLr+PqmAVzTPT3eKtRqyeMjBmTa8TNxaqVKB8+04N3ZIMj34qncN9KqWVi3qmz4RI/XsL73EWFRvWHocbPeOHQ/GNoYNBpQGW0Pbnv/7jN9W6wfeT1Yzd1Y9MRt2g9/Aak19Qg=",sidebar_class_name:"get api-method",info_path:"docs/automat/automat",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Find `node` by `curie`",permalink:"/api-docs/docs/automat/node-node-type-curie-get-pharos"},next:{title:"Get one-hop connection schema",permalink:"/api-docs/docs/automat/simple-spec-simple-spec-get-pharos"}},g={},f=[{value:"Request",id:"request",level:2}],T={toc:f},b="wrapper";function _(e){let{components:t,...a}=e;return(0,o.kt)(b,(0,s.Z)({},T,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{className:"openapi__heading"},"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source"),(0,o.kt)(i(),{method:"get",path:"/pharos/{source_type}/{target_type}/{curie}",mdxType:"MethodEndpoint"}),(0,o.kt)("p",null,"Returns one hop paths from ",(0,o.kt)("inlineCode",{parentName:"p"},"source_node_type"),"  with ",(0,o.kt)("inlineCode",{parentName:"p"},"curie")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"target_node_type"),"."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Schema"),(0,o.kt)("h2",{id:"request"},"Request"),(0,o.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(p.Z,{className:"paramsItem",param:{required:!0,schema:{title:"Source Type",type:"string"},name:"source_type",in:"path"},mdxType:"ParamsItem"}),(0,o.kt)(p.Z,{className:"paramsItem",param:{required:!0,schema:{title:"Target Type",type:"string"},name:"target_type",in:"path"},mdxType:"ParamsItem"}),(0,o.kt)(p.Z,{className:"paramsItem",param:{required:!0,schema:{title:"Curie",type:"string"},name:"curie",in:"path"},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)("div",null,(0,o.kt)(r.Z,{mdxType:"ApiTabs"},(0,o.kt)(u.default,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Successful Response")),(0,o.kt)("div",null,(0,o.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,o.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,o.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(n.Z,{responseExample:"[\n  null\n]",language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(u.default,{label:"422",value:"422",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Validation Error")),(0,o.kt)("div",null,(0,o.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,o.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details"},(0,o.kt)("summary",{style:{}},(0,o.kt)("span",{className:"openapi-schema__container"},(0,o.kt)("strong",{className:"openapi-schema__property"},"detail"),(0,o.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,o.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details"},(0,o.kt)("summary",{style:{}},(0,o.kt)("span",{className:"openapi-schema__container"},(0,o.kt)("strong",{className:"openapi-schema__property"},"loc"),(0,o.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,o.kt)("span",{className:"openapi-schema__divider"}),(0,o.kt)("span",{className:"openapi-schema__required"},"required"))),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,o.kt)("div",null,(0,o.kt)("span",{className:"badge badge--info"},"anyOf"),(0,o.kt)(c.default,{mdxType:"SchemaTabs"},(0,o.kt)(u.default,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"}},(0,o.kt)("p",null,"string"))),(0,o.kt)(u.default,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"}},(0,o.kt)("p",null,"integer"))))),(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,o.kt)(d.Z,{collapsible:!1,name:"msg",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"type",required:!0,schemaName:"Error Type",qualifierMessage:void 0,schema:{title:"Error Type",type:"string"},mdxType:"SchemaItem"}),(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,o.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(n.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))))}_.isMDXComponent=!0}}]);