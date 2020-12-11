const express = require('express');
const path = require('path');
const app = express();
var cors = require('cors')
app.use(cors())
// Serve the static files from the React app
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const axios = require('axios');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'sultans')));
app.get('/pls',(req, res) => {
axios.get('https://acc209d3548f1d668afb321b26ae5b05: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@freshmeal-interview-org.myshopify.com/admin/api/2020-10/products.json')
  .then(response => {
    if (response.data) {
            console.log('data', response.data)
        res.send(response.data)}
    else{
            console.log('res',response)
    }
}).catch(error =>{console.log('error', error)}) 
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })





