# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
This is an Age calculator app that returns the age of the user in years, additional months and days 

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
- I started out by building the HTML syntax, arranging the elements properly, then I styled each element accordingly,
In the Javascript I started by declaring all the elements from the DOM and dates 
- I created a function to validate that the input fields are not empty. 
- I created another function to check that the dates entered are valid, i.e dates are inline with their months, eg 31/04/2023 is an invalid date so the function returns false, returns true if all inputs are valid.
- I create an arrow function that serves as a general validation function and returns true if all validations are true.
- create a calculateAge function used to calculate the age of the user and output it to the DOM
- Created a startProcess function that returns a process, it has a validation process using the validate function created above the resolves if true or rejects if false. The validation will be calling the calculate function and outputting to the DOM.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript 


### What I learned

Used this to practice my usage of promises


```js
function checkInputDate(
  month,
  day,
  year,
  monthError,
  dayError,
  yearError,
  monthLabel,
  dayLabel,
  yearLabel
) {
  const daysInMonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // check if month value is within the range
  if (month.value < 1 || month.value > 12) {
    monthError.textContent = 'Must be a valid Month';
    month.classList.add('input-error');
    monthLabel.classList.add('label-error');
    return false;
  } else {
    monthError.textContent = '';
    month.classList.remove('input-error');
    monthLabel.classList.remove('label-error');
  }
  // check that day value matches the month value
  if (day.value < 1 || day.value > daysInMonths[month.value]) {
    dayError.textContent = 'Must be a valid day';
    day.classList.add('input-error');
    dayLabel.classList.add('label-error');
    return false;
  } else {
    dayError.textContent = '';
    day.classList.remove('input-error');
    dayLabel.classList.remove('label-error');
  }
  // check that the year is not in the future
  if (year.value > currentDate.getFullYear()) {
    yearError.textContent = 'Must be in the past';
    year.classList.add('input-error');
    yearLabel.classList.add('label-error');
    return false;
  } else {
    yearError.textContent = '';
    year.classList.remove('input-error');
    yearLabel.classList.remove('label-error');
  }
  // returns true if all checks are true
  return true;
}
```

with your own learnings.**

### Continued development

I feel it would have been better to create a class of functions for the validation functions.


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@that-loui](https://www.frontendmentor.io/profile/that-loui)
- Twitter - [@LMacjob](https://www.twitter.com/LMacjob)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

