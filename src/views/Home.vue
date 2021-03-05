<template>
  <div class="home">
    <MyHeader />
    <MyProfile />
    <MyHeading>我的學歷</MyHeading>
    <MyEducation/>
    <MyHeading>我的技能</MyHeading>
    <MySkill />
    <MyHeading>JS地下城完成作品</MyHeading>
    <MyWorkSwiper />
    <MyHeading>網頁作品</MyHeading>
    <div class="card text-center">
    <Menu v-on:changePageEvent="changePage" />
    <MyWorkDetail :page = nowPage />
    </div>
    <MyHeading>工作經歷</MyHeading>
    <MyWorkEx/>
    <MyHeading>社團經歷</MyHeading>
    <MyClubEx/>
    <MyHeading>競賽經歷</MyHeading>
    <MyCompeteEx/>



  </div>
</template>

<script>
import MyHeader from "@/components/Header.vue";
import MyHeading from "@/components/Heading.vue";
import MyProfile from "@/components/Profile.vue";
import MySkill from "@/components/Skill.vue";
import MyEducation from '@/components/Education.vue';
import MyWorkSwiper from "@/components/WorkSwiper.vue";
import Menu from "@/components/WorksLinks.vue";
import MyWorkDetail from "@/components/WorkDetail.vue";
import MyWorkEx from "@/components/WorkEx.vue";
import MyClubEx from "@/components/ClubEx.vue";
import MyCompeteEx from "@/components/CompeteEx.vue";



export default {
  name: "Home",
  components: {
    MyHeader,
    MyHeading,
    MyProfile,
    MyEducation,
    MySkill,
    MyWorkSwiper,
    Menu,
    MyWorkDetail,
    MyWorkEx,
    MyClubEx,
    MyCompeteEx
    
  },
  data() {
    return {
      nowPage: "perfume",
    };
  },
  methods: {
    changePage(page) {
      this.nowPage = page;
    },
  },
};
</script>
<style lang="scss">

</style>
