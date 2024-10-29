function calculateProfit(sellingPrice, costPrice, unitsSold) {
    // Calculate the total selling price
    const totalSellingPrice = sellingPrice * unitsSold;
  
    // Calculate the total cost price
    const totalCostPrice = costPrice * unitsSold;
  
    // Calculate the profit
    const profit = totalSellingPrice - totalCostPrice;
  
    return profit;
  }
  
  // Example usage:
  const sellingPricePerUnit = 10000; // UGX
  const costPricePerUnit = 8000; // UGX
  const unitsSold = 100;
  
  const totalProfit = calculateProfit(sellingPricePerUnit, costPricePerUnit, unitsSold);
  console.log("Total profit: UGX", totalProfit);