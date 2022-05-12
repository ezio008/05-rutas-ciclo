<template>
    <h1>Pokemon: <span>#{{ pokemonID }}</span></h1>
    <div v-if="pokemon">
        <h2>{{ pokemon.name }}</h2>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    </div>
</template>

<script>
export default {
    props: {
        pokemonID: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            // pokemonID: 0
            pokemon: null
        }
    },

    created() {
        // const { id } = this.$route.params
        // this.pokemonID = id
        this.getPokemon()
    },

    methods: {
        async getPokemon() {
            try {
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonID}`).then(r => r.json())
                console.log(pokemon)
                this.pokemon = pokemon

            } catch (error) {
                this.$router.push('/')
                console.log('No hay nada que hacer aquí');
            }
        }
    },
    watch: {
        pokemonID() {
           this.getPokemon() 
        }
    }

}
</script>

<style>
</style>