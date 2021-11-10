<template>
<div>
  <PikminBuilder pikmins="pikmin" />
</div>
</template>

<script>
import PikminBuilder from "../components/PikminBuilder.vue"
export default {
  name: 'NewPikmin',
  components: {
    PikminBuilder
  }
}
</script>

