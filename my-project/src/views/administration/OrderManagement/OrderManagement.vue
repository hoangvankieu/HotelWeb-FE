<template>
  <div>
    <v-toolbar dense style=" background:white">
      <v-container>
        <v-row>
          <v-col cols="1"
            ><v-app-bar-nav-icon height="100%"
              ><v-icon 
                icon="mdi-filter-check-outline"
              ></v-icon></v-app-bar-nav-icon
          ></v-col>
          <v-col cols="3">
            <v-select
              label="Chọn"
              :items="['1 ngày', '1 tuần', '1 tháng', '1 năm']"
            ></v-select>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="4">
            <v-text-field append-inner-icon="mdi-magnify" class="rounded-pill">
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-toolbar>
    <v-divider></v-divider>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>