"use strict";
function cityCountry(city, country) {
    return `${city}, ${country}`;
}
const cityCountryPairs = [
    ["Lahore", "Pakistan"],
    ["London", "UK"],
    ["Tokyo", "Japan"],
];
for (const [city, country] of cityCountryPairs) {
    console.log(cityCountry(city, country));
}
