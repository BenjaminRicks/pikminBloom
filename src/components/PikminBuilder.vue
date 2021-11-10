<template>
<div>
  <div class="wrapper">
    <form class="pure-form">
      
      <div>Name: </div><input v-model="name" />
      <br/>
      <div>Friendship: </div><input v-model="friendship" />
      <br/>
      <div>Date: </div><input v-model="date" />
      <br/>
      <div>Type: </div><input v-model="type" />
      <br/>
      <div>Location Type: </div><input v-model="locationType" />
      <br/>
      <div>Decor (yes/no): </div><input v-model="decor" />
      <br/>

    </form>
    <button v-on:click="addPikmin()">Add new Pikmin</button>

  </div>
</div>
</template>

<script>
export default {
  name: 'PikminBuilder',
  data() {
    return {
      name: '',
      friendship: '',
      date: '',
      type: '',
      locationType: '',
      decor: '',
    }
  },
  methods: {
    addPikmin: function() {
      let newPikmin = {
        id: this.$root.$data.pikmins.length + 1,
	name: this.name,
	friendship: this.friendship,
	date: this.date,
	type: this.type,
	locationType: this.locationType,
	decor: this.decor,
      }
      console.log(newPikmin);
      this.$root.$data.pikmins.push(newPikmin);
    }

  }

}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.input-container {
  display: flex;

}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  border-radius: 10px;
  height: 50px;
  background: #27d686;
  color: black;
  border: none;
}

</style>
