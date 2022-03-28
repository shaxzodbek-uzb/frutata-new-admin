<template>

  <div class="my-10 mx-4">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Create news</h3>
          <p class="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
               <Input label="Title" v-model="news.title"/>
               <Input label="Title ru" v-model="news.title_ru"/>
               <Input label="Title en" v-model="news.title_en"/>
               <Textarea label="Contect"  v-model="news.content"/>
               <Textarea label="Contect ru" v-model="news.content_ru"/>
               <Textarea label="Contect en" v-model="news.content_en"/>
               
<!-- 
                <div class="col-span-6 sm:col-span-4">
                  <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                  <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div> -->

              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" @click="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            news: {
                title: '',
                title_ru: '',
                title_en: '',
                content: '',
                content_ru: '',
                content_en: '',
            }
        }
    },
    mounted(){
        this.getNews(this.$route.params.id);
    },
    methods: {
        getNews(id){
            this.$axios.get(`/news/${id}`).then(({data: {news}}) => {
                this.news = news;
            })
        },
        submit(){
            console.log('submit')
            
            this.$axios.$put(`news/${this.news.id}`, {...this.news, '_method': 'PUT'}).then(({news}) => {
                if(news && news.id){
                    this.$router.push('/news')
                }
            })
        }
    }
}
</script>

<style>

</style>