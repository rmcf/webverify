(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{8041:function(t,e,a){"use strict";a("cb9a")},"8b24":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"div-container"},[a("div",{staticClass:"q-pa-sm"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.spinnerState,expression:"spinnerState"}]},[a("div",{staticClass:"q-pb-lg text-center"},[a("div",[a("img",{attrs:{src:"/webverify/img/spinner.gif",alt:"spinner",width:"100px"}})]),a("div",{staticClass:"q-mt-md text-primary"},[t._v("Loading...")])])]),a("q-card",[a("q-card-section",{staticClass:"bg-amber-5 text-grey-9"},[a("div",{staticClass:"text-h5"},[t._v("Upload signed document")]),a("div",{staticClass:"text-subtitle3"},[t._v("allowed formats: PDF, ZIP")])]),a("q-card-section",{staticClass:"q-pa-lg"},[a("div",[a("q-file",{attrs:{color:"primary",clearable:"",label:"Upload file"},on:{input:t.quasarFileInput},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"attach_file"}})]},proxy:!0}]),model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1),a("div",{staticClass:"row justify-end"},[a("q-btn",{staticClass:"q-ml-sm q-mt-md",attrs:{label:"Verify",type:"reset",color:"primary"},on:{click:t.postDocumentAxios}})],1)])],1),t.query.signedDocument.bytes?a("div",{staticClass:"q-mt-lg file-content"},[a("div",{staticClass:"text-center"},[a("p",[t._v("PDF to base64")])]),a("div",[t._v(t._s(t.query.signedDocument.bytes))])]):t._e(),t.query.signedDocument.bytes?a("div",{staticClass:"q-mt-lg file-content"},[a("div",{staticClass:"text-center"},[a("p",[t._v("Query JSON")])]),a("div",[t._v(t._s(t.query))])]):t._e(),t.answer?a("q-card",{staticClass:"margin-top"},[a("q-card-section",{staticClass:"bg-blue-5 text-white"},[a("div",{staticClass:"text-h5"},[t._v("Validation results")]),a("div",{staticClass:"text-subtitle3"},[t._v("Simple Report")])]),a("q-card-section",{staticStyle:{padding:"2rem 4rem 2rem 4rem"}},[a("div",{staticClass:"q-mb-md"},[a("q-card",{attrs:{flat:"",bordered:""}},[a("q-card-section",{staticClass:"text-body1"},[t._v("\n              Validation Policy :\n              "+t._s(t.answer.ValidationPolicy.PolicyName)+"\n            ")]),a("q-separator",{attrs:{inset:""}}),a("q-card-section",[t._v("\n              "+t._s(t.answer.ValidationPolicy.PolicyDescription)+"\n            ")])],1)],1),t._l(t.answer.signatureOrTimestamp,(function(e,s){return a("div",{key:e.Signature.Id,staticClass:"q-mb-md"},[a("q-list",{staticClass:"rounded-borders",attrs:{bordered:""}},[a("q-expansion-item",{staticClass:"overflow-hidden",staticStyle:{"border-radius":"4px"},attrs:{"header-class":"bg-blue-grey-1","expand-icon-class":"text-black","expand-separator":"",icon:"link",label:e.Signature.Id}},[a("q-card",[a("q-card-section",[a("q-markup-table",{staticClass:"signature-data",attrs:{flat:"",dense:"",separator:"none"}},[a("tbody",[a("tr",[a("td",{staticClass:"text-left"},[t._v("\n                          Qualification:\n                        ")]),a("td",{staticClass:"text-left"},[t._v("\n                          "+t._s(e.Signature.SignatureLevel.value)+"\n                          "),a("span",[a("q-icon",{staticClass:"text-teal",attrs:{name:"info_outline",size:"sm"}}),a("q-tooltip",{attrs:{"transition-show":"scale","transition-hide":"scale","content-style":"font-size: 12px"}},[t._v("\n                              "+t._s(e.Signature.SignatureLevel.description)+"\n                            ")])],1)])]),a("tr",[a("td",{staticClass:"text-left"},[t._v("Signature format:")]),a("td",{staticClass:"text-left"},[t._v("\n                          "+t._s(e.Signature.SignatureFormat)+"\n                        ")])]),a("tr",[a("td",{staticClass:"text-left"},[t._v("Indication:")]),a("td",{staticClass:"text-left"},[a("q-chip",{attrs:{dense:"",square:"",color:"teal","text-color":"white",icon:"check_circle"}},[t._v("\n                            "+t._s(e.Signature.Indication)+"\n                          ")])],1)]),t._l(e.Signature.Warnings,(function(e){return a("tr",{key:e.key},[a("td",{staticClass:"text-left"}),a("td",{staticClass:"text-left text-orange-10"},[t._v("\n                          "+t._s(e)+"\n                        ")])])})),a("tr",[a("td",{staticClass:"text-left"},[t._v("Certificate Chain:")]),a("td",{staticClass:"text-left"},t._l(e.Signature.CertificateChain.Certificate,(function(e,s){return a("div",{key:s},[a("q-icon",{staticClass:"text-teal",attrs:{name:"done",size:"sm"}}),t._v("\n                            "+t._s(e.qualifiedName)+"\n                          ")],1)})),0)]),a("tr",[a("td",{staticClass:"text-left"},[t._v("On claimed time:")]),a("td",{staticClass:"text-left"},[t._v("\n                          "+t._s(e.Signature.SigningTime)+"\n                        ")])]),a("tr",[a("td",{staticClass:"text-left"},[t._v("Best signature time:")]),a("td",{staticClass:"text-left"},[t._v("\n                          0000-00-00Z00:00:00\n                          "),a("span",[a("q-icon",{staticClass:"text-teal",attrs:{name:"info_outline",size:"sm"}}),a("q-tooltip",{attrs:{"transition-show":"scale","transition-hide":"scale","content-style":"font-size: 12px"}},[t._v("\n                              Lowest time at which there exists a proof of\n                              existence for the signature\n                            ")])],1)])]),a("tr",[a("td",{staticClass:"text-left"},[t._v("Signature position:")]),a("td",{staticClass:"text-left"},[t._v("\n                          "+t._s(s+1)+" out of\n                          "+t._s(t.answer.signatureOrTimestamp.length)+"\n                        ")])]),t._l(e.Signature.SignatureScope,(function(e,s){return a("tr",{key:s},[a("td",{staticClass:"text-left"},[t._v("Signature scope:")]),a("td",{staticClass:"text-left"},[a("div",[t._v("\n                            "+t._s(e.name)+" ("+t._s(e.scope)+")\n                          ")]),a("div",[t._v(t._s(e.value))])])])}))],2)])],1)],1)],1)],1)],1)})),a("div",{staticClass:"q-mb-md"},[a("q-card",{attrs:{flat:"",bordered:""}},[a("q-card-section",{staticClass:"text-body1"},[t._v("\n              Document Information\n            ")]),a("q-separator",{attrs:{inset:""}}),a("q-card-section",[a("q-markup-table",{staticClass:"signature-data",attrs:{flat:"",dense:"",separator:"none"}},[a("tbody",[a("tr",[a("td",{staticClass:"text-left"},[t._v("Signatures status:")]),a("td",{staticClass:"text-left text-green"},[t._v("\n                      "+t._s(t.answer.signatureOrTimestamp.length)+" valid\n                      signatures, out of\n                      "+t._s(t.answer.signatureOrTimestamp.length)+"\n                    ")])]),a("tr",[a("td",{staticClass:"text-left"},[t._v("Document name:")]),a("td",{staticClass:"text-left"},[t._v(t._s(t.answer.DocumentName))])])])])],1)],1)],1)],2)],1):t._e()],1)])},i=[],n=(a("e6cf"),a("5319"),a("bc3a")),r=a.n(n),l={name:"PageIndex",data(){return{answer:null,model:null,loading:!1,query:{signedDocument:{bytes:"",digestAlgorithm:null,name:"test.pdf"},policy:null,signatureId:null}}},methods:{readFileAsync(t){return new Promise(((e,a)=>{let s=new FileReader;s.onload=()=>{e(s.result)},s.onerror=a,s.readAsDataURL(t)}))},async quasarFileInput(t){if(this.loading=!0,this.answer=null,t){let e=await this.readFileAsync(t),a=String(e),s=a.replace(/^.*,/i,"");this.query.signedDocument.bytes=s}else this.query.signedDocument.bytes="";this.loading=!1},async receiveAnswer(){const t=await fetch("json/answer.json");if(t.ok){let e=await t.json();this.answer=await e.SimpleReport}else alert("Data Error")},async postDocumentAxios(){this.loading=!0;const t="https://webapp.edoc.link/dss-webapp/services/rest/validation/validateSignature";await r.a.post(t,this.query).then((t=>{this.answer=t.data.SimpleReport}),(t=>{console.log(t)})),this.loading=!1}},computed:{spinnerState:function(){return!0===this.loading}}},o=l,c=(a("8041"),a("2877")),d=a("9989"),u=a("f09f"),m=a("a370"),p=a("7d53"),v=a("0016"),f=a("9c40"),g=a("eb85"),_=a("1c1c"),C=a("3b73"),x=a("2bb1"),b=a("05c0"),q=a("b047"),y=a("ee89"),h=a("eebe"),w=a.n(h),S=Object(c["a"])(o,s,i,!1,null,null,null);e["default"]=S.exports;w()(S,"components",{QPage:d["a"],QCard:u["a"],QCardSection:m["a"],QFile:p["a"],QIcon:v["a"],QBtn:f["a"],QSeparator:g["a"],QList:_["a"],QExpansionItem:C["a"],QMarkupTable:x["a"],QTooltip:b["a"],QChip:q["a"],QUploader:y["a"]})},cb9a:function(t,e,a){}}]);