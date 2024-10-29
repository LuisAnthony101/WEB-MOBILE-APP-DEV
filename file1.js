function performOperation(num1, num2, operation) {
    if (operation === "add") {
      console.log(num1 + num2);
    } else if (operation === "subtract") {
      console.log(num1 - num2);
    } else if (operation === "multiply")   
   {
      console.log(num1 * num2);
    } else if (operation === "divide")   
   {
      if (num2 === 0) {
        throw new Error("Cannot divide by zero.");
      }
      console.log(num1 / num2);
    } else {
      throw new Error("Invalid operation.");
    }
  }
  
  // Example usage:
  try {
    performOperation(5, 3, "add");
    
    performOperation(19,3, "multiply");
    
    
    performOperation(45,16,"divide");
    
    performOperation(101,345,"subtract");
    
    // Output: 8
  } catch (error) {

  }