export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '627ec8384b1cc611082ae715',
                  title: 'Sanity Studio',
                  name: 'sveltedevnews-studio',
                  apiId: '7ef4c4aa-e375-42d4-ab45-c526cc8803c1'
                },
                {
                  buildHookId: '627ec838ca5b4015b45d050d',
                  title: 'Blog Website',
                  name: 'sveltedevnews',
                  apiId: 'b0d77cb4-e1c8-452f-bfc7-b9a93bfc243a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GeauxWeisbeck4/SvelteDevNews',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sveltedevnews.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
