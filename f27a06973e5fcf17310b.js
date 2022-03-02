(() => {
  "use strict";
  var e = {
      426: (e, n, t) => {
        t.d(n, { Z: () => u });
        var r = t(81),
          o = t.n(r),
          i = t(645),
          a = t.n(i),
          c = t(667),
          l = t.n(c),
          d = new URL(t(186), t.b),
          s = a()(o()),
          p = l()(d);
        s.push([
          e.id,
          "/* Basic Styles */\r\n*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\n/* Content */\r\n#content {\r\n  max-width: 100vw;\r\n  height: 100vh;\r\n  background: url(" +
            p +
            ");\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\n#content > * {\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.overlay {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgba(0, 0, 0, 0.623);\r\n}\r\n\r\nnav {\r\n  width: 100%;\r\n  padding: 40px;\r\n  display: flex;\r\n  justify-content: center;\r\n  background-color: rgba(0, 0, 0, 0.671);\r\n  border-bottom: 2px solid #c59d5f;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  gap: 70px;\r\n  font-size: 1.2rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\nnav li {\r\n  cursor: pointer;\r\n}\r\n\r\nnav a:hover {\r\n  padding-bottom: 3px;\r\n  border-bottom: 2px solid #c59d5f;\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n\r\n#container {\r\n  width: 100%;\r\n  height: 600px;\r\n  background-color: rgb(245, 245, 245);\r\n  border-bottom: 2px solid #c59d5f;\r\n}\r\n\r\n/*----------------- Home ---------------*/\r\n.home {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.home .logo {\r\n  width: 800px;\r\n}\r\n\r\n.home p {\r\n  border-top: 4px double #c59d5f;\r\n  padding: 35px 0;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.home button {\r\n  border: none;\r\n  padding: 15px 30px;\r\n  background-color: #c59d5f;\r\n  font-size: 1.15rem;\r\n  color: white;\r\n  cursor: pointer;\r\n  border-radius: 3px;\r\n}\r\n\r\n/*----------------- Menu ---------------*/\r\n.menu {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n  overflow-y: scroll;\r\n}\r\n.menu .logo {\r\n  width: 400px;\r\n}\r\n\r\n.menu li {\r\n  height: 220px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.menu li h2 {\r\n  width: 50%;\r\n  border-top: 2px solid #c59d5f;\r\n  padding-top: 20px;\r\n  color: #c59d5f;\r\n  font-size: 1.7rem;\r\n}\r\n\r\n.menu li span {\r\n  font-size: 1.3rem;\r\n  color: #c59d5f;\r\n  font-weight: 700;\r\n}\r\n.menu li p {\r\n  font-size: 1.1rem;\r\n  max-width: 70%;\r\n}\r\n\r\n.menu::-webkit-scrollbar {\r\n  width: 0.95em;\r\n}\r\n\r\n.menu::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px #c59d5f;\r\n}\r\n\r\n.menu::-webkit-scrollbar-thumb {\r\n  background-color: #c59d5f;\r\n  outline: 1px solid #c59d5f;\r\n}\r\n\r\n/*----------------- Contact ---------------*/\r\n.contact {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 50px;\r\n}\r\n\r\n.contact .logo {\r\n  width: 500px;\r\n}\r\n\r\n.infos {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 30px;\r\n}\r\n\r\n.infos > div img {\r\n  width: 30px;\r\n}\r\n\r\n.infos > div {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 25px;\r\n}\r\n",
          "",
        ]);
        const u = s;
      },
      645: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {"
                    )),
                  (t += e(n)),
                  r && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, r, o, i) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var l = this[c][0];
                  null != l && (a[l] = !0);
                }
              for (var d = 0; d < e.length; d++) {
                var s = [].concat(e[d]);
                (r && a[s[0]]) ||
                  (void 0 !== i &&
                    (void 0 === s[5] ||
                      (s[1] = "@layer"
                        .concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {")
                        .concat(s[1], "}")),
                    (s[5] = i)),
                  t &&
                    (s[2]
                      ? ((s[1] = "@media "
                          .concat(s[2], " {")
                          .concat(s[1], "}")),
                        (s[2] = t))
                      : (s[2] = t)),
                  o &&
                    (s[4]
                      ? ((s[1] = "@supports ("
                          .concat(s[4], ") {")
                          .concat(s[1], "}")),
                        (s[4] = o))
                      : (s[4] = "".concat(o))),
                  n.push(s));
              }
            }),
            n
          );
        };
      },
      667: (e) => {
        e.exports = function (e, n) {
          return (
            n || (n = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                n.hash && (e += n.hash),
                /["'() \t\n]|(%20)/.test(e) || n.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : e)
              : e
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      91: (e) => {
        e.exports = function (e, n) {
          return (
            n || (n = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                n.hash && (e += n.hash),
                n.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(e)
                  ? '"'.concat(e, '"')
                  : e)
              : e
          );
        };
      },
      379: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var i = {}, a = [], c = 0; c < e.length; c++) {
            var l = e[c],
              d = r.base ? l[0] + r.base : l[0],
              s = i[d] || 0,
              p = "".concat(d, " ").concat(s);
            i[d] = s + 1;
            var u = t(p),
              m = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== u) n[u].references++, n[u].updater(m);
            else {
              var h = o(m, r);
              (r.byIndex = c),
                n.splice(c, 0, { identifier: p, updater: h, references: 1 });
            }
            a.push(p);
          }
          return a;
        }
        function o(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var i = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < i.length; a++) {
              var c = t(i[a]);
              n[c].references--;
            }
            for (var l = r(e, o), d = 0; d < i.length; d++) {
              var s = t(i[d]);
              0 === n[s].references && (n[s].updater(), n.splice(s, 1));
            }
            i = l;
          };
        };
      },
      569: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      565: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var i = t.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  n.styleTagTransform(r, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
      186: (e, n, t) => {
        e.exports = t.p + "27a72eb75fd6c357ce66.jpg";
      },
      529: (e, n, t) => {
        e.exports = t.p + "f6947834c613d152d633.js";
      },
    },
    n = {};
  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var i = (n[r] = { id: r, exports: {} });
    return e[r](i, i.exports, t), i.exports;
  }
  (t.m = e),
    (t.n = (e) => {
      var n = e && e.__esModule ? () => e.default : () => e;
      return t.d(n, { a: n }), n;
    }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      var e;
      t.g.importScripts && (e = t.g.location + "");
      var n = t.g.document;
      if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
        var r = n.getElementsByTagName("script");
        r.length && (e = r[r.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = e);
    })(),
    (t.b = document.baseURI || self.location.href),
    (() => {
      const e = function () {
          let e = document.createElement("div"),
            n = document.createElement("img"),
            t = document.createElement("ul"),
            r = document.createElement("li"),
            o = document.createElement("li"),
            i = document.createElement("li"),
            a = document.createElement("h2"),
            c = document.createElement("h2"),
            l = document.createElement("h2"),
            d = document.createElement("p"),
            s = document.createElement("p"),
            p = document.createElement("p"),
            u = document.createElement("span"),
            m = document.createElement("span"),
            h = document.createElement("span");
          e.setAttribute("class", "menu"),
            n.setAttribute("src", "./img/logo.png"),
            n.setAttribute("alt", "logo"),
            n.setAttribute("class", "logo"),
            (a.innerHTML = "Tacos"),
            (c.innerHTML = "Sandwich"),
            (l.innerHTML = "Kunefe"),
            (d.innerHTML =
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet"),
            (s.innerHTML =
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet"),
            (p.innerHTML =
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet"),
            (u.innerHTML = "$20"),
            (m.innerHTML = "$20"),
            (h.innerHTML = "$20"),
            r.appendChild(a),
            r.appendChild(d),
            r.appendChild(u),
            o.appendChild(c),
            o.appendChild(s),
            o.appendChild(m),
            i.appendChild(l),
            i.appendChild(p),
            i.appendChild(h),
            t.appendChild(r),
            t.appendChild(o),
            t.appendChild(i),
            e.appendChild(n),
            e.appendChild(t);
          const f = document.querySelector("#container");
          (f.innerHTML = ""), f.appendChild(e);
        },
        n = function () {
          let n = document.createElement("div"),
            t = document.createElement("img"),
            r = document.createElement("p"),
            o = document.createElement("button");
          n.setAttribute("class", "home"),
            t.setAttribute("src", "./img/logo.png"),
            t.setAttribute("alt", "logo"),
            t.setAttribute("class", "logo"),
            (r.innerHTML = "Welcome to the best restaurant in the whole World"),
            (o.innerHTML = "View Menu"),
            n.appendChild(t),
            n.appendChild(r),
            n.appendChild(o);
          const i = document.querySelector("#container");
          (i.innerHTML = ""),
            i.appendChild(n),
            o.addEventListener("click", () => {
              e();
            });
        };
      var r = t(379),
        o = t.n(r),
        i = t(795),
        a = t.n(i),
        c = t(569),
        l = t.n(c),
        d = t(565),
        s = t.n(d),
        p = t(216),
        u = t.n(p),
        m = t(589),
        h = t.n(m),
        f = t(426),
        g = {};
      (g.styleTagTransform = h()),
        (g.setAttributes = s()),
        (g.insert = l().bind(null, "head")),
        (g.domAPI = a()),
        (g.insertStyleElement = u()),
        o()(f.Z, g),
        f.Z && f.Z.locals && f.Z.locals;
      var b = t(91),
        v = t.n(b),
        x = new URL(t(529), t.b);
      v()(x),
        (function () {
          let e = document.querySelector("body");
          e.innerHTML =
            "<div id='content'></div> <script src='./main.js'></script>";
          const n = document.querySelector("#content");
          let t = document.createElement("nav"),
            r = document.createElement("ul"),
            o = document.createElement("li"),
            i = document.createElement("li"),
            a = document.createElement("li"),
            c = document.createElement("a"),
            l = document.createElement("a"),
            d = document.createElement("a");
          (c.innerHTML = "Home"),
            (l.innerHTML = "Menu"),
            (d.innerHTML = "Contact"),
            o.appendChild(c),
            i.appendChild(l),
            a.appendChild(d),
            r.appendChild(o),
            r.appendChild(i),
            r.appendChild(a),
            t.appendChild(r),
            n.appendChild(t);
          const s = document.createElement("div");
          s.setAttribute("id", "container");
          let p = document.createElement("div");
          (p.className = "overlay"), e.appendChild(p), n.appendChild(s);
        })(),
        n(),
        document.querySelectorAll("nav a").forEach((t) => {
          t.addEventListener("click", (t) => {
            const r = t.target.innerText.toLowerCase();
            "home" === r
              ? n()
              : "menu" === r
              ? e()
              : "contact" === r &&
                (function () {
                  let e = document.createElement("div"),
                    n = document.createElement("div"),
                    t = document.createElement("img"),
                    r = document.createElement("div"),
                    o = document.createElement("div"),
                    i = document.createElement("div"),
                    a = document.createElement("img"),
                    c = document.createElement("img"),
                    l = document.createElement("img"),
                    d = document.createElement("p"),
                    s = document.createElement("p"),
                    p = document.createElement("p");
                  a.setAttribute("src", "./img/phone-call.png"),
                    c.setAttribute("src", "./img/email.png"),
                    l.setAttribute("src", "./img/location.png"),
                    (d.innerHTML = "+212 6 61 25 80 31"),
                    (s.innerHTML = "Qirall79@gmail.com"),
                    (p.innerHTML = "48, Rue Allal Ben ABdellah, Settat"),
                    (r.className = "phone"),
                    (o.className = "email"),
                    (i.className = "address"),
                    e.setAttribute("class", "contact"),
                    n.setAttribute("class", "infos"),
                    t.setAttribute("src", "./img/logo.png"),
                    t.setAttribute("alt", "logo"),
                    t.setAttribute("class", "logo"),
                    r.appendChild(a),
                    r.appendChild(d),
                    o.appendChild(c),
                    o.appendChild(s),
                    i.appendChild(l),
                    i.appendChild(p),
                    n.appendChild(r),
                    n.appendChild(o),
                    n.appendChild(i),
                    e.appendChild(t),
                    e.appendChild(n);
                  const u = document.querySelector("#container");
                  (u.innerHTML = ""), u.appendChild(e);
                })();
          });
        });
    })();
})();
