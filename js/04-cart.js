// Работаем с коллекцией товаров в корзине


const cart = {
    items: [],
    getItem() { },
    add(product) { },
    remove(productName) { },
    clear() { },
    countTotalPrice() { },
    increaseQuantity(productName) { },
    decreaseQuantity(productName) { },
};

cart.add({ name: 'tovar1', price: 50 });
cart.add({ name: 'tovar2', price: 60 });
cart.add({ name: 'tovar2', price: 60 });
cart.add({ name: 'tovar3', price: 110 });

// ПРОДОЛЖЕНИЕ в следующей части