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
        domString += `<div class ='container col-sm-4'>`
        domString += `<h3 class="row-sm">${product.title}</h3>`
        domString += `</div>`

    });
    printToDom('product-cards', domString)

};

const init = () => {
    productCards();
}
init();