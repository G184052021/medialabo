let face = "taro.png";
let name = "拓殖太郎";

// img 要素を作成
let img = document.createElement('img');
img.setAttribute('src', face);
img.setAttribute('alt', '顔写真');
img.setAttribute('width', '200');

// div#face の子要素に img を追加
let d = document.querySelector('div#face');
d.insertAdjacentElement('beforeend', img);

// span#name 要素のテキストに名前を設定
let s = document.querySelector('span#name');
s.textContent = name;

