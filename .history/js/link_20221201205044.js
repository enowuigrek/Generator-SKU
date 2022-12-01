const inputOrderNumber = document.querySelector('.input__order__number');
const generationOrderLinkButton = document.querySelector('.generation__order__link__button');
const displayOrderLink = document.querySelector('.order__links');

const linkBegin = 'https://xkom-prod.operations.dynamics.com/?cmp=xkom&mi=SalesTableDetails&SalesId=';

let orderLinkGenerator = () => {

  let orderNumber = inputOrderNumber.value;
  let orderLink = linkBegin + orderNumber;
  let resultOrderLink = '';

  if (orderNumber.length = 12) {

    const listElementOrderLink = '<li><a href="'+ orderLink +'" target="_blank">'+ orderNumber +'</a></li>'

    console.log(listElementOrderLink);

    resultOrderLink += listElementOrderLink;

    displayOrderLink.innerHTML = resultOrderLink;
  }
  else {
    displayOrderLink.innerHTML = 'błę∂'
  }
};

generationOrderLinkButton .addEventListener('click', orderLinkGenerator);