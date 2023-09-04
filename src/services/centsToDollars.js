// Enter code for the first part of the assignment

function centsToDollars(number) {
    if (typeof number !== 'number' || isNaN(number)) {
      return undefined;
    }
  
    const dollars = number / 100;
     return `${dollars.toFixed(2)}$`;;
  }
  
  module.exports = centsToDollars;
  
  