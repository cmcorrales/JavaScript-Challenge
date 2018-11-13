"use strict";

let numCartItems = document.getElementsByClassName("minicart-quantity").length;

let cartTotal = document.getElementsByClassName("order-value")[0].innerHTML;

let imageHTMLCollection = document.getElementsByClassName("mini-cart-image")

let imageArray = Array.from(imageHTMLCollection).map(image => image.innerHTML)
