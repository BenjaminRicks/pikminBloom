<template>
<div class="wrapper">
<div class='cart'>
  <div class="pikmins">
    <div class="pikmin" v-for="pikmin in pikmins" :key="pikmin.id">
      <div class="info">
        <h1>{{pikmin.name}} -  {{pikmin.locationType}}</h1>
        <div class="friendship">
          <img src="/main/heart.png">
          <h2>{{pikmin.friendship}}</h2>
        </div>

      </div>
      <div class="image" v-if="pikmin.decor=='yes'">
        <img class = "pikminImage" :src="'/images/pikmin/'+pikmin.type+'_'+pikmin.locationType+'.jpg'">
      </div>
      <div class="image" v-else>
        <img class="pikminImage" :src="'/images/pikmin/'+pikmin.type+'_standard.jpg'">
      </div>

    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'PikminList',
  props: {
    pikmins: Array,
  },
  methods: {

  }

}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pikmins {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-image: url("/main/tileableGrass.jpg");
}

.friendship {
  display: flex;
  margin: 0px;
  width: 150px;
  justify-content: center;
}

.friendship img {
  height: 50px;
  width: 50px;
  object-fit: cover;
}

.pikmin {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.pikminImage {
  border: 2px solid #fce41d;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.pikmin .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  border: 2px solid #fce41d;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #27d686;
  color: #000;
  padding: 10px 30px;
  height: 120px;
  padding: 0px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

</style>
