<template>
  <div class="club-ex p-3">
    <div class="row mb-1 border-bottom align-items-center">
      <div class="col-md-2">
        <h3 class="mb-0">大一</h3>
      </div>
      <div class="col-md-5">
        <div class="progress">
          <div
            class="progress-bar bg-secondary"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
    <ul>
      <li>
        <h4>
          政⼤桃友會社員
          <span
            class="badge rounded-pill bg-third"
            style="transform: rotate(20deg)"
            >!!!</span
          >
        </h4>
        <p>
          寒假返鄉服務營隊(<span class="point">活動企劃撰寫</span>)
          之夜表演(戲劇表演)
        </p>
      </li>
      <li>
        <h4>⽂化盃</h4>
        <p>各系唱校歌比賽</p>
      </li>
      <li>
        <h4>包種茶節</h4>
        <p>博物館組，負責介紹⺠族系博物館中的陶器展區</p>
      </li>
      <li>
        <h4>熱舞社</h4>
        <p>hiphop、jazz、locking組，並參與⼩型成果發表</p>
      </li>
    </ul>
    <div class="row mb-1 border-bottom align-items-center">
      <div class="col-md-2">
        <h3 class="mb-0">大二</h3>
      </div>
      <div class="col-md-5">
        <div class="progress">
          <div
            class="progress-bar bg-secondary"
            role="progressbar"
            style="width: 50%"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
    <ul>
      <li>
        <h4>
          政⼤桃友會活動
          <span
            class="badge rounded-pill bg-third"
            style="transform: rotate(20deg)"
            >!!!</span
          >
        </h4>
        <p>
          <span class="point"
            >迎新營隊，⽔⼤地、⼩型運動會兩項⽬策劃⼈/期初⼤會總召/會野餐副召</span
          >
          <br />
          之夜表演組頭 寒假返鄉服務營隊組頭
        </p>
      </li>
      <li>
        <h4>政⼤桃友會⽂書</h4>
        <p>撰寫會議記錄</p>
      </li>
      <li>
        <h4>⺠族系宿營⽣活組</h4>
        <p>辦理保險</p>
      </li>
    </ul>
    <div class="row mb-1 border-bottom align-items-center">
      <div class="col-md-2">
        <h3 class="mb-0">大四</h3>
      </div>
      <div class="col-md-5">
        <div class="progress">
          <div
            class="progress-bar bg-secondary"
            role="progressbar"
            style="width: 100%"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
    <h4>
      政⼤學⽣開發者社團成員
      <span class="badge rounded-pill bg-third" style="transform: rotate(20deg)"
        >!!!</span
      >
    </h4>
    <div class="row no-gutters">
      <p>
        參與 Google 所推動的學⽣開發者社團<br />為網⾴組的成員。<br />
        本組於⼤四上學期製作居住正義相關的<a class="point" href="https://fanxuanliao.github.io/DSC_website/">議題互動網站</a
        >，期待以有趣的⽅式重塑沉重的議題。<br />
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyClubEx",
};
</script>
<style lang="scss">
.club-ex {
  text-align: left;
  img {
    display: block;
    width: 100%;
  }
  a{
    text-decoration: underline;
  }
  a:hover{
    cursor: pointer;
    color:orange;
    font-size: 1.2rem;
  }
}
</style>