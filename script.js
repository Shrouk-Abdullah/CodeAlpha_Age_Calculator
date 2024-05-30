// 1- get values from the form
// 2- create date object for today
// 3- create birthday of user
// 4- validate birth day if it's valid or not
// 5- calcaulte years then mounths...
// 6- resolve negative mounth
// 7- resolve negative year
//////// 8- show the age ////////

document
  .getElementById('age-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    let day = parseInt(document.getElementById('day').value);
    let month = parseInt(document.getElementById('month').value);
    let year = parseInt(document.getElementById('year').value);

    let today = new Date();
    let birthDate = new Date(year, month - 1, day);

    if (birthDate > today) {
      document.getElementById('result').innerText =
        'The birth date cannot be in the future. Please enter a valid date.';
      return;
    }
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    if (today.getDate() < birthDate.getDate()) {
      ageMonths--;
      if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
      }
    }

    document.getElementById(
      'result'
    ).innerText = `Your age is ${ageYears} years and ${ageMonths} months`;
  });
