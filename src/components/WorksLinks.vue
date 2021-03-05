<template>
  <div class="card-header bg-secondary">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item" v-for="work in works" :key="work">
        <a
          href="#"
          class="nav-link text-muted work-link"
          @click.prevent="changePageTrigger($event, work.propData)"
          >{{work.linkName}}</a
        >
      </li>
    </ul>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "Menu",
  data() {
    return {
      works:[
        {
          linkName:`香水網站`,
          propData:`perfume`
        },
         {
          linkName:`快樂塗鴉`,
          propData:`happyDraw`
        }, {
          linkName:`族語 104`,
          propData:`ethnicLang104`
        }, {
          linkName:`居住正義`,
          propData:`residenceJustice`
        },
      ]
    };
  },
  methods: {
    changePageTrigger(e, page) {
      $(e.target).addClass("active bg-third");
      $(e.target).parent().siblings().find(".work-link").removeClass("active bg-third");
      this.$emit("changePageEvent", page);
    },
  },
  mounted: function(){
    $('.work-link').first().addClass("active bg-third");
    
  }
};
</script>
<style lang="scss">

.nav-link:hover {
  color: #6c757d;
}
</style>