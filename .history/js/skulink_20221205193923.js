



const skuFromProductLinkMatcher = new RegExp(/\/p\/(\d*)\-/);
  
  
  
  
  
  
  // wyciąganie SKU z linku
  const skuFrominputText = skuFromProductLinkMatcher.exec(pieceOfInputText)[1];
  listCorrectSku.push(skuFrominputText);