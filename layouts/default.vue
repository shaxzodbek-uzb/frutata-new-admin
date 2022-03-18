/* eslint-disable vue/multi-word-component-names */
<template>
  <div class="flex">
    <LayoutsSideBar />

    <div class="w-full flex flex-col h-screen overflow-y-hidden">
      <LayoutsHeader />

      <div class="w-full overflow-x-hidden border-t flex flex-col">
        <Nuxt />

        <LayoutsFooter />
      </div>
    </div>
  </div>
</template>
