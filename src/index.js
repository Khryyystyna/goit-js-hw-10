import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import { refs } from './refs';
import { markupCountry, murkupInfo } from './createMarkup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const debounce = require('lodash.debounce');

refs.inputRef.addEventListener('input', debounce(searchInput, DEBOUNCE_DELAY));


function searchInput(elem) {
    refs.cardList.innerHTML = '';
    refs.cardInfo.innerHTML = '';

    const country = elem.target.value.trim().toLowerCase();
    console.log(country);
    if (!country) {
    return;
    }

    fetchCountries(country)
    .then(data => {
      if (data.length === 1) {
         const markup = data.map(murkupInfo).join('');
         refs.cardInfo.innerHTML = markup;
      } else if (data.length >= 2 && data.length <= 10) {
        const markup = data.map(markupCountry).join('');
        refs.cardList.innerHTML = markup;
      } else {
        return Notify.info('Too many matches found. Please enter a more specific name.');
      }
    })
    .catch(error => {
       return Notify.failure('Oops, there is no country with that name');
    });
};
