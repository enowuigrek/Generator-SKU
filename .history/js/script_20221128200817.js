// 'use strict';

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

    if (parseInt(singleLink) && singleLink.length < 8) {
      listSku.push(singleLink);
    // }else if (RegExp('https://www.x-kom.pl/p/')) {
    //   const skuFromPastedLinks = skuFromProductLinkMatcher.exec(singleLink)[1];
    //   console.log(skuFromPastedLinks);
    //   listSku.push(skuFromPastedLinks);
    }else {
      listSku.push('zjebalo się czyli chyba działa')
    }
  };

  for (let singleSku of listSku) {

    function addZero() {
      if (parseInt(singleSku) && singleSku.length > 6 ) {
        singleSku = 0+ 0 + singleSku
      };
    };
    addZero();

    const listElementSku = '<li>' + singleSku + '</li>'

    resultToCopy = resultToCopy + listElementSku;
  };

  resultSku.innerHTML = resultToCopy;
};
