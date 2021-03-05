<template>
  <nav class="navbar navbar-dark bg-primary">
    <h1 class="nav-sticker"></h1>
    <ul class="d-flex mb-0">
      <li v-for="menuItem in menu" :key="menuItem">
        <a
          :href="menuItem.href"
          target="_blank"
          class="nav-link text-white"
        >
          <font-awesome-icon :icon="['fab', menuItem.iconName]" /> {{menuItem.linkName}}</a
        >
      </li>

    </ul>
  </nav>
</template>
<script>
export default {
  name: "MyHeader",
  data() {
    return {
      menu: [
        {
          linkName: `GitHub`,
          iconName: `github`,
          href: `https://github.com/1999JD`,
        },
        {
          linkName: `Facebook`,
          iconName: `facebook`,
          href: `https://www.facebook.com/profile.php?id=100004112618975`,
        },
        {
          linkName: `Email`,
          iconName: `google`,
          href: `mailto:writer159.new@gmail.com`,
        },
        {
          linkName: `Blog`,
          iconName: `medium`,
          href: `https://writer159-new.medium.com/`,
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.nav {
  &-sticker {
    background-image: url("../assets/img/headSticker.jpg");
    width: 60px;
    height: 60px;
    background-repeat: no-repeat;
    background-size: 130%;
    background-position-y: -18px;
    background-position-x: -10px;
    border-radius: 50%;
  }
  &-link:hover {
    text-decoration: underline !important;
  }
}
</style>