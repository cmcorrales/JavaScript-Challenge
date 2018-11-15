(function() {

  "use strict";

  let numCartItems = document.getElementsByClassName("minicart-quantity")[0].innerHTML;
  let cartTotal = document.getElementsByClassName("order-value")[0].innerHTML;
  let imageHTMLCollection = document.getElementsByClassName("mini-cart-image");
  let imageArray = Array.from(imageHTMLCollection).map(image => image.children[0].innerHTML);

  // HTML with inline CSS to display overlay if user scrolls to bottom 10% of page. Uses existing CSS classes from Marmot where appropriate.
  let overlayHTML = `<div id="overlay-wrapper">
      <div id="overlay" class="ui-widget-overlay ui-front" style="z-index:100;"></div>

      <div role="dialog" class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front" aria-labelledby="ui-id-2" style="position: fixed; height: auto; width: auto; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 101;">

        <div id="close-overlay-button" class="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix"><span id="ui-id-2" class="ui-dialog-title">&nbsp;</span><button type="button" class="ui-button ui-corner-all ui-widget ui-button-icon-only ui-dialog-titlebar-close" title="Close" aria-label="Close"><svg aria-hidden="true" class="svg-icon svg-icon-close" viewBox="0 0 20 22" width="20" height="20"><path d="M1.143 22L10 12.257 18.857 22 20 20.743 11.143 11 20 1.257 18.857 0 10 9.743 1.143 0 0 1.257 8.857 11 0 20.743z"></path></svg></button></div>

        <div class="mini-cart-container" />
          <div class="mini-cart-content" style="display:flex; flex-direction: column; align-items:center;">
            <div class="mini-cart-header"><span>You have ${numCartItems} items in your cart.</span></div>
            <div>${imageArray.map(image => image).join('')}</div>
            <div style="padding: 13px;">Estimated Total: ${cartTotal}</div>
            <a href="https://www.marmot.com/cart" style="background: #cc0001; border: 1px solid #cc0001; color: #fff; font-family: ars_maquette_probold,sans-serif; padding:13px;">Go to Cart</a>
          </div>
        </div>
      </div>`

  // Inserts overlayHTML into DOM
  let displayOverlay = () => {
    var contentWrapper = document.getElementById("wrapper");
    contentWrapper.insertAdjacentHTML('beforebegin', overlayHTML);
    // Removes overlayHTML if closeOverlayButton is clicked
    let closeOverlayButton = document.getElementById("close-overlay-button");
    let overlay = document.getElementById("overlay-wrapper");
    closeOverlayButton.addEventListener("click", (event) => {
      event.preventDefault();
      overlay.remove();
    });
  }

  // Checks if scroll position is at overlayTriggerHeight (bottom 10% of page)
  let checkScrollPosition = () => {
    const pageHeight = document.body.offsetHeight - window.innerHeight;
    const overlayTriggerHeight = pageHeight - (pageHeight * 0.1);
    let scrollPosition = window.pageYOffset;
    // Displays overlay if scroll position is at bottom 10% of page and if overlay is not already present
    if (scrollPosition >= overlayTriggerHeight && !document.getElementById('overlay-wrapper')) {
      displayOverlay();
    }
  }

  // Listens for scroll event
  document.addEventListener("scroll", (event) => {
    event.preventDefault();
    checkScrollPosition();
  });

}())
