/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var e = {
      755: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (s, i) {
          "use strict";
          var r = [],
            o = Object.getPrototypeOf,
            a = r.slice,
            l = r.flat
              ? function (e) {
                  return r.flat.call(e);
                }
              : function (e) {
                  return r.concat.apply([], e);
                },
            c = r.push,
            d = r.indexOf,
            u = {},
            p = u.toString,
            h = u.hasOwnProperty,
            f = h.toString,
            g = f.call(Object),
            m = {},
            v = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            y = function (e) {
              return null != e && e === e.window;
            },
            b = s.document,
            w = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function x(e, t, n) {
            var s,
              i,
              r = (n = n || b).createElement("script");
            if (((r.text = e), t))
              for (s in w)
                (i = t[s] || (t.getAttribute && t.getAttribute(s))) &&
                  r.setAttribute(s, i);
            n.head.appendChild(r).parentNode.removeChild(r);
          }
          function S(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? u[p.call(e)] || "object"
              : typeof e;
          }
          var C = "3.6.0",
            E = function (e, t) {
              return new E.fn.init(e, t);
            };
          function T(e) {
            var t = !!e && "length" in e && e.length,
              n = S(e);
            return (
              !v(e) &&
              !y(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (E.fn = E.prototype =
            {
              jquery: C,
              constructor: E,
              length: 0,
              toArray: function () {
                return a.call(this);
              },
              get: function (e) {
                return null == e
                  ? a.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = E.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return E.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  E.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(a.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  E.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  E.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: c,
              sort: r.sort,
              splice: r.splice,
            }),
            (E.extend = E.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  s,
                  i,
                  r,
                  o = arguments[0] || {},
                  a = 1,
                  l = arguments.length,
                  c = !1;
                for (
                  "boolean" == typeof o &&
                    ((c = o), (o = arguments[a] || {}), a++),
                    "object" == typeof o || v(o) || (o = {}),
                    a === l && ((o = this), a--);
                  a < l;
                  a++
                )
                  if (null != (e = arguments[a]))
                    for (t in e)
                      (s = e[t]),
                        "__proto__" !== t &&
                          o !== s &&
                          (c &&
                          s &&
                          (E.isPlainObject(s) || (i = Array.isArray(s)))
                            ? ((n = o[t]),
                              (r =
                                i && !Array.isArray(n)
                                  ? []
                                  : i || E.isPlainObject(n)
                                  ? n
                                  : {}),
                              (i = !1),
                              (o[t] = E.extend(c, r, s)))
                            : void 0 !== s && (o[t] = s));
                return o;
              }),
            E.extend({
              expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return (
                  !(!e || "[object Object]" !== p.call(e)) &&
                  (!(t = o(e)) ||
                    ("function" ==
                      typeof (n = h.call(t, "constructor") && t.constructor) &&
                      f.call(n) === g))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                x(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  s = 0;
                if (T(e))
                  for (
                    n = e.length;
                    s < n && !1 !== t.call(e[s], s, e[s]);
                    s++
                  );
                else for (s in e) if (!1 === t.call(e[s], s, e[s])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (T(Object(e))
                      ? E.merge(n, "string" == typeof e ? [e] : e)
                      : c.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : d.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, s = 0, i = e.length; s < n; s++)
                  e[i++] = t[s];
                return (e.length = i), e;
              },
              grep: function (e, t, n) {
                for (var s = [], i = 0, r = e.length, o = !n; i < r; i++)
                  !t(e[i], i) !== o && s.push(e[i]);
                return s;
              },
              map: function (e, t, n) {
                var s,
                  i,
                  r = 0,
                  o = [];
                if (T(e))
                  for (s = e.length; r < s; r++)
                    null != (i = t(e[r], r, n)) && o.push(i);
                else for (r in e) null != (i = t(e[r], r, n)) && o.push(i);
                return l(o);
              },
              guid: 1,
              support: m,
            }),
            "function" == typeof Symbol &&
              (E.fn[Symbol.iterator] = r[Symbol.iterator]),
            E.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                u["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var k = (function (e) {
            var t,
              n,
              s,
              i,
              r,
              o,
              a,
              l,
              c,
              d,
              u,
              p,
              h,
              f,
              g,
              m,
              v,
              y,
              b,
              w = "sizzle" + 1 * new Date(),
              x = e.document,
              S = 0,
              C = 0,
              E = le(),
              T = le(),
              k = le(),
              _ = le(),
              A = function (e, t) {
                return e === t && (u = !0), 0;
              },
              L = {}.hasOwnProperty,
              O = [],
              P = O.pop,
              $ = O.push,
              D = O.push,
              M = O.slice,
              N = function (e, t) {
                for (var n = 0, s = e.length; n < s; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              I =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              j = "[\\x20\\t\\r\\n\\f]",
              q =
                "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              H =
                "\\[[\\x20\\t\\r\\n\\f]*(" +
                q +
                ")(?:" +
                j +
                "*([*^$|!~]?=)" +
                j +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                q +
                "))|)" +
                j +
                "*\\]",
              z =
                ":(" +
                q +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                H +
                ")*)|.*)\\)|)",
              B = new RegExp(j + "+", "g"),
              R = new RegExp(
                "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                "g"
              ),
              F = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
              W = new RegExp(
                "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
              ),
              G = new RegExp(j + "|>"),
              V = new RegExp(z),
              X = new RegExp("^" + q + "$"),
              U = {
                ID: new RegExp("^#(" + q + ")"),
                CLASS: new RegExp("^\\.(" + q + ")"),
                TAG: new RegExp("^(" + q + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + z),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + I + ")$", "i"),
                needsContext: new RegExp(
                  "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              Y = /HTML$/i,
              Q = /^(?:input|select|textarea|button)$/i,
              J = /^h\d$/i,
              K = /^[^{]+\{\s*\[native \w/,
              Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              se = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              ie = function (e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              re = function () {
                p();
              },
              oe = we(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              D.apply((O = M.call(x.childNodes)), x.childNodes),
                O[x.childNodes.length].nodeType;
            } catch (e) {
              D = {
                apply: O.length
                  ? function (e, t) {
                      $.apply(e, M.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, s = 0; (e[n++] = t[s++]); );
                      e.length = n - 1;
                    },
              };
            }
            function ae(e, t, s, i) {
              var r,
                a,
                c,
                d,
                u,
                f,
                v,
                y = t && t.ownerDocument,
                x = t ? t.nodeType : 9;
              if (
                ((s = s || []),
                "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))
              )
                return s;
              if (!i && (p(t), (t = t || h), g)) {
                if (11 !== x && (u = Z.exec(e)))
                  if ((r = u[1])) {
                    if (9 === x) {
                      if (!(c = t.getElementById(r))) return s;
                      if (c.id === r) return s.push(c), s;
                    } else if (
                      y &&
                      (c = y.getElementById(r)) &&
                      b(t, c) &&
                      c.id === r
                    )
                      return s.push(c), s;
                  } else {
                    if (u[2]) return D.apply(s, t.getElementsByTagName(e)), s;
                    if (
                      (r = u[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return D.apply(s, t.getElementsByClassName(r)), s;
                  }
                if (
                  n.qsa &&
                  !_[e + " "] &&
                  (!m || !m.test(e)) &&
                  (1 !== x || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((v = e), (y = t), 1 === x && (G.test(e) || W.test(e)))) {
                    for (
                      ((y = (ee.test(e) && ve(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((d = t.getAttribute("id"))
                          ? (d = d.replace(se, ie))
                          : t.setAttribute("id", (d = w))),
                        a = (f = o(e)).length;
                      a--;

                    )
                      f[a] = (d ? "#" + d : ":scope") + " " + be(f[a]);
                    v = f.join(",");
                  }
                  try {
                    return D.apply(s, y.querySelectorAll(v)), s;
                  } catch (t) {
                    _(e, !0);
                  } finally {
                    d === w && t.removeAttribute("id");
                  }
                }
              }
              return l(e.replace(R, "$1"), t, s, i);
            }
            function le() {
              var e = [];
              return function t(n, i) {
                return (
                  e.push(n + " ") > s.cacheLength && delete t[e.shift()],
                  (t[n + " "] = i)
                );
              };
            }
            function ce(e) {
              return (e[w] = !0), e;
            }
            function de(e) {
              var t = h.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function ue(e, t) {
              for (var n = e.split("|"), i = n.length; i--; )
                s.attrHandle[n[i]] = t;
            }
            function pe(e, t) {
              var n = t && e,
                s =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (s) return s;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function he(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function fe(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function ge(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && oe(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function me(e) {
              return ce(function (t) {
                return (
                  (t = +t),
                  ce(function (n, s) {
                    for (var i, r = e([], n.length, t), o = r.length; o--; )
                      n[(i = r[o])] && (n[i] = !(s[i] = n[i]));
                  })
                );
              });
            }
            function ve(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = ae.support = {}),
            (r = ae.isXML =
              function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || (n && n.nodeName) || "HTML");
              }),
            (p = ae.setDocument =
              function (e) {
                var t,
                  i,
                  o = e ? e.ownerDocument || e : x;
                return o != h && 9 === o.nodeType && o.documentElement
                  ? ((f = (h = o).documentElement),
                    (g = !r(h)),
                    x != h &&
                      (i = h.defaultView) &&
                      i.top !== i &&
                      (i.addEventListener
                        ? i.addEventListener("unload", re, !1)
                        : i.attachEvent && i.attachEvent("onunload", re)),
                    (n.scope = de(function (e) {
                      return (
                        f.appendChild(e).appendChild(h.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.attributes = de(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = de(function (e) {
                      return (
                        e.appendChild(h.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = K.test(
                      h.getElementsByClassName
                    )),
                    (n.getById = de(function (e) {
                      return (
                        (f.appendChild(e).id = w),
                        !h.getElementsByName || !h.getElementsByName(w).length
                      );
                    })),
                    n.getById
                      ? ((s.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (s.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && g) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((s.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (s.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && g) {
                            var n,
                              s,
                              i,
                              r = t.getElementById(e);
                            if (r) {
                              if (
                                (n = r.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [r];
                              for (
                                i = t.getElementsByName(e), s = 0;
                                (r = i[s++]);

                              )
                                if (
                                  (n = r.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [r];
                            }
                            return [];
                          }
                        })),
                    (s.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            s = [],
                            i = 0,
                            r = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = r[i++]); )
                              1 === n.nodeType && s.push(n);
                            return s;
                          }
                          return r;
                        }),
                    (s.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && g)
                          return t.getElementsByClassName(e);
                      }),
                    (v = []),
                    (m = []),
                    (n.qsa = K.test(h.querySelectorAll)) &&
                      (de(function (e) {
                        var t;
                        (f.appendChild(e).innerHTML =
                          "<a id='" +
                          w +
                          "'></a><select id='" +
                          w +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            m.push(
                              "\\[[\\x20\\t\\r\\n\\f]*(?:value|" + I + ")"
                            ),
                          e.querySelectorAll("[id~=" + w + "-]").length ||
                            m.push("~="),
                          (t = h.createElement("input")).setAttribute(
                            "name",
                            ""
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            m.push(
                              "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            m.push(":checked"),
                          e.querySelectorAll("a#" + w + "+*").length ||
                            m.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          m.push("[\\r\\n\\f]");
                      }),
                      de(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = h.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            m.push(":enabled", ":disabled"),
                          (f.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            m.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          m.push(",.*:");
                      })),
                    (n.matchesSelector = K.test(
                      (y =
                        f.matches ||
                        f.webkitMatchesSelector ||
                        f.mozMatchesSelector ||
                        f.oMatchesSelector ||
                        f.msMatchesSelector)
                    )) &&
                      de(function (e) {
                        (n.disconnectedMatch = y.call(e, "*")),
                          y.call(e, "[s!='']:x"),
                          v.push("!=", z);
                      }),
                    (m = m.length && new RegExp(m.join("|"))),
                    (v = v.length && new RegExp(v.join("|"))),
                    (t = K.test(f.compareDocumentPosition)),
                    (b =
                      t || K.test(f.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              s = t && t.parentNode;
                            return (
                              e === s ||
                              !(
                                !s ||
                                1 !== s.nodeType ||
                                !(n.contains
                                  ? n.contains(s)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(s))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (A = t
                      ? function (e, t) {
                          if (e === t) return (u = !0), 0;
                          var s =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            s ||
                            (1 &
                              (s =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === s)
                              ? e == h || (e.ownerDocument == x && b(x, e))
                                ? -1
                                : t == h || (t.ownerDocument == x && b(x, t))
                                ? 1
                                : d
                                ? N(d, e) - N(d, t)
                                : 0
                              : 4 & s
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (u = !0), 0;
                          var n,
                            s = 0,
                            i = e.parentNode,
                            r = t.parentNode,
                            o = [e],
                            a = [t];
                          if (!i || !r)
                            return e == h
                              ? -1
                              : t == h
                              ? 1
                              : i
                              ? -1
                              : r
                              ? 1
                              : d
                              ? N(d, e) - N(d, t)
                              : 0;
                          if (i === r) return pe(e, t);
                          for (n = e; (n = n.parentNode); ) o.unshift(n);
                          for (n = t; (n = n.parentNode); ) a.unshift(n);
                          for (; o[s] === a[s]; ) s++;
                          return s
                            ? pe(o[s], a[s])
                            : o[s] == x
                            ? -1
                            : a[s] == x
                            ? 1
                            : 0;
                        }),
                    h)
                  : h;
              }),
            (ae.matches = function (e, t) {
              return ae(e, null, null, t);
            }),
            (ae.matchesSelector = function (e, t) {
              if (
                (p(e),
                n.matchesSelector &&
                  g &&
                  !_[t + " "] &&
                  (!v || !v.test(t)) &&
                  (!m || !m.test(t)))
              )
                try {
                  var s = y.call(e, t);
                  if (
                    s ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return s;
                } catch (e) {
                  _(t, !0);
                }
              return ae(t, h, null, [e]).length > 0;
            }),
            (ae.contains = function (e, t) {
              return (e.ownerDocument || e) != h && p(e), b(e, t);
            }),
            (ae.attr = function (e, t) {
              (e.ownerDocument || e) != h && p(e);
              var i = s.attrHandle[t.toLowerCase()],
                r =
                  i && L.call(s.attrHandle, t.toLowerCase())
                    ? i(e, t, !g)
                    : void 0;
              return void 0 !== r
                ? r
                : n.attributes || !g
                ? e.getAttribute(t)
                : (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : null;
            }),
            (ae.escape = function (e) {
              return (e + "").replace(se, ie);
            }),
            (ae.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (ae.uniqueSort = function (e) {
              var t,
                s = [],
                i = 0,
                r = 0;
              if (
                ((u = !n.detectDuplicates),
                (d = !n.sortStable && e.slice(0)),
                e.sort(A),
                u)
              ) {
                for (; (t = e[r++]); ) t === e[r] && (i = s.push(r));
                for (; i--; ) e.splice(s[i], 1);
              }
              return (d = null), e;
            }),
            (i = ae.getText =
              function (e) {
                var t,
                  n = "",
                  s = 0,
                  r = e.nodeType;
                if (r) {
                  if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                  } else if (3 === r || 4 === r) return e.nodeValue;
                } else for (; (t = e[s++]); ) n += i(t);
                return n;
              }),
            (s = ae.selectors =
              {
                cacheLength: 50,
                createPseudo: ce,
                match: U,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(te, ne)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || ae.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && ae.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return U.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            V.test(n) &&
                            (t = o(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = E[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + j + "|$)"
                      )) &&
                        E(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (s) {
                      var i = ae.attr(s, e);
                      return null == i
                        ? "!=" === t
                        : !t ||
                            ((i += ""),
                            "=" === t
                              ? i === n
                              : "!=" === t
                              ? i !== n
                              : "^=" === t
                              ? n && 0 === i.indexOf(n)
                              : "*=" === t
                              ? n && i.indexOf(n) > -1
                              : "$=" === t
                              ? n && i.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + i.replace(B, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (i === n ||
                                  i.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, s, i) {
                    var r = "nth" !== e.slice(0, 3),
                      o = "last" !== e.slice(-4),
                      a = "of-type" === t;
                    return 1 === s && 0 === i
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, l) {
                          var c,
                            d,
                            u,
                            p,
                            h,
                            f,
                            g = r !== o ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            b = !1;
                          if (m) {
                            if (r) {
                              for (; g; ) {
                                for (p = t; (p = p[g]); )
                                  if (
                                    a
                                      ? p.nodeName.toLowerCase() === v
                                      : 1 === p.nodeType
                                  )
                                    return !1;
                                f = g = "only" === e && !f && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((f = [o ? m.firstChild : m.lastChild]), o && y)
                            ) {
                              for (
                                b =
                                  (h =
                                    (c =
                                      (d =
                                        (u = (p = m)[w] || (p[w] = {}))[
                                          p.uniqueID
                                        ] || (u[p.uniqueID] = {}))[e] ||
                                      [])[0] === S && c[1]) && c[2],
                                  p = h && m.childNodes[h];
                                (p =
                                  (++h && p && p[g]) || (b = h = 0) || f.pop());

                              )
                                if (1 === p.nodeType && ++b && p === t) {
                                  d[e] = [S, h, b];
                                  break;
                                }
                            } else if (
                              (y &&
                                (b = h =
                                  (c =
                                    (d =
                                      (u = (p = t)[w] || (p[w] = {}))[
                                        p.uniqueID
                                      ] || (u[p.uniqueID] = {}))[e] ||
                                    [])[0] === S && c[1]),
                              !1 === b)
                            )
                              for (
                                ;
                                (p =
                                  (++h && p && p[g]) ||
                                  (b = h = 0) ||
                                  f.pop()) &&
                                ((a
                                  ? p.nodeName.toLowerCase() !== v
                                  : 1 !== p.nodeType) ||
                                  !++b ||
                                  (y &&
                                    ((d =
                                      (u = p[w] || (p[w] = {}))[p.uniqueID] ||
                                      (u[p.uniqueID] = {}))[e] = [S, b]),
                                  p !== t));

                              );
                            return (b -= i) === s || (b % s == 0 && b / s >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      i =
                        s.pseudos[e] ||
                        s.setFilters[e.toLowerCase()] ||
                        ae.error("unsupported pseudo: " + e);
                    return i[w]
                      ? i(t)
                      : i.length > 1
                      ? ((n = [e, e, "", t]),
                        s.setFilters.hasOwnProperty(e.toLowerCase())
                          ? ce(function (e, n) {
                              for (var s, r = i(e, t), o = r.length; o--; )
                                e[(s = N(e, r[o]))] = !(n[s] = r[o]);
                            })
                          : function (e) {
                              return i(e, 0, n);
                            })
                      : i;
                  },
                },
                pseudos: {
                  not: ce(function (e) {
                    var t = [],
                      n = [],
                      s = a(e.replace(R, "$1"));
                    return s[w]
                      ? ce(function (e, t, n, i) {
                          for (
                            var r, o = s(e, null, i, []), a = e.length;
                            a--;

                          )
                            (r = o[a]) && (e[a] = !(t[a] = r));
                        })
                      : function (e, i, r) {
                          return (
                            (t[0] = e),
                            s(t, null, r, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: ce(function (e) {
                    return function (t) {
                      return ae(e, t).length > 0;
                    };
                  }),
                  contains: ce(function (e) {
                    return (
                      (e = e.replace(te, ne)),
                      function (t) {
                        return (t.textContent || i(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: ce(function (e) {
                    return (
                      X.test(e || "") || ae.error("unsupported lang: " + e),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = g
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === f;
                  },
                  focus: function (e) {
                    return (
                      e === h.activeElement &&
                      (!h.hasFocus || h.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: ge(!1),
                  disabled: ge(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !s.pseudos.empty(e);
                  },
                  header: function (e) {
                    return J.test(e.nodeName);
                  },
                  input: function (e) {
                    return Q.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: me(function () {
                    return [0];
                  }),
                  last: me(function (e, t) {
                    return [t - 1];
                  }),
                  eq: me(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: me(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: me(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: me(function (e, t, n) {
                    for (var s = n < 0 ? n + t : n > t ? t : n; --s >= 0; )
                      e.push(s);
                    return e;
                  }),
                  gt: me(function (e, t, n) {
                    for (var s = n < 0 ? n + t : n; ++s < t; ) e.push(s);
                    return e;
                  }),
                },
              }),
            (s.pseudos.nth = s.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              s.pseudos[t] = he(t);
            for (t in { submit: !0, reset: !0 }) s.pseudos[t] = fe(t);
            function ye() {}
            function be(e) {
              for (var t = 0, n = e.length, s = ""; t < n; t++) s += e[t].value;
              return s;
            }
            function we(e, t, n) {
              var s = t.dir,
                i = t.next,
                r = i || s,
                o = n && "parentNode" === r,
                a = C++;
              return t.first
                ? function (t, n, i) {
                    for (; (t = t[s]); )
                      if (1 === t.nodeType || o) return e(t, n, i);
                    return !1;
                  }
                : function (t, n, l) {
                    var c,
                      d,
                      u,
                      p = [S, a];
                    if (l) {
                      for (; (t = t[s]); )
                        if ((1 === t.nodeType || o) && e(t, n, l)) return !0;
                    } else
                      for (; (t = t[s]); )
                        if (1 === t.nodeType || o)
                          if (
                            ((d =
                              (u = t[w] || (t[w] = {}))[t.uniqueID] ||
                              (u[t.uniqueID] = {})),
                            i && i === t.nodeName.toLowerCase())
                          )
                            t = t[s] || t;
                          else {
                            if ((c = d[r]) && c[0] === S && c[1] === a)
                              return (p[2] = c[2]);
                            if (((d[r] = p), (p[2] = e(t, n, l)))) return !0;
                          }
                    return !1;
                  };
            }
            function xe(e) {
              return e.length > 1
                ? function (t, n, s) {
                    for (var i = e.length; i--; ) if (!e[i](t, n, s)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function Se(e, t, n, s, i) {
              for (
                var r, o = [], a = 0, l = e.length, c = null != t;
                a < l;
                a++
              )
                (r = e[a]) &&
                  ((n && !n(r, s, i)) || (o.push(r), c && t.push(a)));
              return o;
            }
            function Ce(e, t, n, s, i, r) {
              return (
                s && !s[w] && (s = Ce(s)),
                i && !i[w] && (i = Ce(i, r)),
                ce(function (r, o, a, l) {
                  var c,
                    d,
                    u,
                    p = [],
                    h = [],
                    f = o.length,
                    g =
                      r ||
                      (function (e, t, n) {
                        for (var s = 0, i = t.length; s < i; s++)
                          ae(e, t[s], n);
                        return n;
                      })(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || (!r && t) ? g : Se(g, p, e, a, l),
                    v = n ? (i || (r ? e : f || s) ? [] : o) : m;
                  if ((n && n(m, v, a, l), s))
                    for (c = Se(v, h), s(c, [], a, l), d = c.length; d--; )
                      (u = c[d]) && (v[h[d]] = !(m[h[d]] = u));
                  if (r) {
                    if (i || e) {
                      if (i) {
                        for (c = [], d = v.length; d--; )
                          (u = v[d]) && c.push((m[d] = u));
                        i(null, (v = []), c, l);
                      }
                      for (d = v.length; d--; )
                        (u = v[d]) &&
                          (c = i ? N(r, u) : p[d]) > -1 &&
                          (r[c] = !(o[c] = u));
                    }
                  } else (v = Se(v === o ? v.splice(f, v.length) : v)), i ? i(null, o, v, l) : D.apply(o, v);
                })
              );
            }
            function Ee(e) {
              for (
                var t,
                  n,
                  i,
                  r = e.length,
                  o = s.relative[e[0].type],
                  a = o || s.relative[" "],
                  l = o ? 1 : 0,
                  d = we(
                    function (e) {
                      return e === t;
                    },
                    a,
                    !0
                  ),
                  u = we(
                    function (e) {
                      return N(t, e) > -1;
                    },
                    a,
                    !0
                  ),
                  p = [
                    function (e, n, s) {
                      var i =
                        (!o && (s || n !== c)) ||
                        ((t = n).nodeType ? d(e, n, s) : u(e, n, s));
                      return (t = null), i;
                    },
                  ];
                l < r;
                l++
              )
                if ((n = s.relative[e[l].type])) p = [we(xe(p), n)];
                else {
                  if ((n = s.filter[e[l].type].apply(null, e[l].matches))[w]) {
                    for (i = ++l; i < r && !s.relative[e[i].type]; i++);
                    return Ce(
                      l > 1 && xe(p),
                      l > 1 &&
                        be(
                          e
                            .slice(0, l - 1)
                            .concat({ value: " " === e[l - 2].type ? "*" : "" })
                        ).replace(R, "$1"),
                      n,
                      l < i && Ee(e.slice(l, i)),
                      i < r && Ee((e = e.slice(i))),
                      i < r && be(e)
                    );
                  }
                  p.push(n);
                }
              return xe(p);
            }
            return (
              (ye.prototype = s.filters = s.pseudos),
              (s.setFilters = new ye()),
              (o = ae.tokenize =
                function (e, t) {
                  var n,
                    i,
                    r,
                    o,
                    a,
                    l,
                    c,
                    d = T[e + " "];
                  if (d) return t ? 0 : d.slice(0);
                  for (a = e, l = [], c = s.preFilter; a; ) {
                    for (o in ((n && !(i = F.exec(a))) ||
                      (i && (a = a.slice(i[0].length) || a), l.push((r = []))),
                    (n = !1),
                    (i = W.exec(a)) &&
                      ((n = i.shift()),
                      r.push({ value: n, type: i[0].replace(R, " ") }),
                      (a = a.slice(n.length))),
                    s.filter))
                      !(i = U[o].exec(a)) ||
                        (c[o] && !(i = c[o](i))) ||
                        ((n = i.shift()),
                        r.push({ value: n, type: o, matches: i }),
                        (a = a.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? a.length : a ? ae.error(e) : T(e, l).slice(0);
                }),
              (a = ae.compile =
                function (e, t) {
                  var n,
                    i = [],
                    r = [],
                    a = k[e + " "];
                  if (!a) {
                    for (t || (t = o(e)), n = t.length; n--; )
                      (a = Ee(t[n]))[w] ? i.push(a) : r.push(a);
                    (a = k(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          i = e.length > 0,
                          r = function (r, o, a, l, d) {
                            var u,
                              f,
                              m,
                              v = 0,
                              y = "0",
                              b = r && [],
                              w = [],
                              x = c,
                              C = r || (i && s.find.TAG("*", d)),
                              E = (S += null == x ? 1 : Math.random() || 0.1),
                              T = C.length;
                            for (
                              d && (c = o == h || o || d);
                              y !== T && null != (u = C[y]);
                              y++
                            ) {
                              if (i && u) {
                                for (
                                  f = 0,
                                    o ||
                                      u.ownerDocument == h ||
                                      (p(u), (a = !g));
                                  (m = e[f++]);

                                )
                                  if (m(u, o || h, a)) {
                                    l.push(u);
                                    break;
                                  }
                                d && (S = E);
                              }
                              n && ((u = !m && u) && v--, r && b.push(u));
                            }
                            if (((v += y), n && y !== v)) {
                              for (f = 0; (m = t[f++]); ) m(b, w, o, a);
                              if (r) {
                                if (v > 0)
                                  for (; y--; )
                                    b[y] || w[y] || (w[y] = P.call(l));
                                w = Se(w);
                              }
                              D.apply(l, w),
                                d &&
                                  !r &&
                                  w.length > 0 &&
                                  v + t.length > 1 &&
                                  ae.uniqueSort(l);
                            }
                            return d && ((S = E), (c = x)), b;
                          };
                        return n ? ce(r) : r;
                      })(r, i)
                    )),
                      (a.selector = e);
                  }
                  return a;
                }),
              (l = ae.select =
                function (e, t, n, i) {
                  var r,
                    l,
                    c,
                    d,
                    u,
                    p = "function" == typeof e && e,
                    h = !i && o((e = p.selector || e));
                  if (((n = n || []), 1 === h.length)) {
                    if (
                      (l = h[0] = h[0].slice(0)).length > 2 &&
                      "ID" === (c = l[0]).type &&
                      9 === t.nodeType &&
                      g &&
                      s.relative[l[1].type]
                    ) {
                      if (
                        !(t = (s.find.ID(c.matches[0].replace(te, ne), t) ||
                          [])[0])
                      )
                        return n;
                      p && (t = t.parentNode),
                        (e = e.slice(l.shift().value.length));
                    }
                    for (
                      r = U.needsContext.test(e) ? 0 : l.length;
                      r-- && ((c = l[r]), !s.relative[(d = c.type)]);

                    )
                      if (
                        (u = s.find[d]) &&
                        (i = u(
                          c.matches[0].replace(te, ne),
                          (ee.test(l[0].type) && ve(t.parentNode)) || t
                        ))
                      ) {
                        if ((l.splice(r, 1), !(e = i.length && be(l))))
                          return D.apply(n, i), n;
                        break;
                      }
                  }
                  return (
                    (p || a(e, h))(
                      i,
                      t,
                      !g,
                      n,
                      !t || (ee.test(e) && ve(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = w.split("").sort(A).join("") === w),
              (n.detectDuplicates = !!u),
              p(),
              (n.sortDetached = de(function (e) {
                return (
                  1 & e.compareDocumentPosition(h.createElement("fieldset"))
                );
              })),
              de(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                ue("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                de(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                ue("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              de(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                ue(I, function (e, t, n) {
                  var s;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (s = e.getAttributeNode(t)) && s.specified
                      ? s.value
                      : null;
                }),
              ae
            );
          })(s);
          (E.find = k),
            (E.expr = k.selectors),
            (E.expr[":"] = E.expr.pseudos),
            (E.uniqueSort = E.unique = k.uniqueSort),
            (E.text = k.getText),
            (E.isXMLDoc = k.isXML),
            (E.contains = k.contains),
            (E.escapeSelector = k.escape);
          var _ = function (e, t, n) {
              for (
                var s = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (i && E(e).is(n)) break;
                  s.push(e);
                }
              return s;
            },
            A = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            L = E.expr.match.needsContext;
          function O(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var P =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function $(e, t, n) {
            return v(t)
              ? E.grep(e, function (e, s) {
                  return !!t.call(e, s, e) !== n;
                })
              : t.nodeType
              ? E.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? E.grep(e, function (e) {
                  return d.call(t, e) > -1 !== n;
                })
              : E.filter(t, e, n);
          }
          (E.filter = function (e, t, n) {
            var s = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === s.nodeType
                ? E.find.matchesSelector(s, e)
                  ? [s]
                  : []
                : E.find.matches(
                    e,
                    E.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            E.fn.extend({
              find: function (e) {
                var t,
                  n,
                  s = this.length,
                  i = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    E(e).filter(function () {
                      for (t = 0; t < s; t++)
                        if (E.contains(i[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < s; t++)
                  E.find(e, i[t], n);
                return s > 1 ? E.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack($(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack($(this, e || [], !0));
              },
              is: function (e) {
                return !!$(
                  this,
                  "string" == typeof e && L.test(e) ? E(e) : e || [],
                  !1
                ).length;
              },
            });
          var D,
            M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((E.fn.init = function (e, t, n) {
            var s, i;
            if (!e) return this;
            if (((n = n || D), "string" == typeof e)) {
              if (
                !(s =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : M.exec(e)) ||
                (!s[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (s[1]) {
                if (
                  ((t = t instanceof E ? t[0] : t),
                  E.merge(
                    this,
                    E.parseHTML(
                      s[1],
                      t && t.nodeType ? t.ownerDocument || t : b,
                      !0
                    )
                  ),
                  P.test(s[1]) && E.isPlainObject(t))
                )
                  for (s in t) v(this[s]) ? this[s](t[s]) : this.attr(s, t[s]);
                return this;
              }
              return (
                (i = b.getElementById(s[2])) &&
                  ((this[0] = i), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : v(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(E)
              : E.makeArray(e, this);
          }).prototype = E.fn),
            (D = E(b));
          var N = /^(?:parents|prev(?:Until|All))/,
            I = { children: !0, contents: !0, next: !0, prev: !0 };
          function j(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          E.fn.extend({
            has: function (e) {
              var t = E(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (E.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                s = 0,
                i = this.length,
                r = [],
                o = "string" != typeof e && E(e);
              if (!L.test(e))
                for (; s < i; s++)
                  for (n = this[s]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (o
                        ? o.index(n) > -1
                        : 1 === n.nodeType && E.find.matchesSelector(n, e))
                    ) {
                      r.push(n);
                      break;
                    }
              return this.pushStack(r.length > 1 ? E.uniqueSort(r) : r);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? d.call(E(e), this[0])
                  : d.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            E.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return _(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return _(e, "parentNode", n);
                },
                next: function (e) {
                  return j(e, "nextSibling");
                },
                prev: function (e) {
                  return j(e, "previousSibling");
                },
                nextAll: function (e) {
                  return _(e, "nextSibling");
                },
                prevAll: function (e) {
                  return _(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return _(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return _(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return A((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return A(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && o(e.contentDocument)
                    ? e.contentDocument
                    : (O(e, "template") && (e = e.content || e),
                      E.merge([], e.childNodes));
                },
              },
              function (e, t) {
                E.fn[e] = function (n, s) {
                  var i = E.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (s = n),
                    s && "string" == typeof s && (i = E.filter(s, i)),
                    this.length > 1 &&
                      (I[e] || E.uniqueSort(i), N.test(e) && i.reverse()),
                    this.pushStack(i)
                  );
                };
              }
            );
          var q = /[^\x20\t\r\n\f]+/g;
          function H(e) {
            return e;
          }
          function z(e) {
            throw e;
          }
          function B(e, t, n, s) {
            var i;
            try {
              e && v((i = e.promise))
                ? i.call(e).done(t).fail(n)
                : e && v((i = e.then))
                ? i.call(e, t, n)
                : t.apply(void 0, [e].slice(s));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (E.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      E.each(e.match(q) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : E.extend({}, e);
            var t,
              n,
              s,
              i,
              r = [],
              o = [],
              a = -1,
              l = function () {
                for (i = i || e.once, s = t = !0; o.length; a = -1)
                  for (n = o.shift(); ++a < r.length; )
                    !1 === r[a].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((a = r.length), (n = !1));
                e.memory || (n = !1), (t = !1), i && (r = n ? [] : "");
              },
              c = {
                add: function () {
                  return (
                    r &&
                      (n && !t && ((a = r.length - 1), o.push(n)),
                      (function t(n) {
                        E.each(n, function (n, s) {
                          v(s)
                            ? (e.unique && c.has(s)) || r.push(s)
                            : s && s.length && "string" !== S(s) && t(s);
                        });
                      })(arguments),
                      n && !t && l()),
                    this
                  );
                },
                remove: function () {
                  return (
                    E.each(arguments, function (e, t) {
                      for (var n; (n = E.inArray(t, r, n)) > -1; )
                        r.splice(n, 1), n <= a && a--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? E.inArray(e, r) > -1 : r.length > 0;
                },
                empty: function () {
                  return r && (r = []), this;
                },
                disable: function () {
                  return (i = o = []), (r = n = ""), this;
                },
                disabled: function () {
                  return !r;
                },
                lock: function () {
                  return (i = o = []), n || t || (r = n = ""), this;
                },
                locked: function () {
                  return !!i;
                },
                fireWith: function (e, n) {
                  return (
                    i ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      o.push(n),
                      t || l()),
                    this
                  );
                },
                fire: function () {
                  return c.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!s;
                },
              };
            return c;
          }),
            E.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      E.Callbacks("memory"),
                      E.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      E.Callbacks("once memory"),
                      E.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      E.Callbacks("once memory"),
                      E.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  i = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return r.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return i.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return E.Deferred(function (n) {
                        E.each(t, function (t, s) {
                          var i = v(e[s[4]]) && e[s[4]];
                          r[s[1]](function () {
                            var e = i && i.apply(this, arguments);
                            e && v(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[s[0] + "With"](this, i ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, i) {
                      var r = 0;
                      function o(e, t, n, i) {
                        return function () {
                          var a = this,
                            l = arguments,
                            c = function () {
                              var s, c;
                              if (!(e < r)) {
                                if ((s = n.apply(a, l)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (c =
                                  s &&
                                  ("object" == typeof s ||
                                    "function" == typeof s) &&
                                  s.then),
                                  v(c)
                                    ? i
                                      ? c.call(s, o(r, t, H, i), o(r, t, z, i))
                                      : (r++,
                                        c.call(
                                          s,
                                          o(r, t, H, i),
                                          o(r, t, z, i),
                                          o(r, t, H, t.notifyWith)
                                        ))
                                    : (n !== H && ((a = void 0), (l = [s])),
                                      (i || t.resolveWith)(a, l));
                              }
                            },
                            d = i
                              ? c
                              : function () {
                                  try {
                                    c();
                                  } catch (s) {
                                    E.Deferred.exceptionHook &&
                                      E.Deferred.exceptionHook(s, d.stackTrace),
                                      e + 1 >= r &&
                                        (n !== z && ((a = void 0), (l = [s])),
                                        t.rejectWith(a, l));
                                  }
                                };
                          e
                            ? d()
                            : (E.Deferred.getStackHook &&
                                (d.stackTrace = E.Deferred.getStackHook()),
                              s.setTimeout(d));
                        };
                      }
                      return E.Deferred(function (s) {
                        t[0][3].add(o(0, s, v(i) ? i : H, s.notifyWith)),
                          t[1][3].add(o(0, s, v(e) ? e : H)),
                          t[2][3].add(o(0, s, v(n) ? n : z));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? E.extend(e, i) : i;
                    },
                  },
                  r = {};
                return (
                  E.each(t, function (e, s) {
                    var o = s[2],
                      a = s[5];
                    (i[s[1]] = o.add),
                      a &&
                        o.add(
                          function () {
                            n = a;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      o.add(s[3].fire),
                      (r[s[0]] = function () {
                        return (
                          r[s[0] + "With"](
                            this === r ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (r[s[0] + "With"] = o.fireWith);
                  }),
                  i.promise(r),
                  e && e.call(r, r),
                  r
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  s = Array(n),
                  i = a.call(arguments),
                  r = E.Deferred(),
                  o = function (e) {
                    return function (n) {
                      (s[e] = this),
                        (i[e] = arguments.length > 1 ? a.call(arguments) : n),
                        --t || r.resolveWith(s, i);
                    };
                  };
                if (
                  t <= 1 &&
                  (B(e, r.done(o(n)).resolve, r.reject, !t),
                  "pending" === r.state() || v(i[n] && i[n].then))
                )
                  return r.then();
                for (; n--; ) B(i[n], o(n), r.reject);
                return r.promise();
              },
            });
          var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (E.Deferred.exceptionHook = function (e, t) {
            s.console &&
              s.console.warn &&
              e &&
              R.test(e.name) &&
              s.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (E.readyException = function (e) {
              s.setTimeout(function () {
                throw e;
              });
            });
          var F = E.Deferred();
          function W() {
            b.removeEventListener("DOMContentLoaded", W),
              s.removeEventListener("load", W),
              E.ready();
          }
          (E.fn.ready = function (e) {
            return (
              F.then(e).catch(function (e) {
                E.readyException(e);
              }),
              this
            );
          }),
            E.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --E.readyWait : E.isReady) ||
                  ((E.isReady = !0),
                  (!0 !== e && --E.readyWait > 0) || F.resolveWith(b, [E]));
              },
            }),
            (E.ready.then = F.then),
            "complete" === b.readyState ||
            ("loading" !== b.readyState && !b.documentElement.doScroll)
              ? s.setTimeout(E.ready)
              : (b.addEventListener("DOMContentLoaded", W),
                s.addEventListener("load", W));
          var G = function (e, t, n, s, i, r, o) {
              var a = 0,
                l = e.length,
                c = null == n;
              if ("object" === S(n))
                for (a in ((i = !0), n)) G(e, t, a, n[a], !0, r, o);
              else if (
                void 0 !== s &&
                ((i = !0),
                v(s) || (o = !0),
                c &&
                  (o
                    ? (t.call(e, s), (t = null))
                    : ((c = t),
                      (t = function (e, t, n) {
                        return c.call(E(e), n);
                      }))),
                t)
              )
                for (; a < l; a++)
                  t(e[a], n, o ? s : s.call(e[a], a, t(e[a], n)));
              return i ? e : c ? t.call(e) : l ? t(e[0], n) : r;
            },
            V = /^-ms-/,
            X = /-([a-z])/g;
          function U(e, t) {
            return t.toUpperCase();
          }
          function Y(e) {
            return e.replace(V, "ms-").replace(X, U);
          }
          var Q = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function J() {
            this.expando = E.expando + J.uid++;
          }
          (J.uid = 1),
            (J.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    Q(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var s,
                  i = this.cache(e);
                if ("string" == typeof t) i[Y(t)] = n;
                else for (s in t) i[Y(s)] = t[s];
                return i;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][Y(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  s = e[this.expando];
                if (void 0 !== s) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(Y)
                      : (t = Y(t)) in s
                      ? [t]
                      : t.match(q) || []).length;
                    for (; n--; ) delete s[t[n]];
                  }
                  (void 0 === t || E.isEmptyObject(s)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !E.isEmptyObject(t);
              },
            });
          var K = new J(),
            Z = new J(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ne(e, t, n) {
            var s;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((s = "data-" + t.replace(te, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(s)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                Z.set(e, t, n);
              } else n = void 0;
            return n;
          }
          E.extend({
            hasData: function (e) {
              return Z.hasData(e) || K.hasData(e);
            },
            data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            removeData: function (e, t) {
              Z.remove(e, t);
            },
            _data: function (e, t, n) {
              return K.access(e, t, n);
            },
            _removeData: function (e, t) {
              K.remove(e, t);
            },
          }),
            E.fn.extend({
              data: function (e, t) {
                var n,
                  s,
                  i,
                  r = this[0],
                  o = r && r.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((i = Z.get(r)),
                    1 === r.nodeType && !K.get(r, "hasDataAttrs"))
                  ) {
                    for (n = o.length; n--; )
                      o[n] &&
                        0 === (s = o[n].name).indexOf("data-") &&
                        ((s = Y(s.slice(5))), ne(r, s, i[s]));
                    K.set(r, "hasDataAttrs", !0);
                  }
                  return i;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      Z.set(this, e);
                    })
                  : G(
                      this,
                      function (t) {
                        var n;
                        if (r && void 0 === t)
                          return void 0 !== (n = Z.get(r, e)) ||
                            void 0 !== (n = ne(r, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          Z.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  Z.remove(this, e);
                });
              },
            }),
            E.extend({
              queue: function (e, t, n) {
                var s;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (s = K.get(e, t)),
                    n &&
                      (!s || Array.isArray(n)
                        ? (s = K.access(e, t, E.makeArray(n)))
                        : s.push(n)),
                    s || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = E.queue(e, t),
                  s = n.length,
                  i = n.shift(),
                  r = E._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), s--),
                  i &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete r.stop,
                    i.call(
                      e,
                      function () {
                        E.dequeue(e, t);
                      },
                      r
                    )),
                  !s && r && r.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  K.get(e, n) ||
                  K.access(e, n, {
                    empty: E.Callbacks("once memory").add(function () {
                      K.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            E.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? E.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = E.queue(this, e, t);
                        E._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            E.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  E.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  s = 1,
                  i = E.Deferred(),
                  r = this,
                  o = this.length,
                  a = function () {
                    --s || i.resolveWith(r, [r]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  o--;

                )
                  (n = K.get(r[o], e + "queueHooks")) &&
                    n.empty &&
                    (s++, n.empty.add(a));
                return a(), i.promise(t);
              },
            });
          var se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ie = new RegExp("^(?:([+-])=|)(" + se + ")([a-z%]*)$", "i"),
            re = ["Top", "Right", "Bottom", "Left"],
            oe = b.documentElement,
            ae = function (e) {
              return E.contains(e.ownerDocument, e);
            },
            le = { composed: !0 };
          oe.getRootNode &&
            (ae = function (e) {
              return (
                E.contains(e.ownerDocument, e) ||
                e.getRootNode(le) === e.ownerDocument
              );
            });
          var ce = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                ae(e) &&
                "none" === E.css(e, "display"))
            );
          };
          function de(e, t, n, s) {
            var i,
              r,
              o = 20,
              a = s
                ? function () {
                    return s.cur();
                  }
                : function () {
                    return E.css(e, t, "");
                  },
              l = a(),
              c = (n && n[3]) || (E.cssNumber[t] ? "" : "px"),
              d =
                e.nodeType &&
                (E.cssNumber[t] || ("px" !== c && +l)) &&
                ie.exec(E.css(e, t));
            if (d && d[3] !== c) {
              for (l /= 2, c = c || d[3], d = +l || 1; o--; )
                E.style(e, t, d + c),
                  (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (o = 0),
                  (d /= r);
              (d *= 2), E.style(e, t, d + c), (n = n || []);
            }
            return (
              n &&
                ((d = +d || +l || 0),
                (i = n[1] ? d + (n[1] + 1) * n[2] : +n[2]),
                s && ((s.unit = c), (s.start = d), (s.end = i))),
              i
            );
          }
          var ue = {};
          function pe(e) {
            var t,
              n = e.ownerDocument,
              s = e.nodeName,
              i = ue[s];
            return (
              i ||
              ((t = n.body.appendChild(n.createElement(s))),
              (i = E.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === i && (i = "block"),
              (ue[s] = i),
              i)
            );
          }
          function he(e, t) {
            for (var n, s, i = [], r = 0, o = e.length; r < o; r++)
              (s = e[r]).style &&
                ((n = s.style.display),
                t
                  ? ("none" === n &&
                      ((i[r] = K.get(s, "display") || null),
                      i[r] || (s.style.display = "")),
                    "" === s.style.display && ce(s) && (i[r] = pe(s)))
                  : "none" !== n && ((i[r] = "none"), K.set(s, "display", n)));
            for (r = 0; r < o; r++) null != i[r] && (e[r].style.display = i[r]);
            return e;
          }
          E.fn.extend({
            show: function () {
              return he(this, !0);
            },
            hide: function () {
              return he(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ce(this) ? E(this).show() : E(this).hide();
                  });
            },
          });
          var fe,
            ge,
            me = /^(?:checkbox|radio)$/i,
            ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ye = /^$|^module$|\/(?:java|ecma)script/i;
          (fe = b.createDocumentFragment().appendChild(b.createElement("div"))),
            (ge = b.createElement("input")).setAttribute("type", "radio"),
            ge.setAttribute("checked", "checked"),
            ge.setAttribute("name", "t"),
            fe.appendChild(ge),
            (m.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (fe.innerHTML = "<textarea>x</textarea>"),
            (m.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue),
            (fe.innerHTML = "<option></option>"),
            (m.option = !!fe.lastChild);
          var be = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function we(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && O(e, t)) ? E.merge([e], n) : n
            );
          }
          function xe(e, t) {
            for (var n = 0, s = e.length; n < s; n++)
              K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
          }
          (be.tbody = be.tfoot = be.colgroup = be.caption = be.thead),
            (be.th = be.td),
            m.option ||
              (be.optgroup = be.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var Se = /<|&#?\w+;/;
          function Ce(e, t, n, s, i) {
            for (
              var r,
                o,
                a,
                l,
                c,
                d,
                u = t.createDocumentFragment(),
                p = [],
                h = 0,
                f = e.length;
              h < f;
              h++
            )
              if ((r = e[h]) || 0 === r)
                if ("object" === S(r)) E.merge(p, r.nodeType ? [r] : r);
                else if (Se.test(r)) {
                  for (
                    o = o || u.appendChild(t.createElement("div")),
                      a = (ve.exec(r) || ["", ""])[1].toLowerCase(),
                      l = be[a] || be._default,
                      o.innerHTML = l[1] + E.htmlPrefilter(r) + l[2],
                      d = l[0];
                    d--;

                  )
                    o = o.lastChild;
                  E.merge(p, o.childNodes),
                    ((o = u.firstChild).textContent = "");
                } else p.push(t.createTextNode(r));
            for (u.textContent = "", h = 0; (r = p[h++]); )
              if (s && E.inArray(r, s) > -1) i && i.push(r);
              else if (
                ((c = ae(r)),
                (o = we(u.appendChild(r), "script")),
                c && xe(o),
                n)
              )
                for (d = 0; (r = o[d++]); ) ye.test(r.type || "") && n.push(r);
            return u;
          }
          var Ee = /^([^.]*)(?:\.(.+)|)/;
          function Te() {
            return !0;
          }
          function ke() {
            return !1;
          }
          function _e(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return b.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function Ae(e, t, n, s, i, r) {
            var o, a;
            if ("object" == typeof t) {
              for (a in ("string" != typeof n && ((s = s || n), (n = void 0)),
              t))
                Ae(e, a, n, s, t[a], r);
              return e;
            }
            if (
              (null == s && null == i
                ? ((i = n), (s = n = void 0))
                : null == i &&
                  ("string" == typeof n
                    ? ((i = s), (s = void 0))
                    : ((i = s), (s = n), (n = void 0))),
              !1 === i)
            )
              i = ke;
            else if (!i) return e;
            return (
              1 === r &&
                ((o = i),
                (i = function (e) {
                  return E().off(e), o.apply(this, arguments);
                }),
                (i.guid = o.guid || (o.guid = E.guid++))),
              e.each(function () {
                E.event.add(this, t, i, s, n);
              })
            );
          }
          function Le(e, t, n) {
            n
              ? (K.set(e, t, !1),
                E.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var s,
                      i,
                      r = K.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (r.length)
                        (E.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((r = a.call(arguments)),
                        K.set(this, t, r),
                        (s = n(this, t)),
                        this[t](),
                        r !== (i = K.get(this, t)) || s
                          ? K.set(this, t, !1)
                          : (i = {}),
                        r !== i)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          i && i.value
                        );
                    } else
                      r.length &&
                        (K.set(this, t, {
                          value: E.event.trigger(
                            E.extend(r[0], E.Event.prototype),
                            r.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === K.get(e, t) && E.event.add(e, t, Te);
          }
          (E.event = {
            global: {},
            add: function (e, t, n, s, i) {
              var r,
                o,
                a,
                l,
                c,
                d,
                u,
                p,
                h,
                f,
                g,
                m = K.get(e);
              if (Q(e))
                for (
                  n.handler && ((n = (r = n).handler), (i = r.selector)),
                    i && E.find.matchesSelector(oe, i),
                    n.guid || (n.guid = E.guid++),
                    (l = m.events) || (l = m.events = Object.create(null)),
                    (o = m.handle) ||
                      (o = m.handle =
                        function (t) {
                          return void 0 !== E && E.event.triggered !== t.type
                            ? E.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    c = (t = (t || "").match(q) || [""]).length;
                  c--;

                )
                  (h = g = (a = Ee.exec(t[c]) || [])[1]),
                    (f = (a[2] || "").split(".").sort()),
                    h &&
                      ((u = E.event.special[h] || {}),
                      (h = (i ? u.delegateType : u.bindType) || h),
                      (u = E.event.special[h] || {}),
                      (d = E.extend(
                        {
                          type: h,
                          origType: g,
                          data: s,
                          handler: n,
                          guid: n.guid,
                          selector: i,
                          needsContext: i && E.expr.match.needsContext.test(i),
                          namespace: f.join("."),
                        },
                        r
                      )),
                      (p = l[h]) ||
                        (((p = l[h] = []).delegateCount = 0),
                        (u.setup && !1 !== u.setup.call(e, s, f, o)) ||
                          (e.addEventListener && e.addEventListener(h, o))),
                      u.add &&
                        (u.add.call(e, d),
                        d.handler.guid || (d.handler.guid = n.guid)),
                      i ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                      (E.event.global[h] = !0));
            },
            remove: function (e, t, n, s, i) {
              var r,
                o,
                a,
                l,
                c,
                d,
                u,
                p,
                h,
                f,
                g,
                m = K.hasData(e) && K.get(e);
              if (m && (l = m.events)) {
                for (c = (t = (t || "").match(q) || [""]).length; c--; )
                  if (
                    ((h = g = (a = Ee.exec(t[c]) || [])[1]),
                    (f = (a[2] || "").split(".").sort()),
                    h)
                  ) {
                    for (
                      u = E.event.special[h] || {},
                        p =
                          l[(h = (s ? u.delegateType : u.bindType) || h)] || [],
                        a =
                          a[2] &&
                          new RegExp(
                            "(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        o = r = p.length;
                      r--;

                    )
                      (d = p[r]),
                        (!i && g !== d.origType) ||
                          (n && n.guid !== d.guid) ||
                          (a && !a.test(d.namespace)) ||
                          (s &&
                            s !== d.selector &&
                            ("**" !== s || !d.selector)) ||
                          (p.splice(r, 1),
                          d.selector && p.delegateCount--,
                          u.remove && u.remove.call(e, d));
                    o &&
                      !p.length &&
                      ((u.teardown && !1 !== u.teardown.call(e, f, m.handle)) ||
                        E.removeEvent(e, h, m.handle),
                      delete l[h]);
                  } else for (h in l) E.event.remove(e, h + t[c], n, s, !0);
                E.isEmptyObject(l) && K.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                s,
                i,
                r,
                o,
                a = new Array(arguments.length),
                l = E.event.fix(e),
                c =
                  (K.get(this, "events") || Object.create(null))[l.type] || [],
                d = E.event.special[l.type] || {};
              for (a[0] = l, t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
              if (
                ((l.delegateTarget = this),
                !d.preDispatch || !1 !== d.preDispatch.call(this, l))
              ) {
                for (
                  o = E.event.handlers.call(this, l, c), t = 0;
                  (i = o[t++]) && !l.isPropagationStopped();

                )
                  for (
                    l.currentTarget = i.elem, n = 0;
                    (r = i.handlers[n++]) && !l.isImmediatePropagationStopped();

                  )
                    (l.rnamespace &&
                      !1 !== r.namespace &&
                      !l.rnamespace.test(r.namespace)) ||
                      ((l.handleObj = r),
                      (l.data = r.data),
                      void 0 !==
                        (s = (
                          (E.event.special[r.origType] || {}).handle ||
                          r.handler
                        ).apply(i.elem, a)) &&
                        !1 === (l.result = s) &&
                        (l.preventDefault(), l.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, l), l.result;
              }
            },
            handlers: function (e, t) {
              var n,
                s,
                i,
                r,
                o,
                a = [],
                l = t.delegateCount,
                c = e.target;
              if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                  if (
                    1 === c.nodeType &&
                    ("click" !== e.type || !0 !== c.disabled)
                  ) {
                    for (r = [], o = {}, n = 0; n < l; n++)
                      void 0 === o[(i = (s = t[n]).selector + " ")] &&
                        (o[i] = s.needsContext
                          ? E(i, this).index(c) > -1
                          : E.find(i, this, null, [c]).length),
                        o[i] && r.push(s);
                    r.length && a.push({ elem: c, handlers: r });
                  }
              return (
                (c = this),
                l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
                a
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(E.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[E.expando] ? e : new E.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    me.test(t.type) &&
                      t.click &&
                      O(t, "input") &&
                      Le(t, "click", Te),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    me.test(t.type) &&
                      t.click &&
                      O(t, "input") &&
                      Le(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (me.test(t.type) &&
                      t.click &&
                      O(t, "input") &&
                      K.get(t, "click")) ||
                    O(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (E.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (E.Event = function (e, t) {
              if (!(this instanceof E.Event)) return new E.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Te
                      : ke),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && E.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[E.expando] = !0);
            }),
            (E.Event.prototype = {
              constructor: E.Event,
              isDefaultPrevented: ke,
              isPropagationStopped: ke,
              isImmediatePropagationStopped: ke,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Te),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Te),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Te),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            E.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              E.event.addProp
            ),
            E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              E.event.special[e] = {
                setup: function () {
                  return Le(this, e, _e), !1;
                },
                trigger: function () {
                  return Le(this, e), !0;
                },
                _default: function () {
                  return !0;
                },
                delegateType: t,
              };
            }),
            E.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                E.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      s = this,
                      i = e.relatedTarget,
                      r = e.handleObj;
                    return (
                      (i && (i === s || E.contains(s, i))) ||
                        ((e.type = r.origType),
                        (n = r.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            E.fn.extend({
              on: function (e, t, n, s) {
                return Ae(this, e, t, n, s);
              },
              one: function (e, t, n, s) {
                return Ae(this, e, t, n, s, 1);
              },
              off: function (e, t, n) {
                var s, i;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (s = e.handleObj),
                    E(e.delegateTarget).off(
                      s.namespace ? s.origType + "." + s.namespace : s.origType,
                      s.selector,
                      s.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (i in e) this.off(i, t, e[i]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = ke),
                  this.each(function () {
                    E.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var Oe = /<script|<style|<link/i,
            Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            $e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function De(e, t) {
            return (
              (O(e, "table") &&
                O(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                E(e).children("tbody")[0]) ||
              e
            );
          }
          function Me(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function Ne(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function Ie(e, t) {
            var n, s, i, r, o, a;
            if (1 === t.nodeType) {
              if (K.hasData(e) && (a = K.get(e).events))
                for (i in (K.remove(t, "handle events"), a))
                  for (n = 0, s = a[i].length; n < s; n++)
                    E.event.add(t, i, a[i][n]);
              Z.hasData(e) &&
                ((r = Z.access(e)), (o = E.extend({}, r)), Z.set(t, o));
            }
          }
          function je(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && me.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function qe(e, t, n, s) {
            t = l(t);
            var i,
              r,
              o,
              a,
              c,
              d,
              u = 0,
              p = e.length,
              h = p - 1,
              f = t[0],
              g = v(f);
            if (
              g ||
              (p > 1 && "string" == typeof f && !m.checkClone && Pe.test(f))
            )
              return e.each(function (i) {
                var r = e.eq(i);
                g && (t[0] = f.call(this, i, r.html())), qe(r, t, n, s);
              });
            if (
              p &&
              ((r = (i = Ce(t, e[0].ownerDocument, !1, e, s)).firstChild),
              1 === i.childNodes.length && (i = r),
              r || s)
            ) {
              for (a = (o = E.map(we(i, "script"), Me)).length; u < p; u++)
                (c = i),
                  u !== h &&
                    ((c = E.clone(c, !0, !0)),
                    a && E.merge(o, we(c, "script"))),
                  n.call(e[u], c, u);
              if (a)
                for (
                  d = o[o.length - 1].ownerDocument, E.map(o, Ne), u = 0;
                  u < a;
                  u++
                )
                  (c = o[u]),
                    ye.test(c.type || "") &&
                      !K.access(c, "globalEval") &&
                      E.contains(d, c) &&
                      (c.src && "module" !== (c.type || "").toLowerCase()
                        ? E._evalUrl &&
                          !c.noModule &&
                          E._evalUrl(
                            c.src,
                            { nonce: c.nonce || c.getAttribute("nonce") },
                            d
                          )
                        : x(c.textContent.replace($e, ""), c, d));
            }
            return e;
          }
          function He(e, t, n) {
            for (
              var s, i = t ? E.filter(t, e) : e, r = 0;
              null != (s = i[r]);
              r++
            )
              n || 1 !== s.nodeType || E.cleanData(we(s)),
                s.parentNode &&
                  (n && ae(s) && xe(we(s, "script")),
                  s.parentNode.removeChild(s));
            return e;
          }
          E.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var s,
                i,
                r,
                o,
                a = e.cloneNode(!0),
                l = ae(e);
              if (
                !(
                  m.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  E.isXMLDoc(e)
                )
              )
                for (o = we(a), s = 0, i = (r = we(e)).length; s < i; s++)
                  je(r[s], o[s]);
              if (t)
                if (n)
                  for (
                    r = r || we(e), o = o || we(a), s = 0, i = r.length;
                    s < i;
                    s++
                  )
                    Ie(r[s], o[s]);
                else Ie(e, a);
              return (
                (o = we(a, "script")).length > 0 &&
                  xe(o, !l && we(e, "script")),
                a
              );
            },
            cleanData: function (e) {
              for (
                var t, n, s, i = E.event.special, r = 0;
                void 0 !== (n = e[r]);
                r++
              )
                if (Q(n)) {
                  if ((t = n[K.expando])) {
                    if (t.events)
                      for (s in t.events)
                        i[s]
                          ? E.event.remove(n, s)
                          : E.removeEvent(n, s, t.handle);
                    n[K.expando] = void 0;
                  }
                  n[Z.expando] && (n[Z.expando] = void 0);
                }
            },
          }),
            E.fn.extend({
              detach: function (e) {
                return He(this, e, !0);
              },
              remove: function (e) {
                return He(this, e);
              },
              text: function (e) {
                return G(
                  this,
                  function (e) {
                    return void 0 === e
                      ? E.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return qe(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    De(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return qe(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = De(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return qe(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return qe(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (E.cleanData(we(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return E.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return G(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      s = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !Oe.test(e) &&
                      !be[(ve.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = E.htmlPrefilter(e);
                      try {
                        for (; n < s; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (E.cleanData(we(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return qe(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    E.inArray(this, e) < 0 &&
                      (E.cleanData(we(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            E.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                E.fn[e] = function (e) {
                  for (
                    var n, s = [], i = E(e), r = i.length - 1, o = 0;
                    o <= r;
                    o++
                  )
                    (n = o === r ? this : this.clone(!0)),
                      E(i[o])[t](n),
                      c.apply(s, n.get());
                  return this.pushStack(s);
                };
              }
            );
          var ze = new RegExp("^(" + se + ")(?!px)[a-z%]+$", "i"),
            Be = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = s), t.getComputedStyle(e);
            },
            Re = function (e, t, n) {
              var s,
                i,
                r = {};
              for (i in t) (r[i] = e.style[i]), (e.style[i] = t[i]);
              for (i in ((s = n.call(e)), t)) e.style[i] = r[i];
              return s;
            },
            Fe = new RegExp(re.join("|"), "i");
          function We(e, t, n) {
            var s,
              i,
              r,
              o,
              a = e.style;
            return (
              (n = n || Be(e)) &&
                ("" !== (o = n.getPropertyValue(t) || n[t]) ||
                  ae(e) ||
                  (o = E.style(e, t)),
                !m.pixelBoxStyles() &&
                  ze.test(o) &&
                  Fe.test(t) &&
                  ((s = a.width),
                  (i = a.minWidth),
                  (r = a.maxWidth),
                  (a.minWidth = a.maxWidth = a.width = o),
                  (o = n.width),
                  (a.width = s),
                  (a.minWidth = i),
                  (a.maxWidth = r))),
              void 0 !== o ? o + "" : o
            );
          }
          function Ge(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (d) {
                (c.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (d.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  oe.appendChild(c).appendChild(d);
                var e = s.getComputedStyle(d);
                (n = "1%" !== e.top),
                  (l = 12 === t(e.marginLeft)),
                  (d.style.right = "60%"),
                  (o = 36 === t(e.right)),
                  (i = 36 === t(e.width)),
                  (d.style.position = "absolute"),
                  (r = 12 === t(d.offsetWidth / 3)),
                  oe.removeChild(c),
                  (d = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              i,
              r,
              o,
              a,
              l,
              c = b.createElement("div"),
              d = b.createElement("div");
            d.style &&
              ((d.style.backgroundClip = "content-box"),
              (d.cloneNode(!0).style.backgroundClip = ""),
              (m.clearCloneStyle = "content-box" === d.style.backgroundClip),
              E.extend(m, {
                boxSizingReliable: function () {
                  return e(), i;
                },
                pixelBoxStyles: function () {
                  return e(), o;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), l;
                },
                scrollboxSize: function () {
                  return e(), r;
                },
                reliableTrDimensions: function () {
                  var e, t, n, i;
                  return (
                    null == a &&
                      ((e = b.createElement("table")),
                      (t = b.createElement("tr")),
                      (n = b.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      oe.appendChild(e).appendChild(t).appendChild(n),
                      (i = s.getComputedStyle(t)),
                      (a =
                        parseInt(i.height, 10) +
                          parseInt(i.borderTopWidth, 10) +
                          parseInt(i.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      oe.removeChild(e)),
                    a
                  );
                },
              }));
          })();
          var Ve = ["Webkit", "Moz", "ms"],
            Xe = b.createElement("div").style,
            Ue = {};
          function Ye(e) {
            var t = E.cssProps[e] || Ue[e];
            return (
              t ||
              (e in Xe
                ? e
                : (Ue[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Ve.length;
                        n--;

                      )
                        if ((e = Ve[n] + t) in Xe) return e;
                    })(e) || e))
            );
          }
          var Qe = /^(none|table(?!-c[ea]).+)/,
            Je = /^--/,
            Ke = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            Ze = { letterSpacing: "0", fontWeight: "400" };
          function et(e, t, n) {
            var s = ie.exec(t);
            return s ? Math.max(0, s[2] - (n || 0)) + (s[3] || "px") : t;
          }
          function tt(e, t, n, s, i, r) {
            var o = "width" === t ? 1 : 0,
              a = 0,
              l = 0;
            if (n === (s ? "border" : "content")) return 0;
            for (; o < 4; o += 2)
              "margin" === n && (l += E.css(e, n + re[o], !0, i)),
                s
                  ? ("content" === n &&
                      (l -= E.css(e, "padding" + re[o], !0, i)),
                    "margin" !== n &&
                      (l -= E.css(e, "border" + re[o] + "Width", !0, i)))
                  : ((l += E.css(e, "padding" + re[o], !0, i)),
                    "padding" !== n
                      ? (l += E.css(e, "border" + re[o] + "Width", !0, i))
                      : (a += E.css(e, "border" + re[o] + "Width", !0, i)));
            return (
              !s &&
                r >= 0 &&
                (l +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        r -
                        l -
                        a -
                        0.5
                    )
                  ) || 0),
              l
            );
          }
          function nt(e, t, n) {
            var s = Be(e),
              i =
                (!m.boxSizingReliable() || n) &&
                "border-box" === E.css(e, "boxSizing", !1, s),
              r = i,
              o = We(e, t, s),
              a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (ze.test(o)) {
              if (!n) return o;
              o = "auto";
            }
            return (
              ((!m.boxSizingReliable() && i) ||
                (!m.reliableTrDimensions() && O(e, "tr")) ||
                "auto" === o ||
                (!parseFloat(o) && "inline" === E.css(e, "display", !1, s))) &&
                e.getClientRects().length &&
                ((i = "border-box" === E.css(e, "boxSizing", !1, s)),
                (r = a in e) && (o = e[a])),
              (o = parseFloat(o) || 0) +
                tt(e, t, n || (i ? "border" : "content"), r, s, o) +
                "px"
            );
          }
          function st(e, t, n, s, i) {
            return new st.prototype.init(e, t, n, s, i);
          }
          E.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = We(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, s) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                  r,
                  o,
                  a = Y(t),
                  l = Je.test(t),
                  c = e.style;
                if (
                  (l || (t = Ye(a)),
                  (o = E.cssHooks[t] || E.cssHooks[a]),
                  void 0 === n)
                )
                  return o && "get" in o && void 0 !== (i = o.get(e, !1, s))
                    ? i
                    : c[t];
                "string" === (r = typeof n) &&
                  (i = ie.exec(n)) &&
                  i[1] &&
                  ((n = de(e, t, i)), (r = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== r ||
                      l ||
                      (n += (i && i[3]) || (E.cssNumber[a] ? "" : "px")),
                    m.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (c[t] = "inherit"),
                    (o && "set" in o && void 0 === (n = o.set(e, n, s))) ||
                      (l ? c.setProperty(t, n) : (c[t] = n)));
              }
            },
            css: function (e, t, n, s) {
              var i,
                r,
                o,
                a = Y(t);
              return (
                Je.test(t) || (t = Ye(a)),
                (o = E.cssHooks[t] || E.cssHooks[a]) &&
                  "get" in o &&
                  (i = o.get(e, !0, n)),
                void 0 === i && (i = We(e, t, s)),
                "normal" === i && t in Ze && (i = Ze[t]),
                "" === n || n
                  ? ((r = parseFloat(i)), !0 === n || isFinite(r) ? r || 0 : i)
                  : i
              );
            },
          }),
            E.each(["height", "width"], function (e, t) {
              E.cssHooks[t] = {
                get: function (e, n, s) {
                  if (n)
                    return !Qe.test(E.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? nt(e, t, s)
                      : Re(e, Ke, function () {
                          return nt(e, t, s);
                        });
                },
                set: function (e, n, s) {
                  var i,
                    r = Be(e),
                    o = !m.scrollboxSize() && "absolute" === r.position,
                    a =
                      (o || s) && "border-box" === E.css(e, "boxSizing", !1, r),
                    l = s ? tt(e, t, s, a, r) : 0;
                  return (
                    a &&
                      o &&
                      (l -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(r[t]) -
                          tt(e, t, "border", !1, r) -
                          0.5
                      )),
                    l &&
                      (i = ie.exec(n)) &&
                      "px" !== (i[3] || "px") &&
                      ((e.style[t] = n), (n = E.css(e, t))),
                    et(0, n, l)
                  );
                },
              };
            }),
            (E.cssHooks.marginLeft = Ge(m.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(We(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Re(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            E.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (E.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var s = 0,
                        i = {},
                        r = "string" == typeof n ? n.split(" ") : [n];
                      s < 4;
                      s++
                    )
                      i[e + re[s] + t] = r[s] || r[s - 2] || r[0];
                    return i;
                  },
                }),
                  "margin" !== e && (E.cssHooks[e + t].set = et);
              }
            ),
            E.fn.extend({
              css: function (e, t) {
                return G(
                  this,
                  function (e, t, n) {
                    var s,
                      i,
                      r = {},
                      o = 0;
                    if (Array.isArray(t)) {
                      for (s = Be(e), i = t.length; o < i; o++)
                        r[t[o]] = E.css(e, t[o], !1, s);
                      return r;
                    }
                    return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (E.Tween = st),
            (st.prototype = {
              constructor: st,
              init: function (e, t, n, s, i, r) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = i || E.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = s),
                  (this.unit = r || (E.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = st.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : st.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = st.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        E.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : st.propHooks._default.set(this),
                  this
                );
              },
            }),
            (st.prototype.init.prototype = st.prototype),
            (st.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = E.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  E.fx.step[e.prop]
                    ? E.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!E.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : E.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (st.propHooks.scrollTop = st.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (E.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (E.fx = st.prototype.init),
            (E.fx.step = {});
          var it,
            rt,
            ot = /^(?:toggle|show|hide)$/,
            at = /queueHooks$/;
          function lt() {
            rt &&
              (!1 === b.hidden && s.requestAnimationFrame
                ? s.requestAnimationFrame(lt)
                : s.setTimeout(lt, E.fx.interval),
              E.fx.tick());
          }
          function ct() {
            return (
              s.setTimeout(function () {
                it = void 0;
              }),
              (it = Date.now())
            );
          }
          function dt(e, t) {
            var n,
              s = 0,
              i = { height: e };
            for (t = t ? 1 : 0; s < 4; s += 2 - t)
              i["margin" + (n = re[s])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i;
          }
          function ut(e, t, n) {
            for (
              var s,
                i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
                r = 0,
                o = i.length;
              r < o;
              r++
            )
              if ((s = i[r].call(n, t, e))) return s;
          }
          function pt(e, t, n) {
            var s,
              i,
              r = 0,
              o = pt.prefilters.length,
              a = E.Deferred().always(function () {
                delete l.elem;
              }),
              l = function () {
                if (i) return !1;
                for (
                  var t = it || ct(),
                    n = Math.max(0, c.startTime + c.duration - t),
                    s = 1 - (n / c.duration || 0),
                    r = 0,
                    o = c.tweens.length;
                  r < o;
                  r++
                )
                  c.tweens[r].run(s);
                return (
                  a.notifyWith(e, [c, s, n]),
                  s < 1 && o
                    ? n
                    : (o || a.notifyWith(e, [c, 1, 0]),
                      a.resolveWith(e, [c]),
                      !1)
                );
              },
              c = a.promise({
                elem: e,
                props: E.extend({}, t),
                opts: E.extend(
                  !0,
                  { specialEasing: {}, easing: E.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: it || ct(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var s = E.Tween(
                    e,
                    c.opts,
                    t,
                    n,
                    c.opts.specialEasing[t] || c.opts.easing
                  );
                  return c.tweens.push(s), s;
                },
                stop: function (t) {
                  var n = 0,
                    s = t ? c.tweens.length : 0;
                  if (i) return this;
                  for (i = !0; n < s; n++) c.tweens[n].run(1);
                  return (
                    t
                      ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                      : a.rejectWith(e, [c, t]),
                    this
                  );
                },
              }),
              d = c.props;
            for (
              !(function (e, t) {
                var n, s, i, r, o;
                for (n in e)
                  if (
                    ((i = t[(s = Y(n))]),
                    (r = e[n]),
                    Array.isArray(r) && ((i = r[1]), (r = e[n] = r[0])),
                    n !== s && ((e[s] = r), delete e[n]),
                    (o = E.cssHooks[s]) && ("expand" in o))
                  )
                    for (n in ((r = o.expand(r)), delete e[s], r))
                      (n in e) || ((e[n] = r[n]), (t[n] = i));
                  else t[s] = i;
              })(d, c.opts.specialEasing);
              r < o;
              r++
            )
              if ((s = pt.prefilters[r].call(c, e, d, c.opts)))
                return (
                  v(s.stop) &&
                    (E._queueHooks(c.elem, c.opts.queue).stop = s.stop.bind(s)),
                  s
                );
            return (
              E.map(d, ut, c),
              v(c.opts.start) && c.opts.start.call(e, c),
              c
                .progress(c.opts.progress)
                .done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail)
                .always(c.opts.always),
              E.fx.timer(
                E.extend(l, { elem: e, anim: c, queue: c.opts.queue })
              ),
              c
            );
          }
          (E.Animation = E.extend(pt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return de(n.elem, e, ie.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              v(e) ? ((t = e), (e = ["*"])) : (e = e.match(q));
              for (var n, s = 0, i = e.length; s < i; s++)
                (n = e[s]),
                  (pt.tweeners[n] = pt.tweeners[n] || []),
                  pt.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var s,
                  i,
                  r,
                  o,
                  a,
                  l,
                  c,
                  d,
                  u = "width" in t || "height" in t,
                  p = this,
                  h = {},
                  f = e.style,
                  g = e.nodeType && ce(e),
                  m = K.get(e, "fxshow");
                for (s in (n.queue ||
                  (null == (o = E._queueHooks(e, "fx")).unqueued &&
                    ((o.unqueued = 0),
                    (a = o.empty.fire),
                    (o.empty.fire = function () {
                      o.unqueued || a();
                    })),
                  o.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      o.unqueued--, E.queue(e, "fx").length || o.empty.fire();
                    });
                  })),
                t))
                  if (((i = t[s]), ot.test(i))) {
                    if (
                      (delete t[s],
                      (r = r || "toggle" === i),
                      i === (g ? "hide" : "show"))
                    ) {
                      if ("show" !== i || !m || void 0 === m[s]) continue;
                      g = !0;
                    }
                    h[s] = (m && m[s]) || E.style(e, s);
                  }
                if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(h))
                  for (s in (u &&
                    1 === e.nodeType &&
                    ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
                    null == (c = m && m.display) && (c = K.get(e, "display")),
                    "none" === (d = E.css(e, "display")) &&
                      (c
                        ? (d = c)
                        : (he([e], !0),
                          (c = e.style.display || c),
                          (d = E.css(e, "display")),
                          he([e]))),
                    ("inline" === d || ("inline-block" === d && null != c)) &&
                      "none" === E.css(e, "float") &&
                      (l ||
                        (p.done(function () {
                          f.display = c;
                        }),
                        null == c &&
                          ((d = f.display), (c = "none" === d ? "" : d))),
                      (f.display = "inline-block"))),
                  n.overflow &&
                    ((f.overflow = "hidden"),
                    p.always(function () {
                      (f.overflow = n.overflow[0]),
                        (f.overflowX = n.overflow[1]),
                        (f.overflowY = n.overflow[2]);
                    })),
                  (l = !1),
                  h))
                    l ||
                      (m
                        ? "hidden" in m && (g = m.hidden)
                        : (m = K.access(e, "fxshow", { display: c })),
                      r && (m.hidden = !g),
                      g && he([e], !0),
                      p.done(function () {
                        for (s in (g || he([e]), K.remove(e, "fxshow"), h))
                          E.style(e, s, h[s]);
                      })),
                      (l = ut(g ? m[s] : 0, s, p)),
                      s in m ||
                        ((m[s] = l.start),
                        g && ((l.end = l.start), (l.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
            },
          })),
            (E.speed = function (e, t, n) {
              var s =
                e && "object" == typeof e
                  ? E.extend({}, e)
                  : {
                      complete: n || (!n && t) || (v(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !v(t) && t),
                    };
              return (
                E.fx.off
                  ? (s.duration = 0)
                  : "number" != typeof s.duration &&
                    (s.duration in E.fx.speeds
                      ? (s.duration = E.fx.speeds[s.duration])
                      : (s.duration = E.fx.speeds._default)),
                (null != s.queue && !0 !== s.queue) || (s.queue = "fx"),
                (s.old = s.complete),
                (s.complete = function () {
                  v(s.old) && s.old.call(this),
                    s.queue && E.dequeue(this, s.queue);
                }),
                s
              );
            }),
            E.fn.extend({
              fadeTo: function (e, t, n, s) {
                return this.filter(ce)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, s);
              },
              animate: function (e, t, n, s) {
                var i = E.isEmptyObject(e),
                  r = E.speed(t, n, s),
                  o = function () {
                    var t = pt(this, E.extend({}, e), r);
                    (i || K.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (o.finish = o),
                  i || !1 === r.queue ? this.each(o) : this.queue(r.queue, o)
                );
              },
              stop: function (e, t, n) {
                var s = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      i = null != e && e + "queueHooks",
                      r = E.timers,
                      o = K.get(this);
                    if (i) o[i] && o[i].stop && s(o[i]);
                    else
                      for (i in o) o[i] && o[i].stop && at.test(i) && s(o[i]);
                    for (i = r.length; i--; )
                      r[i].elem !== this ||
                        (null != e && r[i].queue !== e) ||
                        (r[i].anim.stop(n), (t = !1), r.splice(i, 1));
                    (!t && n) || E.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = K.get(this),
                      s = n[e + "queue"],
                      i = n[e + "queueHooks"],
                      r = E.timers,
                      o = s ? s.length : 0;
                    for (
                      n.finish = !0,
                        E.queue(this, e, []),
                        i && i.stop && i.stop.call(this, !0),
                        t = r.length;
                      t--;

                    )
                      r[t].elem === this &&
                        r[t].queue === e &&
                        (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; t < o; t++)
                      s[t] && s[t].finish && s[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            E.each(["toggle", "show", "hide"], function (e, t) {
              var n = E.fn[t];
              E.fn[t] = function (e, s, i) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(dt(t, !0), e, s, i);
              };
            }),
            E.each(
              {
                slideDown: dt("show"),
                slideUp: dt("hide"),
                slideToggle: dt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                E.fn[e] = function (e, n, s) {
                  return this.animate(t, e, n, s);
                };
              }
            ),
            (E.timers = []),
            (E.fx.tick = function () {
              var e,
                t = 0,
                n = E.timers;
              for (it = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || E.fx.stop(), (it = void 0);
            }),
            (E.fx.timer = function (e) {
              E.timers.push(e), E.fx.start();
            }),
            (E.fx.interval = 13),
            (E.fx.start = function () {
              rt || ((rt = !0), lt());
            }),
            (E.fx.stop = function () {
              rt = null;
            }),
            (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (E.fn.delay = function (e, t) {
              return (
                (e = (E.fx && E.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var i = s.setTimeout(t, e);
                  n.stop = function () {
                    s.clearTimeout(i);
                  };
                })
              );
            }),
            (function () {
              var e = b.createElement("input"),
                t = b
                  .createElement("select")
                  .appendChild(b.createElement("option"));
              (e.type = "checkbox"),
                (m.checkOn = "" !== e.value),
                (m.optSelected = t.selected),
                ((e = b.createElement("input")).value = "t"),
                (e.type = "radio"),
                (m.radioValue = "t" === e.value);
            })();
          var ht,
            ft = E.expr.attrHandle;
          E.fn.extend({
            attr: function (e, t) {
              return G(this, E.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                E.removeAttr(this, e);
              });
            },
          }),
            E.extend({
              attr: function (e, t, n) {
                var s,
                  i,
                  r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                  return void 0 === e.getAttribute
                    ? E.prop(e, t, n)
                    : ((1 === r && E.isXMLDoc(e)) ||
                        (i =
                          E.attrHooks[t.toLowerCase()] ||
                          (E.expr.match.bool.test(t) ? ht : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void E.removeAttr(e, t)
                          : i && "set" in i && void 0 !== (s = i.set(e, n, t))
                          ? s
                          : (e.setAttribute(t, n + ""), n)
                        : i && "get" in i && null !== (s = i.get(e, t))
                        ? s
                        : null == (s = E.find.attr(e, t))
                        ? void 0
                        : s);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!m.radioValue && "radio" === t && O(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  s = 0,
                  i = t && t.match(q);
                if (i && 1 === e.nodeType)
                  for (; (n = i[s++]); ) e.removeAttribute(n);
              },
            }),
            (ht = {
              set: function (e, t, n) {
                return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = ft[t] || E.find.attr;
              ft[t] = function (e, t, s) {
                var i,
                  r,
                  o = t.toLowerCase();
                return (
                  s ||
                    ((r = ft[o]),
                    (ft[o] = i),
                    (i = null != n(e, t, s) ? o : null),
                    (ft[o] = r)),
                  i
                );
              };
            });
          var gt = /^(?:input|select|textarea|button)$/i,
            mt = /^(?:a|area)$/i;
          function vt(e) {
            return (e.match(q) || []).join(" ");
          }
          function yt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function bt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(q)) || [];
          }
          E.fn.extend({
            prop: function (e, t) {
              return G(this, E.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[E.propFix[e] || e];
              });
            },
          }),
            E.extend({
              prop: function (e, t, n) {
                var s,
                  i,
                  r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                  return (
                    (1 === r && E.isXMLDoc(e)) ||
                      ((t = E.propFix[t] || t), (i = E.propHooks[t])),
                    void 0 !== n
                      ? i && "set" in i && void 0 !== (s = i.set(e, n, t))
                        ? s
                        : (e[t] = n)
                      : i && "get" in i && null !== (s = i.get(e, t))
                      ? s
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = E.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : gt.test(e.nodeName) || (mt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            m.optSelected ||
              (E.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            E.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                E.propFix[this.toLowerCase()] = this;
              }
            ),
            E.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  s,
                  i,
                  r,
                  o,
                  a,
                  l = 0;
                if (v(e))
                  return this.each(function (t) {
                    E(this).addClass(e.call(this, t, yt(this)));
                  });
                if ((t = bt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((i = yt(n)), (s = 1 === n.nodeType && " " + vt(i) + " "))
                    ) {
                      for (o = 0; (r = t[o++]); )
                        s.indexOf(" " + r + " ") < 0 && (s += r + " ");
                      i !== (a = vt(s)) && n.setAttribute("class", a);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  s,
                  i,
                  r,
                  o,
                  a,
                  l = 0;
                if (v(e))
                  return this.each(function (t) {
                    E(this).removeClass(e.call(this, t, yt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = bt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((i = yt(n)), (s = 1 === n.nodeType && " " + vt(i) + " "))
                    ) {
                      for (o = 0; (r = t[o++]); )
                        for (; s.indexOf(" " + r + " ") > -1; )
                          s = s.replace(" " + r + " ", " ");
                      i !== (a = vt(s)) && n.setAttribute("class", a);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = typeof e,
                  s = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && s
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : v(e)
                  ? this.each(function (n) {
                      E(this).toggleClass(e.call(this, n, yt(this), t), t);
                    })
                  : this.each(function () {
                      var t, i, r, o;
                      if (s)
                        for (i = 0, r = E(this), o = bt(e); (t = o[i++]); )
                          r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                      else
                        (void 0 !== e && "boolean" !== n) ||
                          ((t = yt(this)) && K.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : K.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  n,
                  s = 0;
                for (t = " " + e + " "; (n = this[s++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + vt(yt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var wt = /\r/g;
          E.fn.extend({
            val: function (e) {
              var t,
                n,
                s,
                i = this[0];
              return arguments.length
                ? ((s = v(e)),
                  this.each(function (n) {
                    var i;
                    1 === this.nodeType &&
                      (null == (i = s ? e.call(this, n, E(this).val()) : e)
                        ? (i = "")
                        : "number" == typeof i
                        ? (i += "")
                        : Array.isArray(i) &&
                          (i = E.map(i, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        E.valHooks[this.type] ||
                        E.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, i, "value")) ||
                        (this.value = i));
                  }))
                : i
                ? (t =
                    E.valHooks[i.type] ||
                    E.valHooks[i.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(i, "value"))
                  ? n
                  : "string" == typeof (n = i.value)
                  ? n.replace(wt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            E.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : vt(E.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      s,
                      i = e.options,
                      r = e.selectedIndex,
                      o = "select-one" === e.type,
                      a = o ? null : [],
                      l = o ? r + 1 : i.length;
                    for (s = r < 0 ? l : o ? r : 0; s < l; s++)
                      if (
                        ((n = i[s]).selected || s === r) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !O(n.parentNode, "optgroup"))
                      ) {
                        if (((t = E(n).val()), o)) return t;
                        a.push(t);
                      }
                    return a;
                  },
                  set: function (e, t) {
                    for (
                      var n, s, i = e.options, r = E.makeArray(t), o = i.length;
                      o--;

                    )
                      ((s = i[o]).selected =
                        E.inArray(E.valHooks.option.get(s), r) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), r;
                  },
                },
              },
            }),
            E.each(["radio", "checkbox"], function () {
              (E.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = E.inArray(E(e).val(), t) > -1);
                },
              }),
                m.checkOn ||
                  (E.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (m.focusin = "onfocusin" in s);
          var xt = /^(?:focusinfocus|focusoutblur)$/,
            St = function (e) {
              e.stopPropagation();
            };
          E.extend(E.event, {
            trigger: function (e, t, n, i) {
              var r,
                o,
                a,
                l,
                c,
                d,
                u,
                p,
                f = [n || b],
                g = h.call(e, "type") ? e.type : e,
                m = h.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((o = p = a = n = n || b),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !xt.test(g + E.event.triggered) &&
                  (g.indexOf(".") > -1 &&
                    ((m = g.split(".")), (g = m.shift()), m.sort()),
                  (c = g.indexOf(":") < 0 && "on" + g),
                  ((e = e[E.expando]
                    ? e
                    : new E.Event(g, "object" == typeof e && e)).isTrigger = i
                    ? 2
                    : 3),
                  (e.namespace = m.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : E.makeArray(t, [e])),
                  (u = E.event.special[g] || {}),
                  i || !u.trigger || !1 !== u.trigger.apply(n, t)))
              ) {
                if (!i && !u.noBubble && !y(n)) {
                  for (
                    l = u.delegateType || g,
                      xt.test(l + g) || (o = o.parentNode);
                    o;
                    o = o.parentNode
                  )
                    f.push(o), (a = o);
                  a === (n.ownerDocument || b) &&
                    f.push(a.defaultView || a.parentWindow || s);
                }
                for (r = 0; (o = f[r++]) && !e.isPropagationStopped(); )
                  (p = o),
                    (e.type = r > 1 ? l : u.bindType || g),
                    (d =
                      (K.get(o, "events") || Object.create(null))[e.type] &&
                      K.get(o, "handle")) && d.apply(o, t),
                    (d = c && o[c]) &&
                      d.apply &&
                      Q(o) &&
                      ((e.result = d.apply(o, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = g),
                  i ||
                    e.isDefaultPrevented() ||
                    (u._default && !1 !== u._default.apply(f.pop(), t)) ||
                    !Q(n) ||
                    (c &&
                      v(n[g]) &&
                      !y(n) &&
                      ((a = n[c]) && (n[c] = null),
                      (E.event.triggered = g),
                      e.isPropagationStopped() && p.addEventListener(g, St),
                      n[g](),
                      e.isPropagationStopped() && p.removeEventListener(g, St),
                      (E.event.triggered = void 0),
                      a && (n[c] = a))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var s = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });
              E.event.trigger(s, null, t);
            },
          }),
            E.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  E.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return E.event.trigger(e, t, n, !0);
              },
            }),
            m.focusin ||
              E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  E.event.simulate(t, e.target, E.event.fix(e));
                };
                E.event.special[t] = {
                  setup: function () {
                    var s = this.ownerDocument || this.document || this,
                      i = K.access(s, t);
                    i || s.addEventListener(e, n, !0),
                      K.access(s, t, (i || 0) + 1);
                  },
                  teardown: function () {
                    var s = this.ownerDocument || this.document || this,
                      i = K.access(s, t) - 1;
                    i
                      ? K.access(s, t, i)
                      : (s.removeEventListener(e, n, !0), K.remove(s, t));
                  },
                };
              });
          var Ct = s.location,
            Et = { guid: Date.now() },
            Tt = /\?/;
          E.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new s.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                E.error(
                  "Invalid XML: " +
                    (n
                      ? E.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e)
                ),
              t
            );
          };
          var kt = /\[\]$/,
            _t = /\r?\n/g,
            At = /^(?:submit|button|image|reset|file)$/i,
            Lt = /^(?:input|select|textarea|keygen)/i;
          function Ot(e, t, n, s) {
            var i;
            if (Array.isArray(t))
              E.each(t, function (t, i) {
                n || kt.test(e)
                  ? s(e, i)
                  : Ot(
                      e +
                        "[" +
                        ("object" == typeof i && null != i ? t : "") +
                        "]",
                      i,
                      n,
                      s
                    );
              });
            else if (n || "object" !== S(t)) s(e, t);
            else for (i in t) Ot(e + "[" + i + "]", t[i], n, s);
          }
          (E.param = function (e, t) {
            var n,
              s = [],
              i = function (e, t) {
                var n = v(t) ? t() : t;
                s[s.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
              E.each(e, function () {
                i(this.name, this.value);
              });
            else for (n in e) Ot(n, e[n], t, i);
            return s.join("&");
          }),
            E.fn.extend({
              serialize: function () {
                return E.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = E.prop(this, "elements");
                  return e ? E.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !E(this).is(":disabled") &&
                      Lt.test(this.nodeName) &&
                      !At.test(e) &&
                      (this.checked || !me.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = E(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? E.map(n, function (e) {
                          return { name: t.name, value: e.replace(_t, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(_t, "\r\n") };
                  })
                  .get();
              },
            });
          var Pt = /%20/g,
            $t = /#.*$/,
            Dt = /([?&])_=[^&]*/,
            Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Nt = /^(?:GET|HEAD)$/,
            It = /^\/\//,
            jt = {},
            qt = {},
            Ht = "*/".concat("*"),
            zt = b.createElement("a");
          function Bt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var s,
                i = 0,
                r = t.toLowerCase().match(q) || [];
              if (v(n))
                for (; (s = r[i++]); )
                  "+" === s[0]
                    ? ((s = s.slice(1) || "*"), (e[s] = e[s] || []).unshift(n))
                    : (e[s] = e[s] || []).push(n);
            };
          }
          function Rt(e, t, n, s) {
            var i = {},
              r = e === qt;
            function o(a) {
              var l;
              return (
                (i[a] = !0),
                E.each(e[a] || [], function (e, a) {
                  var c = a(t, n, s);
                  return "string" != typeof c || r || i[c]
                    ? r
                      ? !(l = c)
                      : void 0
                    : (t.dataTypes.unshift(c), o(c), !1);
                }),
                l
              );
            }
            return o(t.dataTypes[0]) || (!i["*"] && o("*"));
          }
          function Ft(e, t) {
            var n,
              s,
              i = E.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((i[n] ? e : s || (s = {}))[n] = t[n]);
            return s && E.extend(!0, e, s), e;
          }
          (zt.href = Ct.href),
            E.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Ct.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Ct.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Ht,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": E.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Ft(Ft(e, E.ajaxSettings), t) : Ft(E.ajaxSettings, e);
              },
              ajaxPrefilter: Bt(jt),
              ajaxTransport: Bt(qt),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  i,
                  r,
                  o,
                  a,
                  l,
                  c,
                  d,
                  u,
                  p,
                  h = E.ajaxSetup({}, t),
                  f = h.context || h,
                  g = h.context && (f.nodeType || f.jquery) ? E(f) : E.event,
                  m = E.Deferred(),
                  v = E.Callbacks("once memory"),
                  y = h.statusCode || {},
                  w = {},
                  x = {},
                  S = "canceled",
                  C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (c) {
                        if (!o)
                          for (o = {}; (t = Mt.exec(r)); )
                            o[t[1].toLowerCase() + " "] = (
                              o[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = o[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return c ? r : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == c &&
                          ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                          (w[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == c && (h.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (c) C.always(e[C.status]);
                        else for (t in e) y[t] = [y[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || S;
                      return n && n.abort(t), T(0, t), this;
                    },
                  };
                if (
                  (m.promise(C),
                  (h.url = ((e || h.url || Ct.href) + "").replace(
                    It,
                    Ct.protocol + "//"
                  )),
                  (h.type = t.method || t.type || h.method || h.type),
                  (h.dataTypes = (h.dataType || "*").toLowerCase().match(q) || [
                    "",
                  ]),
                  null == h.crossDomain)
                ) {
                  l = b.createElement("a");
                  try {
                    (l.href = h.url),
                      (l.href = l.href),
                      (h.crossDomain =
                        zt.protocol + "//" + zt.host !=
                        l.protocol + "//" + l.host);
                  } catch (e) {
                    h.crossDomain = !0;
                  }
                }
                if (
                  (h.data &&
                    h.processData &&
                    "string" != typeof h.data &&
                    (h.data = E.param(h.data, h.traditional)),
                  Rt(jt, h, t, C),
                  c)
                )
                  return C;
                for (u in ((d = E.event && h.global) &&
                  0 == E.active++ &&
                  E.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !Nt.test(h.type)),
                (i = h.url.replace($t, "")),
                h.hasContent
                  ? h.data &&
                    h.processData &&
                    0 ===
                      (h.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (h.data = h.data.replace(Pt, "+"))
                  : ((p = h.url.slice(i.length)),
                    h.data &&
                      (h.processData || "string" == typeof h.data) &&
                      ((i += (Tt.test(i) ? "&" : "?") + h.data), delete h.data),
                    !1 === h.cache &&
                      ((i = i.replace(Dt, "$1")),
                      (p = (Tt.test(i) ? "&" : "?") + "_=" + Et.guid++ + p)),
                    (h.url = i + p)),
                h.ifModified &&
                  (E.lastModified[i] &&
                    C.setRequestHeader("If-Modified-Since", E.lastModified[i]),
                  E.etag[i] && C.setRequestHeader("If-None-Match", E.etag[i])),
                ((h.data && h.hasContent && !1 !== h.contentType) ||
                  t.contentType) &&
                  C.setRequestHeader("Content-Type", h.contentType),
                C.setRequestHeader(
                  "Accept",
                  h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                    ? h.accepts[h.dataTypes[0]] +
                        ("*" !== h.dataTypes[0] ? ", " + Ht + "; q=0.01" : "")
                    : h.accepts["*"]
                ),
                h.headers))
                  C.setRequestHeader(u, h.headers[u]);
                if (h.beforeSend && (!1 === h.beforeSend.call(f, C, h) || c))
                  return C.abort();
                if (
                  ((S = "abort"),
                  v.add(h.complete),
                  C.done(h.success),
                  C.fail(h.error),
                  (n = Rt(qt, h, t, C)))
                ) {
                  if (
                    ((C.readyState = 1), d && g.trigger("ajaxSend", [C, h]), c)
                  )
                    return C;
                  h.async &&
                    h.timeout > 0 &&
                    (a = s.setTimeout(function () {
                      C.abort("timeout");
                    }, h.timeout));
                  try {
                    (c = !1), n.send(w, T);
                  } catch (e) {
                    if (c) throw e;
                    T(-1, e);
                  }
                } else T(-1, "No Transport");
                function T(e, t, o, l) {
                  var u,
                    p,
                    b,
                    w,
                    x,
                    S = t;
                  c ||
                    ((c = !0),
                    a && s.clearTimeout(a),
                    (n = void 0),
                    (r = l || ""),
                    (C.readyState = e > 0 ? 4 : 0),
                    (u = (e >= 200 && e < 300) || 304 === e),
                    o &&
                      (w = (function (e, t, n) {
                        for (
                          var s, i, r, o, a = e.contents, l = e.dataTypes;
                          "*" === l[0];

                        )
                          l.shift(),
                            void 0 === s &&
                              (s =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (s)
                          for (i in a)
                            if (a[i] && a[i].test(s)) {
                              l.unshift(i);
                              break;
                            }
                        if (l[0] in n) r = l[0];
                        else {
                          for (i in n) {
                            if (!l[0] || e.converters[i + " " + l[0]]) {
                              r = i;
                              break;
                            }
                            o || (o = i);
                          }
                          r = r || o;
                        }
                        if (r) return r !== l[0] && l.unshift(r), n[r];
                      })(h, C, o)),
                    !u &&
                      E.inArray("script", h.dataTypes) > -1 &&
                      E.inArray("json", h.dataTypes) < 0 &&
                      (h.converters["text script"] = function () {}),
                    (w = (function (e, t, n, s) {
                      var i,
                        r,
                        o,
                        a,
                        l,
                        c = {},
                        d = e.dataTypes.slice();
                      if (d[1])
                        for (o in e.converters)
                          c[o.toLowerCase()] = e.converters[o];
                      for (r = d.shift(); r; )
                        if (
                          (e.responseFields[r] && (n[e.responseFields[r]] = t),
                          !l &&
                            s &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (l = r),
                          (r = d.shift()))
                        )
                          if ("*" === r) r = l;
                          else if ("*" !== l && l !== r) {
                            if (!(o = c[l + " " + r] || c["* " + r]))
                              for (i in c)
                                if (
                                  (a = i.split(" "))[1] === r &&
                                  (o = c[l + " " + a[0]] || c["* " + a[0]])
                                ) {
                                  !0 === o
                                    ? (o = c[i])
                                    : !0 !== c[i] &&
                                      ((r = a[0]), d.unshift(a[1]));
                                  break;
                                }
                            if (!0 !== o)
                              if (o && e.throws) t = o(t);
                              else
                                try {
                                  t = o(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: o
                                      ? e
                                      : "No conversion from " + l + " to " + r,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(h, w, C, u)),
                    u
                      ? (h.ifModified &&
                          ((x = C.getResponseHeader("Last-Modified")) &&
                            (E.lastModified[i] = x),
                          (x = C.getResponseHeader("etag")) && (E.etag[i] = x)),
                        204 === e || "HEAD" === h.type
                          ? (S = "nocontent")
                          : 304 === e
                          ? (S = "notmodified")
                          : ((S = w.state), (p = w.data), (u = !(b = w.error))))
                      : ((b = S),
                        (!e && S) || ((S = "error"), e < 0 && (e = 0))),
                    (C.status = e),
                    (C.statusText = (t || S) + ""),
                    u
                      ? m.resolveWith(f, [p, S, C])
                      : m.rejectWith(f, [C, S, b]),
                    C.statusCode(y),
                    (y = void 0),
                    d &&
                      g.trigger(u ? "ajaxSuccess" : "ajaxError", [
                        C,
                        h,
                        u ? p : b,
                      ]),
                    v.fireWith(f, [C, S]),
                    d &&
                      (g.trigger("ajaxComplete", [C, h]),
                      --E.active || E.event.trigger("ajaxStop")));
                }
                return C;
              },
              getJSON: function (e, t, n) {
                return E.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return E.get(e, void 0, t, "script");
              },
            }),
            E.each(["get", "post"], function (e, t) {
              E[t] = function (e, n, s, i) {
                return (
                  v(n) && ((i = i || s), (s = n), (n = void 0)),
                  E.ajax(
                    E.extend(
                      { url: e, type: t, dataType: i, data: n, success: s },
                      E.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            E.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (E._evalUrl = function (e, t, n) {
              return E.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  E.globalEval(e, t, n);
                },
              });
            }),
            E.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (v(e) && (e = e.call(this[0])),
                    (t = E(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return v(e)
                  ? this.each(function (t) {
                      E(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = E(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = v(e);
                return this.each(function (n) {
                  E(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      E(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (E.expr.pseudos.hidden = function (e) {
              return !E.expr.pseudos.visible(e);
            }),
            (E.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (E.ajaxSettings.xhr = function () {
              try {
                return new s.XMLHttpRequest();
              } catch (e) {}
            });
          var Wt = { 0: 200, 1223: 204 },
            Gt = E.ajaxSettings.xhr();
          (m.cors = !!Gt && "withCredentials" in Gt),
            (m.ajax = Gt = !!Gt),
            E.ajaxTransport(function (e) {
              var t, n;
              if (m.cors || (Gt && !e.crossDomain))
                return {
                  send: function (i, r) {
                    var o,
                      a = e.xhr();
                    if (
                      (a.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (o in e.xhrFields) a[o] = e.xhrFields[o];
                    for (o in (e.mimeType &&
                      a.overrideMimeType &&
                      a.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      i["X-Requested-With"] ||
                      (i["X-Requested-With"] = "XMLHttpRequest"),
                    i))
                      a.setRequestHeader(o, i[o]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            a.onload =
                            a.onerror =
                            a.onabort =
                            a.ontimeout =
                            a.onreadystatechange =
                              null),
                          "abort" === e
                            ? a.abort()
                            : "error" === e
                            ? "number" != typeof a.status
                              ? r(0, "error")
                              : r(a.status, a.statusText)
                            : r(
                                Wt[a.status] || a.status,
                                a.statusText,
                                "text" !== (a.responseType || "text") ||
                                  "string" != typeof a.responseText
                                  ? { binary: a.response }
                                  : { text: a.responseText },
                                a.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (a.onload = t()),
                      (n = a.onerror = a.ontimeout = t("error")),
                      void 0 !== a.onabort
                        ? (a.onabort = n)
                        : (a.onreadystatechange = function () {
                            4 === a.readyState &&
                              s.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      a.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            E.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            E.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return E.globalEval(e), e;
                },
              },
            }),
            E.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            E.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (s, i) {
                    (t = E("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && i("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      b.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Vt,
            Xt = [],
            Ut = /(=)\?(?=&|$)|\?\?/;
          E.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Xt.pop() || E.expando + "_" + Et.guid++;
              return (this[e] = !0), e;
            },
          }),
            E.ajaxPrefilter("json jsonp", function (e, t, n) {
              var i,
                r,
                o,
                a =
                  !1 !== e.jsonp &&
                  (Ut.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Ut.test(e.data) &&
                      "data");
              if (a || "jsonp" === e.dataTypes[0])
                return (
                  (i = e.jsonpCallback =
                    v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  a
                    ? (e[a] = e[a].replace(Ut, "$1" + i))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                  (e.converters["script json"] = function () {
                    return o || E.error(i + " was not called"), o[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (r = s[i]),
                  (s[i] = function () {
                    o = arguments;
                  }),
                  n.always(function () {
                    void 0 === r ? E(s).removeProp(i) : (s[i] = r),
                      e[i] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(i)),
                      o && v(r) && r(o[0]),
                      (o = r = void 0);
                  }),
                  "script"
                );
            }),
            (m.createHTMLDocument =
              (((Vt = b.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Vt.childNodes.length)),
            (E.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (m.createHTMLDocument
                      ? (((s = (t =
                          b.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = b.location.href),
                        t.head.appendChild(s))
                      : (t = b)),
                  (r = !n && []),
                  (i = P.exec(e))
                    ? [t.createElement(i[1])]
                    : ((i = Ce([e], t, r)),
                      r && r.length && E(r).remove(),
                      E.merge([], i.childNodes)));
              var s, i, r;
            }),
            (E.fn.load = function (e, t, n) {
              var s,
                i,
                r,
                o = this,
                a = e.indexOf(" ");
              return (
                a > -1 && ((s = vt(e.slice(a))), (e = e.slice(0, a))),
                v(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (i = "POST"),
                o.length > 0 &&
                  E.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (r = arguments),
                        o.html(
                          s ? E("<div>").append(E.parseHTML(e)).find(s) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          o.each(function () {
                            n.apply(this, r || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (E.expr.pseudos.animated = function (e) {
              return E.grep(E.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (E.offset = {
              setOffset: function (e, t, n) {
                var s,
                  i,
                  r,
                  o,
                  a,
                  l,
                  c = E.css(e, "position"),
                  d = E(e),
                  u = {};
                "static" === c && (e.style.position = "relative"),
                  (a = d.offset()),
                  (r = E.css(e, "top")),
                  (l = E.css(e, "left")),
                  ("absolute" === c || "fixed" === c) &&
                  (r + l).indexOf("auto") > -1
                    ? ((o = (s = d.position()).top), (i = s.left))
                    : ((o = parseFloat(r) || 0), (i = parseFloat(l) || 0)),
                  v(t) && (t = t.call(e, n, E.extend({}, a))),
                  null != t.top && (u.top = t.top - a.top + o),
                  null != t.left && (u.left = t.left - a.left + i),
                  "using" in t ? t.using.call(e, u) : d.css(u);
              },
            }),
            E.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        E.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  s = this[0];
                return s
                  ? s.getClientRects().length
                    ? ((t = s.getBoundingClientRect()),
                      (n = s.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    s = this[0],
                    i = { top: 0, left: 0 };
                  if ("fixed" === E.css(s, "position"))
                    t = s.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = s.ownerDocument,
                        e = s.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === E.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== s &&
                      1 === e.nodeType &&
                      (((i = E(e).offset()).top += E.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (i.left += E.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - i.top - E.css(s, "marginTop", !0),
                    left: t.left - i.left - E.css(s, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === E.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || oe;
                });
              },
            }),
            E.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                E.fn[e] = function (s) {
                  return G(
                    this,
                    function (e, s, i) {
                      var r;
                      if (
                        (y(e)
                          ? (r = e)
                          : 9 === e.nodeType && (r = e.defaultView),
                        void 0 === i)
                      )
                        return r ? r[t] : e[s];
                      r
                        ? r.scrollTo(
                            n ? r.pageXOffset : i,
                            n ? i : r.pageYOffset
                          )
                        : (e[s] = i);
                    },
                    e,
                    s,
                    arguments.length
                  );
                };
              }
            ),
            E.each(["top", "left"], function (e, t) {
              E.cssHooks[t] = Ge(m.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = We(e, t)), ze.test(n) ? E(e).position()[t] + "px" : n
                  );
              });
            }),
            E.each({ Height: "height", Width: "width" }, function (e, t) {
              E.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, s) {
                  E.fn[s] = function (i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                      a = n || (!0 === i || !0 === r ? "margin" : "border");
                    return G(
                      this,
                      function (t, n, i) {
                        var r;
                        return y(t)
                          ? 0 === s.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((r = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              r["scroll" + e],
                              t.body["offset" + e],
                              r["offset" + e],
                              r["client" + e]
                            ))
                          : void 0 === i
                          ? E.css(t, n, a)
                          : E.style(t, n, i, a);
                      },
                      t,
                      o ? i : void 0,
                      o
                    );
                  };
                }
              );
            }),
            E.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                E.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            E.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, s) {
                return this.on(t, e, n, s);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            E.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                E.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (E.proxy = function (e, t) {
            var n, s, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
              return (
                (s = a.call(arguments, 2)),
                (i = function () {
                  return e.apply(t || this, s.concat(a.call(arguments)));
                }),
                (i.guid = e.guid = e.guid || E.guid++),
                i
              );
          }),
            (E.holdReady = function (e) {
              e ? E.readyWait++ : E.ready(!0);
            }),
            (E.isArray = Array.isArray),
            (E.parseJSON = JSON.parse),
            (E.nodeName = O),
            (E.isFunction = v),
            (E.isWindow = y),
            (E.camelCase = Y),
            (E.type = S),
            (E.now = Date.now),
            (E.isNumeric = function (e) {
              var t = E.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (E.trim = function (e) {
              return null == e ? "" : (e + "").replace(Yt, "");
            }),
            void 0 ===
              (n = function () {
                return E;
              }.apply(t, [])) || (e.exports = n);
          var Qt = s.jQuery,
            Jt = s.$;
          return (
            (E.noConflict = function (e) {
              return (
                s.$ === E && (s.$ = Jt),
                e && s.jQuery === E && (s.jQuery = Qt),
                E
              );
            }),
            void 0 === i && (s.jQuery = s.$ = E),
            E
          );
        });
      },
      547: (e, t, n) => {
        "use strict";
        var s, i, r;
        function o(e, t) {
          for (var n = 0; n < t.length; n++) {
            var s = t[n];
            (s.enumerable = s.enumerable || !1),
              (s.configurable = !0),
              "value" in s && (s.writable = !0),
              Object.defineProperty(e, s.key, s);
          }
        }
        function a(e) {
          return (
            (a =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            a(e)
          );
        }
        (i = [n(755)]),
          (s = function (e) {
            var t = {
                selected: 0,
                theme: "default",
                justified: !0,
                darkMode: !1,
                autoAdjustHeight: !0,
                cycleSteps: !1,
                backButtonSupport: !0,
                enableURLhash: !0,
                transition: { animation: "none", speed: "400", easing: "" },
                toolbarSettings: {
                  toolbarPosition: "bottom",
                  toolbarButtonPosition: "right",
                  showNextButton: !0,
                  showPreviousButton: !0,
                  toolbarExtraButtons: [],
                },
                anchorSettings: {
                  anchorClickable: !0,
                  enableAllAnchors: !1,
                  markDoneStep: !0,
                  markAllPreviousStepsAsDone: !0,
                  removeDoneStepOnNavigateBack: !1,
                  enableAnchorOnDoneStep: !0,
                },
                keyboardSettings: {
                  keyNavigation: !0,
                  keyLeft: [37],
                  keyRight: [39],
                },
                lang: { next: "Next", previous: "Previous" },
                disabledSteps: [],
                errorSteps: [],
                hiddenSteps: [],
              },
              n = (function () {
                function n(s, i) {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, n),
                    (this.options = e.extend(!0, {}, t, i)),
                    (this.main = e(s)),
                    (this.nav = this._getFirstDescendant(".nav")),
                    (this.steps = this.nav.find(".nav-link")),
                    (this.container = this._getFirstDescendant(".tab-content")),
                    (this.pages = this.container.children(".tab-pane")),
                    this._initOptions(),
                    this._initLoad();
                }
                var s, i, r;
                return (
                  (s = n),
                  (i = [
                    {
                      key: "_initLoad",
                      value: function () {
                        this.pages.hide(),
                          this.steps.removeClass("done active"),
                          (this.current_index = null);
                        var e = this._getStepIndex();
                        this._setPreviousStepsDone(e), this._showStep(e);
                      },
                    },
                    {
                      key: "_initOptions",
                      value: function () {
                        this._setElements(),
                          this._setToolbar(),
                          this._setEvents();
                      },
                    },
                    {
                      key: "_getFirstDescendant",
                      value: function (t) {
                        var n = this.main.children(t);
                        return n.length > 0
                          ? n
                          : (this.main.children().each(function (s, i) {
                              var r = e(i).children(t);
                              if (r.length > 0) return (n = r), !1;
                            }),
                            n.length > 0
                              ? n
                              : (this._showError("Element not found " + t),
                                !1));
                      },
                    },
                    {
                      key: "_setElements",
                      value: function () {
                        this.main.addClass("sw"),
                          this._setTheme(this.options.theme),
                          this._setJustify(this.options.justified),
                          this._setDarkMode(this.options.darkMode),
                          (!0 ===
                            this.options.anchorSettings.enableAllAnchors &&
                            !0 ===
                              this.options.anchorSettings.anchorClickable) ||
                            this.steps.addClass("inactive"),
                          this._setCSSClass(
                            this.options.disabledSteps,
                            "disabled"
                          ),
                          this._setCSSClass(this.options.errorSteps, "danger"),
                          this._setCSSClass(this.options.hiddenSteps, "hidden");
                      },
                    },
                    {
                      key: "_setEvents",
                      value: function () {
                        var t = this;
                        if (this.main.data("click-init")) return !0;
                        this.main.data("click-init", !0),
                          e(this.steps).on("click", function (e) {
                            if (
                              (e.preventDefault(),
                              !1 === t.options.anchorSettings.anchorClickable)
                            )
                              return !0;
                            var n = t.steps.index(e.currentTarget);
                            return (
                              n === t.current_index ||
                              !(
                                !1 !==
                                  t.options.anchorSettings
                                    .enableAnchorOnDoneStep || !t._isDone(n)
                              ) ||
                              void (
                                (!1 !==
                                  t.options.anchorSettings.enableAllAnchors ||
                                  t._isDone(n)) &&
                                t._showStep(n)
                              )
                            );
                          }),
                          this.main
                            .find(".sw-btn-next")
                            .on("click", function (e) {
                              e.preventDefault(), t._showNext();
                            }),
                          this.main
                            .find(".sw-btn-prev")
                            .on("click", function (e) {
                              e.preventDefault(), t._showPrevious();
                            }),
                          this.options.keyboardSettings.keyNavigation &&
                            e(document).keyup(function (e) {
                              t._keyNav(e);
                            }),
                          this.options.backButtonSupport &&
                            e(window).on("hashchange", function (e) {
                              var n = t._getURLHashIndex();
                              !1 !== n && (e.preventDefault(), t._showStep(n));
                            });
                      },
                    },
                    {
                      key: "_setToolbar",
                      value: function () {
                        if (
                          "none" ===
                          this.options.toolbarSettings.toolbarPosition
                        )
                          return !0;
                        switch (this.options.toolbarSettings.toolbarPosition) {
                          case "top":
                            this.container.before(this._createToolbar("top"));
                            break;
                          case "bottom":
                          default:
                            this.container.after(this._createToolbar("bottom"));
                            break;
                          case "both":
                            this.container.before(this._createToolbar("top")),
                              this.container.after(
                                this._createToolbar("bottom")
                              );
                        }
                      },
                    },
                    {
                      key: "_createToolbar",
                      value: function (t) {
                        if (this.main.find(".toolbar-" + t).length > 0)
                          return null;
                        var n = e("<div></div>")
                            .addClass("toolbar toolbar-" + t)
                            .attr("role", "toolbar"),
                          s =
                            !1 !== this.options.toolbarSettings.showNextButton
                              ? e("<button></button>")
                                  .text(this.options.lang.next)
                                  .addClass("btn sw-btn-next")
                                  .attr("type", "button")
                              : null,
                          i =
                            !1 !==
                            this.options.toolbarSettings.showPreviousButton
                              ? e("<button></button>")
                                  .text(this.options.lang.previous)
                                  .addClass("btn sw-btn-prev")
                                  .attr("type", "button")
                              : null;
                        return (
                          n.append(i, s),
                          this.options.toolbarSettings.toolbarExtraButtons &&
                            this.options.toolbarSettings.toolbarExtraButtons
                              .length > 0 &&
                            e.each(
                              this.options.toolbarSettings.toolbarExtraButtons,
                              function (e, t) {
                                n.append(t.clone(!0));
                              }
                            ),
                          n.css(
                            "text-align",
                            this.options.toolbarSettings.toolbarButtonPosition
                          ),
                          n
                        );
                      },
                    },
                    {
                      key: "_showNext",
                      value: function () {
                        var e = this._getNextShowable(this.current_index);
                        if (!1 === e) return !1;
                        this._showStep(e);
                      },
                    },
                    {
                      key: "_showPrevious",
                      value: function () {
                        var e = this._getPreviousShowable(this.current_index);
                        if (!1 === e) return !1;
                        this._showStep(e);
                      },
                    },
                    {
                      key: "_showStep",
                      value: function (e) {
                        return (
                          e != this.current_index &&
                          !!this.steps.eq(e) &&
                          !!this._isShowable(e) &&
                          void this._loadStep(e)
                        );
                      },
                    },
                    {
                      key: "_getNextShowable",
                      value: function (e) {
                        for (var t = !1, n = e + 1; n < this.steps.length; n++)
                          if (this._isShowable(n)) {
                            t = n;
                            break;
                          }
                        if (!1 !== t && this.steps.length <= t) {
                          if (!this.options.cycleSteps) return !1;
                          t = 0;
                        }
                        return t;
                      },
                    },
                    {
                      key: "_getPreviousShowable",
                      value: function (e) {
                        for (var t = !1, n = e - 1; n >= 0; n--)
                          if (this._isShowable(n)) {
                            t = n;
                            break;
                          }
                        if (!1 !== t && 0 > t) {
                          if (!this.options.cycleSteps) return !1;
                          t = this.steps.length - 1;
                        }
                        return t;
                      },
                    },
                    {
                      key: "_isShowable",
                      value: function (e) {
                        var t = this.steps.eq(e);
                        return !t.hasClass("disabled") && !t.hasClass("hidden");
                      },
                    },
                    {
                      key: "_isDone",
                      value: function (e) {
                        return !!this.steps.eq(e).hasClass("done");
                      },
                    },
                    {
                      key: "_setPreviousStepsDone",
                      value: function (e) {
                        if (
                          e > 0 &&
                          this.options.anchorSettings.markDoneStep &&
                          this.options.anchorSettings.markAllPreviousStepsAsDone
                        )
                          for (var t = e; t >= 0; t--)
                            this._setCSSClass(t, "done");
                      },
                    },
                    {
                      key: "_setCSSClass",
                      value: function (t, n) {
                        var s = this;
                        if (null === t) return !1;
                        (e.isArray(t) ? t : [t]).map(function (e) {
                          s.steps.eq(e).addClass(n);
                        });
                      },
                    },
                    {
                      key: "_resetCSSClass",
                      value: function (t, n) {
                        var s = this;
                        (e.isArray(t) ? t : [t]).map(function (e) {
                          s.steps.eq(e).removeClass(n);
                        });
                      },
                    },
                    {
                      key: "_getStepDirection",
                      value: function (e) {
                        return null == this.current_index
                          ? ""
                          : this.current_index < e
                          ? "forward"
                          : "backward";
                      },
                    },
                    {
                      key: "_getStepPosition",
                      value: function (e) {
                        var t = "middle";
                        return (
                          0 === e
                            ? (t = "first")
                            : e === this.steps.length - 1 && (t = "last"),
                          t
                        );
                      },
                    },
                    {
                      key: "_getStepAnchor",
                      value: function (e) {
                        return null == e ? null : this.steps.eq(e);
                      },
                    },
                    {
                      key: "_getStepPage",
                      value: function (e) {
                        if (null == e) return null;
                        var t = this._getStepAnchor(e);
                        return t.length > 0
                          ? this.main.find(t.attr("href"))
                          : null;
                      },
                    },
                    {
                      key: "_setStepContent",
                      value: function (e, t) {
                        var n = this._getStepPage(e);
                        n && n.html(t);
                      },
                    },
                    {
                      key: "_loadStep",
                      value: function (e) {
                        var t = this,
                          n = this._getStepAnchor(this.current_index),
                          s = this._getStepDirection(e);
                        if (
                          null !== this.current_index &&
                          !1 ===
                            this._triggerEvent("leaveStep", [
                              n,
                              this.current_index,
                              e,
                              s,
                            ])
                        )
                          return !1;
                        var i = this._getStepAnchor(e),
                          r = this._triggerEvent("stepContent", [i, e, s]);
                        r
                          ? "object" == a(r)
                            ? r
                                .then(function (n) {
                                  t._setStepContent(e, n), t._transitStep(e);
                                })
                                .catch(function (n) {
                                  console.error(n),
                                    t._setStepContent(e, n),
                                    t._transitStep(e);
                                })
                            : "string" == typeof r
                            ? (this._setStepContent(e, r), this._transitStep(e))
                            : this._transitStep(e)
                          : this._transitStep(e);
                      },
                    },
                    {
                      key: "_transitStep",
                      value: function (e) {
                        var t = this,
                          n = this._getStepAnchor(e);
                        this._setURLHash(n.attr("href")), this._setAnchor(e);
                        var s = this._getStepDirection(e),
                          i = this._getStepPosition(e);
                        this._doStepAnimation(e, function () {
                          t._fixHeight(e),
                            t._triggerEvent("showStep", [
                              n,
                              t.current_index,
                              s,
                              i,
                            ]);
                        }),
                          (this.current_index = e),
                          this._setButtons(e);
                      },
                    },
                    {
                      key: "_doStepAnimation",
                      value: function (t, n) {
                        var s = this,
                          i = this._getStepPage(this.current_index),
                          r = this._getStepPage(t),
                          o = this.options.transition.animation.toLowerCase();
                        switch ((this._stopAnimations(), o)) {
                          case "slide-horizontal":
                          case "slide-h":
                            var a,
                              l,
                              c = this.container.width(),
                              d = c,
                              u = -2 * c;
                            t > this.current_index && ((d = -1 * c), (u = c)),
                              null == this.current_index &&
                                this.container.height(r.outerHeight()),
                              i &&
                                ((a = i.css("position")),
                                (l = i.css("left")),
                                i
                                  .css("position", "absolute")
                                  .css("left", 0)
                                  .animate(
                                    { left: d },
                                    this.options.transition.speed,
                                    this.options.transition.easing,
                                    function () {
                                      e(this).hide(),
                                        i.css("position", a).css("left", l);
                                    }
                                  )),
                              (a = r.css("position")),
                              (l = r.css("left")),
                              r
                                .css("position", "absolute")
                                .css("left", u)
                                .outerWidth(c)
                                .show()
                                .animate(
                                  { left: 0 },
                                  this.options.transition.speed,
                                  this.options.transition.easing,
                                  function () {
                                    r.css("position", a).css("left", l), n();
                                  }
                                );
                            break;
                          case "slide-vertical":
                          case "slide-v":
                            var p,
                              h,
                              f = this.container.height(),
                              g = f,
                              m = -2 * f;
                            t > this.current_index && ((g = -1 * f), (m = f)),
                              i &&
                                ((p = i.css("position")),
                                (h = i.css("top")),
                                i
                                  .css("position", "absolute")
                                  .css("top", 0)
                                  .animate(
                                    { top: g },
                                    this.options.transition.speed,
                                    this.options.transition.easing,
                                    function () {
                                      e(this).hide(),
                                        i.css("position", p).css("top", h);
                                    }
                                  )),
                              (p = r.css("position")),
                              (h = r.css("top")),
                              r
                                .css("position", "absolute")
                                .css("top", m)
                                .show()
                                .animate(
                                  { top: 0 },
                                  this.options.transition.speed,
                                  this.options.transition.easing,
                                  function () {
                                    r.css("position", p).css("top", h), n();
                                  }
                                );
                            break;
                          case "slide-swing":
                          case "slide-s":
                            i
                              ? i.slideUp(
                                  "fast",
                                  this.options.transition.easing,
                                  function () {
                                    r.slideDown(
                                      s.options.transition.speed,
                                      s.options.transition.easing,
                                      function () {
                                        n();
                                      }
                                    );
                                  }
                                )
                              : r.slideDown(
                                  this.options.transition.speed,
                                  this.options.transition.easing,
                                  function () {
                                    n();
                                  }
                                );
                            break;
                          case "fade":
                            i
                              ? i.fadeOut(
                                  "fast",
                                  this.options.transition.easing,
                                  function () {
                                    r.fadeIn(
                                      "fast",
                                      s.options.transition.easing,
                                      function () {
                                        n();
                                      }
                                    );
                                  }
                                )
                              : r.fadeIn(
                                  this.options.transition.speed,
                                  this.options.transition.easing,
                                  function () {
                                    n();
                                  }
                                );
                            break;
                          default:
                            i && i.hide(), r.show(), n();
                        }
                      },
                    },
                    {
                      key: "_stopAnimations",
                      value: function () {
                        this.pages.finish(), this.container.finish();
                      },
                    },
                    {
                      key: "_setAnchor",
                      value: function (e) {
                        this._resetCSSClass(this.current_index, "active"),
                          !1 !== this.options.anchorSettings.markDoneStep &&
                            null !== this.current_index &&
                            (this._setCSSClass(this.current_index, "done"),
                            !1 !==
                              this.options.anchorSettings
                                .removeDoneStepOnNavigateBack &&
                              "backward" === this._getStepDirection(e) &&
                              this._resetCSSClass(this.current_index, "done")),
                          this._resetCSSClass(e, "done"),
                          this._setCSSClass(e, "active");
                      },
                    },
                    {
                      key: "_setButtons",
                      value: function (e) {
                        if (!this.options.cycleSteps)
                          switch (
                            (this.main
                              .find(".sw-btn-prev")
                              .removeClass("disabled"),
                            this.main
                              .find(".sw-btn-next")
                              .removeClass("disabled"),
                            this._getStepPosition(e))
                          ) {
                            case "first":
                              this.main
                                .find(".sw-btn-prev")
                                .addClass("disabled");
                              break;
                            case "last":
                              this.main
                                .find(".sw-btn-next")
                                .addClass("disabled");
                              break;
                            default:
                              !1 === this._getNextShowable(e) &&
                                this.main
                                  .find(".sw-btn-next")
                                  .addClass("disabled"),
                                !1 === this._getPreviousShowable(e) &&
                                  this.main
                                    .find(".sw-btn-prev")
                                    .addClass("disabled");
                          }
                      },
                    },
                    {
                      key: "_getStepIndex",
                      value: function () {
                        var e = this._getURLHashIndex();
                        return !1 === e ? this.options.selected : e;
                      },
                    },
                    {
                      key: "_setTheme",
                      value: function (e) {
                        this.main
                          .removeClass(function (e, t) {
                            return (t.match(/(^|\s)sw-theme-\S+/g) || []).join(
                              " "
                            );
                          })
                          .addClass("sw-theme-" + e);
                      },
                    },
                    {
                      key: "_setJustify",
                      value: function (e) {
                        !0 === e
                          ? this.main.addClass("sw-justified")
                          : this.main.removeClass("sw-justified");
                      },
                    },
                    {
                      key: "_setDarkMode",
                      value: function (e) {
                        !0 === e
                          ? this.main.addClass("sw-dark")
                          : this.main.removeClass("sw-dark");
                      },
                    },
                    {
                      key: "_keyNav",
                      value: function (t) {
                        if (
                          e.inArray(
                            t.which,
                            this.options.keyboardSettings.keyLeft
                          ) > -1
                        )
                          this._showPrevious(), t.preventDefault();
                        else {
                          if (
                            !(
                              e.inArray(
                                t.which,
                                this.options.keyboardSettings.keyRight
                              ) > -1
                            )
                          )
                            return;
                          this._showNext(), t.preventDefault();
                        }
                      },
                    },
                    {
                      key: "_fixHeight",
                      value: function (e) {
                        if (this.options.autoAdjustHeight) {
                          var t = this._getStepPage(e);
                          this.container
                            .finish()
                            .animate(
                              { height: t.outerHeight() },
                              this.options.transition.speed
                            );
                        }
                      },
                    },
                    {
                      key: "_triggerEvent",
                      value: function (t, n) {
                        var s = e.Event(t);
                        return (
                          this.main.trigger(s, n),
                          !s.isDefaultPrevented() && s.result
                        );
                      },
                    },
                    {
                      key: "_setURLHash",
                      value: function (e) {
                        this.options.enableURLhash &&
                          window.location.hash !== e &&
                          history.pushState(null, null, e);
                      },
                    },
                    {
                      key: "_getURLHashIndex",
                      value: function () {
                        if (this.options.enableURLhash) {
                          var e = window.location.hash;
                          if (e.length > 0) {
                            var t = this.nav.find("a[href*='" + e + "']");
                            if (t.length > 0) return this.steps.index(t);
                          }
                        }
                        return !1;
                      },
                    },
                    {
                      key: "_loader",
                      value: function (e) {
                        switch (e) {
                          case "show":
                            this.main.addClass("sw-loading");
                            break;
                          case "hide":
                            this.main.removeClass("sw-loading");
                            break;
                          default:
                            this.main.toggleClass("sw-loading");
                        }
                      },
                    },
                    {
                      key: "_showError",
                      value: function (e) {
                        console.error(e);
                      },
                    },
                    {
                      key: "goToStep",
                      value: function (e) {
                        this._showStep(e);
                      },
                    },
                    {
                      key: "next",
                      value: function () {
                        this._showNext();
                      },
                    },
                    {
                      key: "prev",
                      value: function () {
                        this._showPrevious();
                      },
                    },
                    {
                      key: "reset",
                      value: function () {
                        this._setURLHash("#"),
                          this._initOptions(),
                          this._initLoad();
                      },
                    },
                    {
                      key: "stepState",
                      value: function (e, t) {
                        if (!e) return !1;
                        switch (t) {
                          case "disable":
                            this._setCSSClass(e, "disabled");
                            break;
                          case "enable":
                            this._resetCSSClass(e, "disabled");
                            break;
                          case "hide":
                            this._setCSSClass(e, "hidden");
                            break;
                          case "show":
                            this._resetCSSClass(e, "hidden");
                            break;
                          case "error-on":
                            this._setCSSClass(e, "danger");
                            break;
                          case "error-off":
                            this._resetCSSClass(e, "danger");
                        }
                      },
                    },
                    {
                      key: "setOptions",
                      value: function (t) {
                        (this.options = e.extend(!0, {}, this.options, t)),
                          this._initOptions();
                      },
                    },
                    {
                      key: "getStepIndex",
                      value: function () {
                        return this.current_index;
                      },
                    },
                    {
                      key: "loader",
                      value: function (e) {
                        "show" === e
                          ? this.main.addClass("sw-loading")
                          : this.main.removeClass("sw-loading");
                      },
                    },
                  ]) && o(s.prototype, i),
                  r && o(s, r),
                  n
                );
              })();
            e.fn.smartWizard = function (t) {
              if (void 0 === t || "object" === a(t))
                return this.each(function () {
                  e.data(this, "smartWizard") ||
                    e.data(this, "smartWizard", new n(this, t));
                });
              if ("string" == typeof t && "_" !== t[0] && "init" !== t) {
                var s = e.data(this[0], "smartWizard");
                return (
                  "destroy" === t && e.data(this, "smartWizard", null),
                  s instanceof n && "function" == typeof s[t]
                    ? s[t].apply(s, Array.prototype.slice.call(arguments, 1))
                    : this
                );
              }
            };
          }),
          void 0 === (r = "function" == typeof s ? s.apply(t, i) : s) ||
            (e.exports = r);
      },
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var s in n)
                      Object.prototype.hasOwnProperty.call(n, s) &&
                        (e[s] = n[s]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            n =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            s = t && "IntersectionObserver" in window,
            i = t && "classList" in document.createElement("p"),
            r = t && window.devicePixelRatio > 1,
            o = {
              elements_selector: ".lazy",
              container: n || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            a = function (t) {
              return e({}, o, t);
            },
            l = function (e, t) {
              var n,
                s = "LazyLoad::Initialized",
                i = new e(t);
              try {
                n = new CustomEvent(s, { detail: { instance: i } });
              } catch (e) {
                (n = document.createEvent("CustomEvent")).initCustomEvent(
                  s,
                  !1,
                  !1,
                  { instance: i }
                );
              }
              window.dispatchEvent(n);
            },
            c = "src",
            d = "srcset",
            u = "sizes",
            p = "poster",
            h = "llOriginalAttrs",
            f = "data",
            g = "loading",
            m = "loaded",
            v = "applied",
            y = "error",
            b = "native",
            w = "data-",
            x = "ll-status",
            S = function (e, t) {
              return e.getAttribute(w + t);
            },
            C = function (e) {
              return S(e, x);
            },
            E = function (e, t) {
              return (function (e, t, n) {
                var s = "data-ll-status";
                null !== n ? e.setAttribute(s, n) : e.removeAttribute(s);
              })(e, 0, t);
            },
            T = function (e) {
              return E(e, null);
            },
            k = function (e) {
              return null === C(e);
            },
            _ = function (e) {
              return C(e) === b;
            },
            A = [g, m, v, y],
            L = function (e, t, n, s) {
              e &&
                (void 0 === s ? (void 0 === n ? e(t) : e(t, n)) : e(t, n, s));
            },
            O = function (e, t) {
              i
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            P = function (e, t) {
              i
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            $ = function (e) {
              return e.llTempImage;
            },
            D = function (e, t) {
              if (t) {
                var n = t._observer;
                n && n.unobserve(e);
              }
            },
            M = function (e, t) {
              e && (e.loadingCount += t);
            },
            N = function (e, t) {
              e && (e.toLoadCount = t);
            },
            I = function (e) {
              for (var t, n = [], s = 0; (t = e.children[s]); s += 1)
                "SOURCE" === t.tagName && n.push(t);
              return n;
            },
            j = function (e, t) {
              var n = e.parentNode;
              n && "PICTURE" === n.tagName && I(n).forEach(t);
            },
            q = function (e, t) {
              I(e).forEach(t);
            },
            H = [c],
            z = [c, p],
            B = [c, d, u],
            R = [f],
            F = function (e) {
              return !!e[h];
            },
            W = function (e) {
              return e[h];
            },
            G = function (e) {
              return delete e[h];
            },
            V = function (e, t) {
              if (!F(e)) {
                var n = {};
                t.forEach(function (t) {
                  n[t] = e.getAttribute(t);
                }),
                  (e[h] = n);
              }
            },
            X = function (e, t) {
              if (F(e)) {
                var n = W(e);
                t.forEach(function (t) {
                  !(function (e, t, n) {
                    n ? e.setAttribute(t, n) : e.removeAttribute(t);
                  })(e, t, n[t]);
                });
              }
            },
            U = function (e, t, n) {
              O(e, t.class_applied),
                E(e, v),
                n &&
                  (t.unobserve_completed && D(e, t),
                  L(t.callback_applied, e, n));
            },
            Y = function (e, t, n) {
              O(e, t.class_loading),
                E(e, g),
                n && (M(n, 1), L(t.callback_loading, e, n));
            },
            Q = function (e, t, n) {
              n && e.setAttribute(t, n);
            },
            J = function (e, t) {
              Q(e, u, S(e, t.data_sizes)),
                Q(e, d, S(e, t.data_srcset)),
                Q(e, c, S(e, t.data_src));
            },
            K = {
              IMG: function (e, t) {
                j(e, function (e) {
                  V(e, B), J(e, t);
                }),
                  V(e, B),
                  J(e, t);
              },
              IFRAME: function (e, t) {
                V(e, H), Q(e, c, S(e, t.data_src));
              },
              VIDEO: function (e, t) {
                q(e, function (e) {
                  V(e, H), Q(e, c, S(e, t.data_src));
                }),
                  V(e, z),
                  Q(e, p, S(e, t.data_poster)),
                  Q(e, c, S(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                V(e, R), Q(e, f, S(e, t.data_src));
              },
            },
            Z = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            ee = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                L(e.callback_finish, t);
            },
            te = function (e, t, n) {
              e.addEventListener(t, n), (e.llEvLisnrs[t] = n);
            },
            ne = function (e, t, n) {
              e.removeEventListener(t, n);
            },
            se = function (e) {
              return !!e.llEvLisnrs;
            },
            ie = function (e) {
              if (se(e)) {
                var t = e.llEvLisnrs;
                for (var n in t) {
                  var s = t[n];
                  ne(e, n, s);
                }
                delete e.llEvLisnrs;
              }
            },
            re = function (e, t, n) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                M(n, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(n),
                P(e, t.class_loading),
                t.unobserve_completed && D(e, n);
            },
            oe = function (e, t, n) {
              var s = $(e) || e;
              se(s) ||
                (function (e, t, n) {
                  se(e) || (e.llEvLisnrs = {});
                  var s = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  te(e, s, t), te(e, "error", n);
                })(
                  s,
                  function (i) {
                    !(function (e, t, n, s) {
                      var i = _(t);
                      re(t, n, s),
                        O(t, n.class_loaded),
                        E(t, m),
                        L(n.callback_loaded, t, s),
                        i || ee(n, s);
                    })(0, e, t, n),
                      ie(s);
                  },
                  function (i) {
                    !(function (e, t, n, s) {
                      var i = _(t);
                      re(t, n, s),
                        O(t, n.class_error),
                        E(t, y),
                        L(n.callback_error, t, s),
                        n.restore_on_error && X(t, B),
                        i || ee(n, s);
                    })(0, e, t, n),
                      ie(s);
                  }
                );
            },
            ae = function (e, t, n) {
              !(function (e) {
                return Z.indexOf(e.tagName) > -1;
              })(e)
                ? (function (e, t, n) {
                    !(function (e) {
                      e.llTempImage = document.createElement("IMG");
                    })(e),
                      oe(e, t, n),
                      (function (e) {
                        F(e) ||
                          (e[h] = { backgroundImage: e.style.backgroundImage });
                      })(e),
                      (function (e, t, n) {
                        var s = S(e, t.data_bg),
                          i = S(e, t.data_bg_hidpi),
                          o = r && i ? i : s;
                        o &&
                          ((e.style.backgroundImage = 'url("'.concat(o, '")')),
                          $(e).setAttribute(c, o),
                          Y(e, t, n));
                      })(e, t, n),
                      (function (e, t, n) {
                        var s = S(e, t.data_bg_multi),
                          i = S(e, t.data_bg_multi_hidpi),
                          o = r && i ? i : s;
                        o && ((e.style.backgroundImage = o), U(e, t, n));
                      })(e, t, n),
                      (function (e, t, n) {
                        var s = S(e, t.data_bg_set);
                        if (s) {
                          var i = s.split("|"),
                            r = i.map(function (e) {
                              return "image-set(".concat(e, ")");
                            });
                          (e.style.backgroundImage = r.join()),
                            "" === e.style.backgroundImage &&
                              ((r = i.map(function (e) {
                                return "-webkit-image-set(".concat(e, ")");
                              })),
                              (e.style.backgroundImage = r.join())),
                            U(e, t, n);
                        }
                      })(e, t, n);
                  })(e, t, n)
                : (function (e, t, n) {
                    oe(e, t, n),
                      (function (e, t, n) {
                        var s = K[e.tagName];
                        s && (s(e, t), Y(e, t, n));
                      })(e, t, n);
                  })(e, t, n);
            },
            le = function (e) {
              e.removeAttribute(c), e.removeAttribute(d), e.removeAttribute(u);
            },
            ce = function (e) {
              j(e, function (e) {
                X(e, B);
              }),
                X(e, B);
            },
            de = {
              IMG: ce,
              IFRAME: function (e) {
                X(e, H);
              },
              VIDEO: function (e) {
                q(e, function (e) {
                  X(e, H);
                }),
                  X(e, z),
                  e.load();
              },
              OBJECT: function (e) {
                X(e, R);
              },
            },
            ue = function (e, t) {
              (function (e) {
                var t = de[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (F(e)) {
                        var t = W(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  k(e) ||
                    _(e) ||
                    (P(e, t.class_entered),
                    P(e, t.class_exited),
                    P(e, t.class_applied),
                    P(e, t.class_loading),
                    P(e, t.class_loaded),
                    P(e, t.class_error));
                })(e, t),
                T(e),
                G(e);
            },
            pe = ["IMG", "IFRAME", "VIDEO"],
            he = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            fe = function (e, t, n) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, n, s) {
                      var i = (function (e) {
                        return A.indexOf(C(e)) >= 0;
                      })(e);
                      E(e, "entered"),
                        O(e, n.class_entered),
                        P(e, n.class_exited),
                        (function (e, t, n) {
                          t.unobserve_entered && D(e, n);
                        })(e, n, s),
                        L(n.callback_enter, e, t, s),
                        i || ae(e, n, s);
                    })(e.target, e, t, n)
                  : (function (e, t, n, s) {
                      k(e) ||
                        (O(e, n.class_exited),
                        (function (e, t, n, s) {
                          n.cancel_on_exit &&
                            (function (e) {
                              return C(e) === g;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (ie(e),
                            (function (e) {
                              j(e, function (e) {
                                le(e);
                              }),
                                le(e);
                            })(e),
                            ce(e),
                            P(e, n.class_loading),
                            M(s, -1),
                            T(e),
                            L(n.callback_cancel, e, t, s));
                        })(e, t, n, s),
                        L(n.callback_exit, e, t, s));
                    })(e.target, e, t, n);
              });
            },
            ge = function (e) {
              return Array.prototype.slice.call(e);
            },
            me = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ve = function (e) {
              return (function (e) {
                return C(e) === y;
              })(e);
            },
            ye = function (e, t) {
              return (function (e) {
                return ge(e).filter(k);
              })(e || me(t));
            },
            be = function (e, n) {
              var i = a(e);
              (this._settings = i),
                (this.loadingCount = 0),
                (function (e, t) {
                  s &&
                    !he(e) &&
                    (t._observer = new IntersectionObserver(
                      function (n) {
                        fe(n, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(i, this),
                (function (e, n) {
                  t &&
                    window.addEventListener("online", function () {
                      !(function (e, t) {
                        var n;
                        ((n = me(e)), ge(n).filter(ve)).forEach(function (t) {
                          P(t, e.class_error), T(t);
                        }),
                          t.update();
                      })(e, n);
                    });
                })(i, this),
                this.update(n);
            };
          return (
            (be.prototype = {
              update: function (e) {
                var t,
                  i,
                  r = this._settings,
                  o = ye(e, r);
                N(this, o.length),
                  !n && s
                    ? he(r)
                      ? (function (e, t, n) {
                          e.forEach(function (e) {
                            -1 !== pe.indexOf(e.tagName) &&
                              (function (e, t, n) {
                                e.setAttribute("loading", "lazy"),
                                  oe(e, t, n),
                                  (function (e, t) {
                                    var n = K[e.tagName];
                                    n && n(e, t);
                                  })(e, t),
                                  E(e, b);
                              })(e, t, n);
                          }),
                            N(n, 0);
                        })(o, r, this)
                      : ((i = o),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, i))
                    : this.loadAll(o);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  me(this._settings).forEach(function (e) {
                    G(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  n = this._settings;
                ye(e, n).forEach(function (e) {
                  D(e, t), ae(e, n, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                me(e).forEach(function (t) {
                  ue(t, e);
                });
              },
            }),
            (be.load = function (e, t) {
              var n = a(t);
              ae(e, n);
            }),
            (be.resetStatus = function (e) {
              T(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var n, s = 0; (n = t[s]); s += 1) l(e, n);
                  else l(e, t);
              })(be, window.lazyLoadOptions),
            be
          );
        })();
      },
    },
    t = {};
  function n(s) {
    var i = t[s];
    if (void 0 !== i) return i.exports;
    var r = (t[s] = { exports: {} });
    return e[s].call(r.exports, r, r.exports, n), r.exports;
  }
  (() => {
    "use strict";
    function e(e) {
      this.type = e;
    }
    (e.prototype.init = function () {
      const e = this;
      (this.оbjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          n = t.dataset.da.trim().split(","),
          s = {};
        (s.element = t),
          (s.parent = t.parentNode),
          (s.destination = document.querySelector(n[0].trim())),
          (s.breakpoint = n[1] ? n[1].trim() : "767"),
          (s.place = n[2] ? n[2].trim() : "last"),
          (s.index = this.indexInParent(s.parent, s.element)),
          this.оbjects.push(s);
      }
      this.arraySort(this.оbjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.оbjects,
          function (e) {
            return (
              "(" +
              this.type +
              "-width: " +
              e.breakpoint +
              "px)," +
              e.breakpoint
            );
          },
          this
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (e, t, n) {
            return Array.prototype.indexOf.call(n, e) === t;
          }
        ));
      for (let t = 0; t < this.mediaQueries.length; t++) {
        const n = this.mediaQueries[t],
          s = String.prototype.split.call(n, ","),
          i = window.matchMedia(s[0]),
          r = s[1],
          o = Array.prototype.filter.call(this.оbjects, function (e) {
            return e.breakpoint === r;
          });
        i.addListener(function () {
          e.mediaHandler(i, o);
        }),
          this.mediaHandler(i, o);
      }
    }),
      (e.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const n = t[e];
            (n.index = this.indexInParent(n.parent, n.element)),
              this.moveTo(n.place, n.element, n.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const n = t[e];
            n.element.classList.contains(this.daClassname) &&
              this.moveBack(n.parent, n.element, n.index);
          }
      }),
      (e.prototype.moveTo = function (e, t, n) {
        t.classList.add(this.daClassname),
          "last" === e || e >= n.children.length
            ? n.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? n.children[e].insertAdjacentElement("beforebegin", t)
            : n.insertAdjacentElement("afterbegin", t);
      }),
      (e.prototype.moveBack = function (e, t, n) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[n]
            ? e.children[n].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (e.prototype.indexInParent = function (e, t) {
        const n = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(n, t);
      }),
      (e.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    new e("max").init();
    class t {
      constructor(e) {
        let t = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-youtube",
          youtubePlaceAttribute: "data-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup__content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          bodyLockDelay: 500,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...t,
            ...e,
            classes: { ...t.classes, ...e?.classes },
            hashSettings: { ...t.hashSettings, ...e?.hashSettings },
            on: { ...t.on, ...e?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("Проснулся"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t)
              return (
                e.preventDefault(),
                (this._dataValue = t.getAttribute(
                  this.options.attributeOpenButton
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `Ой ой, не заполнен атрибут у ${t.classList}`
                    )
              );
            return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (e.preventDefault(), void this.close())
              : void 0;
          }.bind(this)
        ),
          document.addEventListener(
            "keydown",
            function (e) {
              if (
                this.options.closeEsc &&
                27 == e.which &&
                "Escape" === e.code &&
                this.isOpen
              )
                return e.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == e.which &&
                this.isOpen &&
                this._focusCatch(e);
            }.bind(this)
          ),
          document.querySelector("form[data-ajax],form[data-dev]") &&
            document.addEventListener(
              "formSent",
              function (e) {
                const t = e.detail.form.dataset.popupMessage;
                t && this.open(t);
              }.bind(this)
            ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this)
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this)
            ));
      }
      open(e) {
        if (
          (e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute
              )}?rel=0&showinfo=0&autoplay=1`,
              t = document.createElement("iframe");
            t.setAttribute("allowfullscreen", "");
            const n = this.options.setAutoplayYoutube ? "autoplay;" : "";
            t.setAttribute("allow", `${n}; encrypted-media`),
              t.setAttribute("src", e),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(t);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : a(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } })
            ),
            this.popupLogging("Открыл попап");
        } else
          this.popupLogging(
            "Ой ой, такого попапа нет. Проверьте корректность ввода. "
          );
      }
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
          this.isOpen &&
            o &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              a(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("Закрыл попап"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${e}"]`
        ) &&
          e &&
          this.open(e);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl),
          n = Array.prototype.slice.call(t),
          s = n.indexOf(document.activeElement);
        e.shiftKey && 0 === s && (n[n.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            s !== n.length - 1 ||
            (n[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging && d(`[Попапос]: ${e}`);
      }
    }
    let s = (e, t = 500, n = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = n ? `${n}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !n),
              !n && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !n && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t));
      },
      i = (e, t = 500, n = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            n && e.style.removeProperty("height");
          let s = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = n ? `${n}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = s + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide");
            }, t);
        }
      },
      r = (e, t = 500) => (e.hidden ? i(e, t) : s(e, t)),
      o = !0,
      a = (e = 500) => {
        document.documentElement.classList.contains("lock") ? l(e) : c(e);
      },
      l = (e = 500) => {
        let t = document.querySelector("body");
        if (o) {
          let n = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < n.length; e++) {
              n[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (o = !1),
            setTimeout(function () {
              o = !0;
            }, e);
        }
      },
      c = (e = 500) => {
        let t = document.querySelector("body");
        if (o) {
          let n = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < n.length; e++) {
            n[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (o = !1),
            setTimeout(function () {
              o = !0;
            }, e);
        }
      };
    function d(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function u(e, t) {
      const n = Array.from(e).filter(function (e, n, s) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (n.length) {
        const e = [];
        n.forEach((n) => {
          const s = {},
            i = n.dataset[t].split(",");
          (s.value = i[0]),
            (s.type = i[1] ? i[1].trim() : "max"),
            (s.item = n),
            e.push(s);
        });
        let s = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        s = (function (e) {
          return e.filter(function (e, t, n) {
            return n.indexOf(e) === t;
          });
        })(s);
        const i = [];
        if (s.length)
          return (
            s.forEach((t) => {
              const n = t.split(","),
                s = n[1],
                r = n[2],
                o = window.matchMedia(n[0]),
                a = e.filter(function (e) {
                  if (e.value === s && e.type === r) return !0;
                });
              i.push({ itemsArray: a, matchMedia: o });
            }),
            i
          );
      }
    }
    class p {
      constructor(e, t = null) {
        if (
          ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
          (this.selectClasses = {
            classSelect: "select",
            classSelectBody: "select__body",
            classSelectTitle: "select__title",
            classSelectValue: "select__value",
            classSelectLabel: "select__label",
            classSelectInput: "select__input",
            classSelectText: "select__text",
            classSelectLink: "select__link",
            classSelectOptions: "select__options",
            classSelectOptionsScroll: "select__scroll",
            classSelectOption: "select__option",
            classSelectContent: "select__content",
            classSelectRow: "select__row",
            classSelectData: "select__asset",
            classSelectDisabled: "_select-disabled",
            classSelectTag: "_select-tag",
            classSelectOpen: "_select-open",
            classSelectActive: "_select-active",
            classSelectFocus: "_select-focus",
            classSelectMultiple: "_select-multiple",
            classSelectCheckBox: "_select-checkbox",
            classSelectOptionSelected: "_select-selected",
          }),
          (this._this = this),
          this.config.init)
        ) {
          const e = t
            ? document.querySelectorAll(t)
            : document.querySelectorAll("select");
          e.length
            ? (this.selectsInit(e),
              this.setLogging(`Проснулся, построил селектов: (${e.length})`))
            : this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
        }
      }
      getSelectClass(e) {
        return `.${e}`;
      }
      getSelectElement(e, t) {
        return {
          originalSelect: e.querySelector("select"),
          selectElement: e.querySelector(this.getSelectClass(t)),
        };
      }
      selectsInit(e) {
        e.forEach((e, t) => {
          this.selectInit(e, t + 1);
        }),
          document.addEventListener(
            "click",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "keydown",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusin",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusout",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          );
      }
      selectInit(e, t) {
        const n = this;
        let s = document.createElement("div");
        if (
          (s.classList.add(this.selectClasses.classSelect),
          e.parentNode.insertBefore(s, e),
          s.appendChild(e),
          (e.hidden = !0),
          t && (e.dataset.id = t),
          s.insertAdjacentHTML(
            "beforeend",
            `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
          ),
          this.selectBuild(e),
          this.getSelectPlaceholder(e) &&
            ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
            this.getSelectPlaceholder(e).label.show))
        ) {
          this.getSelectElement(
            s,
            this.selectClasses.classSelectTitle
          ).selectElement.insertAdjacentHTML(
            "afterbegin",
            `<span class="${this.selectClasses.classSelectLabel}">${
              this.getSelectPlaceholder(e).label.text
                ? this.getSelectPlaceholder(e).label.text
                : this.getSelectPlaceholder(e).value
            }</span>`
          );
        }
        (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
          e.addEventListener("change", function (e) {
            n.selectChange(e);
          });
      }
      selectBuild(e) {
        const t = e.parentElement;
        (t.dataset.id = e.dataset.id),
          t.classList.add(
            e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
          ),
          e.multiple
            ? t.classList.add(this.selectClasses.classSelectMultiple)
            : t.classList.remove(this.selectClasses.classSelectMultiple),
          e.hasAttribute("data-checkbox") && e.multiple
            ? t.classList.add(this.selectClasses.classSelectCheckBox)
            : t.classList.remove(this.selectClasses.classSelectCheckBox),
          this.setSelectTitleValue(t, e),
          this.setOptions(t, e),
          e.hasAttribute("data-search") && this.searchActions(t),
          e.hasAttribute("data-open") && this.selectAction(t),
          this.selectDisabled(t, e);
      }
      selectsActions(e) {
        const t = e.target,
          n = e.type;
        if (
          t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
          t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
        ) {
          const s = t.closest(".select")
              ? t.closest(".select")
              : document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${
                    t.closest(
                      this.getSelectClass(this.selectClasses.classSelectTag)
                    ).dataset.selectId
                  }"]`
                ),
            i = this.getSelectElement(s).originalSelect;
          if ("click" === n) {
            if (!i.disabled)
              if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                )
              ) {
                const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ),
                  n = document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                  );
                this.optionAction(s, i, n);
              } else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTitle)
                )
              )
                this.selectAction(s);
              else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                )
              ) {
                const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                );
                this.optionAction(s, i, e);
              }
          } else
            "focusin" === n || "focusout" === n
              ? t.closest(
                  this.getSelectClass(this.selectClasses.classSelect)
                ) &&
                ("focusin" === n
                  ? s.classList.add(this.selectClasses.classSelectFocus)
                  : s.classList.remove(this.selectClasses.classSelectFocus))
              : "keydown" === n && "Escape" === e.code && this.selectsСlose();
        } else this.selectsСlose();
      }
      selectsСlose() {
        const e = document.querySelectorAll(
          `${this.getSelectClass(
            this.selectClasses.classSelect
          )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
        );
        e.length &&
          e.forEach((e) => {
            this.selectAction(e);
          });
      }
      selectAction(e) {
        const t = this.getSelectElement(e).originalSelect,
          n = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement;
        n.classList.contains("_slide") ||
          (e.classList.toggle(this.selectClasses.classSelectOpen),
          r(n, t.dataset.speed));
      }
      setSelectTitleValue(e, t) {
        const n = this.getSelectElement(
            e,
            this.selectClasses.classSelectBody
          ).selectElement,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement;
        s && s.remove(),
          n.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
      }
      getSelectTitleValue(e, t) {
        let n = this.getSelectedOptionsData(t, 2).html;
        if (
          (t.multiple &&
            t.hasAttribute("data-tags") &&
            ((n = this.getSelectedOptionsData(t)
              .elements.map(
                (t) =>
                  `<span role="button" data-select-id="${
                    e.dataset.id
                  }" data-value="${
                    t.value
                  }" class="_select-tag">${this.getSelectElementContent(
                    t
                  )}</span>`
              )
              .join("")),
            t.dataset.tags &&
              document.querySelector(t.dataset.tags) &&
              ((document.querySelector(t.dataset.tags).innerHTML = n),
              t.hasAttribute("data-search") && (n = !1))),
          (n = n.length ? n : t.dataset.placeholder),
          this.getSelectedOptionsData(t).values.length
            ? e.classList.add(this.selectClasses.classSelectActive)
            : e.classList.remove(this.selectClasses.classSelectActive),
          t.hasAttribute("data-search"))
        )
          return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${n}" data-placeholder="${n}" class="${this.selectClasses.classSelectInput}"></span></div>`;
        {
          const e =
            this.getSelectedOptionsData(t).elements.length &&
            this.getSelectedOptionsData(t).elements[0].dataset.class
              ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
              : "";
          return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${n}</span></span></button>`;
        }
      }
      getSelectElementContent(e) {
        const t = e.dataset.asset ? `${e.dataset.asset}` : "",
          n = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
        let s = "";
        return (
          (s += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
          (s += t
            ? `<span class="${this.selectClasses.classSelectData}">`
            : ""),
          (s += t ? n : ""),
          (s += t ? "</span>" : ""),
          (s += t
            ? `<span class="${this.selectClasses.classSelectText}">`
            : ""),
          (s += e.textContent),
          (s += t ? "</span>" : ""),
          (s += t ? "</span>" : ""),
          s
        );
      }
      getSelectPlaceholder(e) {
        const t = Array.from(e.options).find((e) => !e.value);
        if (t)
          return {
            value: t.textContent,
            show: t.hasAttribute("data-show"),
            label: {
              show: t.hasAttribute("data-label"),
              text: t.dataset.label,
            },
          };
      }
      getSelectedOptionsData(e, t) {
        let n = [];
        return (
          e.multiple
            ? (n = Array.from(e.options)
                .filter((e) => e.value)
                .filter((e) => e.selected))
            : n.push(e.options[e.selectedIndex]),
          {
            elements: n.map((e) => e),
            values: n.filter((e) => e.value).map((e) => e.value),
            html: n.map((e) => this.getSelectElementContent(e)),
          }
        );
      }
      getOptions(e) {
        let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
          n = e.dataset.scroll
            ? `style="max-height:${e.dataset.scroll}px"`
            : "",
          s = Array.from(e.options);
        if (s.length > 0) {
          let i = "";
          return (
            ((this.getSelectPlaceholder(e) &&
              !this.getSelectPlaceholder(e).show) ||
              e.multiple) &&
              (s = s.filter((e) => e.value)),
            (i += t
              ? `<div ${t} ${n} class="${this.selectClasses.classSelectOptionsScroll}">`
              : ""),
            s.forEach((t) => {
              i += this.getOption(t, e);
            }),
            (i += t ? "</div>" : ""),
            i
          );
        }
      }
      getOption(e, t) {
        const n =
            e.selected && t.multiple
              ? ` ${this.selectClasses.classSelectOptionSelected}`
              : "",
          s =
            e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
          i = e.dataset.class ? ` ${e.dataset.class}` : "",
          r = !!e.dataset.href && e.dataset.href,
          o = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
        let a = "";
        return (
          (a += r
            ? `<a ${o} ${s} href="${r}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${i}${n}">`
            : `<button ${s} class="${this.selectClasses.classSelectOption}${i}${n}" data-value="${e.value}" type="button">`),
          (a += this.getSelectElementContent(e)),
          (a += r ? "</a>" : "</button>"),
          a
        );
      }
      setOptions(e, t) {
        this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement.innerHTML = this.getOptions(t);
      }
      optionAction(e, t, n) {
        if (t.multiple) {
          n.classList.toggle(this.selectClasses.classSelectOptionSelected);
          this.getSelectedOptionsData(t).elements.forEach((e) => {
            e.removeAttribute("selected");
          });
          e.querySelectorAll(
            this.getSelectClass(this.selectClasses.classSelectOptionSelected)
          ).forEach((e) => {
            t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
              "selected",
              "selected"
            );
          });
        } else
          t.hasAttribute("data-show-selected") ||
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ) &&
              (e.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption
                )}[hidden]`
              ).hidden = !1),
            (n.hidden = !0)),
            (t.value = n.hasAttribute("data-value")
              ? n.dataset.value
              : n.textContent),
            this.selectAction(e);
        this.setSelectTitleValue(e, t), this.setSelectChange(t);
      }
      selectChange(e) {
        const t = e.target;
        this.selectBuild(t), this.setSelectChange(t);
      }
      setSelectChange(e) {
        if (
          (e.hasAttribute("data-validate") && f.validateInput(e),
          e.hasAttribute("data-submit") && e.value)
        ) {
          let t = document.createElement("button");
          (t.type = "submit"),
            e.closest("form").append(t),
            t.click(),
            t.remove();
        }
        const t = e.parentElement;
        this.selectCallback(t, e);
      }
      selectDisabled(e, t) {
        t.disabled
          ? (e.classList.add(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !0))
          : (e.classList.remove(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !1));
      }
      searchActions(e) {
        this.getSelectElement(e).originalSelect;
        const t = this.getSelectElement(
            e,
            this.selectClasses.classSelectInput
          ).selectElement,
          n = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement,
          s = n.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
          i = this;
        t.addEventListener("input", function () {
          s.forEach((e) => {
            e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
              ? (e.hidden = !1)
              : (e.hidden = !0);
          }),
            !0 === n.hidden && i.selectAction(e);
        });
      }
      selectCallback(e, t) {
        document.dispatchEvent(
          new CustomEvent("selectCallback", { detail: { select: t } })
        );
      }
      setLogging(e) {
        this.config.logging && d(`[select]: ${e}`);
      }
    }
    const h = { inputMaskModule: null, selectModule: null };
    let f = {
      getErrors(e) {
        let t = 0,
          n = e.querySelectorAll("*[data-required]");
        return (
          n.length &&
            n.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error")
            );
      },
      formClean(e) {
        e.reset(),
          setTimeout(() => {
            let t = e.querySelectorAll("input,textarea");
            for (let e = 0; e < t.length; e++) {
              const n = t[e];
              n.parentElement.classList.remove("_form-focus"),
                n.classList.remove("_form-focus"),
                f.removeError(n),
                (n.value = n.dataset.placeholder);
            }
            let n = e.querySelectorAll(".checkbox__input");
            if (n.length > 0)
              for (let e = 0; e < n.length; e++) {
                n[e].checked = !1;
              }
            if (h.selectModule) {
              let t = e.querySelectorAll(".select");
              if (t.length)
                for (let e = 0; e < t.length; e++) {
                  const n = t[e].querySelector("select");
                  h.selectModule.selectBuild(n);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    function g(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function m(e = {}, t = {}) {
      Object.keys(t).forEach((n) => {
        void 0 === e[n]
          ? (e[n] = t[n])
          : g(t[n]) && g(e[n]) && Object.keys(t[n]).length > 0 && m(e[n], t[n]);
      });
    }
    const v = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function y() {
      const e = "undefined" != typeof document ? document : {};
      return m(e, v), e;
    }
    const b = {
      document: v,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function w() {
      const e = "undefined" != typeof window ? window : {};
      return m(e, b), e;
    }
    class x extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function S(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...S(e)) : t.push(e);
        }),
        t
      );
    }
    function C(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function E(e, t) {
      const n = w(),
        s = y();
      let i = [];
      if (!t && e instanceof x) return e;
      if (!e) return new x(i);
      if ("string" == typeof e) {
        const n = e.trim();
        if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
          let e = "div";
          0 === n.indexOf("<li") && (e = "ul"),
            0 === n.indexOf("<tr") && (e = "tbody"),
            (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (e = "tr"),
            0 === n.indexOf("<tbody") && (e = "table"),
            0 === n.indexOf("<option") && (e = "select");
          const t = s.createElement(e);
          t.innerHTML = n;
          for (let e = 0; e < t.childNodes.length; e += 1)
            i.push(t.childNodes[e]);
        } else
          i = (function (e, t) {
            if ("string" != typeof e) return [e];
            const n = [],
              s = t.querySelectorAll(e);
            for (let e = 0; e < s.length; e += 1) n.push(s[e]);
            return n;
          })(e.trim(), t || s);
      } else if (e.nodeType || e === n || e === s) i.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof x) return e;
        i = e;
      }
      return new x(
        (function (e) {
          const t = [];
          for (let n = 0; n < e.length; n += 1)
            -1 === t.indexOf(e[n]) && t.push(e[n]);
          return t;
        })(i)
      );
    }
    E.fn = x.prototype;
    const T = "resize scroll".split(" ");
    function k(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            T.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : E(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    k("click"),
      k("blur"),
      k("focus"),
      k("focusin"),
      k("focusout"),
      k("keyup"),
      k("keydown"),
      k("keypress"),
      k("submit"),
      k("change"),
      k("mousedown"),
      k("mousemove"),
      k("mouseup"),
      k("mouseenter"),
      k("mouseleave"),
      k("mouseout"),
      k("mouseover"),
      k("touchstart"),
      k("touchend"),
      k("touchmove"),
      k("resize"),
      k("scroll");
    const _ = {
      addClass: function (...e) {
        const t = S(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = S(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = S(e.map((e) => e.split(" ")));
        return (
          C(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = S(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let n = 0; n < this.length; n += 1)
          if (2 === arguments.length) this[n].setAttribute(e, t);
          else
            for (const t in e)
              (this[n][t] = e[t]), this[n].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, n, s, i] = e;
        function r(e) {
          const t = e.target;
          if (!t) return;
          const i = e.target.dom7EventData || [];
          if ((i.indexOf(e) < 0 && i.unshift(e), E(t).is(n))) s.apply(t, i);
          else {
            const e = E(t).parents();
            for (let t = 0; t < e.length; t += 1)
              E(e[t]).is(n) && s.apply(e[t], i);
          }
        }
        function o(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
        }
        "function" == typeof e[1] && (([t, s, i] = e), (n = void 0)),
          i || (i = !1);
        const a = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (n)
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: s, proxyListener: r }),
                t.addEventListener(e, r, i);
            }
          else
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: s, proxyListener: o }),
                t.addEventListener(e, o, i);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, n, s, i] = e;
        "function" == typeof e[1] && (([t, s, i] = e), (n = void 0)),
          i || (i = !1);
        const r = t.split(" ");
        for (let e = 0; e < r.length; e += 1) {
          const t = r[e];
          for (let e = 0; e < this.length; e += 1) {
            const r = this[e];
            let o;
            if (
              (!n && r.dom7Listeners
                ? (o = r.dom7Listeners[t])
                : n && r.dom7LiveListeners && (o = r.dom7LiveListeners[t]),
              o && o.length)
            )
              for (let e = o.length - 1; e >= 0; e -= 1) {
                const n = o[e];
                (s && n.listener === s) ||
                (s &&
                  n.listener &&
                  n.listener.dom7proxy &&
                  n.listener.dom7proxy === s)
                  ? (r.removeEventListener(t, n.proxyListener, i),
                    o.splice(e, 1))
                  : s ||
                    (r.removeEventListener(t, n.proxyListener, i),
                    o.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = w(),
          n = e[0].split(" "),
          s = e[1];
        for (let i = 0; i < n.length; i += 1) {
          const r = n[i];
          for (let n = 0; n < this.length; n += 1) {
            const i = this[n];
            if (t.CustomEvent) {
              const n = new t.CustomEvent(r, {
                detail: s,
                bubbles: !0,
                cancelable: !0,
              });
              (i.dom7EventData = e.filter((e, t) => t > 0)),
                i.dispatchEvent(n),
                (i.dom7EventData = []),
                delete i.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function n(s) {
              s.target === this && (e.call(this, s), t.off("transitionend", n));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = w();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = w(),
            t = y(),
            n = this[0],
            s = n.getBoundingClientRect(),
            i = t.body,
            r = n.clientTop || i.clientTop || 0,
            o = n.clientLeft || i.clientLeft || 0,
            a = n === e ? e.scrollY : n.scrollTop,
            l = n === e ? e.scrollX : n.scrollLeft;
          return { top: s.top + a - r, left: s.left + l - o };
        }
        return null;
      },
      css: function (e, t) {
        const n = w();
        let s;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (s = 0; s < this.length; s += 1)
              for (const t in e) this[s].style[t] = e[t];
            return this;
          }
          if (this[0])
            return n.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, n) => {
              e.apply(t, [t, n]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = w(),
          n = y(),
          s = this[0];
        let i, r;
        if (!s || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (s.matches) return s.matches(e);
          if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
          if (s.msMatchesSelector) return s.msMatchesSelector(e);
          for (i = E(e), r = 0; r < i.length; r += 1) if (i[r] === s) return !0;
          return !1;
        }
        if (e === n) return s === n;
        if (e === t) return s === t;
        if (e.nodeType || e instanceof x) {
          for (i = e.nodeType ? [e] : e, r = 0; r < i.length; r += 1)
            if (i[r] === s) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return E([]);
        if (e < 0) {
          const n = t + e;
          return E(n < 0 ? [] : [this[n]]);
        }
        return E([this[e]]);
      },
      append: function (...e) {
        let t;
        const n = y();
        for (let s = 0; s < e.length; s += 1) {
          t = e[s];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const s = n.createElement("div");
              for (s.innerHTML = t; s.firstChild; )
                this[e].appendChild(s.firstChild);
            } else if (t instanceof x)
              for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = y();
        let n, s;
        for (n = 0; n < this.length; n += 1)
          if ("string" == typeof e) {
            const i = t.createElement("div");
            for (i.innerHTML = e, s = i.childNodes.length - 1; s >= 0; s -= 1)
              this[n].insertBefore(i.childNodes[s], this[n].childNodes[0]);
          } else if (e instanceof x)
            for (s = 0; s < e.length; s += 1)
              this[n].insertBefore(e[s], this[n].childNodes[0]);
          else this[n].insertBefore(e, this[n].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && E(this[0].nextElementSibling).is(e)
              ? E([this[0].nextElementSibling])
              : E([])
            : this[0].nextElementSibling
            ? E([this[0].nextElementSibling])
            : E([])
          : E([]);
      },
      nextAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return E([]);
        for (; n.nextElementSibling; ) {
          const s = n.nextElementSibling;
          e ? E(s).is(e) && t.push(s) : t.push(s), (n = s);
        }
        return E(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && E(t.previousElementSibling).is(e)
              ? E([t.previousElementSibling])
              : E([])
            : t.previousElementSibling
            ? E([t.previousElementSibling])
            : E([]);
        }
        return E([]);
      },
      prevAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return E([]);
        for (; n.previousElementSibling; ) {
          const s = n.previousElementSibling;
          e ? E(s).is(e) && t.push(s) : t.push(s), (n = s);
        }
        return E(t);
      },
      parent: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1)
          null !== this[n].parentNode &&
            (e
              ? E(this[n].parentNode).is(e) && t.push(this[n].parentNode)
              : t.push(this[n].parentNode));
        return E(t);
      },
      parents: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          let s = this[n].parentNode;
          for (; s; )
            e ? E(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
        }
        return E(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? E([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const s = this[n].querySelectorAll(e);
          for (let e = 0; e < s.length; e += 1) t.push(s[e]);
        }
        return E(t);
      },
      children: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const s = this[n].children;
          for (let n = 0; n < s.length; n += 1)
            (e && !E(s[n]).is(e)) || t.push(s[n]);
        }
        return E(t);
      },
      filter: function (e) {
        return E(C(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(_).forEach((e) => {
      Object.defineProperty(E.fn, e, { value: _[e], writable: !0 });
    });
    const A = E;
    function L(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function O() {
      return Date.now();
    }
    function P(e, t) {
      void 0 === t && (t = "x");
      const n = w();
      let s, i, r;
      const o = (function (e) {
        const t = w();
        let n;
        return (
          t.getComputedStyle && (n = t.getComputedStyle(e, null)),
          !n && e.currentStyle && (n = e.currentStyle),
          n || (n = e.style),
          n
        );
      })(e);
      return (
        n.WebKitCSSMatrix
          ? ((i = o.transform || o.webkitTransform),
            i.split(",").length > 6 &&
              (i = i
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new n.WebKitCSSMatrix("none" === i ? "" : i)))
          : ((r =
              o.MozTransform ||
              o.OTransform ||
              o.MsTransform ||
              o.msTransform ||
              o.transform ||
              o
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (s = r.toString().split(","))),
        "x" === t &&
          (i = n.WebKitCSSMatrix
            ? r.m41
            : 16 === s.length
            ? parseFloat(s[12])
            : parseFloat(s[4])),
        "y" === t &&
          (i = n.WebKitCSSMatrix
            ? r.m42
            : 16 === s.length
            ? parseFloat(s[13])
            : parseFloat(s[5])),
        i || 0
      );
    }
    function $(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function D(e) {
      return "undefined" != typeof window && void 0 !== window.HTMLElement
        ? e instanceof HTMLElement
        : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function M() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let n = 1; n < arguments.length; n += 1) {
        const s = n < 0 || arguments.length <= n ? void 0 : arguments[n];
        if (null != s && !D(s)) {
          const n = Object.keys(Object(s)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, i = n.length; t < i; t += 1) {
            const i = n[t],
              r = Object.getOwnPropertyDescriptor(s, i);
            void 0 !== r &&
              r.enumerable &&
              ($(e[i]) && $(s[i])
                ? s[i].__swiper__
                  ? (e[i] = s[i])
                  : M(e[i], s[i])
                : !$(e[i]) && $(s[i])
                ? ((e[i] = {}), s[i].__swiper__ ? (e[i] = s[i]) : M(e[i], s[i]))
                : (e[i] = s[i]));
          }
        }
      }
      return e;
    }
    function N(e, t, n) {
      e.style.setProperty(t, n);
    }
    function I(e) {
      let { swiper: t, targetPosition: n, side: s } = e;
      const i = w(),
        r = -t.translate;
      let o,
        a = null;
      const l = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        i.cancelAnimationFrame(t.cssModeFrameID);
      const c = n > r ? "next" : "prev",
        d = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
        u = () => {
          (o = new Date().getTime()), null === a && (a = o);
          const e = Math.max(Math.min((o - a) / l, 1), 0),
            c = 0.5 - Math.cos(e * Math.PI) / 2;
          let p = r + c * (n - r);
          if ((d(p, n) && (p = n), t.wrapperEl.scrollTo({ [s]: p }), d(p, n)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [s]: p });
              }),
              void i.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = i.requestAnimationFrame(u);
        };
      u();
    }
    let j, q, H;
    function z() {
      return (
        j ||
          (j = (function () {
            const e = w(),
              t = y();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const n = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, n);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        j
      );
    }
    function B(e) {
      return (
        void 0 === e && (e = {}),
        q ||
          (q = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const n = z(),
              s = w(),
              i = s.navigator.platform,
              r = t || s.navigator.userAgent,
              o = { ios: !1, android: !1 },
              a = s.screen.width,
              l = s.screen.height,
              c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = r.match(/(iPad).*OS\s([\d_]+)/);
            const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
              p = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              h = "Win32" === i;
            let f = "MacIntel" === i;
            return (
              !d &&
                f &&
                n.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${a}x${l}`) >= 0 &&
                ((d = r.match(/(Version)\/([\d.]+)/)),
                d || (d = [0, 1, "13_0_0"]),
                (f = !1)),
              c && !h && ((o.os = "android"), (o.android = !0)),
              (d || p || u) && ((o.os = "ios"), (o.ios = !0)),
              o
            );
          })(e)),
        q
      );
    }
    function R() {
      return (
        H ||
          (H = (function () {
            const e = w();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        H
      );
    }
    const F = {
      on(e, t, n) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof t) return s;
        const i = n ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            s.eventsListeners[e] || (s.eventsListeners[e] = []),
              s.eventsListeners[e][i](t);
          }),
          s
        );
      },
      once(e, t, n) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof t) return s;
        function i() {
          s.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
          for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          t.apply(s, r);
        }
        return (i.__emitterProxy = t), s.on(e, i, n);
      },
      onAny(e, t) {
        const n = this;
        if (!n.eventsListeners || n.destroyed) return n;
        if ("function" != typeof e) return n;
        const s = t ? "unshift" : "push";
        return (
          n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[s](e), n
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const n = t.eventsAnyListeners.indexOf(e);
        return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
      },
      off(e, t) {
        const n = this;
        return !n.eventsListeners || n.destroyed
          ? n
          : n.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (n.eventsListeners[e] = [])
                : n.eventsListeners[e] &&
                  n.eventsListeners[e].forEach((s, i) => {
                    (s === t || (s.__emitterProxy && s.__emitterProxy === t)) &&
                      n.eventsListeners[e].splice(i, 1);
                  });
            }),
            n)
          : n;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, n, s;
        for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
          r[o] = arguments[o];
        "string" == typeof r[0] || Array.isArray(r[0])
          ? ((t = r[0]), (n = r.slice(1, r.length)), (s = e))
          : ((t = r[0].events), (n = r[0].data), (s = r[0].context || e)),
          n.unshift(s);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(s, [t, ...n]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(s, n);
                });
          }),
          e
        );
      },
    };
    const W = {
      updateSize: function () {
        const e = this;
        let t, n;
        const s = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : s[0].clientWidth),
          (n =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : s[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === n && e.isVertical()) ||
            ((t =
              t -
              parseInt(s.css("padding-left") || 0, 10) -
              parseInt(s.css("padding-right") || 0, 10)),
            (n =
              n -
              parseInt(s.css("padding-top") || 0, 10) -
              parseInt(s.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(n) && (n = 0),
            Object.assign(e, {
              width: t,
              height: n,
              size: e.isHorizontal() ? t : n,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function n(e, n) {
          return parseFloat(e.getPropertyValue(t(n)) || 0);
        }
        const s = e.params,
          { $wrapperEl: i, size: r, rtlTranslate: o, wrongRTL: a } = e,
          l = e.virtual && s.virtual.enabled,
          c = l ? e.virtual.slides.length : e.slides.length,
          d = i.children(`.${e.params.slideClass}`),
          u = l ? e.virtual.slides.length : d.length;
        let p = [];
        const h = [],
          f = [];
        let g = s.slidesOffsetBefore;
        "function" == typeof g && (g = s.slidesOffsetBefore.call(e));
        let m = s.slidesOffsetAfter;
        "function" == typeof m && (m = s.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          y = e.slidesGrid.length;
        let b = s.spaceBetween,
          w = -g,
          x = 0,
          S = 0;
        if (void 0 === r) return;
        "string" == typeof b &&
          b.indexOf("%") >= 0 &&
          (b = (parseFloat(b.replace("%", "")) / 100) * r),
          (e.virtualSize = -b),
          o
            ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          s.centeredSlides &&
            s.cssMode &&
            (N(e.wrapperEl, "--swiper-centered-offset-before", ""),
            N(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const C = s.grid && s.grid.rows > 1 && e.grid;
        let E;
        C && e.grid.initSlides(u);
        const T =
          "auto" === s.slidesPerView &&
          s.breakpoints &&
          Object.keys(s.breakpoints).filter(
            (e) => void 0 !== s.breakpoints[e].slidesPerView
          ).length > 0;
        for (let i = 0; i < u; i += 1) {
          E = 0;
          const o = d.eq(i);
          if (
            (C && e.grid.updateSlide(i, o, u, t), "none" !== o.css("display"))
          ) {
            if ("auto" === s.slidesPerView) {
              T && (d[i].style[t("width")] = "");
              const r = getComputedStyle(o[0]),
                a = o[0].style.transform,
                l = o[0].style.webkitTransform;
              if (
                (a && (o[0].style.transform = "none"),
                l && (o[0].style.webkitTransform = "none"),
                s.roundLengths)
              )
                E = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
              else {
                const e = n(r, "width"),
                  t = n(r, "padding-left"),
                  s = n(r, "padding-right"),
                  i = n(r, "margin-left"),
                  a = n(r, "margin-right"),
                  l = r.getPropertyValue("box-sizing");
                if (l && "border-box" === l) E = e + i + a;
                else {
                  const { clientWidth: n, offsetWidth: r } = o[0];
                  E = e + t + s + i + a + (r - n);
                }
              }
              a && (o[0].style.transform = a),
                l && (o[0].style.webkitTransform = l),
                s.roundLengths && (E = Math.floor(E));
            } else
              (E = (r - (s.slidesPerView - 1) * b) / s.slidesPerView),
                s.roundLengths && (E = Math.floor(E)),
                d[i] && (d[i].style[t("width")] = `${E}px`);
            d[i] && (d[i].swiperSlideSize = E),
              f.push(E),
              s.centeredSlides
                ? ((w = w + E / 2 + x / 2 + b),
                  0 === x && 0 !== i && (w = w - r / 2 - b),
                  0 === i && (w = w - r / 2 - b),
                  Math.abs(w) < 0.001 && (w = 0),
                  s.roundLengths && (w = Math.floor(w)),
                  S % s.slidesPerGroup == 0 && p.push(w),
                  h.push(w))
                : (s.roundLengths && (w = Math.floor(w)),
                  (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                    e.params.slidesPerGroup ==
                    0 && p.push(w),
                  h.push(w),
                  (w = w + E + b)),
              (e.virtualSize += E + b),
              (x = E),
              (S += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, r) + m),
          o &&
            a &&
            ("slide" === s.effect || "coverflow" === s.effect) &&
            i.css({ width: `${e.virtualSize + s.spaceBetween}px` }),
          s.setWrapperSize &&
            i.css({ [t("width")]: `${e.virtualSize + s.spaceBetween}px` }),
          C && e.grid.updateWrapperSize(E, p, t),
          !s.centeredSlides)
        ) {
          const t = [];
          for (let n = 0; n < p.length; n += 1) {
            let i = p[n];
            s.roundLengths && (i = Math.floor(i)),
              p[n] <= e.virtualSize - r && t.push(i);
          }
          (p = t),
            Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 &&
              p.push(e.virtualSize - r);
        }
        if ((0 === p.length && (p = [0]), 0 !== s.spaceBetween)) {
          const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
          d.filter((e, t) => !s.cssMode || t !== d.length - 1).css({
            [n]: `${b}px`,
          });
        }
        if (s.centeredSlides && s.centeredSlidesBounds) {
          let e = 0;
          f.forEach((t) => {
            e += t + (s.spaceBetween ? s.spaceBetween : 0);
          }),
            (e -= s.spaceBetween);
          const t = e - r;
          p = p.map((e) => (e < 0 ? -g : e > t ? t + m : e));
        }
        if (s.centerInsufficientSlides) {
          let e = 0;
          if (
            (f.forEach((t) => {
              e += t + (s.spaceBetween ? s.spaceBetween : 0);
            }),
            (e -= s.spaceBetween),
            e < r)
          ) {
            const t = (r - e) / 2;
            p.forEach((e, n) => {
              p[n] = e - t;
            }),
              h.forEach((e, n) => {
                h[n] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: d,
            snapGrid: p,
            slidesGrid: h,
            slidesSizesGrid: f,
          }),
          s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
        ) {
          N(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
            N(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - f[f.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            n = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + n));
        }
        if (
          (u !== c && e.emit("slidesLengthChange"),
          p.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          h.length !== y && e.emit("slidesGridLengthChange"),
          s.watchSlidesProgress && e.updateSlidesOffset(),
          !(l || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
        ) {
          const t = `${s.containerModifierClass}backface-hidden`,
            n = e.$el.hasClass(t);
          u <= s.maxBackfaceHiddenSlides
            ? n || e.$el.addClass(t)
            : n && e.$el.removeClass(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          n = [],
          s = t.virtual && t.params.virtual.enabled;
        let i,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const o = (e) =>
          s
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            t.visibleSlides.each((e) => {
              n.push(e);
            });
          else
            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
              const e = t.activeIndex + i;
              if (e > t.slides.length && !s) break;
              n.push(o(e));
            }
        else n.push(o(t.activeIndex));
        for (i = 0; i < n.length; i += 1)
          if (void 0 !== n[i]) {
            const e = n[i].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let n = 0; n < t.length; n += 1)
          t[n].swiperSlideOffset = e.isHorizontal()
            ? t[n].offsetLeft
            : t[n].offsetTop;
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          n = t.params,
          { slides: s, rtlTranslate: i, snapGrid: r } = t;
        if (0 === s.length) return;
        void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
        let o = -e;
        i && (o = e),
          s.removeClass(n.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < s.length; e += 1) {
          const a = s[e];
          let l = a.swiperSlideOffset;
          n.cssMode && n.centeredSlides && (l -= s[0].swiperSlideOffset);
          const c =
              (o + (n.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + n.spaceBetween),
            d =
              (o - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + n.spaceBetween),
            u = -(o - l),
            p = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (p > 1 && p <= t.size) ||
            (u <= 0 && p >= t.size)) &&
            (t.visibleSlides.push(a),
            t.visibleSlidesIndexes.push(e),
            s.eq(e).addClass(n.slideVisibleClass)),
            (a.progress = i ? -c : c),
            (a.originalProgress = i ? -d : d);
        }
        t.visibleSlides = A(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const n = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * n) || 0;
        }
        const n = t.params,
          s = t.maxTranslate() - t.minTranslate();
        let { progress: i, isBeginning: r, isEnd: o } = t;
        const a = r,
          l = o;
        0 === s
          ? ((i = 0), (r = !0), (o = !0))
          : ((i = (e - t.minTranslate()) / s), (r = i <= 0), (o = i >= 1)),
          Object.assign(t, { progress: i, isBeginning: r, isEnd: o }),
          (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !a && t.emit("reachBeginning toEdge"),
          o && !l && t.emit("reachEnd toEdge"),
          ((a && !r) || (l && !o)) && t.emit("fromEdge"),
          t.emit("progress", i);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: n,
            $wrapperEl: s,
            activeIndex: i,
            realIndex: r,
          } = e,
          o = e.virtual && n.virtual.enabled;
        let a;
        t.removeClass(
          `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
        ),
          (a = o
            ? e.$wrapperEl.find(
                `.${n.slideClass}[data-swiper-slide-index="${i}"]`
              )
            : t.eq(i)),
          a.addClass(n.slideActiveClass),
          n.loop &&
            (a.hasClass(n.slideDuplicateClass)
              ? s
                  .children(
                    `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(n.slideDuplicateActiveClass)
              : s
                  .children(
                    `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(n.slideDuplicateActiveClass));
        let l = a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
        n.loop &&
          0 === l.length &&
          ((l = t.eq(0)), l.addClass(n.slideNextClass));
        let c = a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
        n.loop &&
          0 === c.length &&
          ((c = t.eq(-1)), c.addClass(n.slidePrevClass)),
          n.loop &&
            (l.hasClass(n.slideDuplicateClass)
              ? s
                  .children(
                    `.${n.slideClass}:not(.${
                      n.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicateNextClass)
              : s
                  .children(
                    `.${n.slideClass}.${
                      n.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicateNextClass),
            c.hasClass(n.slideDuplicateClass)
              ? s
                  .children(
                    `.${n.slideClass}:not(.${
                      n.slideDuplicateClass
                    })[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicatePrevClass)
              : s
                  .children(
                    `.${n.slideClass}.${
                      n.slideDuplicateClass
                    }[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          n = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: s,
            snapGrid: i,
            params: r,
            activeIndex: o,
            realIndex: a,
            snapIndex: l,
          } = t;
        let c,
          d = e;
        if (void 0 === d) {
          for (let e = 0; e < s.length; e += 1)
            void 0 !== s[e + 1]
              ? n >= s[e] && n < s[e + 1] - (s[e + 1] - s[e]) / 2
                ? (d = e)
                : n >= s[e] && n < s[e + 1] && (d = e + 1)
              : n >= s[e] && (d = e);
          r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
        }
        if (i.indexOf(n) >= 0) c = i.indexOf(n);
        else {
          const e = Math.min(r.slidesPerGroupSkip, d);
          c = e + Math.floor((d - e) / r.slidesPerGroup);
        }
        if ((c >= i.length && (c = i.length - 1), d === o))
          return void (
            c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
          );
        const u = parseInt(
          t.slides.eq(d).attr("data-swiper-slide-index") || d,
          10
        );
        Object.assign(t, {
          snapIndex: c,
          realIndex: u,
          previousIndex: o,
          activeIndex: d,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          a !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          n = t.params,
          s = A(e).closest(`.${n.slideClass}`)[0];
        let i,
          r = !1;
        if (s)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === s) {
              (r = !0), (i = e);
              break;
            }
        if (!s || !r)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = s),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                A(s).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = i),
          n.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const G = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const {
          params: t,
          rtlTranslate: n,
          translate: s,
          $wrapperEl: i,
        } = this;
        if (t.virtualTranslate) return n ? -s : s;
        if (t.cssMode) return s;
        let r = P(i[0], e);
        return n && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const n = this,
          {
            rtlTranslate: s,
            params: i,
            $wrapperEl: r,
            wrapperEl: o,
            progress: a,
          } = n;
        let l,
          c = 0,
          d = 0;
        n.isHorizontal() ? (c = s ? -e : e) : (d = e),
          i.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
          i.cssMode
            ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                n.isHorizontal() ? -c : -d)
            : i.virtualTranslate ||
              r.transform(`translate3d(${c}px, ${d}px, 0px)`),
          (n.previousTranslate = n.translate),
          (n.translate = n.isHorizontal() ? c : d);
        const u = n.maxTranslate() - n.minTranslate();
        (l = 0 === u ? 0 : (e - n.minTranslate()) / u),
          l !== a && n.updateProgress(e),
          n.emit("setTranslate", n.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, n, s, i) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === n && (n = !0),
          void 0 === s && (s = !0);
        const r = this,
          { params: o, wrapperEl: a } = r;
        if (r.animating && o.preventInteractionOnTransition) return !1;
        const l = r.minTranslate(),
          c = r.maxTranslate();
        let d;
        if (
          ((d = s && e > l ? l : s && e < c ? c : e),
          r.updateProgress(d),
          o.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!r.support.smoothScroll)
              return (
                I({ swiper: r, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(d),
              n &&
                (r.emit("beforeTransitionStart", t, i),
                r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(d),
              n &&
                (r.emit("beforeTransitionStart", t, i),
                r.emit("transitionStart")),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      n && r.emit("transitionEnd"));
                  }),
                r.$wrapperEl[0].addEventListener(
                  "transitionend",
                  r.onTranslateToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  r.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function V(e) {
      let { swiper: t, runCallbacks: n, direction: s, step: i } = e;
      const { activeIndex: r, previousIndex: o } = t;
      let a = s;
      if (
        (a || (a = r > o ? "next" : r < o ? "prev" : "reset"),
        t.emit(`transition${i}`),
        n && r !== o)
      ) {
        if ("reset" === a) return void t.emit(`slideResetTransition${i}`);
        t.emit(`slideChangeTransition${i}`),
          "next" === a
            ? t.emit(`slideNextTransition${i}`)
            : t.emit(`slidePrevTransition${i}`);
      }
    }
    const X = {
      slideTo: function (e, t, n, s, i) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === n && (n = !0),
          "number" != typeof e && "string" != typeof e)
        )
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          );
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const r = this;
        let o = e;
        o < 0 && (o = 0);
        const {
          params: a,
          snapGrid: l,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: u,
          rtlTranslate: p,
          wrapperEl: h,
          enabled: f,
        } = r;
        if (
          (r.animating && a.preventInteractionOnTransition) ||
          (!f && !s && !i)
        )
          return !1;
        const g = Math.min(r.params.slidesPerGroupSkip, o);
        let m = g + Math.floor((o - g) / r.params.slidesPerGroup);
        m >= l.length && (m = l.length - 1),
          (u || a.initialSlide || 0) === (d || 0) &&
            n &&
            r.emit("beforeSlideChangeStart");
        const v = -l[m];
        if ((r.updateProgress(v), a.normalizeSlideIndex))
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * v),
              n = Math.floor(100 * c[e]),
              s = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= n && t < s - (s - n) / 2
                ? (o = e)
                : t >= n && t < s && (o = e + 1)
              : t >= n && (o = e);
          }
        if (r.initialized && o !== u) {
          if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
            return !1;
          if (
            !r.allowSlidePrev &&
            v > r.translate &&
            v > r.maxTranslate() &&
            (u || 0) !== o
          )
            return !1;
        }
        let y;
        if (
          ((y = o > u ? "next" : o < u ? "prev" : "reset"),
          (p && -v === r.translate) || (!p && v === r.translate))
        )
          return (
            r.updateActiveIndex(o),
            a.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== a.effect && r.setTranslate(v),
            "reset" !== y && (r.transitionStart(n, y), r.transitionEnd(n, y)),
            !1
          );
        if (a.cssMode) {
          const e = r.isHorizontal(),
            n = p ? v : -v;
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            t &&
              ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
              (h[e ? "scrollLeft" : "scrollTop"] = n),
              t &&
                requestAnimationFrame(() => {
                  (r.wrapperEl.style.scrollSnapType = ""),
                    (r._swiperImmediateVirtual = !1);
                });
          } else {
            if (!r.support.smoothScroll)
              return (
                I({ swiper: r, targetPosition: n, side: e ? "left" : "top" }),
                !0
              );
            h.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
          }
          return !0;
        }
        return (
          r.setTransition(t),
          r.setTranslate(v),
          r.updateActiveIndex(o),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, s),
          r.transitionStart(n, y),
          0 === t
            ? r.transitionEnd(n, y)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(n, y));
                }),
              r.$wrapperEl[0].addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                r.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e, t, n, s) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === n && (n = !0);
        const i = this;
        let r = e;
        return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, n, s);
      },
      slideNext: function (e, t, n) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const s = this,
          { animating: i, enabled: r, params: o } = s;
        if (!r) return s;
        let a = o.slidesPerGroup;
        "auto" === o.slidesPerView &&
          1 === o.slidesPerGroup &&
          o.slidesPerGroupAuto &&
          (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
        const l = s.activeIndex < o.slidesPerGroupSkip ? 1 : a;
        if (o.loop) {
          if (i && o.loopPreventsSlide) return !1;
          s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
        }
        return o.rewind && s.isEnd
          ? s.slideTo(0, e, t, n)
          : s.slideTo(s.activeIndex + l, e, t, n);
      },
      slidePrev: function (e, t, n) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const s = this,
          {
            params: i,
            animating: r,
            snapGrid: o,
            slidesGrid: a,
            rtlTranslate: l,
            enabled: c,
          } = s;
        if (!c) return s;
        if (i.loop) {
          if (r && i.loopPreventsSlide) return !1;
          s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
        }
        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = d(l ? s.translate : -s.translate),
          p = o.map((e) => d(e));
        let h = o[p.indexOf(u) - 1];
        if (void 0 === h && i.cssMode) {
          let e;
          o.forEach((t, n) => {
            u >= t && (e = n);
          }),
            void 0 !== e && (h = o[e > 0 ? e - 1 : e]);
        }
        let f = 0;
        if (
          (void 0 !== h &&
            ((f = a.indexOf(h)),
            f < 0 && (f = s.activeIndex - 1),
            "auto" === i.slidesPerView &&
              1 === i.slidesPerGroup &&
              i.slidesPerGroupAuto &&
              ((f = f - s.slidesPerViewDynamic("previous", !0) + 1),
              (f = Math.max(f, 0)))),
          i.rewind && s.isBeginning)
        ) {
          const i =
            s.params.virtual && s.params.virtual.enabled && s.virtual
              ? s.virtual.slides.length - 1
              : s.slides.length - 1;
          return s.slideTo(i, e, t, n);
        }
        return s.slideTo(f, e, t, n);
      },
      slideReset: function (e, t, n) {
        return (
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, n)
        );
      },
      slideToClosest: function (e, t, n, s) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === s && (s = 0.5);
        const i = this;
        let r = i.activeIndex;
        const o = Math.min(i.params.slidesPerGroupSkip, r),
          a = o + Math.floor((r - o) / i.params.slidesPerGroup),
          l = i.rtlTranslate ? i.translate : -i.translate;
        if (l >= i.snapGrid[a]) {
          const e = i.snapGrid[a];
          l - e > (i.snapGrid[a + 1] - e) * s && (r += i.params.slidesPerGroup);
        } else {
          const e = i.snapGrid[a - 1];
          l - e <= (i.snapGrid[a] - e) * s && (r -= i.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, i.slidesGrid.length - 1)),
          i.slideTo(r, e, t, n)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: n } = e,
          s =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let i,
          r = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (i = parseInt(A(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? r < e.loopedSlides - s / 2 ||
                r > e.slides.length - e.loopedSlides + s / 2
                ? (e.loopFix(),
                  (r = n
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  L(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - s
              ? (e.loopFix(),
                (r = n
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                L(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
        } else e.slideTo(r);
      },
    };
    const U = {
      loopCreate: function () {
        const e = this,
          t = y(),
          { params: n, $wrapperEl: s } = e,
          i = s.children().length > 0 ? A(s.children()[0].parentNode) : s;
        i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
        let r = i.children(`.${n.slideClass}`);
        if (n.loopFillGroupWithBlank) {
          const e = n.slidesPerGroup - (r.length % n.slidesPerGroup);
          if (e !== n.slidesPerGroup) {
            for (let s = 0; s < e; s += 1) {
              const e = A(t.createElement("div")).addClass(
                `${n.slideClass} ${n.slideBlankClass}`
              );
              i.append(e);
            }
            r = i.children(`.${n.slideClass}`);
          }
        }
        "auto" !== n.slidesPerView ||
          n.loopedSlides ||
          (n.loopedSlides = r.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(n.loopedSlides || n.slidesPerView, 10)
          )),
          (e.loopedSlides += n.loopAdditionalSlides),
          e.loopedSlides > r.length && (e.loopedSlides = r.length);
        const o = [],
          a = [];
        r.each((t, n) => {
          const s = A(t);
          n < e.loopedSlides && a.push(t),
            n < r.length && n >= r.length - e.loopedSlides && o.push(t),
            s.attr("data-swiper-slide-index", n);
        });
        for (let e = 0; e < a.length; e += 1)
          i.append(A(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
        for (let e = o.length - 1; e >= 0; e -= 1)
          i.prepend(A(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: n,
          loopedSlides: s,
          allowSlidePrev: i,
          allowSlideNext: r,
          snapGrid: o,
          rtlTranslate: a,
        } = e;
        let l;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const c = -o[t] - e.getTranslate();
        if (t < s) {
          (l = n.length - 3 * s + t), (l += s);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((a ? -e.translate : e.translate) - c);
        } else if (t >= n.length - s) {
          (l = -n.length + t + s), (l += s);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((a ? -e.translate : e.translate) - c);
        }
        (e.allowSlidePrev = i), (e.allowSlideNext = r), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: n } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          n.removeAttr("data-swiper-slide-index");
      },
    };
    function Y(e) {
      const t = this,
        n = y(),
        s = w(),
        i = t.touchEventsData,
        { params: r, touches: o, enabled: a } = t;
      if (!a) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let c = A(l.target);
      if ("wrapper" === r.touchEventsTarget && !c.closest(t.wrapperEl).length)
        return;
      if (
        ((i.isTouchEvent = "touchstart" === l.type),
        !i.isTouchEvent && "which" in l && 3 === l.which)
      )
        return;
      if (!i.isTouchEvent && "button" in l && l.button > 0) return;
      if (i.isTouched && i.isMoved) return;
      !!r.noSwipingClass &&
        "" !== r.noSwipingClass &&
        l.target &&
        l.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (c = A(e.path[0]));
      const d = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        u = !(!l.target || !l.target.shadowRoot);
      if (
        r.noSwiping &&
        (u
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(n) {
                  return n && n !== y() && n !== w()
                    ? (n.assignedSlot && (n = n.assignedSlot),
                      n.closest(e) || t(n.getRootNode().host))
                    : null;
                })(t)
              );
            })(d, l.target)
          : c.closest(d)[0])
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !c.closest(r.swipeHandler)[0]) return;
      (o.currentX =
        "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
        (o.currentY =
          "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
      const p = o.currentX,
        h = o.currentY,
        f = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        g = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (f && (p <= g || p >= s.innerWidth - g)) {
        if ("prevent" !== f) return;
        e.preventDefault();
      }
      if (
        (Object.assign(i, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (o.startX = p),
        (o.startY = h),
        (i.touchStartTime = O()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (i.allowThresholdMove = !1),
        "touchstart" !== l.type)
      ) {
        let e = !0;
        c.is(i.focusableElements) &&
          ((e = !1), "SELECT" === c[0].nodeName && (i.isTouched = !1)),
          n.activeElement &&
            A(n.activeElement).is(i.focusableElements) &&
            n.activeElement !== c[0] &&
            n.activeElement.blur();
        const s = e && t.allowTouchMove && r.touchStartPreventDefault;
        (!r.touchStartForcePreventDefault && !s) ||
          c[0].isContentEditable ||
          l.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !r.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", l);
    }
    function Q(e) {
      const t = y(),
        n = this,
        s = n.touchEventsData,
        { params: i, touches: r, rtlTranslate: o, enabled: a } = n;
      if (!a) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !s.isTouched))
        return void (
          s.startMoving &&
          s.isScrolling &&
          n.emit("touchMoveOpposite", l)
        );
      if (s.isTouchEvent && "touchmove" !== l.type) return;
      const c =
          "touchmove" === l.type &&
          l.targetTouches &&
          (l.targetTouches[0] || l.changedTouches[0]),
        d = "touchmove" === l.type ? c.pageX : l.pageX,
        u = "touchmove" === l.type ? c.pageY : l.pageY;
      if (l.preventedByNestedSwiper) return (r.startX = d), void (r.startY = u);
      if (!n.allowTouchMove)
        return (
          A(l.target).is(s.focusableElements) || (n.allowClick = !1),
          void (
            s.isTouched &&
            (Object.assign(r, {
              startX: d,
              startY: u,
              currentX: d,
              currentY: u,
            }),
            (s.touchStartTime = O()))
          )
        );
      if (s.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
        if (n.isVertical()) {
          if (
            (u < r.startY && n.translate <= n.maxTranslate()) ||
            (u > r.startY && n.translate >= n.minTranslate())
          )
            return (s.isTouched = !1), void (s.isMoved = !1);
        } else if (
          (d < r.startX && n.translate <= n.maxTranslate()) ||
          (d > r.startX && n.translate >= n.minTranslate())
        )
          return;
      if (
        s.isTouchEvent &&
        t.activeElement &&
        l.target === t.activeElement &&
        A(l.target).is(s.focusableElements)
      )
        return (s.isMoved = !0), void (n.allowClick = !1);
      if (
        (s.allowTouchCallbacks && n.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (r.currentX = d), (r.currentY = u);
      const p = r.currentX - r.startX,
        h = r.currentY - r.startY;
      if (n.params.threshold && Math.sqrt(p ** 2 + h ** 2) < n.params.threshold)
        return;
      if (void 0 === s.isScrolling) {
        let e;
        (n.isHorizontal() && r.currentY === r.startY) ||
        (n.isVertical() && r.currentX === r.startX)
          ? (s.isScrolling = !1)
          : p * p + h * h >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(h), Math.abs(p))) / Math.PI),
            (s.isScrolling = n.isHorizontal()
              ? e > i.touchAngle
              : 90 - e > i.touchAngle));
      }
      if (
        (s.isScrolling && n.emit("touchMoveOpposite", l),
        void 0 === s.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (s.startMoving = !0)),
        s.isScrolling)
      )
        return void (s.isTouched = !1);
      if (!s.startMoving) return;
      (n.allowClick = !1),
        !i.cssMode && l.cancelable && l.preventDefault(),
        i.touchMoveStopPropagation && !i.nested && l.stopPropagation(),
        s.isMoved ||
          (i.loop && !i.cssMode && n.loopFix(),
          (s.startTranslate = n.getTranslate()),
          n.setTransition(0),
          n.animating &&
            n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (s.allowMomentumBounce = !1),
          !i.grabCursor ||
            (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
            n.setGrabCursor(!0),
          n.emit("sliderFirstMove", l)),
        n.emit("sliderMove", l),
        (s.isMoved = !0);
      let f = n.isHorizontal() ? p : h;
      (r.diff = f),
        (f *= i.touchRatio),
        o && (f = -f),
        (n.swipeDirection = f > 0 ? "prev" : "next"),
        (s.currentTranslate = f + s.startTranslate);
      let g = !0,
        m = i.resistanceRatio;
      if (
        (i.touchReleaseOnEdges && (m = 0),
        f > 0 && s.currentTranslate > n.minTranslate()
          ? ((g = !1),
            i.resistance &&
              (s.currentTranslate =
                n.minTranslate() -
                1 +
                (-n.minTranslate() + s.startTranslate + f) ** m))
          : f < 0 &&
            s.currentTranslate < n.maxTranslate() &&
            ((g = !1),
            i.resistance &&
              (s.currentTranslate =
                n.maxTranslate() +
                1 -
                (n.maxTranslate() - s.startTranslate - f) ** m)),
        g && (l.preventedByNestedSwiper = !0),
        !n.allowSlideNext &&
          "next" === n.swipeDirection &&
          s.currentTranslate < s.startTranslate &&
          (s.currentTranslate = s.startTranslate),
        !n.allowSlidePrev &&
          "prev" === n.swipeDirection &&
          s.currentTranslate > s.startTranslate &&
          (s.currentTranslate = s.startTranslate),
        n.allowSlidePrev ||
          n.allowSlideNext ||
          (s.currentTranslate = s.startTranslate),
        i.threshold > 0)
      ) {
        if (!(Math.abs(f) > i.threshold || s.allowThresholdMove))
          return void (s.currentTranslate = s.startTranslate);
        if (!s.allowThresholdMove)
          return (
            (s.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (s.currentTranslate = s.startTranslate),
            void (r.diff = n.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      i.followFinger &&
        !i.cssMode &&
        (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
          i.watchSlidesProgress) &&
          (n.updateActiveIndex(), n.updateSlidesClasses()),
        n.params.freeMode &&
          i.freeMode.enabled &&
          n.freeMode &&
          n.freeMode.onTouchMove(),
        n.updateProgress(s.currentTranslate),
        n.setTranslate(s.currentTranslate));
    }
    function J(e) {
      const t = this,
        n = t.touchEventsData,
        {
          params: s,
          touches: i,
          rtlTranslate: r,
          slidesGrid: o,
          enabled: a,
        } = t;
      if (!a) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        n.allowTouchCallbacks && t.emit("touchEnd", l),
        (n.allowTouchCallbacks = !1),
        !n.isTouched)
      )
        return (
          n.isMoved && s.grabCursor && t.setGrabCursor(!1),
          (n.isMoved = !1),
          void (n.startMoving = !1)
        );
      s.grabCursor &&
        n.isMoved &&
        n.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = O(),
        d = c - n.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          d < 300 &&
            c - n.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((n.lastClickTime = O()),
        L(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !n.isTouched ||
          !n.isMoved ||
          !t.swipeDirection ||
          0 === i.diff ||
          n.currentTranslate === n.startTranslate)
      )
        return (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1);
      let u;
      if (
        ((n.isTouched = !1),
        (n.isMoved = !1),
        (n.startMoving = !1),
        (u = s.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -n.currentTranslate),
        s.cssMode)
      )
        return;
      if (t.params.freeMode && s.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let p = 0,
        h = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < o.length;
        e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
      ) {
        const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        void 0 !== o[e + t]
          ? u >= o[e] && u < o[e + t] && ((p = e), (h = o[e + t] - o[e]))
          : u >= o[e] && ((p = e), (h = o[o.length - 1] - o[o.length - 2]));
      }
      let f = null,
        g = null;
      s.rewind &&
        (t.isBeginning
          ? (g =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (f = 0));
      const m = (u - o[p]) / h,
        v = p < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
      if (d > s.longSwipesMs) {
        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (m >= s.longSwipesRatio
            ? t.slideTo(s.rewind && t.isEnd ? f : p + v)
            : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (m > 1 - s.longSwipesRatio
              ? t.slideTo(p + v)
              : null !== g && m < 0 && Math.abs(m) > s.longSwipesRatio
              ? t.slideTo(g)
              : t.slideTo(p));
      } else {
        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
          ? l.target === t.navigation.nextEl
            ? t.slideTo(p + v)
            : t.slideTo(p)
          : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : p + v),
            "prev" === t.swipeDirection && t.slideTo(null !== g ? g : p));
      }
    }
    function K() {
      const e = this,
        { params: t, el: n } = e;
      if (n && 0 === n.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: s, allowSlidePrev: i, snapGrid: r } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = i),
        (e.allowSlideNext = s),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function Z(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function ee() {
      const e = this,
        { wrapperEl: t, rtlTranslate: n, enabled: s } = e;
      if (!s) return;
      let i;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let te = !1;
    function ne() {}
    const se = (e, t) => {
      const n = y(),
        {
          params: s,
          touchEvents: i,
          el: r,
          wrapperEl: o,
          device: a,
          support: l,
        } = e,
        c = !!s.nested,
        d = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;
      if (l.touch) {
        const t = !(
          "touchstart" !== i.start ||
          !l.passiveListener ||
          !s.passiveListeners
        ) && { passive: !0, capture: !1 };
        r[d](i.start, e.onTouchStart, t),
          r[d](
            i.move,
            e.onTouchMove,
            l.passiveListener ? { passive: !1, capture: c } : c
          ),
          r[d](i.end, e.onTouchEnd, t),
          i.cancel && r[d](i.cancel, e.onTouchEnd, t);
      } else
        r[d](i.start, e.onTouchStart, !1),
          n[d](i.move, e.onTouchMove, c),
          n[d](i.end, e.onTouchEnd, !1);
      (s.preventClicks || s.preventClicksPropagation) &&
        r[d]("click", e.onClick, !0),
        s.cssMode && o[d]("scroll", e.onScroll),
        s.updateOnWindowResize
          ? e[u](
              a.ios || a.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              K,
              !0
            )
          : e[u]("observerUpdate", K, !0);
    };
    const ie = {
        attachEvents: function () {
          const e = this,
            t = y(),
            { params: n, support: s } = e;
          (e.onTouchStart = Y.bind(e)),
            (e.onTouchMove = Q.bind(e)),
            (e.onTouchEnd = J.bind(e)),
            n.cssMode && (e.onScroll = ee.bind(e)),
            (e.onClick = Z.bind(e)),
            s.touch && !te && (t.addEventListener("touchstart", ne), (te = !0)),
            se(e, "on");
        },
        detachEvents: function () {
          se(this, "off");
        },
      },
      re = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const oe = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: n,
            loopedSlides: s = 0,
            params: i,
            $el: r,
          } = e,
          o = i.breakpoints;
        if (!o || (o && 0 === Object.keys(o).length)) return;
        const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
        if (!a || e.currentBreakpoint === a) return;
        const l = (a in o ? o[a] : void 0) || e.originalParams,
          c = re(e, i),
          d = re(e, l),
          u = i.enabled;
        c && !d
          ? (r.removeClass(
              `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !c &&
            d &&
            (r.addClass(`${i.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === i.grid.fill)) &&
              r.addClass(`${i.containerModifierClass}grid-column`),
            e.emitContainerClasses());
        const p = l.direction && l.direction !== i.direction,
          h = i.loop && (l.slidesPerView !== i.slidesPerView || p);
        p && n && e.changeDirection(), M(e.params, l);
        const f = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          u && !f ? e.disable() : !u && f && e.enable(),
          (e.currentBreakpoint = a),
          e.emit("_beforeBreakpoint", l),
          h &&
            n &&
            (e.loopDestroy(),
            e.loopCreate(),
            e.updateSlides(),
            e.slideTo(t - s + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t, n) {
        if ((void 0 === t && (t = "window"), !e || ("container" === t && !n)))
          return;
        let s = !1;
        const i = w(),
          r = "window" === t ? i.innerHeight : n.clientHeight,
          o = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: r * t, point: e };
            }
            return { value: e, point: e };
          });
        o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < o.length; e += 1) {
          const { point: r, value: a } = o[e];
          "window" === t
            ? i.matchMedia(`(min-width: ${a}px)`).matches && (s = r)
            : a <= n.clientWidth && (s = r);
        }
        return s || "max";
      },
    };
    const ae = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: n,
            rtl: s,
            $el: i,
            device: r,
            support: o,
          } = e,
          a = (function (e, t) {
            const n = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((s) => {
                      e[s] && n.push(t + s);
                    })
                  : "string" == typeof e && n.push(t + e);
              }),
              n
            );
          })(
            [
              "initialized",
              n.direction,
              { "pointer-events": !o.touch },
              { "free-mode": e.params.freeMode && n.freeMode.enabled },
              { autoheight: n.autoHeight },
              { rtl: s },
              { grid: n.grid && n.grid.rows > 1 },
              {
                "grid-column":
                  n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
              },
              { android: r.android },
              { ios: r.ios },
              { "css-mode": n.cssMode },
              { centered: n.cssMode && n.centeredSlides },
              { "watch-progress": n.watchSlidesProgress },
            ],
            n.containerModifierClass
          );
        t.push(...a), i.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const le = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function ce(e, t) {
      return function (n) {
        void 0 === n && (n = {});
        const s = Object.keys(n)[0],
          i = n[s];
        "object" == typeof i && null !== i
          ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
              !0 === e[s] &&
              (e[s] = { auto: !0 }),
            s in e && "enabled" in i
              ? (!0 === e[s] && (e[s] = { enabled: !0 }),
                "object" != typeof e[s] ||
                  "enabled" in e[s] ||
                  (e[s].enabled = !0),
                e[s] || (e[s] = { enabled: !1 }),
                M(t, n))
              : M(t, n))
          : M(t, n);
      };
    }
    const de = {
        eventsEmitter: F,
        update: W,
        translate: G,
        transition: {
          setTransition: function (e, t) {
            const n = this;
            n.params.cssMode || n.$wrapperEl.transition(e),
              n.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const n = this,
              { params: s } = n;
            s.cssMode ||
              (s.autoHeight && n.updateAutoHeight(),
              V({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const n = this,
              { params: s } = n;
            (n.animating = !1),
              s.cssMode ||
                (n.setTransition(0),
                V({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: X,
        loop: U,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const n =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (n.style.cursor = "move"),
              (n.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: ie,
        breakpoints: oe,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: n } = e,
              { slidesOffsetBefore: s } = n;
            if (s) {
              const t = e.slides.length - 1,
                n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
              e.isLocked = e.size > n;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: ae,
        images: {
          loadImage: function (e, t, n, s, i, r) {
            const o = w();
            let a;
            function l() {
              r && r();
            }
            A(e).parent("picture")[0] || (e.complete && i)
              ? l()
              : t
              ? ((a = new o.Image()),
                (a.onload = l),
                (a.onerror = l),
                s && (a.sizes = s),
                n && (a.srcset = n),
                t && (a.src = t))
              : l();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let n = 0; n < e.imagesToLoad.length; n += 1) {
              const s = e.imagesToLoad[n];
              e.loadImage(
                s,
                s.currentSrc || s.getAttribute("src"),
                s.srcset || s.getAttribute("srcset"),
                s.sizes || s.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      ue = {};
    class pe {
      constructor() {
        let e, t;
        for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++)
          s[i] = arguments[i];
        if (
          (1 === s.length &&
          s[0].constructor &&
          "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
            ? (t = s[0])
            : ([e, t] = s),
          t || (t = {}),
          (t = M({}, t)),
          e && !t.el && (t.el = e),
          t.el && A(t.el).length > 1)
        ) {
          const e = [];
          return (
            A(t.el).each((n) => {
              const s = M({}, t, { el: n });
              e.push(new pe(s));
            }),
            e
          );
        }
        const r = this;
        (r.__swiper__ = !0),
          (r.support = z()),
          (r.device = B({ userAgent: t.userAgent })),
          (r.browser = R()),
          (r.eventsListeners = {}),
          (r.eventsAnyListeners = []),
          (r.modules = [...r.__modules__]),
          t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
        const o = {};
        r.modules.forEach((e) => {
          e({
            swiper: r,
            extendParams: ce(t, o),
            on: r.on.bind(r),
            once: r.once.bind(r),
            off: r.off.bind(r),
            emit: r.emit.bind(r),
          });
        });
        const a = M({}, le, o);
        return (
          (r.params = M({}, a, ue, t)),
          (r.originalParams = M({}, r.params)),
          (r.passedParams = M({}, t)),
          r.params &&
            r.params.on &&
            Object.keys(r.params.on).forEach((e) => {
              r.on(e, r.params.on[e]);
            }),
          r.params && r.params.onAny && r.onAny(r.params.onAny),
          (r.$ = A),
          Object.assign(r, {
            enabled: r.params.enabled,
            el: e,
            classNames: [],
            slides: A(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === r.params.direction,
            isVertical: () => "vertical" === r.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (r.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (r.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                r.support.touch || !r.params.simulateTouch
                  ? r.touchEventsTouch
                  : r.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: r.params.focusableElements,
              lastClickTime: O(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          r.emit("_swiper"),
          r.params.init && r.init(),
          r
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const n = this;
        e = Math.min(Math.max(e, 0), 1);
        const s = n.minTranslate(),
          i = (n.maxTranslate() - s) * e + s;
        n.translateTo(i, void 0 === t ? 0 : t),
          n.updateActiveIndex(),
          n.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((n) => {
          const s = e.getSlideClasses(n);
          t.push({ slideEl: n, classNames: s }), e.emit("_slideClass", n, s);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: n,
          slides: s,
          slidesGrid: i,
          slidesSizesGrid: r,
          size: o,
          activeIndex: a,
        } = this;
        let l = 1;
        if (n.centeredSlides) {
          let e,
            t = s[a].swiperSlideSize;
          for (let n = a + 1; n < s.length; n += 1)
            s[n] &&
              !e &&
              ((t += s[n].swiperSlideSize), (l += 1), t > o && (e = !0));
          for (let n = a - 1; n >= 0; n -= 1)
            s[n] &&
              !e &&
              ((t += s[n].swiperSlideSize), (l += 1), t > o && (e = !0));
        } else if ("current" === e)
          for (let e = a + 1; e < s.length; e += 1) {
            (t ? i[e] + r[e] - i[a] < o : i[e] - i[a] < o) && (l += 1);
          }
        else
          for (let e = a - 1; e >= 0; e -= 1) {
            i[a] - i[e] < o && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: n } = e;
        function s() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let i;
        n.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (s(), e.params.autoHeight && e.updateAutoHeight())
            : ((i =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              i || s()),
          n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const n = this,
          s = n.params.direction;
        return (
          e || (e = "horizontal" === s ? "vertical" : "horizontal"),
          e === s ||
            ("horizontal" !== e && "vertical" !== e) ||
            (n.$el
              .removeClass(`${n.params.containerModifierClass}${s}`)
              .addClass(`${n.params.containerModifierClass}${e}`),
            n.emitContainerClasses(),
            (n.params.direction = e),
            n.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            n.emit("changeDirection"),
            t && n.update()),
          n
        );
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const n = A(e || t.params.el);
        if (!(e = n[0])) return !1;
        e.swiper = t;
        const s = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let i = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = A(e.shadowRoot.querySelector(s()));
            return (t.children = (e) => n.children(e)), t;
          }
          return n.children(s());
        })();
        if (0 === i.length && t.params.createElements) {
          const e = y().createElement("div");
          (i = A(e)),
            (e.className = t.params.wrapperClass),
            n.append(e),
            n.children(`.${t.params.slideClass}`).each((e) => {
              i.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: n,
            el: e,
            $wrapperEl: i,
            wrapperEl: i[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
            wrongRTL: "-webkit-box" === i.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const n = this,
          { params: s, $el: i, $wrapperEl: r, slides: o } = n;
        return (
          void 0 === n.params ||
            n.destroyed ||
            (n.emit("beforeDestroy"),
            (n.initialized = !1),
            n.detachEvents(),
            s.loop && n.loopDestroy(),
            t &&
              (n.removeClasses(),
              i.removeAttr("style"),
              r.removeAttr("style"),
              o &&
                o.length &&
                o
                  .removeClass(
                    [
                      s.slideVisibleClass,
                      s.slideActiveClass,
                      s.slideNextClass,
                      s.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            n.emit("destroy"),
            Object.keys(n.eventsListeners).forEach((e) => {
              n.off(e);
            }),
            !1 !== e &&
              ((n.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(n)),
            (n.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        M(ue, e);
      }
      static get extendedDefaults() {
        return ue;
      }
      static get defaults() {
        return le;
      }
      static installModule(e) {
        pe.prototype.__modules__ || (pe.prototype.__modules__ = []);
        const t = pe.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => pe.installModule(e)), pe)
          : (pe.installModule(e), pe);
      }
    }
    Object.keys(de).forEach((e) => {
      Object.keys(de[e]).forEach((t) => {
        pe.prototype[t] = de[e][t];
      });
    }),
      pe.use([
        function (e) {
          let { swiper: t, on: n, emit: s } = e;
          const i = w();
          let r = null,
            o = null;
          const a = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (s("beforeResize"), s("resize"));
            },
            l = () => {
              t && !t.destroyed && t.initialized && s("orientationchange");
            };
          n("init", () => {
            t.params.resizeObserver && void 0 !== i.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((r = new ResizeObserver((e) => {
                  o = i.requestAnimationFrame(() => {
                    const { width: n, height: s } = t;
                    let i = n,
                      r = s;
                    e.forEach((e) => {
                      let { contentBoxSize: n, contentRect: s, target: o } = e;
                      (o && o !== t.el) ||
                        ((i = s ? s.width : (n[0] || n).inlineSize),
                        (r = s ? s.height : (n[0] || n).blockSize));
                    }),
                      (i === n && r === s) || a();
                  });
                })),
                r.observe(t.el))
              : (i.addEventListener("resize", a),
                i.addEventListener("orientationchange", l));
          }),
            n("destroy", () => {
              o && i.cancelAnimationFrame(o),
                r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
                i.removeEventListener("resize", a),
                i.removeEventListener("orientationchange", l);
            });
        },
        function (e) {
          let { swiper: t, extendParams: n, on: s, emit: i } = e;
          const r = [],
            o = w(),
            a = function (e, t) {
              void 0 === t && (t = {});
              const n = new (o.MutationObserver || o.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void i("observerUpdate", e[0]);
                  const t = function () {
                    i("observerUpdate", e[0]);
                  };
                  o.requestAnimationFrame
                    ? o.requestAnimationFrame(t)
                    : o.setTimeout(t, 0);
                }
              );
              n.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                r.push(n);
            };
          n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = t.$el.parents();
                  for (let t = 0; t < e.length; t += 1) a(e[t]);
                }
                a(t.$el[0], { childList: t.params.observeSlideChildren }),
                  a(t.$wrapperEl[0], { attributes: !1 });
              }
            }),
            s("destroy", () => {
              r.forEach((e) => {
                e.disconnect();
              }),
                r.splice(0, r.length);
            });
        },
      ]);
    const he = pe;
    function fe(e, t, n, s) {
      const i = y();
      return (
        e.params.createElements &&
          Object.keys(s).forEach((r) => {
            if (!n[r] && !0 === n.auto) {
              let o = e.$el.children(`.${s[r]}`)[0];
              o ||
                ((o = i.createElement("div")),
                (o.className = s[r]),
                e.$el.append(o)),
                (n[r] = o),
                (t[r] = o);
            }
          }),
        n
      );
    }
    function ge(e) {
      let { swiper: t, extendParams: n, on: s, emit: i } = e;
      function r(e) {
        let n;
        return (
          e &&
            ((n = A(e)),
            t.params.uniqueNavElements &&
              "string" == typeof e &&
              n.length > 1 &&
              1 === t.$el.find(e).length &&
              (n = t.$el.find(e))),
          n
        );
      }
      function o(e, n) {
        const s = t.params.navigation;
        e &&
          e.length > 0 &&
          (e[n ? "addClass" : "removeClass"](s.disabledClass),
          e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = n),
          t.params.watchOverflow &&
            t.enabled &&
            e[t.isLocked ? "addClass" : "removeClass"](s.lockClass));
      }
      function a() {
        if (t.params.loop) return;
        const { $nextEl: e, $prevEl: n } = t.navigation;
        o(n, t.isBeginning && !t.params.rewind),
          o(e, t.isEnd && !t.params.rewind);
      }
      function l(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev();
      }
      function c(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
      }
      function d() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = fe(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !e.nextEl && !e.prevEl)
        )
          return;
        const n = r(e.nextEl),
          s = r(e.prevEl);
        n && n.length > 0 && n.on("click", c),
          s && s.length > 0 && s.on("click", l),
          Object.assign(t.navigation, {
            $nextEl: n,
            nextEl: n && n[0],
            $prevEl: s,
            prevEl: s && s[0],
          }),
          t.enabled ||
            (n && n.addClass(e.lockClass), s && s.addClass(e.lockClass));
      }
      function u() {
        const { $nextEl: e, $prevEl: n } = t.navigation;
        e &&
          e.length &&
          (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)),
          n &&
            n.length &&
            (n.off("click", l),
            n.removeClass(t.params.navigation.disabledClass));
      }
      n({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
        },
      }),
        (t.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        s("init", () => {
          d(), a();
        }),
        s("toEdge fromEdge lock unlock", () => {
          a();
        }),
        s("destroy", () => {
          u();
        }),
        s("enable disable", () => {
          const { $nextEl: e, $prevEl: n } = t.navigation;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.navigation.lockClass
            ),
            n &&
              n[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              );
        }),
        s("click", (e, n) => {
          const { $nextEl: s, $prevEl: r } = t.navigation,
            o = n.target;
          if (t.params.navigation.hideOnClick && !A(o).is(r) && !A(o).is(s)) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === o || t.pagination.el.contains(o))
            )
              return;
            let e;
            s
              ? (e = s.hasClass(t.params.navigation.hiddenClass))
              : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
              i(!0 === e ? "navigationShow" : "navigationHide"),
              s && s.toggleClass(t.params.navigation.hiddenClass),
              r && r.toggleClass(t.params.navigation.hiddenClass);
          }
        }),
        Object.assign(t.navigation, { update: a, init: d, destroy: u });
    }
    function me(e) {
      return (
        void 0 === e && (e = ""),
        `.${e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")}`
      );
    }
    function ve(e) {
      let { swiper: t, extendParams: n, on: s, emit: i } = e;
      const r = "swiper-pagination";
      let o;
      n({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${r}-bullet`,
          bulletActiveClass: `${r}-bullet-active`,
          modifierClass: `${r}-`,
          currentClass: `${r}-current`,
          totalClass: `${r}-total`,
          hiddenClass: `${r}-hidden`,
          progressbarFillClass: `${r}-progressbar-fill`,
          progressbarOppositeClass: `${r}-progressbar-opposite`,
          clickableClass: `${r}-clickable`,
          lockClass: `${r}-lock`,
          horizontalClass: `${r}-horizontal`,
          verticalClass: `${r}-vertical`,
        },
      }),
        (t.pagination = { el: null, $el: null, bullets: [] });
      let a = 0;
      function l() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          !t.pagination.$el ||
          0 === t.pagination.$el.length
        );
      }
      function c(e, n) {
        const { bulletActiveClass: s } = t.params.pagination;
        e[n]().addClass(`${s}-${n}`)[n]().addClass(`${s}-${n}-${n}`);
      }
      function d() {
        const e = t.rtl,
          n = t.params.pagination;
        if (l()) return;
        const s =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          r = t.pagination.$el;
        let d;
        const u = t.params.loop
          ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup)
          : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((d = Math.ceil(
                (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
              )),
              d > s - 1 - 2 * t.loopedSlides && (d -= s - 2 * t.loopedSlides),
              d > u - 1 && (d -= u),
              d < 0 && "bullets" !== t.params.paginationType && (d = u + d))
            : (d = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
          "bullets" === n.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const s = t.pagination.bullets;
          let i, l, u;
          if (
            (n.dynamicBullets &&
              ((o = s
                .eq(0)
                [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              r.css(
                t.isHorizontal() ? "width" : "height",
                o * (n.dynamicMainBullets + 4) + "px"
              ),
              n.dynamicMainBullets > 1 &&
                void 0 !== t.previousIndex &&
                ((a += d - (t.previousIndex - t.loopedSlides || 0)),
                a > n.dynamicMainBullets - 1
                  ? (a = n.dynamicMainBullets - 1)
                  : a < 0 && (a = 0)),
              (i = Math.max(d - a, 0)),
              (l = i + (Math.min(s.length, n.dynamicMainBullets) - 1)),
              (u = (l + i) / 2)),
            s.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${n.bulletActiveClass}${e}`)
                .join(" ")
            ),
            r.length > 1)
          )
            s.each((e) => {
              const t = A(e),
                s = t.index();
              s === d && t.addClass(n.bulletActiveClass),
                n.dynamicBullets &&
                  (s >= i &&
                    s <= l &&
                    t.addClass(`${n.bulletActiveClass}-main`),
                  s === i && c(t, "prev"),
                  s === l && c(t, "next"));
            });
          else {
            const e = s.eq(d),
              r = e.index();
            if ((e.addClass(n.bulletActiveClass), n.dynamicBullets)) {
              const e = s.eq(i),
                o = s.eq(l);
              for (let e = i; e <= l; e += 1)
                s.eq(e).addClass(`${n.bulletActiveClass}-main`);
              if (t.params.loop)
                if (r >= s.length) {
                  for (let e = n.dynamicMainBullets; e >= 0; e -= 1)
                    s.eq(s.length - e).addClass(`${n.bulletActiveClass}-main`);
                  s.eq(s.length - n.dynamicMainBullets - 1).addClass(
                    `${n.bulletActiveClass}-prev`
                  );
                } else c(e, "prev"), c(o, "next");
              else c(e, "prev"), c(o, "next");
            }
          }
          if (n.dynamicBullets) {
            const i = Math.min(s.length, n.dynamicMainBullets + 4),
              r = (o * i - o) / 2 - u * o,
              a = e ? "right" : "left";
            s.css(t.isHorizontal() ? a : "top", `${r}px`);
          }
        }
        if (
          ("fraction" === n.type &&
            (r.find(me(n.currentClass)).text(n.formatFractionCurrent(d + 1)),
            r.find(me(n.totalClass)).text(n.formatFractionTotal(u))),
          "progressbar" === n.type)
        ) {
          let e;
          e = n.progressbarOpposite
            ? t.isHorizontal()
              ? "vertical"
              : "horizontal"
            : t.isHorizontal()
            ? "horizontal"
            : "vertical";
          const s = (d + 1) / u;
          let i = 1,
            o = 1;
          "horizontal" === e ? (i = s) : (o = s),
            r
              .find(me(n.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${o})`)
              .transition(t.params.speed);
        }
        "custom" === n.type && n.renderCustom
          ? (r.html(n.renderCustom(t, d + 1, u)), i("paginationRender", r[0]))
          : i("paginationUpdate", r[0]),
          t.params.watchOverflow &&
            t.enabled &&
            r[t.isLocked ? "addClass" : "removeClass"](n.lockClass);
      }
      function u() {
        const e = t.params.pagination;
        if (l()) return;
        const n =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          s = t.pagination.$el;
        let r = "";
        if ("bullets" === e.type) {
          let i = t.params.loop
            ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            !t.params.loop &&
            i > n &&
            (i = n);
          for (let n = 0; n < i; n += 1)
            e.renderBullet
              ? (r += e.renderBullet.call(t, n, e.bulletClass))
              : (r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
          s.html(r), (t.pagination.bullets = s.find(me(e.bulletClass)));
        }
        "fraction" === e.type &&
          ((r = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          s.html(r)),
          "progressbar" === e.type &&
            ((r = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
            s.html(r)),
          "custom" !== e.type && i("paginationRender", t.pagination.$el[0]);
      }
      function p() {
        t.params.pagination = fe(
          t,
          t.originalParams.pagination,
          t.params.pagination,
          { el: "swiper-pagination" }
        );
        const e = t.params.pagination;
        if (!e.el) return;
        let n = A(e.el);
        0 !== n.length &&
          (t.params.uniqueNavElements &&
            "string" == typeof e.el &&
            n.length > 1 &&
            ((n = t.$el.find(e.el)),
            n.length > 1 &&
              (n = n.filter((e) => A(e).parents(".swiper")[0] === t.el))),
          "bullets" === e.type && e.clickable && n.addClass(e.clickableClass),
          n.addClass(e.modifierClass + e.type),
          n.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          "bullets" === e.type &&
            e.dynamicBullets &&
            (n.addClass(`${e.modifierClass}${e.type}-dynamic`),
            (a = 0),
            e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
          "progressbar" === e.type &&
            e.progressbarOpposite &&
            n.addClass(e.progressbarOppositeClass),
          e.clickable &&
            n.on("click", me(e.bulletClass), function (e) {
              e.preventDefault();
              let n = A(this).index() * t.params.slidesPerGroup;
              t.params.loop && (n += t.loopedSlides), t.slideTo(n);
            }),
          Object.assign(t.pagination, { $el: n, el: n[0] }),
          t.enabled || n.addClass(e.lockClass));
      }
      function h() {
        const e = t.params.pagination;
        if (l()) return;
        const n = t.pagination.$el;
        n.removeClass(e.hiddenClass),
          n.removeClass(e.modifierClass + e.type),
          n.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          t.pagination.bullets &&
            t.pagination.bullets.removeClass &&
            t.pagination.bullets.removeClass(e.bulletActiveClass),
          e.clickable && n.off("click", me(e.bulletClass));
      }
      s("init", () => {
        p(), u(), d();
      }),
        s("activeIndexChange", () => {
          (t.params.loop || void 0 === t.snapIndex) && d();
        }),
        s("snapIndexChange", () => {
          t.params.loop || d();
        }),
        s("slidesLengthChange", () => {
          t.params.loop && (u(), d());
        }),
        s("snapGridLengthChange", () => {
          t.params.loop || (u(), d());
        }),
        s("destroy", () => {
          h();
        }),
        s("enable disable", () => {
          const { $el: e } = t.pagination;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.pagination.lockClass
            );
        }),
        s("lock unlock", () => {
          d();
        }),
        s("click", (e, n) => {
          const s = n.target,
            { $el: r } = t.pagination;
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            r.length > 0 &&
            !A(s).hasClass(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && s === t.navigation.nextEl) ||
                (t.navigation.prevEl && s === t.navigation.prevEl))
            )
              return;
            const e = r.hasClass(t.params.pagination.hiddenClass);
            i(!0 === e ? "paginationShow" : "paginationHide"),
              r.toggleClass(t.params.pagination.hiddenClass);
          }
        }),
        Object.assign(t.pagination, {
          render: u,
          update: d,
          init: p,
          destroy: h,
        });
    }
    function ye(e) {
      let { swiper: t, extendParams: n, on: s, emit: i } = e;
      n({
        lazy: {
          checkInView: !1,
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          scrollingElement: "",
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader",
        },
      }),
        (t.lazy = {});
      let r = !1,
        o = !1;
      function a(e, n) {
        void 0 === n && (n = !0);
        const s = t.params.lazy;
        if (void 0 === e) return;
        if (0 === t.slides.length) return;
        const r =
            t.virtual && t.params.virtual.enabled
              ? t.$wrapperEl.children(
                  `.${t.params.slideClass}[data-swiper-slide-index="${e}"]`
                )
              : t.slides.eq(e),
          o = r.find(
            `.${s.elementClass}:not(.${s.loadedClass}):not(.${s.loadingClass})`
          );
        !r.hasClass(s.elementClass) ||
          r.hasClass(s.loadedClass) ||
          r.hasClass(s.loadingClass) ||
          o.push(r[0]),
          0 !== o.length &&
            o.each((e) => {
              const o = A(e);
              o.addClass(s.loadingClass);
              const l = o.attr("data-background"),
                c = o.attr("data-src"),
                d = o.attr("data-srcset"),
                u = o.attr("data-sizes"),
                p = o.parent("picture");
              t.loadImage(o[0], c || l, d, u, !1, () => {
                if (null != t && t && (!t || t.params) && !t.destroyed) {
                  if (
                    (l
                      ? (o.css("background-image", `url("${l}")`),
                        o.removeAttr("data-background"))
                      : (d &&
                          (o.attr("srcset", d), o.removeAttr("data-srcset")),
                        u && (o.attr("sizes", u), o.removeAttr("data-sizes")),
                        p.length &&
                          p.children("source").each((e) => {
                            const t = A(e);
                            t.attr("data-srcset") &&
                              (t.attr("srcset", t.attr("data-srcset")),
                              t.removeAttr("data-srcset"));
                          }),
                        c && (o.attr("src", c), o.removeAttr("data-src"))),
                    o.addClass(s.loadedClass).removeClass(s.loadingClass),
                    r.find(`.${s.preloaderClass}`).remove(),
                    t.params.loop && n)
                  ) {
                    const e = r.attr("data-swiper-slide-index");
                    if (r.hasClass(t.params.slideDuplicateClass)) {
                      a(
                        t.$wrapperEl
                          .children(
                            `[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`
                          )
                          .index(),
                        !1
                      );
                    } else {
                      a(
                        t.$wrapperEl
                          .children(
                            `.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                          )
                          .index(),
                        !1
                      );
                    }
                  }
                  i("lazyImageReady", r[0], o[0]),
                    t.params.autoHeight && t.updateAutoHeight();
                }
              }),
                i("lazyImageLoad", r[0], o[0]);
            });
      }
      function l() {
        const { $wrapperEl: e, params: n, slides: s, activeIndex: i } = t,
          r = t.virtual && n.virtual.enabled,
          l = n.lazy;
        let c = n.slidesPerView;
        function d(t) {
          if (r) {
            if (
              e.children(`.${n.slideClass}[data-swiper-slide-index="${t}"]`)
                .length
            )
              return !0;
          } else if (s[t]) return !0;
          return !1;
        }
        function u(e) {
          return r ? A(e).attr("data-swiper-slide-index") : A(e).index();
        }
        if (
          ("auto" === c && (c = 0), o || (o = !0), t.params.watchSlidesProgress)
        )
          e.children(`.${n.slideVisibleClass}`).each((e) => {
            a(r ? A(e).attr("data-swiper-slide-index") : A(e).index());
          });
        else if (c > 1) for (let e = i; e < i + c; e += 1) d(e) && a(e);
        else a(i);
        if (l.loadPrevNext)
          if (c > 1 || (l.loadPrevNextAmount && l.loadPrevNextAmount > 1)) {
            const e = l.loadPrevNextAmount,
              t = c,
              n = Math.min(i + t + Math.max(e, t), s.length),
              r = Math.max(i - Math.max(t, e), 0);
            for (let e = i + c; e < n; e += 1) d(e) && a(e);
            for (let e = r; e < i; e += 1) d(e) && a(e);
          } else {
            const t = e.children(`.${n.slideNextClass}`);
            t.length > 0 && a(u(t));
            const s = e.children(`.${n.slidePrevClass}`);
            s.length > 0 && a(u(s));
          }
      }
      function c() {
        const e = w();
        if (!t || t.destroyed) return;
        const n = t.params.lazy.scrollingElement
            ? A(t.params.lazy.scrollingElement)
            : A(e),
          s = n[0] === e,
          i = s ? e.innerWidth : n[0].offsetWidth,
          o = s ? e.innerHeight : n[0].offsetHeight,
          a = t.$el.offset(),
          { rtlTranslate: d } = t;
        let u = !1;
        d && (a.left -= t.$el[0].scrollLeft);
        const p = [
          [a.left, a.top],
          [a.left + t.width, a.top],
          [a.left, a.top + t.height],
          [a.left + t.width, a.top + t.height],
        ];
        for (let e = 0; e < p.length; e += 1) {
          const t = p[e];
          if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= o) {
            if (0 === t[0] && 0 === t[1]) continue;
            u = !0;
          }
        }
        const h = !(
          "touchstart" !== t.touchEvents.start ||
          !t.support.passiveListener ||
          !t.params.passiveListeners
        ) && { passive: !0, capture: !1 };
        u
          ? (l(), n.off("scroll", c, h))
          : r || ((r = !0), n.on("scroll", c, h));
      }
      s("beforeInit", () => {
        t.params.lazy.enabled &&
          t.params.preloadImages &&
          (t.params.preloadImages = !1);
      }),
        s("init", () => {
          t.params.lazy.enabled && (t.params.lazy.checkInView ? c() : l());
        }),
        s("scroll", () => {
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            !t.params.freeMode.sticky &&
            l();
        }),
        s("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
          t.params.lazy.enabled && (t.params.lazy.checkInView ? c() : l());
        }),
        s("transitionStart", () => {
          t.params.lazy.enabled &&
            (t.params.lazy.loadOnTransitionStart ||
              (!t.params.lazy.loadOnTransitionStart && !o)) &&
            (t.params.lazy.checkInView ? c() : l());
        }),
        s("transitionEnd", () => {
          t.params.lazy.enabled &&
            !t.params.lazy.loadOnTransitionStart &&
            (t.params.lazy.checkInView ? c() : l());
        }),
        s("slideChange", () => {
          const {
            lazy: e,
            cssMode: n,
            watchSlidesProgress: s,
            touchReleaseOnEdges: i,
            resistanceRatio: r,
          } = t.params;
          e.enabled && (n || (s && (i || 0 === r))) && l();
        }),
        Object.assign(t.lazy, { load: l, loadInSlide: a });
    }
    function be() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    window.addEventListener("load", function (e) {
      be(),
        document.querySelector(".main-slider__slider") &&
          new he(".main-slider__slider", {
            modules: [ge, ve, ye],
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            observer: !0,
            observeParents: !0,
            slidesPerView: 1,
            spaceBetween: 30,
            autoHeight: !0,
            speed: 800,
            loop: !0,
            lazy: !0,
            pagination: {
              el: ".slide-info__pagging",
              clickable: !0,
              type: "bullets",
            },
            navigation: {
              nextEl: ".slide-info__navi .slide-info__prew",
              prevEl: ".slide-info__navi .slide-info__next",
            },
            on: {},
          }),
        document.querySelector(".choose-us__slider") &&
          new he(".choose-us__slider", {
            modules: [ve, ye],
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            observer: !0,
            observeParents: !0,
            slidesPerView: 2,
            spaceBetween: 30,
            autoHeight: !0,
            speed: 800,
            loop: !0,
            lazy: !0,
            pagination: {
              el: ".choose-us__pagging",
              clickable: !0,
              type: "bullets",
            },
            navigation: {
              nextEl: ".slide-info__navi .slide-info__prew",
              prevEl: ".slide-info__navi .slide-info__next",
            },
            breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 0, autoHeight: !0 },
              500: { slidesPerView: 2, spaceBetween: 20 },
            },
            on: {},
          }),
        document.querySelector(".delivery-options__slider") &&
          new he(".delivery-options__slider", {
            modules: [ve, ye, ge],
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            observer: !0,
            observeParents: !0,
            slidesPerView: 3,
            spaceBetween: 30,
            autoHeight: !0,
            speed: 800,
            loop: !0,
            lazy: !0,
            pagination: {
              el: ".slider-delivery__pagging",
              clickable: !0,
              type: "bullets",
            },
            navigation: {
              nextEl: ".slider-delivery .slider-delivery__prew",
              prevEl: ".slider-delivery .slider-delivery__next",
            },
            breakpoints: {
              320: { slidesPerView: 1 },
              611: { slidesPerView: 2 },
              991: { slidesPerView: 3 },
            },
            on: {},
          }),
        document.querySelector(".card-services__slider") &&
          new he(".card-services__slider", {
            modules: [ve, ye, ge],
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            observer: !0,
            observeParents: !0,
            slidesPerView: 3,
            spaceBetween: 30,
            autoHeight: !0,
            speed: 800,
            loop: !0,
            lazy: !0,
            pagination: {
              el: ".card-services__pagging",
              clickable: !0,
              type: "bullets",
            },
            navigation: {
              nextEl: ".card-services .card-services__prew",
              prevEl: ".card-services .card-services__next",
            },
            breakpoints: {
              320: { slidesPerView: 1 },
              611: { slidesPerView: 2 },
              991: { slidesPerView: 3 },
            },
            on: {},
          });
    });
    new (n(732))({
      elements_selector: "[data-src]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    let we = !1;
    setTimeout(() => {
      if (we) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0);
    var xe = n(755);
    n(547);
    document.addEventListener("DOMContentLoaded", function () {
      var e = document.querySelectorAll("input[data-tel-input]"),
        t = function (e) {
          return e.value.replace(/\D/g, "");
        },
        n = function (e) {
          var n = e.target,
            s = t(n),
            i = e.clipboardData || window.clipboardData;
          if (i) {
            var r = i.getData("Text");
            if (/\D/g.test(r)) return void (n.value = s);
          }
        },
        s = function (e) {
          var n = e.target,
            s = t(n),
            i = n.selectionStart,
            r = "";
          if (!s) return (n.value = "");
          if (n.value.length == i) {
            if (["7", "8", "9"].indexOf(s[0]) > -1) {
              "9" == s[0] && (s = "7" + s);
              var o = "8" == s[0] ? "8" : "+7";
              (r = n.value = o + " "),
                s.length > 1 && (r += "(" + s.substring(1, 4)),
                s.length >= 5 && (r += ") " + s.substring(4, 7)),
                s.length >= 8 && (r += "-" + s.substring(7, 9)),
                s.length >= 10 && (r += "-" + s.substring(9, 11));
            } else r = "+" + s.substring(0, 16);
            n.value = r;
          } else e.data && /\D/g.test(e.data) && (n.value = s);
        },
        i = function (e) {
          var t = e.target.value.replace(/\D/g, "");
          8 == e.keyCode && 1 == t.length && (e.target.value = "");
        };
      for (var r of e)
        r.addEventListener("keydown", i),
          r.addEventListener("input", s, !1),
          r.addEventListener("paste", n, !1);
      const o = document.querySelector(".field-file__label-text"),
        a = document.getElementById("file");
      a.addEventListener("change", () => {
        !(function (e) {
          if (!["image/jpeg"].includes(e.type))
            alert("Разрешены только изображения формате jpeg"), (a.value = "");
        })(a.files[0]);
      }),
        a.addEventListener("change", function (e) {
          const t = e.target.value.split("\\").pop();
          return (
            !(!this.files || 1 != this.files.length) &&
            (o
              ? ((o.textContent = t || "Выберите файл для загрузки"), !0)
              : void 0)
          );
        });
      const l = { files: [] },
        c = document.querySelector(".form-calc__del-btn");
      a.addEventListener("change", function (e) {
        if (!e.target.files.length) return;
        (function (e) {
          l.files = l.files.concat(e);
        })(Object.keys(e.target.files).map((t) => e.target.files[t])),
          (e.target.value = "");
      }),
        c.addEventListener("click", function (e) {
          o &&
            (l.files.splice(e, 1), (o.textContent = "Загрузить фото товара"));
        });
    }),
      xe(document).ready(function () {
        xe("#smartwizard").smartWizard();
      }),
      xe("#smartwizard").smartWizard({
        selected: 0,
        theme: "default",
        justified: !0,
        darkMode: !1,
        autoAdjustHeight: !1,
        cycleSteps: !1,
        backButtonSupport: !0,
        enableURLhash: !1,
        transition: { animation: "none", speed: "400", easing: "" },
        toolbarSettings: {
          toolbarPosition: "bottom",
          toolbarButtonPosition: "right",
          showNextButton: !0,
          showPreviousButton: !0,
          toolbarExtraButtons: [],
        },
        anchorSettings: {
          anchorClickable: !1,
          enableAllAnchors: !1,
          markDoneStep: !0,
          markAllPreviousStepsAsDone: !0,
          removeDoneStepOnNavigateBack: !1,
          enableAnchorOnDoneStep: !0,
        },
        keyboardSettings: { keyNavigation: !1, keyLeft: [37], keyRight: [39] },
        lang: { next: "Следующий шаг", previous: "Назад" },
        disabledSteps: [],
        errorSteps: [],
        hiddenSteps: [],
      });
    const Se = document.querySelectorAll(".spollers__body");
    document.addEventListener("click", function (e) {
      e.target.closest(".spollers__title") &&
        Se.forEach((e) => {
          e.classList.add("_spoller-active-body");
        });
    });
    const Ce = document.querySelector(".form-calc__steps"),
      Ee = document.querySelector(".sw-btn-next "),
      Te = document.querySelector(".toolbar-bottom"),
      ke = document.querySelector(".sw-btn-prev ");
    let _e = 0;
    Ee.addEventListener("click", function () {
      ++_e,
        1 === _e
          ? ((ke.style.display = "block"),
            (Ee.style.display = "none"),
            (Ee.type = "submit"))
          : (Te.style.display = "none"),
        2 === _e &&
          ((Te.style.display = "none"),
          (Ce.style.display = "none"),
          (form.style.background = "none"),
          (form.style.padding = "0px"));
    }),
      ke.addEventListener("click", function () {
        (_e = 0),
          (ke.style.display = "none"),
          (Ee.type = "button"),
          (Ee.style.display = "flex");
      });
    const Ae = document.querySelector("#block-input__area");
    function Le() {
      return (
        document.querySelector("#inp-l").value *
        document.querySelector("#inp-b").value *
        document.querySelector("#inp-h").value
      );
    }
    document.addEventListener("click", function (e) {
      let t = e.target;
      t.closest(".form-calc__pop-calc") &&
        ((Ae.value = ""), (Ae.style.outline = "none")),
        isFinite(Ae.value) &&
          t.closest(".from-area-calc__btn") &&
          (isFinite(Le())
            ? ((Ae.style.outline = "none"), (Ae.value = Le()))
            : ((Ae.style.outline = "5px solid red"),
              (Ae.value = ""),
              (Ae.placeholder = "Только числа, и '0.3'")));
    }),
      document.addEventListener("DOMContentLoaded", function () {
        const e = document.getElementById("form-calc"),
          t = document.querySelector(".form-calc__box-3"),
          n = document.querySelector(".calculation-cost__form ");
        function s(e) {
          e.parentElement.classList.add("_error"), e.classList.add("_error");
        }
        function i(e) {
          e.parentElement.classList.remove("_error"),
            e.classList.remove("_error");
        }
        function r(e) {
          return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value);
        }
        console.log(t),
          e.addEventListener("submit", async function (o) {
            o.preventDefault(!0);
            let a = (function (e) {
                let t = 0,
                  n = document.querySelectorAll("._req");
                for (let e = 0; e < n.length; e++) {
                  const o = n[e];
                  i(o),
                    o.classList.contains("_email")
                      ? r(o) && (s(o), t++)
                      : "" == o.value && (s(o), t++);
                }
                return t;
              })(),
              l = new FormData(e);
            if (0 === a) {
              (e.style.display = "none"),
                t.classList.add("_show"),
                n.classList.add("_padding"),
                console.log("true");
              let s = await fetch("sendmaill.php", { method: "POST", body: l });
              if (s.ok) {
                let t = await s.json();
                alert(t.message), e.reset();
              } else alert("Ошибка");
            } else alert("Заполни обязательные поля");
          });
      }),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            o && (a(), document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        const e = document.querySelectorAll("[data-spollers]");
        if (e.length > 0) {
          const t = Array.from(e).filter(function (e, t, n) {
            return !e.dataset.spollers.split(",")[0];
          });
          t.length && i(t);
          let n = u(e, "spollers");
          function i(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                t.matches || !t
                  ? (e.classList.add("_spoller-init"),
                    o(e),
                    e.addEventListener("click", a))
                  : (e.classList.remove("_spoller-init"),
                    o(e, !1),
                    e.removeEventListener("click", a));
            });
          }
          function o(e, t = !0) {
            const n = e.querySelectorAll("[data-spoller]");
            n.length > 0 &&
              n.forEach((e) => {
                t
                  ? (e.removeAttribute("tabindex"),
                    e.classList.contains("_spoller-active") ||
                      (e.nextElementSibling.hidden = !0))
                  : (e.setAttribute("tabindex", "-1"),
                    (e.nextElementSibling.hidden = !1));
              });
          }
          function a(e) {
            const t = e.target;
            if (t.closest("[data-spoller]")) {
              const n = t.closest("[data-spoller]"),
                s = n.closest("[data-spollers]"),
                i = !!s.hasAttribute("data-one-spoller");
              s.querySelectorAll("._slide").length ||
                (i &&
                  !n.classList.contains("_spoller-active") &&
                  (l(s), console.log(!0)),
                n.classList.toggle("_spoller-active"),
                r(n.nextElementSibling, 500)),
                e.preventDefault();
            }
          }
          function l(e) {
            const t = e.querySelector("[data-spoller]._spoller-active");
            t &&
              (t.classList.remove("_spoller-active"),
              s(t.nextElementSibling, 500));
          }
          n &&
            n.length &&
            n.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                i(e.itemsArray, e.matchMedia);
              }),
                i(e.itemsArray, e.matchMedia);
            });
        }
      })(),
      new t({}),
      (h.selectModule = new p({}));
  })();
})();
