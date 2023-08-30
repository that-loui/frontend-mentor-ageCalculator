// inputs
const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('.month');
const yearInput = document.querySelector('#year');
// submit btn
const calculateBtn = document.querySelector('.calculateBtn');
// error output
const dayError = document.querySelector('.date-error');
const monthError = document.querySelector('.month-error');
const yearError = document.querySelector('.year-error');
// output
const yearOutput = document.querySelector('.output-year');
const monthOutput = document.querySelector('.output-month');
const dayOutput = document.querySelector('.output-day');
// labels
const labelDay = document.querySelector('.labelDay');
const labelMonth = document.querySelector('.labelMonth');
const labelYear = document.querySelector('.labelYear');

console.log(labelDay);
// date
const currentDate = new Date();

// submit event
calculateBtn.addEventListener('click', (e) => {
  // prevent form from submitting
  e.preventDefault();
  startProcess()
    .then(() => {
      calculateAge(yearOutput, monthOutput, dayOutput);
    })
    .catch((err) => {
      err;
    });
});

// function to ensure input values are not empty
function checkInputValue(input, errorElement, label) {
  if (input.value == '') {
    errorElement.textContent = 'This field is required';
    input.classList.add('input-error');
    label.classList.add('label-error')
    return false; 
  } else {
    errorElement.textContent = '';
    input.classList.remove('input-error');
    label.classList.add
    return true; 
  }
}
// function to ensure that the input are accurate and to output errors when necessary
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
// finally function to validate that the inputs are all correct and return true
let validateInput = () => {
  const dayValid = checkInputValue(dayInput, dayError, labelDay);
  const monthValid = checkInputValue(monthInput, monthError, labelMonth);
  const yearValid = checkInputValue(yearInput, yearError, labelYear);

  if (dayValid && monthValid && yearValid) {
    if (
      checkInputDate(
        monthInput,
        dayInput,
        yearInput,
        monthError,
        dayError,
        yearError,
        labelMonth,
        labelDay,
        labelYear
      ) == true
    ) {
      return true;
    }
  }
};
// function to calculate age with inputs
let calculateAge = (year, month, day) => {
  // create new date and set to input values
  const birthDay = new Date(
    `${yearInput.value} ${monthInput.value} ${dayInput.value}`
  );
  // calculate age difference add set to variable
  let y = Math.floor(currentDate.getFullYear() - birthDay.getFullYear());
  let m = Math.floor(currentDate.getMonth() - birthDay.getMonth());
  let d = Math.floor(currentDate.getDate() - birthDay.getDate());

  // output to DOM
  year.innerHTML = y < 10 ? `0${y}` : y;
  month.innerHTML = m < 10 ? `0${m}` : m;
  day.innerHTML = d < 10 ? `0${d}` : d;
};
// FUNCTION TO START PROCESS
let startProcess = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // validateInput then resolve
      if (validateInput() == true) {
        resolve();
      } else {
        reject('invalid input');
      }
    }, 3000);
  });
};
