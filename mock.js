var mocky = require('mocky')

mocky
  .createServer([
    {
      // simple GET route without request body to match
      url: '/users',
      method: 'get',
      headers: { 'Content-type': 'text/json' },
      res: {
        status: 200,
        headers: {
          'Content-type': 'text/html',
          'Access-Control-Allow-Origin': 'http://localhost:8080'
        },
        body: JSON.stringify([
          {
            userId:'nomalio14',
            name:'Noma Yuma',
            avatar:'https://cdn.vuetifyjs.com/images/john.jpg'
          },
          {
            userId:'matsu14',
            name:'Matsui Akira',
            avatar:'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'
          }
        ])
      }
    },
    {
      // simple GET route without request body to match
      url: '/findpeople_wait',
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
            body: JSON.stringify({
              name:'Matsui Akira',
              avatar:'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
              email:'matsui.akira@gmail.com'
          })
          })
        }, 1000)
      }
    },
    {
      // simple GET route without request body to match
      url: '/approveRequest',
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
                userId: 1,
                name: 'Binhaaaaaaaaaaaaaaaaaaaaaaaa',
                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
                },
              { 
                userId: 2,
                name: 'Ranee Carlson',
                avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'
                },
              { 
                userId: 3,
                name: 'Jason Oner',
                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
                },
              { 
                userId: 4,
                name: 'Ranee',
                avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'
                },
            ])
          })
        }, 1000)
      }
    },
    {
      // simple GET route without request body to match
      url: '/userdata',
      method: 'get',
      headers: { 'Content-type': 'text/json' },
      res: {
        status: 200,
        headers: {
          'Content-type': 'text/html',
          'Access-Control-Allow-Origin': 'http://localhost:8080'
        },
        body: JSON.stringify({
          name: 'Noma Yuma',
          email: 'nomalio@gmail.com',
          avatar: 'https://cdn.vuetifyjs.com/images/john.jpg'
          }
        )
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
                due: '2019-10-09',
                startDate: '2019-10-01',
                createdAt: '2019-04-09',
                asignedAvatar:
                  ['https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'],
                assignee: ['matsu14'],
                createrName: 'Noma Yuma',
                createdAvatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
                title: 'Build people page',
              },
              {
                id: 1,
                isEdit: false,
                done: true,
                due: '2019-10-11',
                startDate: '2019-10-01',
                createdAt: '2019-05-09',
                title: 'Solve select feature',
                asignedAvatar:
                  ['https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'],
                assignee: ['matsu14'],
                createrName: 'Noma Yuma',
                createdAvatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
              },
              {
                id: 2,
                isEdit: false,
                done: false,
                due: '2019-11-11',
                startDate: '2019-10-14',
                createdAt: '2019-10-09',
                asignedAvatar: ['https://cdn.vuetifyjs.com/images/john.jpg'],
                assignee: ['matsu14'],
                createrName: 'Matsui Akira',
                createdAvatar:
                  'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
                title: 'Avatar feature'
              },
              {
                id: 3,
                isEdit: false,
                done: false,
                due: '2019-12-31',
                startDate: '2019-12-01',
                createdAt: '2019-05-11',
                title: '【Primaly】Feedback of Interview',
                asignedAvatar: ['https://cdn.vuetifyjs.com/images/john.jpg'],
                assignee: ['matsu14'],
                createrName: 'Matsui Akira',
                createdAvatar:
                  'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
              },
              {
                id: 4,
                isEdit: false,
                done: false,
                due: '2020-01-11',
                startDate: '2020-01-01',
                createdAt: '2019-05-04',
                asignedAvatar:
                  ['https://avatars0.githubusercontent.com/u/9064066?v=4&s=460','https://cdn.vuetifyjs.com/images/john.jpg'],
                assignee: ['nomalio14', 'matsu14'],
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
