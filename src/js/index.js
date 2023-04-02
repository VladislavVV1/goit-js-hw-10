import '../css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import { createCountryDiv } from './createCountryDiv';
import { createCountriesList } from './createCountriesList';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const searchBoxEl = document.querySelector("#search-box");
const countryListEl = document.querySelector(".country-list");
const countryInfoEl = document.querySelector(".country-info");

const DEBOUNCE_DELAY = 300;


function handleSearchBoxInput(event) {
    const searchingCountryName = event.target.value.trim();

    if (searchingCountryName === ''){
        countryListEl.innerHTML =''
        return
    }

    fetchCountries(searchingCountryName).then((data) => { 
        
        if (data.length > 10) {
            countryListEl.innerHTML = ''
            countryInfoEl.innerHTML = ''
            Notify.info("Too many matches found. Please enter a more specific name.");
            return
        }
        
        else if (data.length === 1) {
            countryListEl.innerHTML = ''
            countryInfoEl.innerHTML = data.map((el) => createCountryDiv(el)).join('')
            return
        }
        countryInfoEl.innerHTML = ''
        countryListEl.innerHTML = data.map((el) => createCountriesList(el)).join('')
    })
    .catch((err) => {
        countryInfoEl.innerHTML = ''
        countryListEl.innerHTML = ''
        Notify.failure("Oops, there is no country with that name")
    }
    );
};

searchBoxEl.addEventListener('input', debounce(handleSearchBoxInput ,300) )


