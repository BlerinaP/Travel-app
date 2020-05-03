const alldata = {};

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('src/client'));

app.get('/', function(req,res){
    res.sendFile('/client/views/index.html', { root: __dirname + '/..'})
});

app.post('/forecast', async(req, res)=>{
   const body = req.body;
   alldata.minTemp = body.minTemp;
   alldata.maxTemp = body.maxTemp;
   alldata.description = body.description;
   alldata.country = body.country;
   alldata.city = body.city;
   console.log(body);
});

app.get('/save', async(req, res)=>{
    res.send(alldata);
});

app.listen(5000, function () {
    console.log('Example app listening on port 5000!')
});