"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function city_country(city, country) {
    return `"${city}, ${country}"`;
}
let c1 = city_country(`karachi`, `pakistan`);
let c2 = city_country(`newyork`, `america`);
let c3 = city_country(`paris`, `france`);
console.log(c1);
console.log(c2);
console.log(c3);
