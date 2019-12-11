var search=document.getElementById("search");
search.addEventListener('keyup', e=>{
    if(e.keyCode===13){
var searchtext=e.target.value;
    }
    getweather(searchtext);
})

function getweather(searchtext){
const weatherapi=`http://api.openweathermap.org/data/2.5/weather?q=${searchtext}&&mode=json&units=metric&APPID=11ceb3ebfe09368f23214131db183901`;
window.fetch(weatherapi)
.then(data => {
    data.json().
    then(weather=>{
 var weatherdata=weather.weather;
 console.log(weatherdata)
    var output ="";
     for(let x of weatherdata){
          output +=`
         <div class="col-md-4 offset-4 mt-4 card">
         <div class="card-body">
         <h1>${weather.name}</h1>
         <span class="icon"><img src="http://openweathermap.org/img/wn/${x.icon}.png"/></span>
         <p><span>temp:</span><span class="deg">${weather.main.temp}&deg;</span>c</p>
         <span class="temp">${x.description}</span><br>
         <span class="temp">${x.id}</span><br>
         <span class="temp">${x.main}</span>
         <span class=
         </div> 
         </div>`;
        
     }
     document.getElementById("template").innerHTML=output;
       
        
     
}).catch(err=>console.log(err))
.catch(err=>console.log(err))});
}