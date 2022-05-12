<template>
    <a v-if="isExternalLink" class="normal-link" target="_blank" :href="link.to">{{ link.name }}</a>
    <router-link v-else :to="link.to" v-slot="{ href, isActive }">
        <a :href="href" :class="isActive ? 'is-active' : 'normal-link'">{{ link.name }}</a>
    </router-link>
</template>

<script>
export default {
    props: {
        link: {
            type: Object,
            required: true
        }
    },
    computed: {
        isExternalLink() {
            return this.link.to.startsWith('http')
        }
    }

}
</script>

<style lang="css" scoped>
.is-active {
    color: greenyellow;
}

.normal-link {
    color: darkseagreen;
}
</style>