const inputSku = document.querySelector('.input__sku');
const generationSkuButton = document.querySelector('.generation__sku__button');
const dispaySkuToCopy = document.querySelector('.sku__to__copy');
const dispayWrongSku = document.querySelector('.wrong__sku');



const skuFromProductLinkMatcher = new RegExp(/\/p\/(\d*)\-/);
  
  
  
  
  
  
  // wyciąganie SKU z linku
  const skuFrominputText = skuFromProductLinkMatcher.exec(pieceOfInputText)[1];
  listCorrectSku.push(skuFrominputText);