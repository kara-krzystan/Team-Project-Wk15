const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
let startYear = 2000;
let endYear = 2030;
let month = 0;
let year = 0;

function loadCalendarMonths() {
  for (let i = 0; i < months.length; i++) {
    const doc = document.createElement('div');
    doc.innerHTML = months[i];
    doc.classList.add('dropdown-item');

    doc.onclick = (function () {
      const selectedMonth = i;
      return function () {
        month = selectedMonth;
        document.getElementById('curMonth').innerHTML = months[month];
        loadCalendarDays();
        return month;
      };
    })();

    document.getElementById('months').appendChild(doc);
  }
}

function loadCalendarYears() {
  document.getElementById('years').innerHTML = '';

  for (let i = startYear; i <= endYear; i++) {
    const doc = document.createElement('div');
    doc.innerHTML = i;
    doc.classList.add('dropdown-item');

    doc.onclick = (function () {
      const selectedYear = i;
      return function () {
        year = selectedYear;
        document.getElementById('curYear').innerHTML = year;
        loadCalendarDays();
        return year;
      };
    })();

    document.getElementById('years').appendChild(doc);
  }
}

function loadCalendarDays() {
  document.getElementById('calendarDays').innerHTML = '';

  const tmpDate = new Date(year, month, 0);
  const num = daysInMonth(month, year);
  const dayofweek = tmpDate.getDay(); // find where to start calendar day of week

  for (let i = 0; i <= dayofweek; i++) {
    const d = document.createElement('div');
    d.classList.add('day');
    d.classList.add('blank');
    document.getElementById('calendarDays').appendChild(d);
  }

  for (let i = 0; i < num; i++) {
    const tmp = i + 1;
    const d = document.createElement('div');
    d.id = 'myBtn calendarday_' + i;
    d.className = 'day';
    d.innerHTML = tmp;

    document.getElementById('calendarDays').appendChild(d);
  }

  const clear = document.createElement('div');
  clear.className = 'clear';
  document.getElementById('calendarDays').appendChild(clear);
}

function daysInMonth(month, year) {
  const d = new Date(year, month + 1, 0);
  return d.getDate();
}

window.addEventListener('load', function () {
  const date = new Date();
  month = date.getMonth();
  year = date.getFullYear();
  document.getElementById('curMonth').innerHTML = months[month];
  document.getElementById('curYear').innerHTML = year;
  loadCalendarMonths();
  loadCalendarYears();
  loadCalendarDays();
});

// Get the modal
const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const span = document.getElementsByClassName('close')[0];
const calendarArea = document.getElementById('calendarDays');
btn.onclick = function () {
  modal.style.display = 'block';
};
span.onclick = function () {
  modal.style.display = 'none';
};
/*
calendarArea.onclick = function (event) {
  modal.style.display = 'block';
}
*/
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

