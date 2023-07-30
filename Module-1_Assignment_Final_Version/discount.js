function calculateDiscountedAmount(totalAmount) {
    let discount = 0;
  
    if (totalAmount >= 200) {
      discount = 0.15; // 15% discount
    } else if (totalAmount >= 100) {
      discount = 0.1; // 10% discount
    } else if (totalAmount >= 50) {
      discount = 0.05; // 5% discount
    }
  
    const discountedAmount = totalAmount * discount;
    const amount = totalAmount - discountedAmount;
  
    console.log("Total Amount: $" + totalAmount.toFixed(2));
    console.log("Discount Amount: " + (discount * 100) + "%"); 
    console.log("Discounted Amount: $" + discountedAmount.toFixed(2));
    console.log("Amount to pay after " + (discount * 100) + "% discount: $" + amount.toFixed(2));
  }
  
  // Get user input for total purchase amount
  const userInput = prompt("Enter the total purchase amount:");
  
  // Convert the user input to a number
  const totalAmount = parseFloat(userInput);
  
  // Check if the input is valid (a positive number)
  if (!isNaN(totalAmount) && totalAmount >= 0) {
    calculateDiscountedAmount(totalAmount);
  } else {
    console.log("Invalid input. Please enter a valid positive number.");
  }
  