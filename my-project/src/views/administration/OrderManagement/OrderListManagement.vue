<template>
  <v-container>
    <v-table>
      <thead>
        <v-row class="mb-5">
          <v-col cols="1"><th>STT</th></v-col>
          <v-col cols="2"><th>Tên KH</th></v-col>
          <v-col cols="2"><th>Tổng tiền</th></v-col>
          <v-col cols="2"><th>Tiền cọc</th></v-col>
          <v-col cols="2"><th>Ngày đặt</th></v-col>
          <v-col cols="2"><th>Thanh toán</th></v-col>
          <v-divider></v-divider>
        </v-row>
      </thead>
      <tbody>
        <v-row v-for="n in 20" :key="n">
          <v-col cols="1">
            <td>{{ n }}</td>
          </v-col>
          <v-col cols="2">
            <td>Name {{ n }}</td>
          </v-col>
          <v-col cols="2">
            <td>3000</td>
          </v-col>
          <v-col cols="2"><td>1500</td></v-col>
          <v-col cols="2"><td>10/2/1023</td></v-col>
          <v-col cols="1"><td>3000</td></v-col>
          <v-col cols="2" 
            ><td >
              <v-btn color="red"><v-icon icon="mdi-delete"></v-icon> Xoá</v-btn>
            </td></v-col
          >
          <v-divider></v-divider>
        </v-row>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
export default {};
</script>
    
<style>
.v-table__wrapper{
  overflow: hidden;
}
</style>