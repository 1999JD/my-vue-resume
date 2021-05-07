<template>
  <div class="js-city mb-4">
    <ul class="col-12 d-flex mb-4 py-2 bg-secondary flex-wrap">
      <li v-for="mission in missions" :key="mission" class="mx-3">
        <a class="text-muted" :href="mission.missionHref" target="_blank">{{
          mission.missionName
        }}</a>
      </li>
    </ul>
    <swiper
      effect="fade"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
    >
      <swiper-slide v-for="mission in missions" :key="mission"
        ><img class="w=100" :src="mission.missionImg" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  EffectFade,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";

SwiperCore.use([Navigation, Pagination, Scrollbar, EffectFade]);



export default {
  name: "MyWorkSwiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      missions: [
        {
          missionName: "幸運抽獎轉盤",
          missionHref: "https://1999jd.github.io/js-UGcity/lv9/turntable.html",
          missionImg: require("../assets/img/JS-9.png"),
        },
        {
          missionName: "井字遊戲",
          missionHref: "https://1999jd.github.io/js-UGcity/lv8/tictactoe.html",
          missionImg: require("../assets/img/JS-8.png"),
        },
        {
          missionName: "Canvas 畫板",
          missionHref: "https://1999jd.github.io/js-UGcity/lv7/tablet.html",
          missionImg: require("../assets/img/JS-7.png"),
        },
        {
          missionName: "算數遊戲",
          missionHref:
            "https://1999jd.github.io/js-UGcity/lv6/calculatorGame.html",
          missionImg: require("../assets/img/JS-6.png"),
        },
        {
          missionName: "空汙品質儀表板",
          missionHref: "https://1999jd.github.io/js-UGcity/lv5/air.html",
          missionImg: require("../assets/img/JS-5.png"),
        },
        {
          missionName: "時區儀錶板",
          missionHref: "https://1999jd.github.io/js-UGcity/lv4/timezone.html",
          missionImg: require("../assets/img/JS-4.png"),
        },
        {
          missionName: "計算機",
          missionHref: "https://1999jd.github.io/js-UGcity/lv3/calculator.html",
          missionImg: require("../assets/img/JS-3.png"),
        },
        {
          missionName: "時鐘",
          missionHref: "https://1999jd.github.io/js-UGcity/lv2/clock.html",
          missionImg: require("../assets/img/JS-2.png"),
        },
        {
          missionName: "九九乘法表",
          missionHref: "https://1999jd.github.io/js-UGcity/lv1/nine-nine.html",
          missionImg: require("../assets/img/JS-1.png"),
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.js-city {
  img {
    width: 200px;
    height: 117px;
    @media (min-width: 576px) {
      width: 300px;
      height: 175px;
    }
    @media (min-width: 720px) {
      width: 600px;
      height: 350px;
    }
  }
}
</style>