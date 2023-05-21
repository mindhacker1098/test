const express = require('express');
const app = express();
const axios=require('axios');

app.get('/favicon.ico', function(req, res) { 
  res.statusCode=204
  res.end();
});
app.get('/', (req, res) => {
  

// axios.get('http://localhost:5000',{headers:req['headers']}
// )
console.log(req['headers'])
});



const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


