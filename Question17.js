function applyDiscount(price, discount = 10) {
    const discountedPrice = price - (price * (discount / 100));
    return discountedPrice;
  }
  
  const originalPrice = 100; // Example original price
  const finalPrice = applyDiscount(originalPrice, 20); // Applying a 20% discount
  console.log(finalPrice); // Output: 80
  