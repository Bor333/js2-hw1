const products = [
    {id: 1, title: 'Notebook', price: 2000, img: 'images/notebook.jpg'},
    {id: 2, title: 'Mouse', price: 20, img: 'images/mouse.jpg'},
    {id: 3, title: 'Keyboard', price: 200, img: 'images/keyboard.jpg'},
    {id: 4, title: 'Gamepad', price: 50, img: 'images/gamepad.jpeg'},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = item => {
    return `<div class="product-item">
                <img class="item-image" src="${item.img}">
                <h3 class="item-name">${item.title}</h3>
                <p class="item-price">${item.price}</p>
                <button class="buy-btn"><span class="button-text">Купить</span></button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)).join("");
    // Запятые появлялись, потому что метод map создает массив, который выводится вместе с разделяющими запятыми
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);