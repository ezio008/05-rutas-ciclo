import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path:'/',        
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',  
        name: 'Pokemon',
        component: () => import(/* webpackChunkName: "ListPage" */ '../modules/pokemon/layouts/PokemonLayout.vue'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import(/* webpackChunkName: "ListPage" */ '../modules/pokemon/pages/ListPage')
            },
            {
                path: 'about',
                name: 'about',
                component: () => import(/* webpackChunkName: "AboutPage" */ '../modules/pokemon/pages/AboutPage')
            },
            {
                path: 'pokemon/:pokemonID',
                name: 'pokemon-id',
                component: () => import(/* webpackChunkName: "PokemonPage" */ '../modules/pokemon/pages/PokemonPage'),
                props: (route) => {
                    const pokemonID = Number(route.params.pokemonID)
                    return isNaN(pokemonID) ? { pokemonID: 1 } : { pokemonID }
                }
            },
        ]
    },
    
    {
        path: '/:pathMatch(.*)*',
        component: () => import(/* webpackChunkName: "404" */ '../modules/shared/pages/NoPageFound')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
