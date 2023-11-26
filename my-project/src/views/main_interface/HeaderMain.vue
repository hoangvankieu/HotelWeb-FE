<template>
  <div class="container">
    <!--start header -->
    <div style="positon: relative">
      <div>
        <img class="slider" src="@\assets\slider.jpg" />
      </div>
      <div style="margin-bottom: 75px">
        <v-toolbar
          class="header"
          style="position: absolute; top: 0; z-index: 1000"
        >
          <v-toolbar-items class="hidden-sm-and-down">
            <v-toolbar-side-icon class="ml-5"
              ><v-icon icon="mdi-format-list-bulleted"></v-icon
            ></v-toolbar-side-icon>
            <router-link to="/"><v-btn flat>Trang chủ </v-btn></router-link> 

            <router-link to="/thong-tin-phong"><v-btn flat >Phòng</v-btn></router-link> 
            <v-btn flat>Liên hệ</v-btn>
          </v-toolbar-items>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <img
              style="width: 175px; height: 70px; margin-top: 25px"
              src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/logo-3-255x51.png"
              class="attachment-cozystay_255x9999 size-cozystay_255x9999 wp-image-184"
              alt=""
              srcset="
                https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/logo-3-255x51.png 255w,
                https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/logo-3-300x60.png 300w,
                https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/logo-3-370x74.png 370w,
                https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/logo-3.png        457w
              "
              sizes="(max-width: 255px) 100vw, 255px"
            />
          </v-toolbar-items>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-toolbar-side-icon class="mr-5"
              ><v-icon icon="mdi-bell-ring"></v-icon
            ></v-toolbar-side-icon>
            <v-toolbar-side-icon class="mr-5"
              ><v-icon icon="mdi-order-bool-ascending-variant"></v-icon
            ></v-toolbar-side-icon>
            <div class="">
              <div v-if="!login_check" class="mr-5 adadad">
                <v-btn @click="showLoginComponent = !showLoginComponent">Đăng nhập</v-btn>
              </div>
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
                      title="Hoàng Văn Kiều"
                      prepend-avatar="user.imagePath"
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
                          <v-list-item-content grid-column-start width="100px">
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
          </v-toolbar-items>
        </v-toolbar>
      </div>
    </div>
    <!--End header -->
    <!--start main -->
    <login v-if="showLoginComponent"></login>
    <router-view></router-view>
    <!--end main -->
    <!--start footer -->
    <div class="footer">
      <div class="footer-background">
        <img src="@\assets\footer.jpg" />
      </div>
      <div class="footer-content">
        <v-container class="footer-container">
          <v-row class="footer-container-subscribe">
            <v-col cols="7" class="subscribe-tilte">
              <h1 class="text-left">Đăng ký để nhận bản tin của chúng tôi</h1>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
          <v-row class="footer-container-email">
            <v-col cols="12">
              <v-text-field
                :loading="loading"
                density="compact"
                variant="solo"
                label="Your Email Address"
                append-inner-icon="mdi-send"
                single-line
                hide-details
                @click:append-inner="onClick"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-checkbox
                label="Tôi đồng ý với chính sách bảo mật"
              ></v-checkbox>
            </v-col>
          </v-row>
          <v-row footer-container-about>
            <v-col cols="5">
              <v-list lines="one" class="text-left">
                <v-list-item class="about-title">
                  <h2>COZYSTAY</h2>
                </v-list-item>
                <v-list-item class="about-detail">
                  <p>
                    Được thành lập vào năm 1998, CosyStay Lodge là khách sạn
                    boutique sang trọng ở trung tâm Thung lũng Napa, đưa bạn vào
                    khung cảnh bình dị trên nền trời trong xanh. Ở lại, nhâm nhi
                    và thưởng thức những món ngon nhất của xứ sở rượu vang Napa
                    tại CosyStay.
                  </p>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="4">
              <v-list lines="one" class="text-left">
                <v-list-item class="about-title">
                  <h2>Liên hệ</h2>
                </v-list-item>
                <v-list-item class="about-detail">
                  <p>Email: infoEmai@gmail.com</p>
                  <p>Điện thoại: 0854353468</p>
                  <p>Địa chỉ: 322 Main Street, Napa, CA 94559</p>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="3">
              <v-list lines="one" class="text-left">
                <v-list-item class="about-title">
                  <h2>Khác</h2>
                </v-list-item>
                <v-list-item class="about-detail">
                  <p>Dịch vụ</p>
                  <p>Tư vấn</p>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
          <v-row class="footer-container-social">
            <v-list>
              <v-list-item>
                <v-list-icon v-for="icon in icons" :key="icon">
                  <v-icon :icon="icon" class="social-icon"></v-icon>
                </v-list-icon>
              </v-list-item>
            </v-list>
          </v-row>
        </v-container>
        <div class="footer-container-end">
          <v-container>
            <v-row class="d-flex align-center">
            <v-col cols="8" class="text-left"
              ><p>
                © Copyright CozyStay WordPress Theme for Hotel Booking.
              </p></v-col
            >
            <v-col cols="1"><p>PRIVACY</p></v-col>
            <v-col cols="2"><p>TERMS OF USE</p></v-col>
            <v-col cols="1"><p>POLICY</p></v-col>
          </v-row>
          </v-container>
          
        </div>
      </div>
    </div>

    <!--end footer -->
  </div>
</template>

<script>
import accountService from "@/service/jwt/tokenService.js";
import store from "@/store/index.js";
import Login from './Login.vue';
export default {
  components: { Login },
  data() {
    return {
      user: "",
      showLoginComponent: false,
      login_check: false,
      icons: ["mdi-facebook", "mdi-twitter", "mdi-youtube", "mdi-instagram"],
    };
  },
  methods: {
    showLogin() {
      this.showLoginComponent = true;
    }
  }
};
</script>
<style>
.header,
.header * {
  height: 120px;
  background-color: transparent;
}
.header {
  border-bottom: 1px solid #e2d9e7;
}
.slider {
  width: 100%;

  max-height: 600px;
}
/* bottom */
.footer{
  position: relative;
  margin-top: 50px;
  color: #fff;
}
.footer-content{
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top:0;
  background-color:rgba(0, 0, 0, 0.5);

  
}
.footer-container-end{
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
 
}
.footer-background img{
  width: 100%;
  max-height: 748px;
}
.footer .v-list{
  background-color: transparent;
  color: #fff;
}
.about-title {
  margin-bottom: 20px;
  
}
.about-detail p {
  padding: 8px 0;
  line-height: 2;
}
.footer-container-social .social-icon {
  margin-left: 15px;
}
.footer-container-end {
  height: 113px;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
}
.subscribe-tilte{
  margin-top: 30px;
}
.adadad {
  position: relative;
  z-index: 11;
}
</style>