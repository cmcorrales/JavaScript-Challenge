(function() {
"use strict";

let numCartItems = document.getElementsByClassName("minicart-quantity").length;
let cartTotal = document.getElementsByClassName("order-value")[0].innerHTML;
let imageHTMLCollection = document.getElementsByClassName("mini-cart-image")
let imageArray = Array.from(imageHTMLCollection).map(image => image.innerHTML)


let showOverlay = () => {
  var parentElement = document.getElementById("wrapper");
  parentElement.insertAdjacentHTML('beforeend', '<div id="two" style="color:blue;">two</div>');
}

let checkScrollPosition = () => {
  const pageHeight = document.body.offsetHeight - window.innerHeight;
  const overlayTriggerHeight = pageHeight - (pageHeight * 0.1);
  let scrollPosition = window.pageYOffset;
  //add condition: && modal is not already showing
  if (scrollPosition >= overlayTriggerHeight) {
    showOverlay();
  }
}

document.addEventListener("scroll", (event) => {
  event.preventDefault();
  checkScrollPosition();
});
}())
