let sku = '123456';

let splitSku = sku.split('');

console.log(splitSku.length);

if (splitSku >= 6 ){
  splitSku = '0, 0,' + splitSku

  console.log(splitSku);
}

console.log(splitSku);

