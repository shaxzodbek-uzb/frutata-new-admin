<template>
  <aside class="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
    <div class="p-6">
      <nuxt-link
        to="/"
        class="text-white text-3xl font-semibold uppercase hover:text-gray-300"
      >Admin</nuxt-link>
    </div>
    <nav class="text-white text-base font-semibold pt-3">
      <nuxt-link
        v-for="(item, index) in menuLinks"
        :key="index"
        :to="item.path"
        class="flex items-center text-white py-4 pl-6 nav-item"
        :class="{'active-nav-link': activePath == item.resource, 'opacity-75 hover:opacity-100': activePath != item.resource}"
      >
        <i :class="['mr-3',item.icon]"></i>
        {{ item.name }}
      </nuxt-link>
    </nav>
  </aside>
</template>

<script>
export default {
    data() {
        return {
            menuLinks: [
                {
                    name: 'Dashboard',
                    path: '/',
                    resource: '',
                    icon: 'fas fa-tachometer-alt'
                },
                {
                    name: 'News',
                    path: '/news',
                    resource: 'news',
                    icon: 'fas fa-sticky-note'
                },
                {
                    name: 'Partners',
                    path: '/partners',
                    resource: 'partners',
                    icon: 'fas fa-table'
                },
                {
                    name: 'Products',
                    path: '/products',
                    resource: 'products',
                    icon: 'fas fa-align-left'
                },
                {
                    name: 'Requests',
                    path: '/requests',
                    resource: 'requests',
                    icon: 'fas fa-align-left'
                }
            ]
        }
    },
    computed: {
        activePath() {
            // return first segment of path
            return this.$route.path.split('/')[1]
        }
    }
}
</script>

