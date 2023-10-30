let movieAry = JSON.parse(localStorage.getItem('movies'));
let movie_count = movieAry.length;
let movieId = 0;
let nameary = JSON.parse(localStorage.getItem('names'));
let i = 0;
function notification() {
  window.location.href = 'notification.html';
}

movieAry.forEach((element) => {
  const mainBar = document.querySelector('.main-bar');
  const div = document.createElement('div');
  const img = document.createElement('img');
  const a = document.createElement('a');
  const h1 = document.createElement('H1');
  const p = document.createElement('P');
  div.className = 'movie-cell';
  img.className = 'movie-img';
  img.src = `movies-img/${element}.jpg`;
  h1.className = 'movie-name';
  h1.innerText = nameary[i];
  i++;
  p.innerHTML = '<b>N</b>';
  p.append(
    'ost rum dolk orum, l abo re mini ma sim ilique sapienteitaque soluta consectetur!'
  );
  a.className = 'book-tic-lnk';
  a.href = 'bookPage.html';
  a.innerText = 'Book Ticket';
  a.id = String(movieId);
  movieId = movieId + 1;
  div.appendChild(img);
  div.appendChild(h1);
  div.appendChild(p);
  div.appendChild(a);
  mainBar.appendChild(div);
});
///////////////////////////////////
function clicked(e) {
  const clickedMovieId = e.target.id;
  const i = JSON.stringify(clickedMovieId);
  sessionStorage.setItem('clickedMovieId', i);
  console.log(e.target.className);
  if (e.target.className == 'search-form') {
    e.target.preventDefault();
  }
}
const bookTicket = document.querySelector('.main-bar');
bookTicket.addEventListener('click', clicked);
///////////////////
function keypressed(e) {
  if (e.target.className == 'search-box') {
    let value = e.target.value;
    let movieNamelst = document.querySelectorAll('.movie-name');
    movieNamelst.forEach((item) => {
      let txt = item.innerText;
      txt = txt.toLowerCase();
      value = value.toLowerCase();
      if (!txt.includes(value)) {
        item.parentElement.style.display = 'none';
      } else {
        item.parentElement.style.display = 'flex';
      }
    });
  }
}
const search = document.querySelector('.search-box');
search.addEventListener('input', keypressed);
function hide() {
  const side = document.querySelector('.side-bar');
  side.classList.toggle('hide');
}
const reset = document.querySelector('body');
function resetfun(e) {
  if (e.key == 'Enter') {
    localStorage.setItem('T1', JSON.stringify([]));
    localStorage.setItem('T2', JSON.stringify([]));
    localStorage.setItem('T3', JSON.stringify([]));
  }
}
reset.addEventListener('keypress', resetfun);
