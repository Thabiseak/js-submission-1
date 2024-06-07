function inventoryValue(products) {
    const totalValue = products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    return totalValue;
  }
  
  const products = [
    { name: 'Laptop', price: 1000, quantity: 5 },
    { name: 'Phone', price: 500, quantity: 10 }
  ];
  
  console.log(inventoryValue(products)); // Output: 10000
  