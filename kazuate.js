// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え(デバッグ用): ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 1;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する

let b=document.querySelector('#kaitou');
b.addEventListener('click',hantei);
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let d=document.querySelector('p#answer');
    let s=document.querySelector('p#result');
    let i = document.querySelector('input[name="yoso"]');
    let yoso = i.value;       // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること
    d.textContent=kaisu+'回目の予想:'+yoso;
    if(kaisu<4) {
        if(kaisu===3) {
            s.textContent='まちがい．残念でした答えは'+kotae+'です．';
        } else if (kotae==yoso) {
            s.textContent='正解です．おめでとう!';
        } else if(kotae>yoso) {
            s.textContent='まちがい．答えはもっと大きいですよ';
        } else {
            s.textContent='まちがい．答えはもっと小さいですよ';
        }       
     
        } else {
        s.textContent='答えは'+kotae+'でした.すでにゲームは終わっています.';
        
    }
     kaisu=kaisu+1;
} 

