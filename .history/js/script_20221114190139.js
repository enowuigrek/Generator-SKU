'use strict';

const inputLinks = document.querySelector('.links__input');
const generationButton = document.querySelector('.generation__button');
const resultSKU = document.querySelector('.result__sku');

console.log(inputLinks);
console.log(generationButton);
console.log(resultSKU);

let listSKU = ['111111', '33333', '44444', '66669']

// let productSKU = '123456';

for (let productSKU of listSKU) {

  addZero();

  let oneSKU = '<li>' + productSKU + '</li>'

}

addZero();

console.log(productSKU)

let oneSKU = '<li>' + productSKU + '</li>'

resultSKU.innerHTML = oneSKU;

