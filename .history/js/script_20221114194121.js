'use strict';

const inputLinks = document.querySelector('.links__input');
const generationButton = document.querySelector('.generation__button');
const resultSKU = document.querySelector('.result__sku');


// let productSKU = '123456';


let listSKU = ['111111', '33333', '44444', '166669']

for (let productSKU of listSKU) {

  function addZero() {
    if (listSKU.length >= 6 ){
      productSKU = '00' + productSKU
    }
  };

  addZero();

  let oneSKU = '<li>' + listSKU[7] + '</li>'
  let oneSKU = '<li>' + listSKU[0] + '</li>'
  let oneSKU = '<li>' + listSKU[0] + '</li>'
  let oneSKU = '<li>' + listSKU[0] + '</li>'
  let oneSKU = '<li>' + listSKU[0] + '</li>'

  resultSKU.innerHTML = oneSKU;
}
