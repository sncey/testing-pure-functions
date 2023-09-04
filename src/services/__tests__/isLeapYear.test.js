// Test your code for the second part of the assignment

const isLeapYear = require('../isLeapYear');

test('Should return true for a leap year', () => {
    expect(isLeapYear(2020)).toBe(true);
  });

  test('Should return false for a non-leap year', () => {
    expect(isLeapYear(2021)).toBe(false);
  });
  
  test('Should return false for a non-leap year divisible by 100 but not by 400', () => {
    expect(isLeapYear(1900)).toBe(false);
  });
  
  test('Should return true for a leap year divisible by 4 but not by 100', () => {
    expect(isLeapYear(2024)).toBe(true);
  });
  
  test('Should return true for a leap year divisible by 400', () => {
    expect(isLeapYear(2000)).toBe(true);
  });
  