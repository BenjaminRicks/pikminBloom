<template>
<div id="app">
  <div class="bar">
    <router-link to="/search">
      <div class="menu-item">
        <img src="">
        <p>Search</p>
      </div>
    </router-link>
    <div class="logo">
      <router-link to="/">
        <img src="/main/PikminBloomLogo.png">
      </router-link>
    </div>
    <router-link to="/newpikmin">
      <div class="menu-item">
        <img src="">
        <p>Pikmin Builder</p>
      </div>
    </router-link>
  </div>
  <router-view/>
  <div class='footer'>https://github.com/BenjaminRicks/pikminBloom.git</div>

</div>

</template>

<script>
export default {
  name: 'PikminList',
  props: {
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 75px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}


.bar {
  display: flex;
  justify-content: center;
}

.menu-item {
  display: flex;
  flex-direction: column;
  padding: 30px;
}

.footer {
  display: flex;
  justify-content: center;
}
</style>

