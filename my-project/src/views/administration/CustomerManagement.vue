<template>
  <v-container style="margin-top:60px">
    <v-table>
        <thead>
            <tr>
                <th></th>
                <th class="text-center">Tên khách hàng</th>
                <th class="text-center">Điện thoại</th>
                <th class="text-center">Email</th>
                <th class="text-center">Lần đặt</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(cus,index) in customers" :key="index">
                <td><v-img :src="cus.img"></v-img></td>
                <td>{{cus.name}}</td>
                <td>{{cus.phone}}</td>
                <td>{{cus.email}}</td>
                <td>{{cus.orderNumber}}</td>
                <td color="red"><router-link style="color:red" to="/chi-tiet-dat-phong">Chi tiết đặt phòng</router-link></td>
            </tr>
        </tbody>
    </v-table>
  </v-container>
</template>

<script>
import apiService from "@/service/api/api.js"
export default {
  data() {
    return {
      customers: []
    };
  },
  mounted(){
      apiService.get('customers').then(res=>{
        if(res){
           this.customers=res.data;
        }
      })
      .catch(err=>{

      });
  }
};
</script>

<style>

</style>