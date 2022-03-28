<template>
  <ResourceList title="News" create-route="news/create">
    <table class="min-w-full bg-white">
      <thead class="bg-gray-800 text-white">
        <tr>
          <th class="p-2 uppercase font-semibold text-sm">id</th>
          <th class="p-2 uppercase font-semibold text-sm">title</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="text-gray-700">
        <tr v-for="item in items" :key="item.id">
          <td class="p-2 text-center">{{ item.id }}</td>
          <td class="p-2">{{ item.title }}</td>
          <td>
            <span @click="$router.push(`/news/edit/${item.id}`)">Edit</span>
            <span>Delete</span>
          </td>
        </tr>
        <tr v-if="loading == false && items.length == 0">
          <td colspan="3" class="px-2 py-4 text-center text-xl">
              No items found!
          </td>
        </tr>
        <tr v-if="loading == true">
          <td colspan="3">
            <Loader />
          </td>
        </tr>
      </tbody>
    </table>
  </ResourceList>

</template>

<script>
export default {
  name: 'IndexPage',
  data() {
      return {
          items: [],
          loading: true,
      }
  },
  mounted() {
    this.loadItems()
  },
  methods: {
      loadItems(){
        this.loading = true;

        this.$axios.$get('news').then(({news}) => {
            this.items = news
            this.loading = false
          })
      }
  }
}
</script>
