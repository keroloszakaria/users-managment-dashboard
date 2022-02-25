<template>
  <router-view />
</template>

<script>
export default {
  components: {},
};
</script>


<style lang="scss" >
#app {
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  a {
    text-decoration: none;
  }

  main {
    section:first-of-type {
      padding-top: 200px;
    }
  }

  a,
  i,
  span {
    transition: all 0.3s linear;
  }
}
</style>

