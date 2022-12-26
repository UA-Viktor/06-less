// Работаем с коллекцией товаров в корзине


const cart = {
    items: [],
    getItem() {
        return this.items;
     },
    add(product) { 

        for (const item of this.items) {
            if (item.name === product.name) {
                item.quantity += 1;
                return;
            }
        }

        const newProduct = {
            ...product,
            quantity: 1,
        };
        this.items.push(newProduct);
    },
    remove(productName) {
        const { items } = this;
        for (let i = 0; i < items.length; i += 1){
            const {name} = items[i];

            if (productName === name) {
                console.log('Нашли такой продукт ', productName);
                items.splice(i, 1);
            }
        }
     },
    clear() { 
        this.items = [];
    },
    countTotalPrice() {
        const { items } = this;

        let total = 0;
        for (const {price, quantity} of items) {
            total += price * quantity;
        }
        return total;
    },
    increaseQuantity(productName) { },
    decreaseQuantity(productName) { },
};



cart.add({ name: 'tovar1', price: 50 });
cart.add({ name: 'tovar2', price: 60 });
cart.add({ name: 'tovar3', price: 60 });
cart.add({ name: 'tovar3', price: 60 });
cart.add({ name: 'tovar4', price: 110 });
cart.add({ name: 'tovar4', price: 110 });
cart.add({ name: 'tovar4', price: 110 });


console.table(cart.getItem());

cart.remove('tovar3')
console.table(cart.getItem());

// cart.clear();
// console.table(cart.getItem());

console.log('Total: ', cart.countTotalPrice());