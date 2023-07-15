// ==UserScript==
// @name           Mass delete all yoru user comments form the comment screen
// @description    Currently designed to delete all your user comments form the old.reddit.com comments screen
// @namespace      strawdogs
// @match        http://www.reddit.com/user/*
// @match        http://old.reddit.com/user/*
// @match        https://www.reddit.com/user/*
// @match        https://old.reddit.com/user/*
// @version 1
// ==/UserScript==

location.href = "javascript:(" + function () {
  var deleted = 0;
  var links = document.getElementsByTagName("a");
  var i = 0;
  var d = 0;

  for (i = 0; i < links.length; i++) {

    var l = links[i];
    if (l.href) {
      if (l.innerHTML == "delete") {
        // toggle() is a function built-in to the Reddit website in the
        // reddit-init-*.js file located at redditstatic.com
        toggle(l);
        d = 1;
      }
      if (d && (l.innerHTML == "yes")) {
        deleted++;


        l.id = 'xxx' + i;

        var butter = "document.getElementById('xxx" + i + "')";

        var f = function (a) {
          // hide_thing() is a function built-in to the Reddit website in the
          // reddit-init-*.js file located at redditstatic.com
          hide_thing(a);
        };

        setTimeout("change_state( " + butter + ", 'del', hide_thing)", 1000 * deleted);

        d = 0;
      }
    }

  }

  if (deleted > 0) {
    setTimeout("location.reload(true);", 1000 * (deleted + 1));
  }

} + ")()";


