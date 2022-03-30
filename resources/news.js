export default  {
    name: 'news',
    namePlural: 'news',
    title: 'News',
    routes: {
      create: 'news/create',
      edit: 'news/edit/',
    },
    columns: {
      id: {title: '#'},
      title: {title: 'Title'},
      created_at: {title: 'Yaratildi'},
    },
    api: {
      list: 'news',
    }
  }