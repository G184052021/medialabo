let b=document.querySelector('#kensaku');
b.addEventListener('click', kensaku);

function kensaku() {
  let i = document.querySelector('input[name="toshi"]');
  let key = i.value;
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+key+'.json';
  axios.get(url)
       .then(showResult)
       .catch(showError)
       .then(finish);
}
function showResult(resp) {
  let data = resp.data;
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }
  let s1=document.querySelector('p#result1');
  let s2=document.querySelector('p#result2');
  let s3=document.querySelector('p#result3');
  let s4=document.querySelector('p#result4');
  let s5=document.querySelector('p#result5');
  let s6=document.querySelector('p#result6');
  s1.textContent='都市名:'+data.name;
  s2.textContent='緯度:'+data.coord.lon+'　　経度:'+data.coord.lat;
  for(const value of data.weather) {
    s3.textContent='天気:'+value.description;
  }
  s4.textContent='最低気温:'+data.main.temp_min+'　　最高気温:'+data.main.temp_max;
  s5.textContent='湿度:'+data.main.humidity;
  s6.textContent='風速:'+data.wind.speed+'　　風向:'+data.wind.deg;

  console.log(data);
  console.log('都市名:'+data.name);
  console.log('緯度:'+data.coord.lon+'経度:'+data.coord.lat);
  for(const value of data.weather) {
    console.log('天気:'+value.description)
  }
  
  console.log('最低気温:'+data.main.temp_min+'最高気温:'+data.main.temp_max);
  console.log('湿度:'+data.main.humidity);
  console.log('風速:'+data.wind.speed+'風向:'+data.wind.deg);
}
function showError(err) {
  console.log(err);
}
function finish() {
  console.log('Ajax 通信が終わりました');
}