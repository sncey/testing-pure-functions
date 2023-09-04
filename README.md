# Testing Pure Functions
The objective of this assignment is to learn how to write tests. And we will start by writing unit tests for pure functions.

Up to now, you have worked with tests in almost every lab. Tests were written beforehand for you to check if your code works correctly and you would continue working on your code till the tests pass.

Today you will be doing something new, not only will you code but you will also write tests to test your code.

The aim here is to get a basic understanding of how to work with testing frameworks to test your code and to get familiar with some of the most used testing approaches.

Now, it's time to get your hands dirty with writing tests using the Jest framework.

A small nudge; you will be developing tests for just one function at a time. In this case, you are developing unit tests, since you are just testing one "unit" of your project.

## Setup
Like always, the first steps for this assignment are:
1. Open your terminal and navigate to your dedicated assignments folder.
2. Then clone this assignment repo on your local machine.
3. Now open the assignment folder on VSCode.

## Starter code
You will find the following starter code in the `src` folder of the project:

- Basic Express application setup with incomplete route in `app.js`. A simple GET route has been setup which you can modify to manually test your code.
- A `services` folder with three `js` files for each part of the assignment:
    - `isLeapYear.js`
    - `centsToDollars.js`
    - `computeIncomeTax.js`
- A `__tests__` folder with three `test.js` files corresponding to each service file where you will write tests for the pure functions.

Run `npm install` to install all the packages listed in the `package.json` file. Then run `npm start` to start the Express server.

## Requirements
 When you are solving each part of the lab, please make sure you do the following:
- Develop iteratively.
- Follow the TDD cycle of RED, GREEN, REFACTOR.
    - RED - Think of one simple example of how the system should be used.
    - GREEN - Add just enough code to make the test pass.
    - REFACTOR - Make the code as well as tests easier to change and more efficient.
- To run the tests, run `npm test`.

**Note:** We will be using the Jest testing framework to execute our tests. It has already been listed in the project dependencies in `package.json` file.

### Part 1: Write the unit test for a function that converts cents to dollars.
Using the TDD cycle, write the function `centsToDollars(number)` which converts cents to dollars.

``` Dollars = Cents/100 ```

For example, centsToDollars(1000) should return 10.00

#### Your tests should cover the following test cases:
- Should return undefined when parameter passed is a string.
- Should return undefined when NaN value is passed as a parameter.
- Should return undefined when undefined value is passed as a parameter.
- Should return undefined when parameter is not passed.
- Should return a string representation of a number.
- Should have `$` sign appended at the end.
- Should perform the conversion correctly.

Feel free to add a few happy path test cases with different cent values as parameters and test for the expected dollar values in each case.

To run the tests, run `npm test`.

### Part 2: Write the unit test for a Leap year function
Using the TDD cycle, write the function `isLeapYear(number)` which should return `true` if the given year is a leap year and `false` otherwise.

#### What is a Leap year?
>A leap year is a calendar year that contains an additional day added to keep the calendar year synchronized with the astronomical year or seasonal year.

In this case, we have not provided any test cases. Can you think of a few different cases for the `isLeapYear` function and then write the tests accordingly? Think on the lines of what it "should" and "should not" do.

### Part 3: Write the unit test for an income tax calculating function
#### UK Income Tax
How much tax you pay each year depends on the following:
- How much of your income is above your personal allowance
- How much of your income falls within each tax band
- Some income is tax-free.

#### Objective
Assume you are given a yearly salary without tax being deducted from it, calculate the amount of income tax needed to be collected from you.

#### Let's just say...
For the sake of simplifying this lab, we'll make the following assumptions for this problem:
- All the income for the aforementioned person is taxable and acquired during employment.
- The aforementioned person does not claim any allowances or receive any taxable benefits from the employment.

#### Tax-free Personal Allowance
The standard Personal Allowance is £12,500, which is the amount of income you don't have to pay tax on.

##### Taxable Bands
Band | Taxable income | Tax rate
-- | -- | --
Personal Allowance | Up to £12,500 | 0%
Basic rate | £12,501 to £50,000 | 20%
Higher rate | £50,001 to £150,000 | 40%
Additional rate | over £150,000 | 45%

[Source: gov.uk](https://www.gov.uk/income-tax-rates)

#### Income over £100,000
For every £2 that your net income is above £100,000, your personal allowance goes down by £1. This means if your income is £125,000 or above, your personal allowance is zero.

For example at *£110,000* the Personal Allowance will be *£7,500*.

``` 12,500 - (110,000 - 100,000) / 2 = 7,500 ```

#### Tax Bands After Deducting Personal Allowance
So that we don't get confused, first of all, we will deduct the personal allowance and then calculate the tax using the band's table below:

##### Taxable Bands
Band | Taxable income | Tax rate
-- | -- | --
Basic rate | 0 to £37,500 | 20%
Higher rate* | £37,501 to £150,000 | 40%
Additional rate* | over £150,000 | 45%

#### Examples
Income | Tax
-- | --
5,600 | 0
12,600 | 20
50,000 | 7,500
1,000,000 | 435,000
155,000 | 54,750
125,000 | 42,500
110,000 | 33,500
99,000 | 27,100
60,000 | 11,500

Using the TDD cycle, write the function `computeTax(income)` which should return the amount of income tax needed to be collected. Please think of a few different test cases for this function, then proceed with writing the tests accordingly.