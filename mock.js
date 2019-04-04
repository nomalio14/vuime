var mocky = require('mocky');

mocky.createServer([{
// simple GET route without request body to match
  url: '/profile',
  method: 'get',
  headers: {'Content-type': 'text/json'},
  res: {
    status: 200,
    headers: {'Content-type': 'text/html', 'Access-Control-Allow-Origin': 'http://localhost:8080'},
    body: JSON.stringify({
      startDateMenu:'st1',
      endDateMenu:'en1',
      due: 'Feb 12th',
      createdAt:'Feb 3th',
      descrtiption: 'Use Vue.js',
      asignedAvatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
      assignee:'',
      createrName: 'Noma Yuma',
      createdAvatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
      title: 'Build people page',
      subtitle: "Could you check this UI compornemt?"
    })
  }
},
{
// simple GET route without request body to match
  url: '/taskList_wait',
  method: 'get',
  headers: {'Content-type': 'text/json'},
  res: function(req, res, callback) {
    setTimeout(function() {
      callback(null, {
        status: 200,
        headers: {'Content-type': 'text/html', 'Access-Control-Allow-Origin': 'http://localhost:8080'},
        body: JSON.stringify([
          {
            startDateMenu:'st1',
            endDateMenu:'en1',
            due: 'Feb 12th',
            createdAt:'Feb 3th',
            descrtiption: 'Use Vue.js',
            asignedAvatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            assignee:'',
            createrName: 'Noma Yuma',
            createdAvatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
            title: 'Build people page',
            subtitle: "Could you check this UI compornemt?"
          },
          {
            startDateMenu:'st2',
            endDateMenu:'en2',
            due: 'Mar 22th',
            createdAt:'Feb 5th',
            title: 'Solve select feature',
            asignedAvatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            assignee:'',
            createrName: 'Noma Yuma',
            createdAvatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
            subtitle: "Did you push to github?"
          },
          {
            startDateMenu:'st3',
            endDateMenu:'en3',
            due: 'Mar 23th',
            createdAt:'Feb 10th',
            descrtiption: 'Add upload feature',
            asignedAvatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
            assignee:'',
            createrName: 'Matsui Akira',
            createdAvatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            title: 'Avatar feature',
          },
          {
            startDateMenu:'st4',
            endDateMenu:'en4',
            due: 'Mar 30th',
            createdAt:'Feb 21th',
            descrtiption: 'This is CV',
            title: '【Primaly】Feedback of Interview',
            asignedAvatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
            assignee:'',
            createrName: 'Matsui Akira',
            createdAvatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            subtitle: 'Could you update due?'
          },
          {
            startDateMenu:'st5',
            endDateMenu:'en5',
            due: 'Apr 1st',
            createdAt:'Feb 25th',
            descrtiption: 'staff schedule is here',
            asignedAvatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            assignee:'',
            createrName: 'Noma Yuma',
            createdAvatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
            title: 'TB scheduling'
          },
          
          
        ])
      });
    }, 1000);
  }
},
{
// POST route with request body to match and respose with status, headers and body
  url: '/profile',
  method: 'post',
  req: '',
  headers: {'Content-type': 'text/json'},
  res: {
    status: 200,
    headers: {'Content-type': 'text/html', 'Access-Control-Allow-Origin': 'http://localhost:8080'},
    body: JSON.stringify({'status': 'ok'})
  }
},
{
// PUT route with dynamic response body
  url: '/profile',
  method: 'put',
  req: '',
  headers: {'Content-type': 'text/json'},
  res: {
    status: 200,
    headers: {'Content-type': 'text/html', 'Access-Control-Allow-Origin': 'http://localhost:8080'},
    body: JSON.stringify({'status': 'ok'})
  }
},
{
// DELETE route with dynamic response body
  url: '/profile',
  method: 'delete',
  req: '',
  headers: {'Content-type': 'text/json'},
  res: {
    status: 200,
    headers: {'Content-type': 'text/html', 'Access-Control-Allow-Origin': 'http://localhost:8080'},
    body: JSON.stringify({'status': 'ok'})
  }
}]).listen(4321);