<template>
  <ul class="skill card-group mb-0">
    <li class="card bg-third">
      <div class="card-body">
        <h3 class="card-title">網頁切版</h3>
        <ul class="card-text">
          <li>HTML、Pug</li>
          <li>CSS、SCSS</li>
          <li>Bootstrap</li>
          <li>手刻 RWD</li>
        </ul>
        <a target="_blank" href="https://1999jd.github.io/HexSchool-final-missions/experienceCamp-w7/" class="card-text">
          <small class="text-muted">點我看作品</small>
        </a>
      </div>
    </li>
    <li class="card bg-secondary">
      <div class="card-body">
        <h3 class="card-title">JavaScript</h3>
        <ul class="card-text">
          <li>jQuery 動畫效果</li>
          <li>Google Map API</li>
          <li>Fetch API、XMLHttpRequest</li>
          <li>Vue components</li>
          <li>Vue-Router 和 Vuex</li>
        </ul>
        <a target="_blank" href="https://1999jd.github.io/js-UGcity/" class="card-text">
          <small class="text-muted">點我看作品</small>
        </a>
      </div>
    </li>
    <li class="card bg-third">
      <div class="card-body">
        <h3 class="card-title">後端程式</h3>
        <p class="card-text">
          能使用基礎 MySQL 查詢、Join 資料表<br />並以 PHP 進行前後端串接
        </p>
        <a target="_blank" href="https://webclassjojo.000webhostapp.com/final/" class="card-text">
          <small class="text-muted">點我看作品</small>
        </a>
      </div>
    </li>
    <li class="card bg-secondary">
      <div class="card-body">
        <h3 class="card-title">其餘</h3>
        <ul class="card-text">
          <li>Arduino</li>
          <li>Unity</li>
          <li>Adobe PhotoShop</li>
          <li>Adobe Illustrator</li>
        </ul>
        <a target="_blank" href="https://www.youtube.com/watch?v=n2FnKF-Geas" class="card-text">
          <small class="text-muted">點我看作品</small>
        </a>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "Skill",
};
</script>
<style lang="scss">
small:hover{
  cursor: pointer;
}
</style>