let students = [
    {face:"taro.png", name:"拓殖太郎"},
    {face:"jiro.png", name:"高尾二郎"},
    {face:"hanako.png", name:"茗荷谷花子"}
]

// div#placeholder を検索
let dp = document.querySelector('div#placeholder')

// 写真表を1つずつ繰り返し追加
for (let student of students) {
    // img 要素作成
    let img = document.createElement('img');
    img.setAttribute('src', student.face);
    
    // 名前の要素
    let p = document.createElement('p');
    p.textContent = student.name;

    // 写真と名前をまとめた div 要素
    let d = document.createElement('div');
    d.classList.add('faceAndName');
    d.insertAdjacentElement('beforeend', img);
    d.insertAdjacentElement('beforeend', p);

    // d をページに追加
    dp.insertAdjacentElement('beforeend', d);
}

