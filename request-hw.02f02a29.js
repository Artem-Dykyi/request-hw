const t=document.querySelector(".input-country");let n=[];fetch("https://restcountries.com/v3.1/all").then(t=>t.json()).then(t=>{console.log(t),n=t}).catch(t=>{console.log(t)});const o=function(t){let o=t.trim().toLowerCase();if(!o){countryList.innerHTML="";return}let u=n.filter(t=>t.name.common.toLowerCase().startsWith(o)).map(t=>`<li class="country-item">
            <p class="country-name">${t.name.common}</p>
            <p class="country-capital">\u{421}\u{442}\u{43E}\u{43B}\u{438}\u{446}\u{44F} ${t.capital}</p>
            <p class="country-population">\u{41D}\u{430}\u{441}\u{435}\u{43B}\u{435}\u{43D}\u{43D}\u{44F} ${t.population}</p>
            <img src="${t.flags.png}" alt="" class="country-flag">
        </li>`).join("");document.querySelector(".country-list").innerHTML=u};t.addEventListener("input",t=>{o(t.target.value)});
//# sourceMappingURL=request-hw.02f02a29.js.map
