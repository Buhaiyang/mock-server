const jsonServer = require('json-server');
const getMockData = require('./readFile.js');
const prefix = '/api';
const port = '8080';
let count = 0;

getMockData((mockData)=>{
  start(mockData);
});

const start = (mockData)=>{
  const server = jsonServer.create();
  server.use(jsonServer.bodyParser)
  mockData.forEach(data=>{
    for (let registerUrl in data){
      let method = '';
      let route = '';
      if(registerUrl.indexOf('POST:') === 0){
        route = registerUrl.replace('POST:', '');
        method = 'post';
      }else if(registerUrl.indexOf('PUT:') === 0){
        route = registerUrl.replace('PUT:', '');
        method = 'put';
      }else if(registerUrl.indexOf('DELETE:') === 0){
        route = registerUrl.replace('DELETE:', '');
        method = 'delete';
      }else{
        route = registerUrl.replace('GET:', '');
        method = 'get';
      }
      count ++;
      if (route.split('/')[1] !== 'sales_ai_coach') {
        route = `${prefix}${route}`;
      }
      server[method](route, (req, res) => {
        console.log(req.method, ':', req.url);
        const result = data[registerUrl];
        if(typeof result ==='object'){
          res.jsonp(result);
        }else if(typeof result ==='function'){
          result(req,res);
        }else{
          console.error('return mock data format error');
        }
      });
    }
  });

  server.listen(port, () => {
    console.log(`the restful-server is running at ${port}, total: ${count}`)
  });
}
