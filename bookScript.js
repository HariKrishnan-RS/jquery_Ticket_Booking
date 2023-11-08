// localStorage.setItem('T1', JSON.stringify([]));
// localStorage.setItem('T2', JSON.stringify([]));
// localStorage.setItem('T3', JSON.stringify([]));

//creating seats
let clickedMovieId = JSON.parse(sessionStorage.getItem('clickedMovieId'));
clickedMovieId = Number(clickedMovieId);
let seatCount = 0;
const theater = document.querySelector('.theaters');
const date = document.querySelector('.dates');
let selectedDate = dates.value;
const frontScreen = document.querySelector('.front-screen');
const div = document.createElement('DIV');
div.className = 'seat-grid';
let seatId = 111;
for (let i = 0; i < 50; i++) {
  const seatDiv = document.createElement('DIV');
  seatDiv.className = 'seat';
  seatDiv.style.backgroundColor = 'rgb(163, 163, 163)';
  seatDiv.id = seatId;
  seatId++;
  div.appendChild(seatDiv);
}
frontScreen.insertAdjacentElement('afterend', div);
//
//load seat selection
//
function load(theaterName) {
  const ary = JSON.parse(localStorage.getItem(theaterName));
  let selectedDate = date.value;
  console.log(selectedDate);
  for (obj of ary) {
    if (
      obj.hasOwnProperty(clickedMovieId) &&
      obj.hasOwnProperty(selectedDate)
    ) {
      i = obj[clickedMovieId];
      const id = String(i);
      const element = document.getElementById(id);
      element.style.backgroundColor = 'red';
    }
  }
}
function clearall() {
  for (let i = 111; i < 161; i++) {
    const id = String(i);
    const element = document.getElementById(id);
    element.style.backgroundColor = 'rgb(163, 163, 163)';
  }
}
function loadSeat() {
  if (theaters.value == 'T1') {
    clearall();
    load('T1');
  }
  if (theaters.value == 'T2') {
    clearall();
    load('T2');
  }
  if (theaters.value == 'T3') {
    clearall();
    load('T3');
  }
}

loadSeat();
//
function checkSelectedCount() {
  let count = 0;
  for (let i = 111; i < 161; i++) {
    if (
      document.getElementById(String(i)).style.backgroundColor ==
      'rgb(163, 163, 1)'
    ) {
      count++;
    }
  }
  return count;
}
//
// conform
//
function conform(e) {
  let cellSelected = 0;
  const ary = JSON.parse(localStorage.getItem(theaters.value));
  let target = e.target;
  if (target.className == 'seat' && !ary.includes(target.id)) {
    if (target.style.backgroundColor == 'rgb(163, 163, 163)') {
      console.log('hello');
      target.style.backgroundColor = 'rgb(163, 163, 1)';
    } else if (target.style.backgroundColor == 'rgb(163, 163, 1)') {
      target.style.backgroundColor = 'rgb(163, 163, 163)';
    }
  }
  if (target.className == 'theaters') {
    loadSeat();
  }
  if (target.className == 'dates') {
    loadSeat();
  }
  cellSelected = checkSelectedCount();
  if (target.className == 'book-now' && cellSelected != 0) {
    const userConfirmed = confirm('Are you sure?');
    if (userConfirmed) {
      alert('Tickets Booked');
      //check for all yollow squares
      const ary = JSON.parse(localStorage.getItem(theaters.value));
      for (let i = 111; i < 161; i++) {
        if (
          document.getElementById(i).style.backgroundColor == 'rgb(163, 163, 1)'
        ) {
          let clickedMovieId = JSON.parse(
            sessionStorage.getItem('clickedMovieId')
          );
          clickedMovieId = Number(clickedMovieId);
          const obj = {};
          obj[clickedMovieId] = i;
          selectedDate = date.value;
          obj[selectedDate] = selectedDate;
          console.log(obj);
          ary.push(obj);
        }
      }
      localStorage.setItem(theaters.value, JSON.stringify(ary));
      window.location.href = 'index.html';
    } else {
      alert('You canceled.');
    }
  }
}
const click = document.querySelector('body');
click.addEventListener('click', conform);
function notification() {
  window.location.href = 'notification.html';
}
