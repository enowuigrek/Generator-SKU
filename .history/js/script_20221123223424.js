'use strict';

const inputLinks = document.querySelector('.links__input');
const generationButton = document.querySelector('.generation__button');
const resultSku = document.querySelector('.result__sku');
const skuFromProductLinkMatcher = new RegExp(/\/p\/(\d*)\-/);
let resultToCopy = ''

generationButton.addEventListener('click', generateSku);

function generateSku() {

  const pastedLinks = inputLinks.value;
  const pastedSplitLinks = pastedLinks.split(/r\/\n\s*\n/);
  const listSku = [];

  for ( let singleLink of pastedSplitLinks) {

    const skuFromPastedLinks = skuFromProductLinkMatcher.exec(singleLink)[1];

    listSku.push(skuFromPastedLinks);
  }

  for (let singleSku of listSku) {

    function addZero() {
      if (singleSku.length > 6 ){
        singleSku = '00' + singleSku
      }
    };
    addZero();

    const listElementSku = '<li>' + singleSku + '</li>'

    resultToCopy = resultToCopy + listElementSku;
  }

  resultSku.innerHTML = resultToCopy;
};




