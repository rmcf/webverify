<template>
  <q-page class="div-container">
    <div class="q-pa-sm" style="margin-bottom: 5rem;">
      <q-card>
        <q-card-section class="bg-amber-5 text-grey-9">
          <div class="text-h5">{{ $t("uploadDocument") }}</div>
          <div class="text-subtitle3">
            {{ $t("allowedFormats") }}: PDF, ODT, ZIP
          </div>
        </q-card-section>

        <q-card-section class="q-pa-lg">
          <!-- quasar file picker -->
          <div>
            <q-file
              color="primary"
              v-model="model"
              clearable
              @input="quasarFileInput"
              :label="$t('uploadFileLable')"
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>
          </div>

          <!-- form buttons -->
          <div class="row justify-end" style="height:50px">
            <span v-show="loading">
              <q-btn flat disable class="q-ml-sm q-mt-md">
                <img
                  src="/webverify/img/spinner.gif"
                  alt="spinner"
                  height="30px"
                />
              </q-btn>
            </span>
            <span>
              <q-btn
                :disable="query.signedDocument.bytes ? false : true"
                @click="postDocumentAxios"
                :label="$t('veryfyButton')"
                color="primary"
                class="q-ml-sm q-mt-md"
              />
              <q-tooltip
                v-if="!query.signedDocument.bytes"
                content-style="font-size: 14px"
              >
                {{ $t("veryfyButtonPopup") }}
              </q-tooltip>
            </span>
          </div>
        </q-card-section>
      </q-card>

      <!-- RESPONSE -->
      <transition-group
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <q-card v-if="answer" class="margin-top" key="card-response">
          <!-- response header -->
          <q-card-section class="bg-blue-5 text-white">
            <div class="text-h5">{{ $t("validationResults") }}</div>
            <div class="text-subtitle3">{{ $t("simpleReport") }}</div>
          </q-card-section>

          <q-card-section class="section-padding">
            <!-- validation policy -->
            <div class="q-mb-md">
              <q-card flat bordered>
                <q-card-section class="text-body1">
                  {{ $t("validationPolicy") }} :
                  {{ answer.ValidationPolicy.PolicyName }}
                </q-card-section>
                <q-separator inset />
                <q-card-section>
                  {{ $t("validationPolicyText") }}
                </q-card-section>
              </q-card>
            </div>

            <!-- signatures array -->
            <div v-if="answer.signatureOrTimestamp">
              <div
                v-for="(signature, index) in answer.signatureOrTimestamp"
                :key="signature.Signature.Id"
                class="q-mb-md"
              >
                <q-list bordered class="rounded-borders">
                  <q-expansion-item
                    :header-class="
                      signatureColor(signature.Signature.Indication)
                    "
                    class="overflow-hidden"
                    style="border-radius: 4px"
                    expand-icon-class="text-black"
                    expand-separator
                    :icon="signatureIcon(signature.Signature.Indication)"
                    :label="$t('signature') + ' ' + (index + 1)"
                  >
                    <q-card>
                      <q-card-section>
                        <q-markup-table
                          flat
                          dense
                          separator="none"
                          class="signature-data"
                        >
                          <tbody>
                            <!-- Qualification -->
                            <tr>
                              <td class="text-left">
                                {{ $t("qualification") }}:
                              </td>
                              <td class="text-left">
                                {{ signature.Signature.SignatureLevel.value }}
                                <span>
                                  <q-icon
                                    name="info_outline"
                                    class="text-teal"
                                    size="sm"
                                  />
                                  <q-tooltip
                                    transition-show="scale"
                                    transition-hide="scale"
                                    content-style="font-size: 12px"
                                  >
                                    {{
                                      signature.Signature.SignatureLevel
                                        .description
                                    }}
                                  </q-tooltip>
                                </span>
                              </td>
                            </tr>
                            <!-- Signature format -->
                            <tr>
                              <td class="text-left">
                                {{ $t("signatureFormat") }}:
                              </td>
                              <td class="text-left">
                                {{ signature.Signature.SignatureFormat }}
                              </td>
                            </tr>
                            <!-- Indication -->
                            <tr v-if="signature.Signature.Indication">
                              <td class="text-left">{{ $t("indication") }}:</td>
                              <td class="text-left">
                                <q-chip
                                  square
                                  :color="
                                    signatureIndication(
                                      signature.Signature.Indication
                                    )
                                  "
                                  text-color="white"
                                  :icon="
                                    signatureIcon(
                                      signature.Signature.Indication
                                    )
                                  "
                                >
                                  {{
                                    signatureIndicationTranslated(
                                      signature.Signature.Indication
                                    )
                                  }}
                                </q-chip>
                              </td>
                            </tr>
                            <!-- SUB INDICATION -->
                            <!-- <tr v-if="signature.Signature.SubIndication">
                              <td class="text-left">Sub indication:</td>
                              <td class="text-left">
                                <q-chip
                                  dense
                                  square
                                  :color="
                                    signatureIndication(
                                      signature.Signature.Indication
                                    )
                                  "
                                  text-color="white"
                                >
                                  {{ signature.Signature.SubIndication }}
                                </q-chip>
                              </td>
                            </tr> -->
                            <!-- ERRORS -->
                            <!-- <tr v-if="signature.Signature.Errors.length > 0">
                              <td class="text-left">Errors:</td>
                              <td class="text-left text-red-9">
                                <div
                                  v-for="(error, index) in signature.Signature
                                    .Errors"
                                  :key="index"
                                >
                                  {{ error }}
                                </div>
                              </td>
                            </tr> -->
                            <!-- WARNINGS -->
                            <!-- <tr v-if="signature.Signature.Warnings.length > 0">
                              <td class="text-left">Warnings:</td>
                              <td class="text-left text-orange-10">
                                <div
                                  v-for="(warning, index) in signature.Signature
                                    .Warnings"
                                  :key="index"
                                >
                                  {{ warning }}
                                </div>
                              </td>
                            </tr> -->
                            <!-- Certificate Chain -->
                            <tr>
                              <td class="text-left">
                                {{ $t("certificateChain") }}:
                              </td>
                              <td class="text-left">
                                <div
                                  v-for="(certificate, index) in signature
                                    .Signature.CertificateChain.Certificate"
                                  :key="index"
                                >
                                  <q-icon
                                    name="link"
                                    size="sm"
                                    class="text-grey-9"
                                  />
                                  {{ certificate.qualifiedName }}
                                </div>
                              </td>
                            </tr>
                            <!-- On claimed time -->
                            <tr>
                              <td class="text-left">
                                {{ $t("onClaimedTime") }}:
                              </td>
                              <td class="text-left">
                                {{ signature.Signature.SigningTime }}
                              </td>
                            </tr>
                            <!-- Best signature time -->
                            <tr>
                              <td class="text-left">
                                {{ $t("bestSignatureTime") }}:
                              </td>
                              <td class="text-left">
                                {{ signature.Signature.BestSignatureTime }}
                                <span>
                                  <q-icon
                                    name="info_outline"
                                    class="text-teal"
                                    size="sm"
                                  />
                                  <q-tooltip
                                    transition-show="scale"
                                    transition-hide="scale"
                                    content-style="font-size: 12px"
                                  >
                                    {{ $t("bestSignatureTimePopup") }}
                                  </q-tooltip>
                                </span>
                              </td>
                            </tr>
                            <!-- Signature position -->
                            <tr>
                              <td class="text-left">
                                {{ $t("signaturePosition") }}:
                              </td>
                              <td class="text-left">
                                {{ index + 1 }} {{ $t("signaturePositionOf") }}
                                {{ answer.signatureOrTimestamp.length }}
                              </td>
                            </tr>
                            <!-- SIGNATURE SCOPE -->
                            <!-- <tr
                              v-for="(signaturescope, index) in signature
                                .Signature.SignatureScope"
                              :key="index"
                            >
                              <td class="text-left">Signature scope:</td>
                              <td class="text-left">
                                <div>
                                  {{ signaturescope.name }} ({{
                                    signaturescope.scope
                                  }})
                                </div>
                                <div>{{ signaturescope.value }}</div>
                              </td>
                            </tr> -->
                          </tbody>
                        </q-markup-table>
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </q-list>
              </div>
            </div>

            <!-- document information -->
            <div class="q-mb-md">
              <q-card flat bordered>
                <q-card-section class="text-body1">
                  {{ $t("documentInfo") }}
                </q-card-section>
                <q-separator inset />
                <q-card-section>
                  <q-markup-table
                    flat
                    dense
                    separator="none"
                    class="signature-data"
                  >
                    <tbody>
                      <tr>
                        <td class="text-left">{{ $t("signaturesStatus") }}:</td>
                        <td class="text-left">
                          {{ answer.ValidSignaturesCount }}
                          {{ $t("validSignatures") }}
                          {{ answer.SignaturesCount }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">{{ $t("documentName") }}:</td>
                        <td class="text-left">{{ answer.DocumentName }}</td>
                      </tr>
                    </tbody>
                  </q-markup-table>
                </q-card-section>
              </q-card>
            </div>
          </q-card-section>
        </q-card>
      </transition-group>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";
// import { VueReCaptcha } from "vue-recaptcha-v3";
// Vue.use(VueReCaptcha, {
//   siteKey: "6LfjdJgaAAAAAOG_aYerexEOyLJ-CUHrooALUgg8",
//   loaderOptions: {
//     useRecaptchaNet: true
//   }
// });

export default {
  name: "PageIndex",

  data() {
    return {
      answer: null, // response from API
      model: null, // binded value of input element
      loading: false, // progress spinner status
      query: {
        signedDocument: {
          bytes: "",
          digestAlgorithm: null,
          name: null
        },
        policy: null,
        signatureId: null
      } // body of post query
    };
  },

  methods: {
    // async file reading function
    readFileAsync(file) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result);
        };

        reader.onerror = reject;

        reader.readAsDataURL(file);
      });
    },

    // quasar file input
    async quasarFileInput(file) {
      this.loading = true;
      this.answer = null;
      if (file) {
        let pdfBase64 = await this.readFileAsync(file);
        let pdfBase64String = String(pdfBase64);
        let pdfBase64Clean = pdfBase64String.replace(/^.*,/i, "");
        this.query.signedDocument.bytes = pdfBase64Clean;
        this.query.signedDocument.name = file.name;
      } else {
        this.query.signedDocument.bytes = null;
        this.query.signedDocument.name = null;
      }
      this.loading = false;
    },

    // post document with AXIOS
    async postDocumentAxios() {
      this.loading = true;

      // RECAPTCHA 3
      // await this.$recaptchaLoaded();
      // let token = await this.$recaptcha("login");
      // console.log(token);

      // post request
      const url =
        "https://webapp.edoc.link/dss-webapp/services/rest/validation/validateSignature";
      await axios.post(url, this.query).then(
        response => {
          this.answer = response.data.SimpleReport;
        },
        error => {
          console.log(error);
        }
      );
      this.loading = false;
    },

    // chip color
    signatureIndication(indication) {
      switch (indication) {
        case "TOTAL_FAILED":
          return "red";
        case "INDETERMINATE":
          return "orange";
        case "TOTAL_PASSED":
          return "teal";
        default:
          return "grey";
      }
    },

    // chip icon
    signatureIcon(indication) {
      switch (indication) {
        case "TOTAL_FAILED":
          return "highlight_off";
        case "INDETERMINATE":
          return "error_outline";
        case "TOTAL_PASSED":
          return "check_circle_outline";
        default:
          return "link";
      }
    },

    // expansion item color
    signatureColor(indication) {
      switch (indication) {
        case "TOTAL_FAILED":
          return "text-red-9 bg-grey-1";
        case "INDETERMINATE":
          return "text-orange-9 bg-grey-1";
        case "TOTAL_PASSED":
          return "text-green-9 bg-grey-1";
        default:
          return "text-grey-9 bg-grey-1";
      }
    },

    // indication translated
    signatureIndicationTranslated(indication) {
      switch (indication) {
        case "TOTAL_FAILED":
          return this.$t("indication_TOTAL_FAILED");
        case "INDETERMINATE":
          return this.$t("indication_INDETERMINATE");
        case "TOTAL_PASSED":
          return this.$t("indication_TOTAL_PASSED");
      }
    }
  }
};
</script>

<style>
.q-uploader__list {
  height: 10rem;
  background-color: #fafafa;
}

.div-container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.section-padding {
  padding: 2rem 4rem 2rem 4rem;
}

.file-content {
  word-wrap: break-word;
  overflow-y: scroll;
  height: 300px;
}

.margin-top {
  margin-top: 4em;
}

.signature-data tbody td {
  vertical-align: top;
  font-size: 14px;
}

.signature-data tbody td .q-chip {
  font-size: 12px;
}

/* Small devices (landscape phones, 576px and up) */
@media (max-width: 576px) {
  .div-container {
    max-width: 100%;
  }
  .section-padding {
    padding: 15px;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .div-container {
    max-width: 540px;
  }
  .section-padding {
    padding: 15px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .div-container {
    max-width: 720px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .div-container {
    max-width: 960px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .div-container {
    max-width: 1140px;
  }
}
</style>
