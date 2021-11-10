<template>
<div>
  <h1>My pikmin</h1>
  <PikminList :pikmins="pikmins" />
</div>
</template>

<script>
import PikminList from "../components/PikminList.vue"
export default {
  name: 'Pikmin',
  components: {
    PikminList
  },
  data() {
    return {
      type: 'red',
    }
  },
  computed: {
    pikmins() {
      return this.$root.$data.pikmins;
    }
  },
}
</script>

<style>

h1 {
  display: flex;
  justify-content: center;

}

</style>
