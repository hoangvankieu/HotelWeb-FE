<!--<template>
  <v-alert dense
      text v-model="showAlert" :type="type" dismissible>
    <slot></slot>
  </v-alert>
</template>


// export default {
//   props: {
//     type: {
//       type: String,
//       default: "info"
//     }
//   },
//   data() {
//     return {
//       showAlert: false
//     };
//   },
//   methods: {
//     showAlert1() {
//       this.showAlert = true;
//     }
//   }
// };
// </script>
-->
<template>
  <transition name="alert-slide">
    <v-alert
      v-if="showAlert"
      :type="type"
      dismissible
      class="alert"
      :class="{ hide: hideAlert }"
    >
      <slot></slot>
    </v-alert>
  </transition>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "info",
    },
    showAlert: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showAlert: false,
      hideAlert: false,
    };
  },
  methods: {
    showAlert1() {
      this.showAlert = true;
      setTimeout(() => {
        this.hideAlert = true;
        setTimeout(() => {
          this.showAlert = false;
          this.hideAlert = false;
        }, 500);
      }, 3000);
    },
  },
  mounted() {},
};
</script>

<style>
.alert {
  transform: translateY(-312px);
  z-index: 10000;
  opacity: 1;
  transition: opacity 0.5s, transform 0.5s;
}
.hide {
  opacity: 0;
  transform: translateY(-400px);
}
</style>