<template>
    <div class="col-span-6 sm:col-span-3">
        <label for="about" class="block text-sm font-medium text-gray-700">{{ label }} </label>
        <div class="mt-1">
            <textarea :value="value" @input="$emit('input', $event.target.value)"  rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="you@example.com" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        value: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>

</style>