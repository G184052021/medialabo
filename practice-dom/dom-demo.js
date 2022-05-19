let eu = document.querySelector('li#EU');
eu.remove()
let ul=document.querySelector('ul');
let li;
li=document.createElement('li');
li.textContent='アジア大陸';
ul.insertAdjacentElement('beforeend', li);
li = document.createElement('li');
li.textContent = 'ヨーロッパ大陸'; 
ul.insertAdjacentElement('beforeend', li);
// id が sevenOcean の h2 要素を検索
// （次の行を完成させる）
let h2sevenOcean =document.querySelector('h2#sevenOcean')               ;

// 7大洋　の名前を配列に代入
let oceans = [
  '北極海',
  '北大西洋',
  '南大西洋',
  'インド洋',
  '北太平洋',
  '南太平洋',
  '南極海'
]

// ul 要素を新規作成する．（次の行を完成させる）
ul = document.createElement('ul');

// ul 要素を h2sevenOcean の次に追加する（次の行を書く）
h2sevenOcean.insertAdjacentElement('afterend',ul);

// ul に7つの大陸を追加する
for (let o of oceans) {
  // （この中を完成させる）
let li=document.createElement('li');
li.textContent=o;
ul.insertAdjacentElement('beforeend',li);
}

let h2s=document.querySelectorAll('h2');
for (let h2 of h2s) {
    h2.style.backgroundColor=palegreen;
}