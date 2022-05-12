<template>
  <div>
      <!-- <router-link :to="{name:'home'}">Pokemon List</router-link>
      <router-link :to="{name: 'pokemon-id', params: {pokemonID: 85}}">Pokemon por id</router-link>
      <router-link :to="{name:'about'}">About</router-link> -->
      <custom-link 
        v-for="link in links"
        :key="link.to"
        :link="link"
      />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    data() {
        return {
            links: [
                {to: '/home', name: 'Pokemons'},
                {to: '/pokemon/50', name: 'Por ID'},
                {to: '/about', name: 'Pokemons'},
                {to: 'https://google.es', name: 'Google'},
            ]
        }
    },
    components: {
        CustomLink: defineAsyncComponent(() => import('../components/CustomLink.vue'))
    }
}
</script>

<style lang="css" scoped>

div {
    padding: 0 30px;
}

div a {
    font-weight: bold;
    color: darkgreen;
    margin: 0 10px;
}

/* div .router-link-exact-active {
    color: darkseagreen;
} */

</style>