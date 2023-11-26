<template>
  <v-row justify="center" v-if="dialogVisible">
    <v-dialog v-model="dialogVisible" persistent width="1024">
      <v-card>
        <v-container style="height: 1200px">
          <v-row>
            <v-spacer></v-spacer>
            <v-btn class="mt-2 mr-3" color="red" @click="closeDialog">
              <v-icon icon="mdi-close"></v-icon>
            </v-btn>
          </v-row>
          <v-row>
            <v-col cols="11" offset="9"
              ><v-btn color="red" @click="inputImage()"
                ><v-icon icon="mdi-plus-circle-outline"></v-icon>Thêm</v-btn
              ></v-col
            >
            <v-file-input ref="fileInput" multiple accept="image/*">
            </v-file-input>
          </v-row>
          <v-row>
            <v-col v-for="(img, index) in roomImages" :key="index" cols="3">
              <div class="image-container">
                <v-img :src="img.path" class="image"></v-img>
                <div class="overImage">
                  <v-list class="btn-list">
                    <v-list-item
                      ><v-btn
                        class="list-item-btn"
                        outlined
                        rounded
                        @click="deleteImage(img.id)"
                        ><v-icon icon="mdi-delete" class="mr-5"></v-icon>Xoá </v-btn
                      ></v-list-item
                    >
                    <v-list-item
                      ><v-btn
                        @click="checkedMainImage(img.id)"
                        prepend-icon="mdi-check-circle"
                        rounded
                      >
                        <template v-slot:prepend>
                          <v-icon :color="img.mainImg ? 'success' : '#8c8e99'"></v-icon>
                        </template>
                        Chọn ảnh đại diện
                      </v-btn ></v-list-item
                    >
                  </v-list>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import apiService from "@/service/api/api.js";
export default {
  data() {
    return {
      dialogVisible: false,
      fileInputVisible: false,
      roomImages: [],
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
    inputImage() {
      const files = this.$refs.fileInput.files;
      let formData = new FormData();

      // Thêm các tệp tin đã chọn vào formData
      for (let i = 0; i < files.length; i++) {
        console.log(files[i]);
        formData.append("files", files[i]);
      }

      apiService
        .post(
          "rooms/" + this.$route.params.id + "/image",
          formData,
          "multipart/form-data"
        )
        .then((res) => {
          if (res) {
            alert("Đã thêm thành công " + this.roomImages.length + " ảnh!");
            this.reloadImage();
          }
        })
        .catch((err) => {
          alert("Gặp lỗi  thêm ảnh");
        });
    },
    deleteImage(id) {
      if (id >= 0) {
        apiService
          .delete("rooms/image/" + id)
          .then((res) => {
            alert("Xoá thành công!");
            this.roomImages = this.roomImages.filter(
              (image) => image.id !== id
            );
          })
          .catch((err) => {
            alert("Xoá thất bại!");
          });
      }
    },
    checkedMainImage(id){
      if(id>=0){
        apiService.put("rooms/"+this.$route.params.id+"/image/"+id+"/main-image").then((res=>{
          this.reloadImage();
        })).catch((err)=>{
          console.log(err);
        })
       
      }
    },
    showOverImage(index) {
      this.showImage[index] = true;
    },
    hideOverImage(index) {
      this.showImage[index] = false;
    },
    reloadImage(){
      this.$router.go()
    }
  
  },
  watch: {
    "$route.params": {
      handler: function (value) {
        if (value.id) {
          apiService.get("rooms/" + value.id + "/image").then((res) => {
            if (res) {
              this.roomImages = res.data;
            }
          });
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
<style>
.image-container {
  position: relative;
}

.overImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  align-items: center;
  justify-content: center;

  transition: opacity 0.5s ease;
  z-index: 10000; /* Đặt giá trị z-index cao hơn */
}
.btn-list {
  margin-top: 50%;
  background-color: transparent;
}
.btn-list > v-btn {
  width: 100%;
}
.list-item-btn {
  width: 100%;
}

.overImage:hover {
  opacity: 1; /* Đặt giá trị opacity là 0 khi hover vào */
}
/* Định dạng cho các nút button trong overImage */
.overImage v-btn {
  margin: 5px;
}
</style>