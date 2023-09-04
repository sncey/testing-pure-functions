const centsToDollars = require('../centsToDollars');
test('Should convert cents to dollars', () => {
    expect(centsToDollars(1000)).toBe('10.00$');
  });
  
  test('Should return undefined when parameter passed is a string', () => {
    expect(centsToDollars('1000')).toBeUndefined();
  });
  
  test('Should return undefined when NaN value is passed as a parameter', () => {
    expect(centsToDollars(NaN)).toBeUndefined();
  });
  
  test('Should return undefined when undefined value is passed as a parameter', () => {
    expect(centsToDollars(undefined)).toBeUndefined();
  });
  
  test('Should return undefined when parameter is not passed', () => {
    expect(centsToDollars()).toBeUndefined();
  });
  
  test('Should return a string representation of a number', () => {
    expect(typeof centsToDollars(500)).toBe('string');
  });
  
  test('Should have $ sign appended at the end', () => {
    expect(centsToDollars(500).slice(-1)).toEqual("$");
  });
  
  test('Should perform the conversion correctly', () => {
    expect(centsToDollars(5250)).toBe('52.50$');
    expect(centsToDollars(0)).toBe('0.00$');
    expect(centsToDollars(123456789)).toBe('1234567.89$');
  });
  