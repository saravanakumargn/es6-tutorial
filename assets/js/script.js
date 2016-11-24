(function () {
  function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'http://localhost:3000/assets/js/menu.json', true);
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
      var link = '';
      var menuLen = menu.length;
      for (var i = 0; i < menuLen; i++) {
        link += '<a class="mdl-navigation__link" href="' + menu[i].url + '">' + menu[i].label + '</a>';
      }
      document.getElementById('pageMenu').innerHTML = link;
    });
  }
  init();
})();