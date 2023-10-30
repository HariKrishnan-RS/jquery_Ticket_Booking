const T1ary = JSON.parse(localStorage.getItem('T1'));
const T2ary = JSON.parse(localStorage.getItem('T2'));
const T3ary = JSON.parse(localStorage.getItem('T3'));
const nameary = JSON.parse(localStorage.getItem('names'));
let i = 0;

function apply(b, a) {
  for (obj of a) {
    let keys = Object.keys(obj);
    let M_name = nameary[keys[0]]; //movie name
    let M_seat = String(obj[keys[0]]); // seats
    let M_day = obj[keys[1]]; // day
    M_day == 'D1' ? (M_day = 'Date_ONE') : null;
    M_day == 'D2' ? (M_day = 'Date_TWO') : null;
    M_day == 'D3' ? (M_day = 'Date_THREE') : null;
    let list = M_name + '____' + M_day + '____' + M_seat;
    const p = document.createElement('p');
    p.innerText = list;
    document.querySelector(b).appendChild(p);
  }
}

apply('.T1', T1ary);

apply('.T2', T2ary);

apply('.T3', T3ary);
