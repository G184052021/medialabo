let heikin = 3.5;
console.log(heikin);        // 正しくは heikin

// (2) 関数名のつづり間違い      → エラー発生
let h = Math.floor(heikin); // 正しくは floor

// (3) 存在しない配列要素       → undefined　（エラーにならない）
let ary = ['a', 'b', 'c'];
console.log(ary[2]);        // 3番目の要素は存在しない

// (4) 小数のインデックス       → undefined　（エラーにならない）
let i = 1;
console.log(ary[i]);        // i=3/2=1.5 なので ary[1.5] を参照しようとする

// (5) メンバー名の間違い       → undefined （エラーにならない）
let obj = {x:3, y:7, z:2};
console.log(obj.z);         // メンバー z は存在しない

// (6) 初期化していない変数のメンバー   → エラー発生
let o=1;
console.log(o.x);           // oは初期化していない

// (7) オブジェクトや配列ではない値のメンバーと要素	→ undefined （エラーにならない）
let n = 3;
console.log(n.x);			// n はオブジェクトではない
console.log(n[2]);			// n は配列ではない

// (8) メンバー名の間違い(その2）       → エラー発生
let obj2 = {
	mem1: {x:4, y:9},
	mem2: "abc"
};
console.log(obj2.mem1.x);   // obj2.mem0 は存在しない. さらにそのメンバー x を参照しようとする

