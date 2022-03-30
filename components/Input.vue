<template>
   <div class="col-span-6 sm:col-span-3">
        <label class="block text-sm font-medium text-gray-700">{{ label }}</label>
        <input v-bind="{placeholder, type, value}" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" @input="$emit('input', $event.target.value)"/>
    </div>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'text',
        },
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