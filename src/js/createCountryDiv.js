export const createCountryDiv = ({flags, name, capital, languages, population}) => {
    const listMarkup = `
        <div class="title-container">
        <img src="${flags.svg}" alt="${flags.alt}" class="country-flag" >
        <h1 class="country-title">${name.common}</h2>
        </div>
        <ul class="country-properties">
      <li>
        <p class="property-name">Capital:<span class="property-value"> ${capital}</span></p>
      </li>
      <li>
        <p class="property-name">Population:<span class="property-value"> ${population}</span></p>
      </li>
      <li>
        <p class="property-name">Languages:<span class="property-value"> ${Object.values(languages).join(", ")}</span></p>
      </li>
    </ul>
    `
    return listMarkup;
};