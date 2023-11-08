let movieAry = JSON.parse(localStorage.getItem('movies'));
if (movieAry == null) {
  movieAry = [];
}
let movie_count = movieAry.length;
let movieId = 0;
let nameary = JSON.parse(localStorage.getItem('names'));
let i = 0;
$(document).ready(function () {
  if (
    !localStorage.getItem('T1') &&
    !localStorage.getItem('T2') &&
    !localStorage.getItem('T3')
  ) {
    localStorage.setItem('T1', JSON.stringify([]));
    localStorage.setItem('T2', JSON.stringify([]));
    localStorage.setItem('T3', JSON.stringify([]));

    let ary = [
      'm1',
      'm2',
      'm3',
      'm4',
      'm5',
      'm6',
      'm7',
      'm8',
      'm9',
      'm10',
      'm11',
      'm12',
      'm13',
      'm14',
      'm15',
    ];
    localStorage.setItem('movies', JSON.stringify(ary));
    ary = [
      'Spider Man',
      'I am Born',
      'Flight 336',
      'Future City',
      'Migration',
      'Cool Movie',
      'Old Movie',
      'Fast Name',
      'Slow Name',
      'slow Name',
      'slow Name',
      'Movie fast',
      'Movie New',
      'New Name',
      'Horrer Movie',
    ];
    localStorage.setItem('names', JSON.stringify(ary));
    sessionStorage.setItem('clickedMovieId', JSON.stringify(''));
  }
});
function notification() {
  window.location.href = 'notification.html';
}
$(function () {
  movieAry.forEach((element) => {
    const mainBar = $('.main-bar');
    const div = $('<div>');
    const img = $('<img>');
    const a = $('<a>');
    const h1 = $('<H1>');
    const p = $('<P>');
    div.addClass('movie-cell');
    img.addClass('movie-img');
    img.attr('src', `movies-img/${element}.jpg`);
    h1.addClass('movie-name');
    h1.html(nameary[i]);
    i++;
    p.html('<b>N</b>');
    p.append(
      'ost rum dolk orum, l abo re mini ma sim ilique sapienteitaque soluta consectetur!'
    );
    a.addClass('book-tic-lnk');
    a.attr('href', 'bookPage.html');
    a.text('Book Ticket');
    a.attr('id', String(movieId));
    movieId = movieId + 1;
    div.append(img);
    div.append(h1);
    div.append(p);
    div.append(a);
    mainBar.append(div);
  });
});
///////////////////////////////////
$(document).ready(function () {
  $('.main-bar').click(function (e) {
    const clickedMovieId = e.target.id;
    const i = JSON.stringify(clickedMovieId);
    sessionStorage.setItem('clickedMovieId', i);
    console.log(e.target.className);
    if ($(e.target).hasClass('search-form')) {
      e.preventDefault();
    }
  });
});

$(document).ready(function () {
  $('.search-box').on('input', function (e) {
    if ($(e.target).hasClass('search-box')) {
      let value = $(e.target).val().toLowerCase();
      let movieNamelst = $('.movie-name');
      movieNamelst.each((index) => {
        let txt = $(movieNamelst[index]).text().toLowerCase();
        if (!txt.includes(value)) {
          $(movieNamelst[index]).parent().css('display', 'none');
        } else {
          $(movieNamelst[index]).parent().css('display', 'flex');
        }
      });
    }
  });
});
function hide() {
  $('.side-bar').toggleClass('hide');
}

$('body').on('keypress', function (e) {
  if (e.key == 'Enter' && e.shiftKey == true) {
    localStorage.setItem('T1', JSON.stringify([]));
    localStorage.setItem('T2', JSON.stringify([]));
    localStorage.setItem('T3', JSON.stringify([]));
    localStorage.removeItem('T1');
    localStorage.removeItem('T2');
    localStorage.removeItem('T3');
    localStorage.removeItem('n');
    localStorage.removeItem('names');
    localStorage.removeItem('movies');
  }
});
