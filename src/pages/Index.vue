<template>
  <q-page class="div-container">
    <div class="q-pa-sm">
      <q-card>
        <q-card-section class="bg-amber-5 text-grey-9">
          <div class="text-h5">Upload signed document</div>
          <div class="text-subtitle3">allowed formats: PDF, ZIP</div>
        </q-card-section>

        <q-card-section class="q-pa-lg">
          <!-- quasar file picker -->
          <div>
            <q-file
              color="primary"
              v-model="model"
              clearable
              @input="quasarFileInput"
              label="Upload file"
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>
          </div>

          <!-- form buttons -->
          <div class="row justify-end">
            <q-btn
              class="q-mt-md"
              label="Verify"
              type="submit"
              color="primary"
            />
            <q-btn
              @click="receiveAnswer"
              label="Answer"
              type="reset"
              color="red"
              flat
              class="q-ml-sm q-mt-md"
            />
            <q-btn
              @click="postDocument"
              label="Post"
              type="reset"
              color="green"
              flat
              class="q-ml-sm q-mt-md"
            />
          </div>
        </q-card-section>
      </q-card>

      <div v-if="query.signedDocument.bytes" class="q-mt-lg file-content">
        <div class="text-center"><p>PDF to base64</p></div>
        <div>{{ query.signedDocument.bytes }}</div>
      </div>
      <div v-if="query.signedDocument.bytes" class="q-mt-lg file-content">
        <div class="text-center"><p>Query JSON</p></div>
        <div>{{ query }}</div>
      </div>

      <!-- response -->
      <q-card v-if="answer" class="margin-top">
        <!-- response header -->
        <q-card-section class="bg-blue-5 text-white">
          <div class="text-h5">Validation results</div>
          <div class="text-subtitle3">Simple Report</div>
        </q-card-section>

        <q-card-section style="padding: 2rem 4rem 2rem 4rem">
          <!-- validation policy -->
          <div class="q-mb-md">
            <q-card flat bordered>
              <q-card-section class="text-body1">
                Validation Policy :
                {{ answer.ValidationPolicy.PolicyName }}
              </q-card-section>
              <q-separator inset />
              <q-card-section>
                {{ answer.ValidationPolicy.PolicyDescription }}
              </q-card-section>
            </q-card>
          </div>

          <!-- signatures array -->
          <div
            v-for="(signature, index) in answer.signatureOrTimestamp"
            :key="signature.Signature.Id"
            class="q-mb-md"
          >
            <q-list bordered class="rounded-borders">
              <q-expansion-item
                header-class="bg-blue-grey-1"
                class="overflow-hidden"
                style="border-radius: 4px"
                expand-icon-class="text-black"
                expand-separator
                icon="link"
                :label="signature.Signature.Id"
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
                        <tr>
                          <td class="text-left">
                            Qualification:
                          </td>
                          <td class="text-left">
                            {{ signature.Signature.SignatureLevel.value }}
                            <span>
                              <q-icon
                                name="info_outline"
                                class="text-primary"
                                size="sm"
                              />
                              <q-tooltip
                                transition-show="scale"
                                transition-hide="scale"
                                content-style="font-size: 12px"
                              >
                                {{
                                  signature.Signature.SignatureLevel.description
                                }}
                              </q-tooltip>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-left">Signature format:</td>
                          <td class="text-left">
                            {{ signature.Signature.SignatureFormat }}
                          </td>
                        </tr>
                        <tr>
                          <td class="text-left">Indication:</td>
                          <td class="text-left">
                            <q-chip
                              dense
                              square
                              color="teal"
                              text-color="white"
                              icon="check_circle"
                            >
                              {{ signature.Signature.Indication }}
                            </q-chip>
                          </td>
                        </tr>
                        <tr
                          v-for="warning in signature.Signature.Warnings"
                          :key="warning.key"
                        >
                          <td class="text-left"></td>
                          <td class="text-left text-orange-10">
                            {{ warning }}
                          </td>
                        </tr>
                        <tr>
                          <td class="text-left">Certificate Chain:</td>
                          <td class="text-left">
                            <div
                              v-for="(certificate, index) in signature.Signature
                                .CertificateChain.Certificate"
                              :key="index"
                            >
                              <q-icon name="done" size="sm" class="text-teal" />
                              {{ certificate.qualifiedName }}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-left">On claimed time:</td>
                          <td class="text-left">
                            {{ signature.Signature.SigningTime }}
                          </td>
                        </tr>
                        <tr>
                          <td class="text-left">Best signature time:</td>
                          <td class="text-left">
                            0000-00-00Z00:00:00
                            <span>
                              <q-icon
                                name="info_outline"
                                class="text-primary"
                                size="sm"
                              />
                              <q-tooltip
                                transition-show="scale"
                                transition-hide="scale"
                                content-style="font-size: 12px"
                              >
                                Lowest time at which there exists a proof of
                                existence for the signature
                              </q-tooltip>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-left">Signature position:</td>
                          <td class="text-left">
                            {{ index + 1 }} out of
                            {{ answer.signatureOrTimestamp.length }}
                          </td>
                        </tr>
                        <tr
                          v-for="(signaturescope, index) in signature.Signature
                            .SignatureScope"
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
                        </tr>
                      </tbody>
                    </q-markup-table>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </div>

          <!-- document information -->
          <div class="q-mb-md">
            <q-card flat bordered>
              <q-card-section class="text-body1">
                Document Information
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
                      <td class="text-left">Signatures status:</td>
                      <td class="text-left text-green">
                        {{ answer.signatureOrTimestamp.length }} valid
                        signatures, out of
                        {{ answer.signatureOrTimestamp.length }}
                      </td>
                    </tr>
                    <tr>
                      <td class="text-left">Document name:</td>
                      <td class="text-left">{{ answer.DocumentName }}</td>
                    </tr>
                  </tbody>
                </q-markup-table>
              </q-card-section>
            </q-card>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",

  data() {
    return {
      query: {
        signedDocument: {
          bytes: "",
          digestAlgorithm: null,
          name: "test.pdf"
        },
        policy: null,
        signatureId: null
      },
      answer: null,
      tab: "simple",
      model: null
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
      if (file) {
        let pdfBase64 = await this.readFileAsync(file);
        let pdfBase64String = String(pdfBase64);
        let pdfBase64Clean = pdfBase64String.replace(/^.*,/i, "");
        this.query.signedDocument.bytes = pdfBase64Clean;
      } else {
        this.query.signedDocument.bytes = "";
      }
    },

    // render query answer
    async receiveAnswer() {
      const response = await fetch("json/answer.json");
      if (response.ok) {
        let json = await response.json();
        this.answer = await json.SimpleReport;
      } else {
        alert("Data Error");
      }
    },

    // post document
    postDocument() {
      const jsonObject = this.query;
      const url =
        "http://webapp.edoc.link/dss-webapp/services/rest/validation/validateSignature";
      const urlProxy =
        "/api/dss-webapp/services/rest/validation/validateSignature";

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonObject)
      })
        .then(response => response.json())
        .then(data => {
          console.log("Success:", data);
        })
        .catch(error => {
          console.error("Error:", error);
        });
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
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .div-container {
    max-width: 540px;
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
