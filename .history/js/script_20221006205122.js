let sku = '123456';

let splitSku = sku.split('');

console.log(splitSku);
console.log(splitSku.length);

function addZeros(splitSku){
  if (splitSku.length >= 6 ){
    splitSku = '0, 0,' + splitSku;
  }
}

addZeros(length);


// console.log(splitSku);

