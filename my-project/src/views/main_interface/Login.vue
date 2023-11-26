<template  class="content">
  <div class="container">
    <v-container class="fill-height ">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card v-if="page">
            <v-card-title class="text-center">Đăng nhập</v-card-title>
            <v-card-text>
              <v-text-field
                v-model="email"
                label="Số điện thoại"
                outlined
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Mật khẩu"
                outlined
                type="password"
              ></v-text-field>
              <v-btn type="submit" color="primary" class="mb-5" block>Đăng nhập</v-btn>
              <v-btn type="submit" color="primary" block @click="page=!page">Đăng ký</v-btn>
            </v-card-text>
          </v-card>
          <v-card v-if="!page">
            <v-card-title class="text-center">Đăng Ký</v-card-title>
            <v-card-text>
              <v-text-field
                v-model="email"
                label="Số điện thoại"
                outlined
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Mật khẩu"
                outlined
                type="password"
              ></v-text-field>
              <v-text-field
                label="Nhập lại mật khẩu"
                outlined
                type="password"
              ></v-text-field>
              <v-btn type="submit" color="primary" class="mb-5" block>Đăng ký</v-btn>
              <v-btn type="submit" color="primary"  @click="page=!page" block>Huỷ</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      page:true
    };
  },
  methods: {
    login() {
      // Xử lý logic đăng nhập tại đây
      console.log("Đăng nhập với email:", this.email);
      console.log("Mật khẩu:", this.password);
    },
  },
};
</script>

<style scoped>
.fill-height {

  min-height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
 
}
.container {

}
.content{
  height: 100%;
}
</style>