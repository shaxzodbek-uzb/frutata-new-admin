<template>
        <div>
            <label class="block text-sm font-medium text-gray-700"> {{ label }} </label>
            <div class="mt-1 flex items-center">
                <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24" v-if="!value">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <img class="h-full w-full" v-else :src="$config.rootURL + value" />
                </span>
                <input ref="file" v-show="false" type="file" @input="fileSelected" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>

                <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="openWindow">Change</button>
        </div>
        </div>
   <!-- <div class="col-span-6 sm:col-span-3">
        <label class="block text-sm font-medium text-gray-700">{{ label }}</label>
        {{ value }}
    </div> -->
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
    },
    methods: {
        fileSelected(event){
          this.$emit('input', event.target.files[0])
        },
        openWindow(){
            this.$refs.file.click()
        }
    }
}
</script>

<style>

</style>