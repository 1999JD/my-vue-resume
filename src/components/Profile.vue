<template>
  <div class="profile card d-flex">
    <div class="row no-gutters">
      <div class="col-md-6">
        <img
          src="@/assets/img/profile.jpg"
          class="profile-img rounded d-block"
          alt="myphoto"
        />
      </div>
      <div class="col-md-6">
        <div class="card-body">
          <h2 class="card-title">張硯喬</h2>
          <p>天真爛漫的牡羊座女生，腦海總塞滿許多想法<br>願能不放棄地步步前行，實現夢境裡的那些綺麗
          </p>
          <h3>關於我</h3>
          <ul>
            <li>致力學習<span class="point">網頁前端</span>工程</li>
            <li>樂於創作</li>
            <li>追求乾淨的code</li>
            <li>對數位文創感興趣</li>
            <li>工作積極認真</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyProfile",
};
</script>
<style lang="scss">
.profile {
  &-img {
    width: 100%;
    height: auto;
  }
  h2{
    border-bottom:1px solid  
  }
  
}
</style>