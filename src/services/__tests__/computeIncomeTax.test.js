// Test your code for the third part of the assignment

const computeTax = require("../computeIncomeTax");

describe("computeIncomeTax", () => {
  it("Should return undefined for non integer and negative numbers", () => {
    expect(computeTax("100000")).toBeUndefined();
    expect(computeTax("hi")).toBeUndefined();
    expect(computeTax(-50000)).toBeUndefined();
    expect(computeTax(5000.5)).toBeUndefined();
  });
  it("Should return 0 for income less than 12500 (no tax)", () => {
    expect(computeTax(5600)).toEqual(0);
    expect(computeTax(0)).toEqual(0);
    expect(computeTax(12500)).toEqual(0);
  });
  it("Should return 20% of income after deducting fixed allowance for income between 12.5k and 50k", () => {
    expect(computeTax(12600)).toEqual(20);
    expect(computeTax(50000)).toEqual(7500);
  });
  it("Should return 40% of income after deducting fixed allowance for income between 50k and 100k", () => {
    expect(computeTax(60000)).toEqual(11500);
    expect(computeTax(99000)).toEqual(27100);
  });
  it("Should return 40% of income after deducting calculated allowance for income between 100k and 150k", () => {
    expect(computeTax(110000)).toEqual(33500);
    expect(computeTax(125000)).toEqual(42500);
  });
  it("Should return 45% of income after deducting calculated allowance for income above 150k", () => {
    expect(computeTax(155000)).toEqual(54750);
    expect(computeTax(1000000)).toEqual(435000);
  });
});