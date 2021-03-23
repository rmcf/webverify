(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{8041:function(t,e,s){"use strict";s("cb9a")},"8b24":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"div-container"},[s("div",{staticClass:"q-pa-sm"},[s("q-card",[s("q-card-section",{staticClass:"bg-amber-5 text-grey-9"},[s("div",{staticClass:"text-h5"},[t._v("Upload signed document")]),s("div",{staticClass:"text-subtitle3"},[t._v("allowed formats: PDF, ZIP")])]),s("q-card-section",{staticClass:"q-pa-lg"},[s("div",[s("q-file",{attrs:{color:"primary",clearable:"",label:"Upload file"},on:{input:t.quasarFileInput},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"attach_file"}})]},proxy:!0}]),model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1),s("div",{staticClass:"row justify-end"},[s("q-btn",{staticClass:"q-mt-md",attrs:{label:"Verify",type:"submit",color:"primary"}}),s("q-btn",{staticClass:"q-ml-sm q-mt-md",attrs:{label:"Answer",type:"reset",color:"red",flat:""},on:{click:t.receiveAnswer}}),s("q-btn",{staticClass:"q-ml-sm q-mt-md",attrs:{label:"Post",type:"reset",color:"green",flat:""},on:{click:t.postDocument}})],1)])],1),t.query.signedDocument.bytes?s("div",{staticClass:"q-mt-lg file-content"},[s("div",{staticClass:"text-center"},[s("p",[t._v("PDF to base64")])]),s("div",[t._v(t._s(t.query.signedDocument.bytes))])]):t._e(),t.query.signedDocument.bytes?s("div",{staticClass:"q-mt-lg file-content"},[s("div",{staticClass:"text-center"},[s("p",[t._v("Query JSON")])]),s("div",[t._v(t._s(t.query))])]):t._e(),t.answer?s("q-card",{staticClass:"margin-top"},[s("q-card-section",{staticClass:"bg-blue-5 text-white"},[s("div",{staticClass:"text-h5"},[t._v("Validation results")]),s("div",{staticClass:"text-subtitle3"},[t._v("Simple Report")])]),s("q-card-section",{staticStyle:{padding:"2rem 4rem 2rem 4rem"}},[s("div",{staticClass:"q-mb-md"},[s("q-card",{attrs:{flat:"",bordered:""}},[s("q-card-section",{staticClass:"text-body1"},[t._v("\n              Validation Policy :\n              "+t._s(t.answer.ValidationPolicy.PolicyName)+"\n            ")]),s("q-separator",{attrs:{inset:""}}),s("q-card-section",[t._v("\n              "+t._s(t.answer.ValidationPolicy.PolicyDescription)+"\n            ")])],1)],1),t._l(t.answer.signatureOrTimestamp,(function(e,a){return s("div",{key:e.Signature.Id,staticClass:"q-mb-md"},[s("q-list",{staticClass:"rounded-borders",attrs:{bordered:""}},[s("q-expansion-item",{staticClass:"overflow-hidden",staticStyle:{"border-radius":"4px"},attrs:{"header-class":"bg-blue-grey-1","expand-icon-class":"text-black","expand-separator":"",icon:"link",label:e.Signature.Id}},[s("q-card",[s("q-card-section",[s("q-markup-table",{staticClass:"signature-data",attrs:{flat:"",dense:"",separator:"none"}},[s("tbody",[s("tr",[s("td",{staticClass:"text-left"},[t._v("\n                          Qualification:\n                        ")]),s("td",{staticClass:"text-left"},[t._v("\n                          "+t._s(e.Signature.SignatureLevel.value)+"\n                          "),s("span",[s("q-icon",{staticClass:"text-primary",attrs:{name:"info_outline",size:"sm"}}),s("q-tooltip",{attrs:{"transition-show":"scale","transition-hide":"scale","content-style":"font-size: 12px"}},[t._v("\n                              "+t._s(e.Signature.SignatureLevel.description)+"\n                            ")])],1)])]),s("tr",[s("td",{staticClass:"text-left"},[t._v("Signature format:")]),s("td",{staticClass:"text-left"},[t._v("\n                          "+t._s(e.Signature.SignatureFormat)+"\n                        ")])]),s("tr",[s("td",{staticClass:"text-left"},[t._v("Indication:")]),s("td",{staticClass:"text-left"},[s("q-chip",{attrs:{dense:"",square:"",color:"teal","text-color":"white",icon:"check_circle"}},[t._v("\n                            "+t._s(e.Signature.Indication)+"\n                          ")])],1)]),t._l(e.Signature.Warnings,(function(e){return s("tr",{key:e.key},[s("td",{staticClass:"text-left"}),s("td",{staticClass:"text-left text-orange-10"},[t._v("\n                          "+t._s(e)+"\n                        ")])])})),s("tr",[s("td",{staticClass:"text-left"},[t._v("Certificate Chain:")]),s("td",{staticClass:"text-left"},t._l(e.Signature.CertificateChain.Certificate,(function(e,a){return s("div",{key:a},[s("q-icon",{staticClass:"text-teal",attrs:{name:"done",size:"sm"}}),t._v("\n                            "+t._s(e.qualifiedName)+"\n                          ")],1)})),0)]),s("tr",[s("td",{staticClass:"text-left"},[t._v("On claimed time:")]),s("td",{staticClass:"text-left"},[t._v("\n                          "+t._s(e.Signature.SigningTime)+"\n                        ")])]),s("tr",[s("td",{staticClass:"text-left"},[t._v("Best signature time:")]),s("td",{staticClass:"text-left"},[t._v("\n                          0000-00-00Z00:00:00\n                          "),s("span",[s("q-icon",{staticClass:"text-primary",attrs:{name:"info_outline",size:"sm"}}),s("q-tooltip",{attrs:{"transition-show":"scale","transition-hide":"scale","content-style":"font-size: 12px"}},[t._v("\n                              Lowest time at which there exists a proof of\n                              existence for the signature\n                            ")])],1)])]),s("tr",[s("td",{staticClass:"text-left"},[t._v("Signature position:")]),s("td",{staticClass:"text-left"},[t._v("\n                          "+t._s(a+1)+" out of\n                          "+t._s(t.answer.signatureOrTimestamp.length)+"\n                        ")])]),t._l(e.Signature.SignatureScope,(function(e,a){return s("tr",{key:a},[s("td",{staticClass:"text-left"},[t._v("Signature scope:")]),s("td",{staticClass:"text-left"},[s("div",[t._v("\n                            "+t._s(e.name)+" ("+t._s(e.scope)+")\n                          ")]),s("div",[t._v(t._s(e.value))])])])}))],2)])],1)],1)],1)],1)],1)})),s("div",{staticClass:"q-mb-md"},[s("q-card",{attrs:{flat:"",bordered:""}},[s("q-card-section",{staticClass:"text-body1"},[t._v("\n              Document Information\n            ")]),s("q-separator",{attrs:{inset:""}}),s("q-card-section",[s("q-markup-table",{staticClass:"signature-data",attrs:{flat:"",dense:"",separator:"none"}},[s("tbody",[s("tr",[s("td",{staticClass:"text-left"},[t._v("Signatures status:")]),s("td",{staticClass:"text-left text-green"},[t._v("\n                      "+t._s(t.answer.signatureOrTimestamp.length)+" valid\n                      signatures, out of\n                      "+t._s(t.answer.signatureOrTimestamp.length)+"\n                    ")])]),s("tr",[s("td",{staticClass:"text-left"},[t._v("Document name:")]),s("td",{staticClass:"text-left"},[t._v(t._s(t.answer.DocumentName))])])])])],1)],1)],1)],2)],1):t._e()],1)])},i=[],n=(s("e6cf"),s("5319"),{name:"PageIndex",data(){return{query:{signedDocument:{bytes:"",digestAlgorithm:null,name:"test.pdf"},policy:null,signatureId:null},answer:null,tab:"simple",model:null}},methods:{readFileAsync(t){return new Promise(((e,s)=>{let a=new FileReader;a.onload=()=>{e(a.result)},a.onerror=s,a.readAsDataURL(t)}))},async quasarFileInput(t){if(t){let e=await this.readFileAsync(t),s=String(e),a=s.replace(/^.*,/i,"");this.query.signedDocument.bytes=a}else this.query.signedDocument.bytes=""},async receiveAnswer(){const t=await fetch("json/answer.json");if(t.ok){let e=await t.json();this.answer=await e.SimpleReport}else alert("Data Error")},postDocument(){const t=this.query,e="http://webapp.edoc.link/dss-webapp/services/rest/validation/validateSignature";fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>t.json())).then((t=>{console.log("Success:",t)})).catch((t=>{console.error("Error:",t)}))}}}),r=n,l=(s("8041"),s("2877")),c=s("9989"),o=s("f09f"),d=s("a370"),u=s("7d53"),m=s("0016"),p=s("9c40"),f=s("eb85"),v=s("1c1c"),_=s("3b73"),g=s("2bb1"),C=s("05c0"),b=s("b047"),q=s("ee89"),y=s("eebe"),x=s.n(y),h=Object(l["a"])(r,a,i,!1,null,null,null);e["default"]=h.exports;x()(h,"components",{QPage:c["a"],QCard:o["a"],QCardSection:d["a"],QFile:u["a"],QIcon:m["a"],QBtn:p["a"],QSeparator:f["a"],QList:v["a"],QExpansionItem:_["a"],QMarkupTable:g["a"],QTooltip:C["a"],QChip:b["a"],QUploader:q["a"]})},cb9a:function(t,e,s){}}]);