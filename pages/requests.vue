<template>
  <main class="w-full flex-grow p-6">
    <h1 class="text-3xl text-black pb-6">requests</h1>
    <div class="w-full h-full">
      <div class="bg-white overflow-auto">
        <table class="min-w-full bg-white">
          <thead class="bg-gray-800 text-white">
            <tr>
              <th class="p-2 uppercase font-semibold text-sm">id</th>
              <th class="p-2 uppercase font-semibold text-sm">name</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="text-gray-700">
            <tr v-for="item in items" :key="item.id">
              <td class="p-2 text-center">{{ item.id }}</td>
              <td class="p-2">{{ item.name }}</td>
              <td>
                <span>Edit</span>
                <span>Delete</span>
              </td>
            </tr>

            <tr v-if="items.length == 0">
              <td colspan="3">
                <Loader />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
      return {
          items: []
      }
  },
  mounted() {
      this.loadItems()
  },
  methods: {
      loadItems(){
          this.$axios.$get('requests').then(({requests}) => {
              this.items = requests
            })
      }
  }
}
</script>
