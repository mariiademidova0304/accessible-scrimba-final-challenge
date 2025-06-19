//////////////////////////////////////////////////////////////////////
////////////////////////////TASK 1///////////////////////////////////
////////////////////////////////////////////////////////////////////

function formatFullName(firstName, lastName) {
   if (firstName === undefined) {
      return "Invalid name input."
   }
   if (lastName === undefined) {
      return "Invalid name input."
   }

   let fullName = `${lastName.charAt(0).toUpperCase() + lastName.slice(1)}, ${firstName.charAt(0).toUpperCase() + firstName.slice(1)}`;
   return fullName;
}

console.log(formatFullName(`John`, `Doe`));
console.log(formatFullName(`john`, `doe`));
console.log(formatFullName(`john`,));
console.log(formatFullName(`doe`));
console.log(formatFullName());

//////////////////////////////////////////////////////////////////////
////////////////////////////TASK 2///////////////////////////////////
////////////////////////////////////////////////////////////////////

function calculateTotalCost(price, quantity, taxRate) {
   if (typeof price !== `number` || typeof quantity !== `number` || typeof taxRate !== `number`) {
      return `Invalid input`;
   }
   let totalCost = (price * quantity) * (1 + taxRate);
   return totalCost;
}
console.log(calculateTotalCost(4, 5, 1.2));
console.log(calculateTotalCost(`x`, 5, 1.2));
console.log(calculateTotalCost(3, `5`, 1.2));
console.log(calculateTotalCost(1, 5, `5x7`));

//////////////////////////////////////////////////////////////////////
////////////////////////////TASK 2///////////////////////////////////
////////////////////////////////////////////////////////////////////

function checkEligibility(age, isEmployed) {
   if (age > 18 && isEmployed) {
      return `Eligible!`;
   }

   if (age > 18 && !isEmployed) {
      return `Conditionally eligible.`;
   }

   if (age <= 18) {
      return `Not eligible.`
   }
}

console.log(checkEligibility(18, true));
console.log(checkEligibility(19, true));
console.log(checkEligibility(25, false));

//////////////////////////////////////////////////////////////////////
////////////////////////////TASK 4///////////////////////////////////
////////////////////////////////////////////////////////////////////

function calculateTotalCost(price, quantity, taxRate, discount = 0) {
   if (typeof price !== `number` || typeof quantity !== `number` || typeof taxRate !== `number`) {
      return `Invalid input`;
   }

   let totalCost = ((price * quantity) - discount) * (1 + taxRate);
   return totalCost;
}
console.log(calculateTotalCost(4, 5, 1.2));
console.log(calculateTotalCost(`x`, 5, 1.2));
console.log(calculateTotalCost(3, `5`, 1.2));
console.log(calculateTotalCost(1, 5, `5x7`));
console.log(calculateTotalCost(4, 5, 1.2, 4));