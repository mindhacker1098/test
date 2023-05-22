const express = require('express');
const app = express();
var request = require('request');


app.get('/favicon.ico', function(req, res) { 
  res.statusCode=204
  res.end();
});

app.get('/:part', async (req, res) => {

 

  request(`https://sort.onrender.com/${req.params.part}`, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      

    


        res.send(body)
}
else{
  console.log(error)
}
})
  


});



const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


