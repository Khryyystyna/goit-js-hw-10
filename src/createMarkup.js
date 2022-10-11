export { markupCountry, murkupInfo };

function markupCountry({ flags, name }) {
  return `<div class="country-item">
      <img
        class="country-flag"
        src="${flags.svg}"
        width="30px"
        height="20px"
      />
      <p class="">${name.official}</p>
    </div>`;
}

function murkupInfo ({ flags,name,capital,population,languages }) {
  const lang = Object.values(languages).join(', ');
 
  return ` 
    <div class="country-item">
    <img class="country-flag" width="60px" height="40px" src="${flags.svg}"></img>
    <p class="country-name">${name.official}</p></div>
    <div class="country-descr">
    <p class="country-descr__name">Capital:
    <span class="country-descr__full-name" >${capital}</span><p>
    <p class="country-descr__name">Population:
    <span class="country-full-name">  ${population}</span></p>
    <p class="country-descr__name">Languages:
    <span class="country-full-name" >${lang}</span></p>
    </div>`;
}

