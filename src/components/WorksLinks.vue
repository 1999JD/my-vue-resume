<template>
  <div class="card-header bg-secondary">
    <ul class="nav nav-tabs card-header-tabs">
      <li
        class="nav-item"
        v-for="(work,id) in works"
        :key="work"
        :class="{ active:  activeLiArr[id] , 'bg-third':activeLiArr[id]}"
      >
        <a
          href="#"
          class="nav-link text-muted work-link"
          @click.prevent="changePageTrigger($event, work.propData ,id)"
          >{{ work.linkName }}</a
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Menu",
  data() {
    return {
      works: [
        {
          linkName: `香水網站`,
          propData: `perfume`,
        },
        {
          linkName: `快樂塗鴉`,
          propData: `happyDraw`,
        },
        {
          linkName: `族語 104`,
          propData: `ethnicLang104`,
        },
        {
          linkName: `居住正義`,
          propData: `residenceJustice`,
        },
      ],
      activeLi: 0,
    };
  },
  computed:{
    activeLiArr:function(){
      let temp =[];
      this.works.map((item,index)=>{
        if(index == this.activeLi) temp.push(true)
        temp.push(false)
      })
      return temp
    }
  },
  methods: {
    changePageTrigger(e, page,activeLi) {
      this.activeLi = activeLi; 
      this.$emit("changePageEvent", page);
  
    },
  },
};
</script>
<style lang="scss">
.nav-link:hover {
  color: #6c757d;
}
</style>