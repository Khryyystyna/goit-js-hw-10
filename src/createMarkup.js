export function createMarkup({ name, capital, population, flags, languages }) {
    return  `<div class="country-info">
        <div class="country-logo">
            <img src="${flags.svg}" alt="{{name}}"></img>
            <h2 class="country-logo-tittle">${name.official}</h2>
        </div>
        <div class="card-body">
            <p class="body-text">Name: ${capital}</p>
            <p class="body-text">Population: ${population}</p>
            <p class="body-text">Languages: ${languages}</p>
        </div>
    </div>`;
};
