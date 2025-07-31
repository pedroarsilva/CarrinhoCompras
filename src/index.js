import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to Shopee Cart!");
// Implementado A Lógica Do Item.js

// createItem é uma função que retorna um objeto de item.js
const item1 = await createItem("Laptop", 1598.99, 1);
const item2 = await createItem("smartphone", 1200, 3);


// cartService é um apelido para o arquivo cart.js
// Adicionando itens no carrinho e na lista de desejos
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// await cartService.addItem(myWhishList, item1);
// await cartService.addItem(myWhishList, item2);

await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item2)

await cartService.displayCart(myCart);

// detectando o total do carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);


await cartService.calculateTotal(myCart);


// Delete item