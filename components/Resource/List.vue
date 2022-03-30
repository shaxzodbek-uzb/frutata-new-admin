<template>
  <main class="w-full flex-grow p-6">
    <div class="flex pb-6 items-baseline">
      <div class="flex-none">
        <h1 class="text-3xl text-black ">{{ resource.title }}</h1>
      </div>
      <div class="flex-1 flex items-center justify-end">
        <Button @click="$router.push(resource.routes.create)"> Create new</Button>
      </div>
    </div>

    <div class="w-full h-full">
      <div class="bg-white overflow-auto">
        <table class="min-w-full bg-white">
      <thead class="bg-gray-800 text-white">
        <tr>
          <th class="p-2 uppercase font-semibold text-sm" v-for="(column, key) in resource.columns" :key="key">
            {{column.title}}
            </th>
          <th></th>
        </tr>
      </thead>
      <tbody class="text-gray-700">
        <tr v-for="item in items" :key="item.id">
          <td class="p-2" v-for="(column, key) in resource.columns" :key="key">{{ item[key] }}</td>
          <td>
            <span @click="$router.push(resource.routes.edit + item.id)">Edit</span>
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
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data(){
    return {
      items: [],
      loading: true,
    }
  },
    props: {
        resource: {
          type: Object,
          required: true
        }
    },
    
  mounted() {
    this.loadItems()
  },
  methods: {
      loadItems(){
        this.loading = true;
        this.$axios.$get(this.resource.api.list).then((response) => {
            this.items = response[this.resource.namePlural]
            this.loading = false
          })
      }
  }
}
</script>