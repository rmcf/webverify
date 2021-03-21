<template>
  <q-page class="div-container">
    <div class="q-pa-sm">
      <q-card>
        <q-card-section class="bg-amber text-grey-10">
          <div class="text-h5">Upload digitally signed document</div>
          <div class="text-subtitle3">allowed formats: PDF, ZIP</div>
        </q-card-section>
        <q-card-section class="q-pa-lg">
          <!-- basic input
          <div class="q-mb-lg">
            <input type="file" @change="basicFileInput" />
          </div> -->

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
          </div>
        </q-card-section>
      </q-card>

      <div v-if="query.signedDocument.bytes" class="q-mt-lg file-content">
        {{ query.signedDocument.bytes }}
      </div>

      <!-- <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="left"
          >
            <q-tab name="simple" label="Simple Report" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="simple">
              <div class="text-h6">Simple Report</div>
              <p v-if="answer">
                {{ answer.SimpleReport.ValidationPolicy.PolicyDescription }}
              </p>
            </q-tab-panel>
          </q-tab-panels>
        </q-card> -->

      <div class="text-h4 text-center margin-top">
        Validation results
      </div>
      <div
        class="text-h6 text-weight-light text-center text-blue-grey-5 q-mb-lg"
      >
        (Simple Report)
      </div>

      <!-- expanded list -->
      <q-list class="q-mt-lg q-mb-lg">
        <q-expansion-item
          header-class="bg-primary text-white"
          expand-icon-class="text-white"
          class="shadow-1 overflow-hidden"
          style="border-radius: 3px"
          default-opened
          expand-separator
          icon="link"
          label="Signature S-EC27BBA27F938B7266BA0460B43812AAEF5F32C034FE398F25CF343974308B72"
        >
          <q-separator />
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
              dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item> </q-list
      ><q-list class="q-mt-lg q-mb-lg">
        <q-expansion-item
          header-class="bg-primary text-white"
          expand-icon-class="text-white"
          class="shadow-1 overflow-hidden"
          style="border-radius: 3px"
          default-opened
          expand-separator
          icon="link"
          label="Signature S-EC27BBA27F938B7266BA0460B43812AAEF5F32C034FE398F25CF343974308B72"
        >
          <q-separator />
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
              dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
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
    // basic file input
    // basicFileInput(ev) {
    //   console.log("Function starting");
    //   const file = ev.target.files[0];
    //   const reader = new FileReader();

    //   reader.onload = e => (this.content = e.target.result);
    //   reader.readAsDataURL(file);
    // },

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
        this.answer = await response.json();
      } else {
        alert("Data Error");
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

.file-content {
  word-wrap: break-word;
  overflow-y: scroll;
  height: 300px;
}

.margin-top {
  margin-top: 2em;
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
