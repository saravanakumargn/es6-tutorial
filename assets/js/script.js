(function () {
  function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'https://saravanakumargn.github.io/es6-tutorial/assets/js/menu.json', true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
      }
    };
    xobj.send(null);
  }
  function init() {
    loadJSON(function (response) {
      var menu = JSON.parse(response).menu;
      var links = '', links1 = '<ul class="toc">';
      var menuLen = menu.length;
      for (var i = 0; i < menuLen; i++) {
        links += '<a class="mdl-navigation__link" href="' + menu[i].url + '">' + menu[i].label + '</a>';
        links1 += '<a href="' + menu[i].url + '">' + menu[i].label + '</a>';
      }
      links1 += '</ul>';
      document.getElementById('pageMenu').innerHTML = links;
      if (document.getElementById('pageMenu1')) {
        document.getElementById('pageMenu1').innerHTML = links1;
      }
    });
  }
  init();
})();