const axios = require('axios');
const url = 'https://rma.swissgear.com/api/interview-endpoint';


axios.get(url)
    .then(data => {
        const items = data.data.data;
        // console.log(items)
        items.forEach(item => {
            createCard(item)
            console.log(items)
        })
    })
    .catch(err => console.log(err))


function createCard(number) {
    // creates card with child data
    const card = document.createElement('li');
    card.className = "card";

    const img = document.createElement('img');
    img.src = number.base_image;
    img.className = "img";
    img.id = "test";

    const name = document.createElement('a');
    name.innerText = number.name;
    name.className = "title";

    const price = document.createElement('h3');
    price.innerText = number.price;
    price.className = "price";

    card.append(img);
    card.append(name);
    card.append(price);
    appendToTable(card)
    return card
}

function appendToTable (data) {
    // appends card to table
    const table = document.getElementsByClassName('table')[0];
    table.appendChild(data)

    return table
}



