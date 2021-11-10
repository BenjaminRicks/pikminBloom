<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <i class="fas fa-search"></i><input v-model="searchText" />
    <br/>
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="search('name')" href="#" class="pure-menu-link">Name</a></li>
      <li class="pure-menu-item"><a @click="search('type')" href="#" class="pure-menu-link">Types</a></li>
      <li class="pure-menu-item"><a @click="search('location')" href="#" class="pure-menu-link">Location Type</a></li>
      <li class="pure-menu-item"><a @click="search('friendship')" href="#" class="pure-menu-link">Friendship</a></li>

    </ul>
  </div>
  <PikminList :pikmins="pikmins" />
</div>
</template>

<script>
import PikminList from "../components/PikminList.vue"
export default {
  name: 'Pikmin',
  components: {
    PikminList,
  },
  data() {
    return {
      searchText: '',
      type: null,
      locationType: null,
      friendship: null,
      name: null
    }
  },
  computed: {
    pikmins() {
      if(this.type != null) {
        return this.$root.$data.pikmins.filter(pikmin => pikmin.type === this.type);
      }
      else if(this.locationType != null) {
        return this.$root.$data.pikmins.filter(pikmin => pikmin.locationType === this.locationType);
      }
      else if(this.friendship != null) {
        return this.$root.$data.pikmins.filter(pikmin => pikmin.friendship === this.friendship);
      }
      else if(this.name != null) {
        return this.$root.$data.pikmins.filter(pikmin => pikmin.name === this.name);
      }
      else {
	return this.$root.$data.pikmins;
      }

    }
  },
  methods: {
    search(selectType) {
      if(selectType == "type") {
	this.type = this.searchText;
	this.locationType = null;
	this.friendship = null;
	this.name = null;
      }
      else if(selectType == "location"){
        this.locationType = this.searchText;
	this.type = null;
	this.friendship = null;
	this.name = null;
      }
      else if(selectType == "friendship") {
        this.friendship = this.searchText;
        this.type = null;
        this.locationType = null;
        this.name = null;

      }
      else {
	this.name = this.searchText;
	this.type = null;
	this.locationType = null;
	this.friendship = null;
      }
      return;
    }
  }
}
</script>
