(window._iconfont_svg_string_3777370 =
  '<svg><symbol id="icon-ic_gps_not_fixed" viewBox="0 0 1024 1024"><path d="M893.44 469.333333C873.813333 291.413333 732.586667 150.186667 554.666667 130.56V42.666667h-85.333334v87.893333C291.413333 150.186667 150.186667 291.413333 130.56 469.333333H42.666667v85.333334h87.893333c19.626667 177.92 160.853333 319.146667 338.773333 338.773333V981.333333h85.333334v-87.893333c177.92-19.626667 319.146667-160.853333 338.773333-338.773333H981.333333v-85.333334h-87.893333zM512 810.666667c-164.906667 0-298.666667-133.76-298.666667-298.666667s133.76-298.666667 298.666667-298.666667 298.666667 133.76 298.666667 298.666667-133.76 298.666667-298.666667 298.666667z" fill="" ></path></symbol><symbol id="icon-ic24-gps-fixed" viewBox="0 0 1024 1024"><path d="M512 85.333333a42.666667 42.666667 0 0 1 42.666667 42.666667l0.042666 45.312A341.504 341.504 0 0 1 850.688 469.333333H896a42.666667 42.666667 0 0 1 0 85.333334h-45.312a341.504 341.504 0 0 1-295.978667 296.021333L554.666667 896a42.666667 42.666667 0 0 1-85.333334 0v-45.312a341.504 341.504 0 0 1-296.021333-295.978667L128 554.666667a42.666667 42.666667 0 0 1 0-85.333334h45.312A341.504 341.504 0 0 1 469.333333 173.312V128a42.666667 42.666667 0 0 1 42.666667-42.666667z m0 170.666667a256 256 0 1 0 0 512 256 256 0 0 0 0-512z m0 85.333333a170.666667 170.666667 0 1 1 0 341.333334 170.666667 170.666667 0 0 1 0-341.333334z"  ></path></symbol></svg>'),
  (function (n) {
    var t = (t = document.getElementsByTagName("script"))[t.length - 1],
      e = t.getAttribute("data-injectcss"),
      t = t.getAttribute("data-disable-injectsvg");
    if (!t) {
      var i,
        o,
        a,
        c,
        d,
        s = function (t, e) {
          e.parentNode.insertBefore(t, e);
        };
      if (e && !n.__iconfont__svg__cssinject__) {
        n.__iconfont__svg__cssinject__ = !0;
        try {
          document.write(
            "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
          );
        } catch (t) {
          console && console.log(t);
        }
      }
      (i = function () {
        var t,
          e = document.createElement("div");
        (e.innerHTML = n._iconfont_svg_string_3777370),
          (e = e.getElementsByTagName("svg")[0]) &&
            (e.setAttribute("aria-hidden", "true"),
            (e.style.position = "absolute"),
            (e.style.width = 0),
            (e.style.height = 0),
            (e.style.overflow = "hidden"),
            (e = e),
            (t = document.body).firstChild
              ? s(e, t.firstChild)
              : t.appendChild(e));
      }),
        document.addEventListener
          ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
            ? setTimeout(i, 0)
            : ((o = function () {
                document.removeEventListener("DOMContentLoaded", o, !1), i();
              }),
              document.addEventListener("DOMContentLoaded", o, !1))
          : document.attachEvent &&
            ((a = i),
            (c = n.document),
            (d = !1),
            r(),
            (c.onreadystatechange = function () {
              "complete" == c.readyState &&
                ((c.onreadystatechange = null), l());
            }));
    }
    function l() {
      d || ((d = !0), a());
    }
    function r() {
      try {
        c.documentElement.doScroll("left");
      } catch (t) {
        return void setTimeout(r, 50);
      }
      l();
    }
  })(window);
