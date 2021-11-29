// PJAX
let pjaxScriptURL = 'https://cdn.jsdelivr.net/npm/pjax/pjax.min.js';
function pjaxLoadScript() {
  let script = document.createElement('script');
  script.async = true;
  script.src = pjaxScriptURL;
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
  script.onload = pjaxInit;
}
function pjaxInit() {
  let pjax = new Pjax({
    elements: "a",
    selectors: [".main"],
    cacheBust: false
  })
}
pjaxLoadScript();

// Intro margin negative (topbar)
function introResize() {
  let intro = document.querySelector('.page--homepage .intro');
  if (intro) {
    let header = document.querySelector('.header');
    let headerHeight = header.offsetHeight;
    intro.style.marginTop = '-' + headerHeight + 'px';
  }
}
introResize();


// check nav scroll
function checkNavScroll() {
  let nav = document.querySelector('.header .nav__list');
  if (nav) {
    let contentWidth = 0;
    let navElems = nav.childNodes;
    for (let item in navElems) {
      let itemWidth = navElems[item].offsetWidth;
      if (itemWidth != undefined) {
        contentWidth = contentWidth + itemWidth;
      }
    }
    let screenWidth = window.screen.width;
    if (contentWidth >= screenWidth) {
      nav.style.overflow = 'scroll';
    } else {
      nav.style.overflow = 'hidden';
    }
  }
}

// Shopify
var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
function shopifyInit() {
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
}
function loadScript() {
  var script = document.createElement('script');
  script.async = true;
  script.src = scriptURL;
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
  script.onload = ShopifyBuyInit;
}
function ShopifyBuyInit() {
  var client = ShopifyBuy.buildClient({
    domain: 'domingo-club.myshopify.com',
    storefrontAccessToken: '3f79eb7318c4a41ca85268a222c83952',
  });
  ShopifyBuy.UI.onReady(client).then(function (ui) {
    ui.createComponent('product', {
      id: '7319867228404',
      node: document.getElementById('product-component-1635063611737'),
      moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
      options: shopifyOptions
    });
    ui.createComponent('product', {
      id: '7340365611252',
      node: document.getElementById('product-component-1635946417365'),
      moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
      options: shopifyOptions
    });
    ui.createComponent('product', {
      id: '7439158903028',
      node: document.getElementById('product-component-1636476321283'),
      moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
      options: shopifyOptions
    });
    ui.createComponent('product', {
       id: '7459269902580',
       node: document.getElementById('product-component-1637603176028'),
       moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
       options: shopifyOptions
    });
    ui.createComponent('product', {
      id: '7469353107700',
      node: document.getElementById('product-component-1638201115057'),
      moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
      options: shopifyOptions
   });
  });
}

let shopifyOptions = {
  "product": {
    "iframe": false,
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px",
        "padding-left": "100px",
        "padding-right": "100px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px",
        "padding-left": "100px",
        "padding-right": "100px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "iframe": true,
    "styles": {
      "button": {
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#000000"
      },
      "header": {
        "color": "#000000"
      },
      "lineItems": {
        "color": "#000000"
      },
      "subtotalText": {
        "color": "#000000"
      },
      "subtotal": {
        "color": "#000000"
      },
      "notice": {
        "color": "#000000"
      },
      "currency": {
        "color": "#000000"
      },
      "close": {
        "color": "#000000",
        ":hover": {
          "color": "#000000"
        }
      },
      "empty": {
        "color": "#000000"
      },
      "noteDescription": {
        "color": "#000000"
      },
      "discountText": {
        "color": "#000000"
      },
      "discountIcon": {
        "fill": "#000000"
      },
      "discountAmount": {
        "color": "#000000"
      },
      "cart": {
        "background-color": "#f6f4f2"
      },
      "footer": {
        "background-color": "#f6f4f2"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#000000",
        ":hover": {
          "background-color": "#000000"
        },
        ":focus": {
          "background-color": "#000000"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#000000"
      },
      "title": {
        "color": "#000000"
      },
      "price": {
        "color": "#000000"
      },
      "fullPrice": {
        "color": "#000000"
      },
      "discount": {
        "color": "#000000"
      },
      "discountIcon": {
        "fill": "#000000"
      },
      "quantity": {
        "color": "#000000"
      },
      "quantityIncrement": {
        "color": "#000000",
        "border-color": "#000000"
      },
      "quantityDecrement": {
        "color": "#000000",
        "border-color": "#000000"
      },
      "quantityInput": {
        "color": "#000000",
        "border-color": "#000000"
      }
    }
  }
}

function onLoadFunctions() {
  introResize();
  shopifyInit();
  checkNavScroll();
}
function onResizeFunctions() {
  introResize();
  checkNavScroll();
}
window.addEventListener('resize', onResizeFunctions);
window.addEventListener('load', onLoadFunctions);
document.addEventListener("pjax:success", onLoadFunctions);
