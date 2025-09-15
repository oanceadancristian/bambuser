(function () {
  //===================================
  // ----  Player integration code ----
  //===================================
  window.onBambuserLiveShoppingReady = (player) => {
    player.configure({
      buttons: {
        dismiss: player.BUTTON.MINIMIZE,
      },
    });
  };

  //======================
  // ----  Embed code ----
  //======================

  // ---- Initialize the script ----
  if (!window.initBambuserLiveShopping) {
    window.initBambuserLiveShopping = function (item) {
      window.initBambuserLiveShopping.queue.push(item);
    };
    window.initBambuserLiveShopping.queue = [];
    var scriptNode = document.createElement('script');
    scriptNode['src'] =
      'https://lcx-embed.bambuser.com/powered-by-bambuser-theme/embed.js';
    document.body.appendChild(scriptNode);
  }

  // ---- Register a show ----
  window.initBambuserLiveShopping({
    showId:
      document.getElementById('cta').getAttribute('data-show-id') ||
      'vAtJH3xevpYTLnf1oHao',
    node: document.getElementById('cta'), // DOM element as CTA button; triggers on click
    type: 'overlay', // The type must be 'overlay'
  });
  //======================
})();
