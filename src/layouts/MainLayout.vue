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

        <q-btn flat label="ABOUT" color="primary" />
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
        <h2 class="text-white banner-text">
          Digital Signature Verification
        </h2>
      </div>
    </q-parallax>

    <!-- page container -->
    <q-page-container>
      <router-view />
    </q-page-container>

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
          Центральний засвідчувальний орган Міністерство цифрової трансформації
          України {{ yearCurrent }}. Всі права захищені.
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
      essentialLinks: linksData
    };
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
  padding-bottom: 4rem;
}

.footer-text {
  text-align: left;
}

/* Small devices (landscape phones, 576px and up) */
@media (max-width: 576px) {
  .footer-text {
    text-align: center;
  }

  .banner-text {
    font-size: 3rem;
    padding: 1rem;
  }
}
</style>
