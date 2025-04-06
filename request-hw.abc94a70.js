fetch("https://restcountries.com/v3.1/all").then(t=>t.json()).then(t=>{var e=t;let n=e.map(t=>`<li class="country-item">
            <p class="country-name">${t.name.common}</p>
        </li>`).join("");document.querySelector(".country-list").innerHTML=n}).catch(t=>{console.log(t)});
//# sourceMappingURL=request-hw.abc94a70.js.map
