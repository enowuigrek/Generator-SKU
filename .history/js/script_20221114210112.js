'use strict';

const inputLinks = document.querySelector('.links__input');
const generationButton = document.querySelector('.generation__button');
const resultSKU = document.querySelector('.result__sku');


// let productSKU = '123456';


let listSKU = ['111111', '33333', '44444', '166669'];

// for ( let i = 0; i < listSKU.length; i++) {

  for (let productSKU of listSKU) {

    function addZero() {
      if (productSKU.length >= 6 ){
        productSKU = '00' + productSKU
      }
    };

    addZero();

    let html = '';

    let listElementSKU = '<li>' + productSKU + '</li>'

    console.log(listElementSKU);

    resultSKU.innerHTML = listElementSKU;
  }
// }