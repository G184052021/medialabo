// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え(デバッグ用): ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 1;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
hantei();
let b = document.querySelector('#print');
b.addEventListener('click', greeting);
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    
    let i = document.querySelector('input[name="yoso"]');
    let yoso = i.value;       // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること
    
     if(kotae===yoso) {
         console.log('正解です．おめでとう!');
        } else if(kotae>yoso) {
            console.log('まちがい．答えはもっと大きいですよ');
        } else {
            console.log('まちがい．答えはもっと小さいですよ');
        }       
    
} 

let d = document.querySelector('span#kaisu');
d.textContent = kaisu;

let s = document.querySelector('span#yoso');
s.textContent = yoso;
