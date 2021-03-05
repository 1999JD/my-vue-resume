<template>
  <div class="card-body d-flex flex-wrap bg-third">
    <div class="col-md-4" v-for="item in projects[page].imgUrl" :key="item">
      <img :src="item" alt="" class="work-img mb-4" />
    </div>
    <div class="col-md-4 pt-4">
      <div v-html="projects[page].html"></div>
      <a :href="projects[page].link" target="_blank" class="btn bg-primary mt-4"
        >點我看成品</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "MyWorkDetail",
  props: ["page"],
  data() {
    return {
      projects: {
        perfume: {
          html: `切版作品 <br />具備響應式設計<br> 主要以 <span class="point">Bootstrap</span> 作為框架 <br /> 並使用 <span class="point">SCSS</span> 進行管理`,
          imgUrl: [
            require("../assets/img/perfume-4.png"),
            require("../assets/img/perfume-5.png"),
            require("../assets/img/perfume-2.png"),
            require("../assets/img/perfume-3.png"),
            require("../assets/img/perfume-1.png"),
          ],
          link: `https://1999jd.github.io/HexSchool-final-missions/experienceCamp-w7/`,
        },
        happyDraw: {
          html: `使用<span class="point">php、MySQL、Canvas</span><br />
          資料庫規劃、網站設計皆獨立製作 <br />
      使用者可註冊帳號，於平台上繪畫，並發佈作品。<br />也可上傳、瀏覽圖片，以及有星星評分等功能。`,
          imgUrl: [
            require("../assets/img/happyDraw-4.png"),
            require("../assets/img/happyDraw-5.png"),
            require("../assets/img/happyDraw-2.png"),
            require("../assets/img/happyDraw-3.png"),
            require("../assets/img/happyDraw-1.png"),
          ],
          link: `https://webclassjojo.000webhostapp.com/final/`,
        },
        ethnicLang104: {
          html: `
      由我負責<span class="point">切版</span><br />
      並⾃⾏將資料撰寫為 json 格式 <br />以
      <span class="point">Fetch API</span> 串接，<br />
      並以 <span class="point">Google Map API</span> 呈現資訊<br />
      也撰寫了 RWD 效果，<br />以及搭配
      <span class="point">AOS</span> 視差滾動套件 <br />`,
          imgUrl: [
            require("../assets/img/104-4.png"),

            require("../assets/img/104-1.png"),
            require("../assets/img/104-5.png"),

            require("../assets/img/104-3.png"),

            require("../assets/img/104-2.png"),
          ],
          link: `https://1999jd.github.io/bigDataAndsociety/`,
        },
        residenceJustice: {
          html:
            "由我負責切版<br />使⽤到了 AOS 視差滾動<br />以及 Swiper 套件 <br />並做出導覽列下拉選單、Go Top 效果<br />過程中使用到 <span class='point'>Git</span> 與組員進行版本控制<br />",
          imgUrl: [
            require("../assets/img/residence-1.png"),
            require("../assets/img/residence-2.png"),
          ],
          link: `https://fanxuanliao.github.io/DSC_website/`,
        },
      },
    };
  },
};
</script>
<style>
.work-img {
  width: 100%;
}
</style>