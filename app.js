"use strict";

let numCartItems = document.getElementsByClassName("minicart-quantity").length;

let cartTotal = document.getElementsByClassName("order-value")[0].innerHTML;

let imageHTMLCollection = document.getElementsByClassName("mini-cart-image")

let imageArray = Array.from(imageHTMLCollection).map(image => image.innerHTML)

// function that triggers overlay when user scrolls to bottom 10% of page
// if scroll position = 10percent of screen, trigger overlay
// use window.pageYOffset

let checkScrollPosition = () => {
  const pageHeight = document.body.offsetHeight - window.innerHeight;
  const overlayTriggerHeight = pageHeight - (pageHeight * .1);
  let scrollPosition = window.pageYOffset;
  if (scrollPosition >= overlayTriggerHeight) {
    console.log("scrolled to bottom 10%")
  }
}

document.addEventListener("scroll", (event) => {
  event.preventDefault();
  checkScrollPosition();
});
