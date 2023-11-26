<template>
  <v-container>
    <v-row v-for="i in 5" :key="i" style="margin-bottom: 110px">
      <v-col cols="8"  :order="i % 2">
        <v-carousel hide-delimiters>
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            cover
          ></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="4"  class="text-left" :order="(i - 1) % 2">
        <v-list>
          <v-list-item class="room-info">
            <span>100M<sup>2</sup></span
            >/
            <span>1 PHÒNG NGỦ</span>
          </v-list-item>
          <v-list-item class="room-title"> PHÒNG VIEW TRIỆU ĐÔ </v-list-item>
          <v-list-item class="room-description">
            <p style="line-height: 1.8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
              iure laborum aut reprehenderit maiores accusantium, aliquam
              sapiente voluptates soluta, perferendis facilis, atque quidem
              quisquam autem odit tempore nulla tenetur ipsum?
            </p>
          </v-list-item>
         
          <v-list-item style="font-size: 18px">
            <v-btn class="room-detail">Chi tiết</v-btn>
            <span class="ml-5 room-price">200000000 VND/đêm</span></v-list-item
          >
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>
<style scoped>
    .room-info{
        color: #53624E;
    }
    .room-title{
        color: #1A1B1A;
        font-size:36px;
    }
    .room-description{
        font-size:18px;
        color: #333632;
    }
    .room-detail{
        width: 131px;
        height: 44px;
        color: #FFFFFF;
        background-color: #53624E ;
    }
    .room-detail:hover{
        background-color: #B99D75 ;
    }
    .room-price{
        color: #B99D75;
    }
</style>