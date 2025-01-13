'use strict';

const collectionOfInputs = [...document.querySelectorAll('input')];

collectionOfInputs.map((element) => {
  const nameForPlaceHolder =
    element.name.charAt(0).toUpperCase() +
    element.name.slice(1, element.name.length);

  element.insertAdjacentHTML(
    'beforebegin',
    `<label class='field-label' for=${element.id}>${element.name.toUpperCase()}</label>`,
  );
  element.setAttribute('placeholder', nameForPlaceHolder);
});
