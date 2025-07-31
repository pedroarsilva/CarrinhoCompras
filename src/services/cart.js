// quais ações meu carrinho pode fazer?

// CASO DE USO

// ✅ adicionar item no carrinho
async function addItem(userCart, item) {
  // Verifica se o item já existe no carrinho
  // push adiciona o item no final do array / (vetor)
  userCart.push(item);
}

// calcular o total do carrinho
async function calculateTotal(userCart) {
  console.log("\nShopee Cart TOTAL IS!");
  // return o userCart
  // reduce percorre o array e acumula o resultado
  // total é o acumulador, item é o valor atual do array
  // userCart é o array de itens do carrinho
  // 0 é o valor inicial do acumulador
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`🛒Total:  ${result}\n`);
}

// deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    // Se o item for encontrado, remove-o do carrinho
    userCart.splice(index, 1);
    console.log(`Item ${name} removido do carrinho.`);
  }
}

//✅ remover item do carrinho - diminui 1 item
async function removeItem(userCart, item) {
  // transforma o index visual do usuário para o index do backend
  //1. encontrar o indice - diminuir um item
  const indexFound = userCart.findIndex(
    (prodCart) => prodCart.name === item.name
  );

  //2. se o item for encontrado, remover um item
  if (indexFound == -1) {
    console.log("item não encontrado no carrinho.");
    return;
  }

  //3. item > 1 decrementar o item
  if(userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return
  }

  //4. caso item = 1 deletar o item
  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return
  }
}

async function displayCart(userCart) {
  console.log("\nShopee Cart List:");
  userCart.forEach((item, index) => {
    console.log(`
      ${index + 1}. ${item.name} - R$ ${item.price} | ${
      item.quantity
    }x | Subtotal = R$ ${item.subtotal()}
      `);
  });
}

// Exportando as funções para serem usadas no index.js
// As funções são exportadas como um objeto
export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
