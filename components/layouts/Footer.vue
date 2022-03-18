<template>
  <footer class="w-full bg-white text-right p-4">O'zbekiston, Toshkent shahri, {{ currentYear }}</footer>
</template>

<script>
export default {
    computed: {
        currentYear() {
            return new Date().getFullYear();
        }
    }
}
</script>