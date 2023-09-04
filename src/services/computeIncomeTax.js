// Enter code for the third part of the assignment
function calcTaxableIncome(income) {
    if (income <= 100000) return income - 12500 > 0 ? income - 12500 : 0;
    if (income - 100000 > 25000) return income;
    return income - (12500 - (income - 100000) / 2);
  }
  
  function computeIncomeTax(income) {
    if (!Number.isInteger(income) || income < 0) return undefined;
  
    const taxableIncome = calcTaxableIncome(income);
    if (taxableIncome <= 37500) return taxableIncome * 0.2;
    if (taxableIncome <= 150000) return 7500 + (taxableIncome - 37500) * 0.4;
  
    return 52500 + (taxableIncome - 150000) * 0.45;
  }
  
  module.exports = computeIncomeTax; 
  