function isLeapYear(number) {
    if (number % 4 === 0 && (number % 100 !== 0 || number % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  
  module.exports = isLeapYear;
  