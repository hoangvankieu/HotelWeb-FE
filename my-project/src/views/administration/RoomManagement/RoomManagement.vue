<template>
  <div>
    <Alert class="alert" ref="alert" type="success">Thành công</Alert>
    <v-container class="container">
      <v-table>
        <thead>
          <v-row class="mb-5">
            <v-col cols="1"><th>STT</th></v-col>
            <v-col cols="3"><th>Tên phòng</th></v-col>
            <v-col cols="2"><th>Giá</th></v-col>
            <v-divider></v-divider>
          </v-row>
        </thead>
        <tbody>
          <v-row v-for="(room, index) in rooms" :key="index">
            <v-col cols="1">
              <td>{{ index }}</td>
            </v-col>
            <v-col cols="3">
              <td>{{ room.name }}</td>
            </v-col>
            <v-col cols="2">
              <td>{{ room.price }}</td>
            </v-col>
            <v-col cols="1"
              ><td>
                <v-btn color="orange" @click="openImageDialog(room.id)"
                  ><v-icon icon="mdi-image"></v-icon>Ảnh</v-btn
                >
              </td></v-col
            >
            <v-col cols="1"
              ><td>
                <v-btn color="yellow" @click="openEditDialog(room.id),currentItem=room"
                  ><v-icon icon="mdi-pencil"></v-icon>Sửa</v-btn
                >
              </td></v-col
            >
            <v-col cols="1"
              ><td>
                <v-btn color="red" @click="dialogDel=true,roomDel.id=room.id,roomDel.name=room.name"
                  ><v-icon icon="mdi-delete"></v-icon> Xoá</v-btn
                >
              </td></v-col
            >
            <v-col cols="3">
              <td>
                <v-btn color="green" @click="openOrderListDialog(room.id)"
                  ><v-icon icon="mdi-order-bool-descending-variant"></v-icon>
                  Danh sách đặt phòng</v-btn
                >
              </td>
            </v-col>
            <v-divider></v-divider>
          </v-row>
        </tbody>
      </v-table>

      <!-- {{this.showImageRoomManagement ? : null}} -->
      <image-room-management ref="ImageRoomManagement" />
      <room-edit ref="RoomEdit" :currentItem="currentItem" />
      <order-list ref="OrderList" />
      <v-dialog max-width="450px" v-model="dialogDel">
            <v-card>
              <v-alert type="error">
                <v-row align="center">
                  <v-col cols="11" class="text-center">
                    Bạn có đồng ý xoá {{roomDel.name}} không?
                  </v-col>
                </v-row>
                <v-row align="center">
                    <v-spacer></v-spacer>
                    <v-col cols="5">
                      <v-btn variant="text" @click="deleteRoom()">Đồng ý</v-btn>
                    </v-col>
                    <v-col cols="6">
                      <v-btn variant="text" @click="dialogDel=false">Huỷ</v-btn>
                    </v-col>
                </v-row>
              </v-alert>
            </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import ImageRoomManagement from "./ImageRoomManagement.vue";
import OrderList from "./OrderList.vue";
import RoomEdit from "./RoomEdit.vue";
import apiService from "@/service/api/api.js";
import Alert from "@/components/Alert.vue";
export default {
  components: {
    ImageRoomManagement,
    RoomEdit,
    OrderList,
    Alert,
  },
  data() {
    return {
      showImageRoomManagement: false,
      alertType: "success",
      alertMessage: "Xoá thành công!",
      rooms: [],
      currentItem:'',
      dialogDel:false,
      roomDel:{
        id:'',
        name:''
      }
    };
  },
  methods: {
    //Hiển thị thành phần con
    openImageDialog(id) {
      this.showImageRoomManagement = true;
      // window.history.pushState(null, "", "/room-management/"+id+"/image");
      this.$router.push("/room-management/" + id + "/image");

      this.$refs.ImageRoomManagement.openDialog();
    },
    openEditDialog(id) {
      window.history.pushState(null, "", "/room-management/edit/" + id);
      this.$refs.RoomEdit.openDialog();
    },
    openOrderListDialog(id) {
      window.history.pushState(null, "", "/room-management/orders/" + id);
      this.$refs.OrderList.openDialog();
    },
    //
    //Xoá một phòng
    deleteRoom() {
        apiService
          .delete("rooms/" + this.roomDel.id)
          .then((res) => {
            if (res) {
              var newArr=this.rooms.filter(x=>x.id!=this.roomDel.id);
              this.rooms=newArr;
              alert("Xoá thành công!");
            }
          })
          .catch((err) => {
            alert("Xoá không thành công!");
          });
        this.dialogDel=false;        
    },
    //
  },
  mounted() {
    apiService
      .get("rooms")
      .then((res) => {
        if (res) {
          this.rooms = res.data;
        }
      })
      .catch((err) => {});
  },
};
</script>
  
<style>
@import "@/assets/number.css";
.v-table__wrapper {
  overflow: hidden;
}
.container {
  margin-top: 80px;
}

</style>