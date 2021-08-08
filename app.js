const axios = require('axios');
const url = 'https://rma.swissgear.com/api/interview-endpoint';


axios.get(url)
    .then(data => {
        const items = data.data.data;
        items.forEach(item => {
            createCard(item);
        })
    })
    .catch(err => console.log(err))


function createCard(products) {
    // creates card with child data
    const card = document.createElement('li');
    card.className = "card";
    
    // Img
    const img = document.createElement('img');
    img.src = products.base_image;
    img.className = "img";
    img.id = "test";
    img.onmouseenter = e => setImage(e, products.hover_image, "img-hover");
    img.onmouseleave = e => setImage(e, products.base_image, "img");

    //Name
    const nameDiv = document.createElement('div');
    nameDiv.className = "section";
    const nameHeader = document.createElement('h2');
    nameHeader.className = "header";
    nameHeader.innerText = "Name";
    const name = document.createElement('a');
    name.innerText = products.name;
    name.className = "content";
    nameDiv.append(nameHeader, name);

    // Sku
    const skuDiv = document.createElement('div')
    skuDiv.className = "section";
    const skuHeader = document.createElement('h2');
    skuHeader.className = "header";
    skuHeader.innerText = "Sku";
    const sku = document.createElement('h3')
    sku.innerText = products.sku;
    sku.className = "content"
    skuDiv.append(skuHeader, sku);

    //Price
    const priceDiv = document.createElement('div');
    priceDiv.className = "section";
    const priceHeader = document.createElement('h2');
    priceHeader.className = "header";
    priceHeader.innerText = "Price";
    const price = document.createElement('h3');
    price.innerText = "$" + products.price;
    price.className = "content";
    priceDiv.append(priceHeader, price);

    card.append(img);
    card.append(nameDiv);
    card.append(skuDiv);
    card.append(priceDiv);
    appendToTable(card);
    return card
}

function appendToTable (data) {
    // appends card to table
    const table = document.getElementById('table');
    table.appendChild(data);
    return table
}

function setImage (e, newSrc, className) {
    e.target.src = newSrc;
    e.target.className = className;
}

