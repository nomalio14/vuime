var mocky = require('mocky')

mocky
  .createServer([
    {
      // simple GET route without request body to match
      url: '/profile',
      method: 'get',
      headers: { 'Content-type': 'text/json' },
      res: {
        status: 200,
        headers: {
          'Content-type': 'text/html',
          'Access-Control-Allow-Origin': 'http://localhost:8080'
        },
        body: JSON.stringify({
          startDateMenu: 'st1',
          endDateMenu: 'en1',
          due: 'Feb 12th',
          createdAt: 'Feb 3th',
          descrtiption: 'Use Vue.js',
          asignedAvatar:
            'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          assignee: '',
          createrName: 'Noma Yuma',
          createdAvatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
          title: 'Build people page',
          subtitle: 'Could you check this UI compornemt?'
        })
      }
    },
    {
      // simple GET route without request body to match
      url: '/taskList_wait',
      method: 'get',
      headers: { 'Content-type': 'text/json' },
      res: function(req, res, callback) {
        setTimeout(function() {
          callback(null, {
            status: 200,
            headers: {
              'Content-type': 'text/html',
              'Access-Control-Allow-Origin': 'http://localhost:8080'
            },
            body: JSON.stringify([
              {
                id: 0,
                isEdit: false,
                done: false,
                due: '2019-05-09',
                createdAt: 'Feb 3th',
                descrtiption: 'Use Vue.js',
                asignedAvatar:
                  'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
                assignee: '',
                createrName: 'Noma Yuma',
                createdAvatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
                title: 'Build people page',
                subtitle: 'Could you check this UI compornemt?'
              },
              {
                id: 1,
                isEdit: false,
                done: true,
                due: '2019-04-11',
                createdAt: 'Feb 5th',
                title: 'Solve select feature',
                asignedAvatar:
                  'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
                assignee: '',
                createrName: 'Noma Yuma',
                createdAvatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
                subtitle: 'Did you push to github?'
              },
              {
                id: 2,
                isEdit: false,
                done: false,
                due: '2019-06-11',
                createdAt: 'Feb 10th',
                descrtiption: 'Add upload feature',
                asignedAvatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
                assignee: '',
                createrName: 'Matsui Akira',
                createdAvatar:
                  'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
                title: 'Avatar feature'
              },
              {
                id: 3,
                isEdit: false,
                done: false,
                due: '2019-11-01',
                createdAt: 'Feb 21th',
                descrtiption: 'This is CV',
                title: '【Primaly】Feedback of Interview',
                asignedAvatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
                assignee: '',
                createrName: 'Matsui Akira',
                createdAvatar:
                  'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
                subtitle: 'Could you update due?'
              },
              {
                id: 4,
                isEdit: false,
                done: false,
                due: '2020-01-11',
                createdAt: 'Feb 25th',
                descrtiption: 'staff schedule is here',
                asignedAvatar:
                  'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
                assignee: '',
                createrName: 'Noma Yuma',
                createdAvatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
                title: 'TB scheduling'
              }
            ])
          })
        }, 1000)
      }
    },
    {
      // POST route with request body to match and respose with status, headers and body
      url: '/profile',
      method: 'post',
      req: '',
      headers: { 'Content-type': 'text/json' },
      res: {
        status: 200,
        headers: {
          'Content-type': 'text/html',
          'Access-Control-Allow-Origin': 'http://localhost:8080'
        },
        body: JSON.stringify({ status: 'ok' })
      }
    },
    {
      // PUT route with dynamic response body
      url: '/profile',
      method: 'put',
      req: '',
      headers: { 'Content-type': 'text/json' },
      res: {
        status: 200,
        headers: {
          'Content-type': 'text/html',
          'Access-Control-Allow-Origin': 'http://localhost:8080'
        },
        body: JSON.stringify({ status: 'ok' })
      }
    },
    {
      // DELETE route with dynamic response body
      url: '/profile',
      method: 'delete',
      req: '',
      headers: { 'Content-type': 'text/json' },
      res: {
        status: 200,
        headers: {
          'Content-type': 'text/html',
          'Access-Control-Allow-Origin': 'http://localhost:8080'
        },
        body: JSON.stringify({ status: 'ok' })
      }
    }
  ])
  .listen(4321)
