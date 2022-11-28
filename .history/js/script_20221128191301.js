'use strict';

// const { list } = require("postcss");

let inputLinks = document.querySelector('.links__input');
const generationButton = document.querySelector('.generation__button');
const resultSku = document.querySelector('.result__sku');
const skuFromProductLinkMatcher = new RegExp(/\/p\/(\d*)\-/);
let pastedLinks = inputLinks.value;

generationButton.addEventListener('click', generateSku);

function generateSku() {

  let resultToCopy = '';

  const pastedLinks = inputLinks.value;
  const pastedSplitLinks = pastedLinks.split(/\r?\n/);
  const listSku = [];

  console.log(pastedLinks);
  console.log(pastedSplitLinks);

  for (let singleLink of pastedSplitLinks) {

    if (parseInt()singleLink.length < 8) {
      listSku.push(singleLink);
    }else {
      const skuFromPastedLinks = skuFromProductLinkMatcher.exec(singleLink)[1];
      listSku.push(skuFromPastedLinks);
    }
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