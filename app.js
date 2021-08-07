const axios = require('axios');
const url = 'https://rma.swissgear.com/api/interview-endpoint';

let products = {};

axios({
    method: 'get',
    url: url,
    responseType: 'stream'
})
    .then(data => {
        const items = data.data.data;
        // console.log(items)
        dostuff(items)
    })
    .catch(err => console.log(err))


function dostuff (arg) {
    console.log(arg)

    arg.forEach((item) => {
        products = item
        // console.log(products)
        var h1 = document.createElement('div');
        h1.textContent = products.name
        var app = document.querySelector('div');
        app.append(h1)
    })
}


