<template>
  <ResourceList v-bind="{resource}" />
</template>

<script>
export default {
    async asyncData(vm) {
        const resource = await import('~/resources/'+vm.route.params.resource)
        return { resource: resource.default }

    }
}
</script>
