const input = document.querySelector(".input-country")
let allCountry = []

fetch( "https://restcountries.com/v3.1/all")
.then((respons)=>{
    return respons.json()
})
.then((data)=>{
    console.log(data)
    // makeCountryList(data)
    allCountry = data
})
.catch((error)=>{
    console.log(error)
})



function makeCountryList(countries){
    const elements = countries.map((country)=>
        `<li class="country-item">
            <p class="country-name">${country.name.common}</p>
            <p class="country-capital">Столиця ${country.capital}</p>
            <p class="country-population">Населення ${country.population}</p>
            <img src="${country.flags.png}" alt="" class="country-flag">
        </li>`
    ).join("")
    document.querySelector(".country-list").innerHTML = elements
}

const filterCountries = function(name) {
    const value = name.trim().toLowerCase();
    if (!value) {
      countryList.innerHTML = '';
      return;
    }
    const filtered = allCountry.filter(country =>
      country.name.common.toLowerCase().startsWith(value)
    );
    makeCountryList(filtered);
  };


input.addEventListener('input', (e)=> {
    filterCountries(e.target.value);
  });





    