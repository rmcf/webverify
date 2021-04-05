<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <!-- toolbar -->
      <q-toolbar class="bg-white text-blue-grey-8">
        <q-avatar>
          <img src="/webverify/img/logo.svg" />
        </q-avatar>

        <q-toolbar-title>
          WebVerify
        </q-toolbar-title>

        <!-- <q-btn flat label="ABOUT" color="primary" /> -->
        <div style="min-width: 100px">
          <q-select
            v-model="lang"
            :options="langOptions"
            emit-value
            map-options
            borderless
          />
        </div>
      </q-toolbar>
    </q-header>

    <!-- drawer -->
    <q-drawer
      v-model="leftDrawerOpen"
      v-if="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <!-- banner -->
    <q-parallax :height="400" src="/webverify/img/banner.jpg">
      <div class="flex flex-center">
        <div class="text-h3 text-white banner-text text-weight-light">
          {{ $t("mainTitle") }}
        </div>
      </div>
    </q-parallax>

    <!-- page container -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- footer -->
    <q-footer reveal elevated class="bg-white text-blue-grey">
      <q-toolbar>
        <div
          class="q-pa-md q-gutter-md fit row no-wrap justify-center items-center"
        >
          <div>
            <q-btn
              round
              color="red"
              icon="mail_outline"
              type="a"
              href="mailto:service@dmn.gov.ua"
            />
          </div>
          <div>
            <div class="text-subtitle1 text-weight-light">
              {{ $t("footerSticky") }}
            </div>
            <div class="text-caption">service@dmn.gov.ua</div>
          </div>
        </div>
      </q-toolbar>
    </q-footer>

    <!-- footer -->
    <div class="bg-grey-8 text-white">
      <div
        class="footer-padding fit row wrap justify-center items-center q-gutter-sm"
      >
        <div>
          <img
            src="/webverify/img/footer-logo-1.png"
            height="50px"
            alt="logo-1"
          />
        </div>
        <div>
          <img
            src="/webverify/img/footer-logo-2.png"
            height="50px"
            alt="logo-2"
          />
        </div>
        <div style="max-width:300px;" class="footer-text text-body2">
          {{ $t("footerStatic") }} {{ yearCurrent }}.
          {{ $t("allRightsReserved") }}.
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksData = [
  {
    title: "Login",
    caption: "Login into system",
    icon: "school",
    link: "#"
  },
  {
    title: "Verify",
    caption: "Digital Signature Verification",
    icon: "code",
    link: "#"
  }
];

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      // internationalization
      lang: this.$i18n.locale,
      langOptions: [
        { value: "en-us", label: "English" },
        { value: "ua", label: "Українська" }
      ]
    };
  },

  watch: {
    lang(lang) {
      if (this.$i18n.locale !== lang) {
        this.$i18n.locale = lang;
      }
    }
  },

  computed: {
    // year in footer
    yearCurrent: function() {
      let date = new Date();
      return date.getFullYear();
    }
  }
};
</script>

<style scoped>
.q-toolbar .q-avatar {
  border-radius: 0;
}

.banner-text {
  text-shadow: 2px 2px 5px #000;
}

.footer-padding {
  padding-top: 4rem;
  padding-bottom: 7rem;
}

.footer-text {
  text-align: left;
}

/* Small devices (landscape phones, 576px and up) */
@media (max-width: 576px) {
  .footer-text {
    text-align: center;
  }

  .footer-padding {
    padding-top: 2rem;
    padding-bottom: 9rem;
  }

  .banner-text {
    font-size: 3rem;
    padding: 1rem;
  }
}
</style>
