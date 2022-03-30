export default  {
    name: 'partner',
    namePlural: 'partners',
        title: 'Partners',
        routes: {
        create: 'partners/create',
        edit: 'partners/edit/',
        },
    columns: {
        id: {title: '#'},
        name: {title: 'Name'},
    },
    api: {
        list: 'partners',
    }
  }