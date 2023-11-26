<template>
  <v-container>
    <v-row>
      <v-col cols="8"></v-col>
      <v-col cols="4">
        <v-card> ĐẶT PHÒNG: <span>20000VDN/đêm</span> </v-card>
        <div class="box">
          <div class="date">
          <div class="date_before">
            <input type="date" id="birthday" name="birthday"  />
          </div>
          <div class="date_after">
            <input type="date" id="birthday" name="birthday"  />
          </div>
          </div>
          <div class="room">
            <v-btn  color="primary" @click="dialog = true">Rooms</v-btn>

            <v-dialog v-model="dialog" width="auto">
              <v-card>
                <div class="contain">
                  <div class="title">
                    Rooms
                  </div>
                  <div class="count">
                    <input placeholder="chọn số phòng" class="countPrev" type="number" id="quantity" name="quantity" min="1" max="1000000">
                  </div>
                </div>
                <v-card-actions>
                  <v-btn color="primary" block @click="dialog = false"
                    >Close Dialog</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";

export default {
  components: { VueDatePicker },
  data() {
    return {
      picker: null,
      dialog: false,
    };
  },
};
</script>

<style>
.contain {
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
.countPrev {
  display: flex;
  border: 1px solid #000;
  padding: 5px;
  width: 160px;
  font-weight: bold;
}
.date {
  display: flex;
  justify-content: space-between;
}
</style>