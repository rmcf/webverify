<template>
  <q-page class="div-container">
    <div class="q-gutter-md q-pa-sm">
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
              @click="removeResult"
              label="Remove"
              type="reset"
              color="red"
              flat
              class="q-ml-sm q-mt-md"
            />
          </div>
        </q-card-section>
      </q-card>

      <div v-if="content" class="file-content">{{ content }}</div>

      <div class="q-mt-lg">
        <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="left"
          >
            <q-tab name="simple" label="Simple Report" />
            <q-tab name="detailed" label="Detailed Report" />
            <q-tab name="diagnostic" label="Diagnostic Tree" />
            <q-tab name="etsi" label="ETSI Validation Report" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="simple">
              <div class="text-h6">Simple Report</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="detailed">
              <div class="text-h6">Detailed Report</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="diagnostic">
              <div class="text-h6">Diagnostic Tree</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="etsi">
              <div class="text-h6">ETSI Validation Report</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",

  data() {
    return {
      content: null,
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
        this.content = await this.readFileAsync(file);
      } else {
        this.content = null;
      }
    },

    // clean button
    removeResult() {
      this.content = null;
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
