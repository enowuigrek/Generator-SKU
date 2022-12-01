const inputOrderNumber = document.querySelector('.input__order__number');
const generationOrderLinkButton = document.querySelector('.generation__order__link__button');
const displayOrderLink = document.querySelector('.order__links');

console.log(displayOrderLink);

const linkBegin = 'https://xkom-prod.operations.dynamics.com/?cmp=xkom&mi=SalesTableDetails&SalesId=';

let orderLinkGenerator = () => {

  let inputorderNumber = inputOrderNumber.value;
  const splitInputTextArray = orderNumber.split(/\r?\n/);
  let orderLink = linkBegin + orderNumber;

  const listOrderLinks = [];

  let resultOrderLink = '';

  const listElementOrderLink = '<li><a href="'+ orderLink +'" target="_blank">'+ orderNumber +'</a></li>'

  console.log(listElementOrderLink);

  resultOrderLink += listElementOrderLink;

  displayOrderLink.innerHTML = resultOrderLink;
};

generationOrderLinkButton .addEventListener('click', orderLinkGenerator);