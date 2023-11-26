<template>
  <div style="margin-bottom: 75px">
    <v-toolbar color="#000" style="position: fixed; top: 0; z-index: 1000">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat
          >Quản lý
          <v-menu activator="parent">
            <v-list>
              <v-list-item>
                <router-link to="/room-management">
                  <v-btn class="mx-4 white--text" width="100%">
                    Quản lý phòng
                  </v-btn></router-link
                >
              </v-list-item>
              <v-list-item>
                <router-link to="/order-management">
                  <v-btn class="mx-4 white--text" width="100%">
                    Quản lý đặt phòng
                  </v-btn></router-link
                >
              </v-list-item>
              <v-list-item>
                <router-link to="/customer-management">
                  <v-btn class="mx-4 white--text" width="100%">
                    Quản lý khách hàng
                  </v-btn></router-link
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>

        <v-btn flat
          >Thống kê
          <v-menu activator="parent">
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                :value="index"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
        <v-btn flat>Liên hệ</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="mr-5"
        ><v-icon icon="mdi-bell-ring"></v-icon
      ></v-toolbar-side-icon>

      <div class="">
        <div v-if="!login_check" class="mr-5" ><v-btn @click="openLogin()">Đăng nhập</v-btn></div>
        <div v-if="login_check">
          <v-avatar
            :tile="tile"
            :size="avatarSize"
            color="grey lighten-4"
            class="mr-10 cursor-pointer"
            id="ava-activator"
          >
            <v-img :src="user.imagePath"></v-img>
          </v-avatar>
          <v-menu activator="#ava-activator">
            <v-list>
              <v-list-item
                :title="user.fullName"
                :prepend-avatar="user.imagePath"
              >
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                <router-link to="thong-tin-ca-nhan">
                  <v-btn>
                    <v-list-item-content text-left width="100px">
                      Thông tin cá nhân
                    </v-list-item-content>
                    <v-list-item-icon class="ml-5"
                      ><v-icon>mdi-account</v-icon></v-list-item-icon
                    >
                  </v-btn>
                </router-link>
              </v-list-item>
              <v-list-item>
                <router-link to="/">
                  <v-btn width="100%" color="red">
                    <v-list-item-content grid-column-start width="100px" @click="logout()">
                      Đăng xuất
                    </v-list-item-content>
                    <v-list-item-icon class="ml-5"
                      ><v-icon>mdi-logout</v-icon></v-list-item-icon
                    >
                  </v-btn>
                </router-link>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </v-toolbar>
    <login ref="login"/>
    <router-view></router-view>
  </div>
</template>
<script>
import Login from "./Login.vue";
import accountService from "@/service/jwt/tokenService.js";
import store from "@/store/index.js"
export default {
  components: {
    Login,
  },
  data() {
    return {
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
      user: '',
      
      login_check:false
    };
  },
  methods:{
    openLogin(){
      this.$refs.login.openDialog();
    },
    logout(){
      localStorage.setItem('token', null);
      store.dispatch('logout');
      this.login_check=false;
      this.$refs.login.openDialog();
    }
  },
  created(){
    this.login_check=accountService.isLogin();
    if(this.login_check){
      accountService.setUser();
      this.user=store.getters.currentUser;
    }
  }
};
</script>