<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialogVisible" persistent width="1024">
        <v-card>
          <v-sheet class="bg-deep-purple pa-12" rounded>
            <v-card class="mx-auto px-6 py-8" max-width="344">
              <v-form v-model="form" @submit.prevent="onSubmit">
                
                  <v-text-field
                    v-model="user.userName"
                    :readonly="loading"
                    :rules="[required]"
                    class="mb-2"
                    clearable
                    label="Số điện thoại"
                    @input="acceptNumber"
                    
                  ></v-text-field>
               
                <v-text-field
                  v-model="user.password"
                  :readonly="loading"
                  :rules="[required]"
                  clearable
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu"
                  type="password"
                ></v-text-field>
                <br />
                <v-btn
                  :disabled="!form"
                  :loading="loading"
                  block
                  color="success"
                  size="large"
                  variant="elevated"
                  @click="login()"
                >
                  Sign In
                </v-btn>
                <p v-if="loginError" class="error-message">
                  Đăng nhập không thành công. Vui lòng kiểm tra lại mật khẩu.
                </p>
              </v-form>
            </v-card>
          </v-sheet>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import apiService from "@/service/api/api.js";
import accountService from "@/service/jwt/tokenService.js";
export default {
  data() {
    return {
      dialogVisible: true,
      user: {
        userName: "",
        password: "",
      },
      loading: false,
      loginError: false,
    };
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
      window.history.pushState(null, "", "/room-management");
    },
    login() {
      apiService
        .post("account/login", this.user)
        .then((res) => {
          if (res) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("tokenExpir", res.data.expiration);
            window.location.reload();
            this.closeDialog();
          }
        })
        .catch((err) => {
          this.loginError = true;
        });
    },
    acceptNumber() {
      var x = this.user.userName
        .replace(/\D/g, "")
        .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.user.userName = x[1]  + x[2]  + x[3];
    },
  },
  created() {
    if (accountService.isLogin()) {
      this.dialogVisible = false;
    }
  },
};
</script>

<style>
.error-message,
.error-message {
  color: red;
}
</style>