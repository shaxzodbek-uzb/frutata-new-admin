<template>
    <button class="rounded-lg bg-blue-500 text-white px-4 py-1 text-center cursor-pointer hover:bg-blue-400 select-none" @click="$emit('click')">
        <slot/>
    </button>
</template>

<script>
export default {

}
</script>

<style>

</style>