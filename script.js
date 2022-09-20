
document.querySelector("#btnSearch").addEventListener("click", ()=>{
  while(document.querySelector(".card-header")!= null){
    document.querySelector(".card-header").remove();
    document.querySelector(".cardls").remove();
  }
    let text=  document.querySelector("#textSearch").value;
getCountry(text);
})
function getCountry(country){
    const request = new XMLHttpRequest();
    request.open('GET', "https://restcountries.com/v3.1/name/"+country);
    request.send();

request.addEventListener('load', function(){
    const data = JSON.parse(this.responseText);  
        renderCountry(data);
        const codes = data[0].borders.toString();
        const req = new XMLHttpRequest();
        req.open('GET', "https://restcountries.com/v3.1/alpha?codes="+codes);
        req.send();
        req.addEventListener("load", function(){
            const data2 = JSON.parse(this.responseText);
renderNeighbors(data2);

        });
});
searchcountry = "turkey";
}
function renderCountry(data){
    for(let country of data){
        let html = '<div class="card-header">Search Result</div><div class="card-body cardls"><div class="row"><div class="col-4"><img class="img-fluid" src= "'+ country.flags.png+'" alt=""></div><div class="col-8"><h3 class="card-title">'+country.name.common+'</h3><hr><div class="row"><div class="col-4">Population:</div><div class="col-8">'+country.population+'</div></div><div class="row"><div class="col-4">Official Language:</div><div class="col-8">'+Object.values(country.languages)+'</div></div><div class="row"><div class="col-4">Capital:</div><div class="col-8">'+ country.capital+'</div></div></div> </div></div>';
      document.querySelector("#country-details .yer").insertAdjacentHTML("afterbegin",html);
searchcountry = data[0].name.common;

    }
   }
function renderNeighbors(data){
    for(let country of data){
        let html = '<div class="card-header">Neighbor to '+searchcountry+'</div><div class="card-body cardls"><div class="row"><div class="col-4"><img class="img-fluid" src= "'+ country.flags.png+'" alt=""></div><div class="col-8"><h3 class="card-title">'+country.name.common+'</h3><hr><div class="row"><div class="col-4">Population:</div><div class="col-8">'+country.population+'</div></div><div class="row"><div class="col-4">Official Language:</div><div class="col-8">'+Object.values(country.languages)+'</div></div><div class="row"><div class="col-4">Capital:</div><div class="col-8">'+ country.capital+'</div></div></div> </div></div>';
        document.querySelector("#country-details .yer").insertAdjacentHTML("beforeend",html);
        
    }
}
