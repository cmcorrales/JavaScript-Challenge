(function() {

"use strict";

let numCartItems = document.getElementsByClassName("minicart-quantity").length;
let cartTotal = document.getElementsByClassName("order-value")[0].innerHTML;
let imageHTMLCollection = document.getElementsByClassName("mini-cart-image")
let imageArray = Array.from(imageHTMLCollection).map(image => image.children[0].innerHTML)

// Inserts overlay HTML and CSS into DOM. HTML and CSS added directly into JS since this snippet runs independently of other files.
let showOverlay = () => {
  var contentWrapper = document.getElementById("wrapper")
  contentWrapper.style.zIndex = "-1";
  contentWrapper.insertAdjacentHTML('beforebegin',
  `<div id="overlay" style="position:fixed; top:0; left:0; width:100%; height:100vh; z-index:10; background-color:rgba(0,0,0,0.5); overflow: auto;">
    <div>
      <span>&times;</span>
      <p>You have ${numCartItems} items in your cart.</p>
      <p>Cart total: ${cartTotal}</p>
      ${imageArray.map(image => image)}
      <a href="https://www.marmot.com/cart">Go To Cart</a>
    </div>
  </div>`);
}

// Checks whether scroll position is at overlayTriggerHeight (bottom 10% of page)
let checkScrollPosition = () => {
  const pageHeight = document.body.offsetHeight - window.innerHeight;
  const overlayTriggerHeight = pageHeight - (pageHeight * 0.1);
  let scrollPosition = window.pageYOffset;
  //show overlay if scroll position is at bottom 10% of page and if overlay is not already present
  if (scrollPosition >= overlayTriggerHeight && !document.getElementById('overlay')) {
    showOverlay();
  }
}

// Checks scroll position on scroll event
document.addEventListener("scroll", (event) => {
  event.preventDefault();
  checkScrollPosition();
});

}())
