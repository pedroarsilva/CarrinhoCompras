// CASOS DE USO DOS ITENS

// Criar itens com subtotal certo
export default async function createItem(name, price, quantity) {
  // Retornar um objeto. tudo que está entre {} é um objeto
  
  // e tudo que está entre () é uma função
  // Exportando a função subtotal para calcular o subtotal no index
  return {
    name,
    price,
    quantity,
    subtotal: () => price * quantity,
  };
}
