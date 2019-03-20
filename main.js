const products = [
    {
        title: 'product1',
        description: 'blah blah blah',
        imageUrl: 'http://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg',
        size: '4 x 4 inches',
        weight: '8oz',
        price1: '$1.99',
        price2:'$1:49',
        price3:'$.99',
        validUntil: '04/01/2016'
    },
    {
        title: 'product2',
        description: 'blah blah blah',
        imageUrl: 'http://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg',
        size: '4 x 4 inches',
        weight: '8oz',
        price1: '$1.99',
        price2:'$1:49',
        price3:'$.99',
        validUntil: '04/01/2016'
    },
    {
        title: 'product3',
        description: 'blah blah blah',
        imageUrl: 'http://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg',
        size: '4 x 4 inches',
        weight: '8oz',
        price1: '$1.99',
        price2:'$1:49',
        price3:'$.99',
        validUntil: '04/01/2016'
    },
    {
        title: 'product4',
        description: 'blah blah blah',
        imageUrl: 'http://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg',
        size: '4 x 4 inches',
        weight: '8oz',
        price1: '$1.99',
        price2:'$1:49',
        price3:'$.99',
        validUntil: '04/01/2016'
    },
    {
        title: 'product5',
        description: 'blah blah blah',
        imageUrl: 'http://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg',
        size: '4 x 4 inches',
        weight: '8oz',
        price1: '$1.99',
        price2:'$1:49',
        price3:'$.99',
        validUntil: '04/01/2016'
    },
];

console.log(products);

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
};

const productCards = () => {
    let domString = '';
    products.forEach(product => {
        domString += `<div class = ' col-sm-4 product'>`
        domString += `<div class = "card">`
        domString += `<div class = 'card-header'>${product.title}</div>`
        domString += `</div>`
        domString += `<img class="card-img-top" src="${product.imageUrl}" alt="Card image cap">`
        domString += `<div class="card-body">`
        domString += `<p class="card-text">${product.description}</p>`
        domString += `<p class="card-text"></p>`
        domString += ` </div>`
        domString += `</div>`
        domString += `</div>`

        // domString += `<h3>${product.description}</h3>`
        // domString += `<h3>${product.imageUrl}</h3>`
        // domString += `<h3>${product.size}</h3>`
        // domString += `<h3>${product.weight}</h3>`
        // domString += `<h3>${product.price1}</h3>`
        // domString += `<h3>${product.price2}</h3>`
        // domString += `<h3>${product.price3}</h3>`


    });
    printToDom('product-cards', domString)

};

const init = () => {
    productCards();
}
init();