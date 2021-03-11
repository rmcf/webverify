<template>
  <q-page>
    <div class="q-gutter-md q-pa-sm">
      <q-card class="my-card">
        <q-card-section>
          <div>
            <q-uploader
              label="Upload files"
              color="amber"
              text-color="black"
              multiple
              batch
              flat
              no-thumbnails
              style="width: 100%"
            />
          </div>
          <div class="row justify-end">
            <q-btn
              class="q-ml-sm q-mt-md"
              label="Verify"
              type="submit"
              color="primary"
            />
            <q-btn
              label="Remove all"
              type="reset"
              color="red"
              flat
              class="q-ml-sm q-mt-md"
            />
          </div>
        </q-card-section>
      </q-card>

      <div>
        <q-card class="q-mt-lg">
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
      name: null,
      age: null,
      model: null,
      accept: false,
      tab: "simple"
    };
  },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first"
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted"
        });
      }
    },

    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    }
  }
};
</script>

<style>
.q-uploader__list {
  height: 20rem;
  background-color: #fafafa;
}
</style>
