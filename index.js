  async function checkweather(a) {

    const key="7f89cf887f24950d295cd08b801c75c3";
    const api=`https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=7f89cf887f24950d295cd08b801c75c3`;

    let data= await fetch(api).then(response=>response.json())

    console.log(data.name);
    console.log(data.main.temp);
    console.log(data.main.humidity);
    console.log(data.weather[0].description);

    

    

    document.querySelector('.first').style.display='none'
    document.querySelector('.second').style.display='flex'
    document.querySelector('.second').style.justifyContent='center'


    document.querySelector('.C1').innerHTML=data.name;
    document.querySelector('.C2').innerHTML=data.main.humidity;
    document.querySelector('.C3').innerHTML=data.weather[0].description;
}

document.querySelector('#check').addEventListener('click',()=>{
  let a=document.querySelector('#input').value;
  checkweather(a)
})