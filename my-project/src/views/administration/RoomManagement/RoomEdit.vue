<template>
<div>
  <Alert  ref="alert" :type="this.alertType">{{this.alertValue}}</Alert>
  <v-row justify="center">
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
            <v-sheet width="300" class="mx-auto">
              <v-form fast-fail @submit.prevent>
                <v-text-field
                 
                  label="Name"
                  :rules="firstNameRules"
                  v-model="room.name"
                ></v-text-field>
                <v-text-field                 
                  label="Price"
                  :rules="lastNameRules"
                  v-model="room.price"
                ></v-text-field>
                <v-text-field
                  
                  label="Description"
                  :rules="lastNameRules"
                  v-model="room.description"
                ></v-text-field>
                <v-btn @click="updateRoom()" block class="mt-2" color="blue"
                  >Lưu</v-btn
                >
              </v-form>
            </v-sheet>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</div>
  
</template>
<script>
import apiService from "@/service/api/api.js"
import Alert from "@/components/Alert.vue";
export default {
  components: {
    Alert
  },
  props:['currentItem'],
  data(){
    return {
      dialogVisible:false,
      alertType:'success',
      alertValue:'Cập nhật thành công!',
      room:{
        id:'',
        name:'',
        price:0,
        description:''
      }
    }
  },
  methods:{
    openDialog(){     
      this.dialogVisible=true;
    },
    closeDialog(){
      this.dialogVisible=false;
      window.history.pushState(null, '', '/room-management')
    },
    updateRoom(){
      apiService.put("rooms",this.room).then(res=>{
        if(res){
            this.$refs.alert.showAlert1();
        }
      }).catch(res=>{
          alertType='error',
          alertValue='Cập nhật không thành công!'
          this.$refs.alert.showAlert1();
      })
    }
  },
  watch:{
    currentItem:function(){
      this.room.id=this.currentItem.id;
      this.room.name=this.currentItem.name;
      this.room.price=this.currentItem.price;
      this.room.description=this.currentItem.description;
    }
  }
};
</script>

<style>
</style>