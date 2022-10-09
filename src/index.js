import { createMarkup } from './createMarkup';
import { fetchCountries } from './fetchCountries';
import { refs } from './refs';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const debounce = require('lodash.debounce');

refs.inputRef.addEventListener('input', debounce(searchInput, DEBOUNCE_DELAY));

function searchInput(elem) {
    const country = elem.target.value.trim().toLowerCase();
    console.log(country);
    fetchCountries(country)
        .then(data => {
            const markup = createMarkup(data);
            refs.cardInfo.innerHTML = markup;
        })
        .catch(error => {
            console.log(error);
    })
};
