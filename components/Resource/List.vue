<template>
  <main class="w-full flex-grow p-6">
    <div class="flex pb-6 items-baseline">
      <div class="flex-none">
        <h1 class="text-3xl text-black ">{{ title }}</h1>
      </div>
      <div class="flex-1 flex items-center justify-end">
        <Button @click="$router.push(createRoute)"> Create new</Button>
      </div>
    </div>

    <div class="w-full h-full">
      <div class="bg-white overflow-auto">
          <slot></slot>
      </div>
    </div>
  </main>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'News'
        },
        createRoute: {
            type: String,
            default: 'news/create'
        }
    }
}
</script>