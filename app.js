(function() {

"use strict";

let numCartItems = document.getElementsByClassName("minicart-quantity").length;
let cartTotal = document.getElementsByClassName("order-value")[0].innerHTML;
let imageHTMLCollection = document.getElementsByClassName("mini-cart-image")
let imageArray = Array.from(imageHTMLCollection).map(image => image.innerHTML)
var editValueButton = document.querySelector('button');
var demoContainer = document.querySelector('#wrapper');
var backdrop;
var modal;

// Inserts overlay HTML and CSS into DOM. HTML and CSS added directly into JS since this snippet runs independently of other files.
let showOverlay = () => {
  var parentElement = document.body;
  parentElement.insertAdjacentHTML('beforeend', '<div id="two">two</div>');
  // backdrop = document.createElement('div');
  // backdrop.classList.add('backdrop');
  // backdrop.addEventListener('click', closeModal);
  // document.body.insertBefore(backdrop, demoContainer);
  // backdrop.addEventListener('click', closeModal);
}

// Checks whether scroll position is at overlayTriggerHeight (bottom 10% of page)
let checkScrollPosition = () => {
  const pageHeight = document.body.offsetHeight - window.innerHeight;
  const overlayTriggerHeight = pageHeight - (pageHeight * 0.1);
  let scrollPosition = window.pageYOffset;
  //add condition: && modal is not already showing
  if (scrollPosition >= overlayTriggerHeight && !document.getElementById('two')) {
    showOverlay();
  }
}

// Checks scroll position on scroll event
document.addEventListener("scroll", (event) => {
  event.preventDefault();
  checkScrollPosition();
});

}())
