(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    let widthQuantityGoods = document.querySelector(".quantity-goods");
    var width = widthQuantityGoods.offsetWidth;
    let emptyElement = document.querySelector(".empty");
    emptyElement.style.width = width / 4 + "px";
    let favorites = document.querySelector("header .favorites-block");
    let favoritesWidth = favorites.offsetWidth;
    console.log("Ширина элемента: " + favoritesWidth + " пикселей.");
    let widthSearch = document.querySelector("header .search");
    widthSearch.style.width = widthSearch + "px";
    window["FLS"] = true;
    isWebp();
})();