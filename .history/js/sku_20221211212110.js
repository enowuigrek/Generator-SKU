'use strict';

const inputSku = document.querySelector('.input__sku');
const generationSkuButton = document.querySelector('.generation__sku__button');
const dispaySkuToCopy = document.querySelector('.sku__to__copy');
const dispayWrongSku = document.querySelector('.wrong__sku');

const removeZero = (sku) => {
  sku = Number(sku);
  sku = String(sku);
  return sku;
};

const addZero = (sku) => {
  if (sku.length >= 7) {
    return '00' + sku;
  } else {
    return sku;
  }
};

let checkSku = () => {
  const listCorrectSku = [];
  const listWrongSku = [];

  const inputText = inputSku.value;
  const splitInputTextArray = inputText.split(/\r?\n/);

  let resultSkuToCopy = '';
  let resultWrongSku = '';

  for (let pieceOfInputText of splitInputTextArray) {
    pieceOfInputText = removeZero(pieceOfInputText);

    if (pieceOfInputText.length <= 7 && pieceOfInputText.length >= 4) {
      let singleSkuToCopy = pieceOfInputText;
      listCorrectSku.push(singleSkuToCopy);
    } else {
      let singleWrongSku = pieceOfInputText;
      listWrongSku.push(singleWrongSku);
    }
  }

  for (let singleSku of listCorrectSku) {
    singleSku = addZero(singleSku);
    single = `${singleSku} </br>`;
    resultSkuToCopy += resultSku;
  }

  for (let singleWrongSku of listWrongSku) {
    const listElementWrongSku = `${singleWrongSku} </br>`;
    resultWrongSku += listElementWrongSku;
  }
  dispaySkuToCopy.innerHTML = resultSkuToCopy;
  dispayWrongSku.innerHTML = resultWrongSku;
};
generationSkuButton.addEventListener('click', checkSku);
