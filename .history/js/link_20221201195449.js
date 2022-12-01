const inputOrderNumber = document.querySelector('.input__order__number');
const generationOrderLinkButton = document.querySelector('.generation__order__link__button');
const displayOrderLink = document.querySelector('.order__links');

const linkBegin = 'https://xkom-prod.operations.dynamics.com/?cmp=xkom&mi=SalesTableDetails&SalesId=';
let  orderNumber = inputOrderNumber.value;

let orderLinkGenerator = () => {

  let orderLink = linkBegin + orderNumber;

  displayOrderLink.innerHTML = orderLink
};

generationOrderLinkButton .addEventListener('click', orderLinkGenerator);