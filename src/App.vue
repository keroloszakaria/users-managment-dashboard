<template>
  <NavHead />
  <router-view />
  <FooterBottom />
</template>

<script>
import NavHead from "@/components/NavHead";
import FooterBottom from "@/components/FooterBottom";
export default {
  components: {
    NavHead,
    FooterBottom,
  },
};
</script>


<style lang="scss" >
#app {
  font-family: "Poppins", sans-serif;
  a {
    text-decoration: none;
  }
  main section:first-of-type {
    padding-top: 200px;
  }
  a,
  i,
  span {
    transition: all 0.3s linear;
  }
}
</style>

