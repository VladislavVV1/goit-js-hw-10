export const createCountriesList = ({flags, name}) => {
    const listMarkup = `
    <li class='country__item'>
        <img src="${flags.svg}" alt="${flags.alt}" class="country-flag" >
        <h2 class="country-name">${name.common}</h2>
    </li>`
    return listMarkup;
};