/* Shared header, footer and storage helpers. Pages set <body data-page="..."> */
(function () {
  var FK = window.FK;

  // Safe storage: falls back to memory if the browser blocks it
  var mem = {};
  FK.load = function (key, fallback) {
    try { var v = localStorage.getItem(key); if (v) return JSON.parse(v); } catch (e) { if (mem[key]) return mem[key]; }
    return fallback;
  };
  FK.save = function (key, val) {
    mem[key] = val;
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  };

  // Builder set: { preset, color, cook:{id:{size,qty}}, it:{id:qty} }
  FK.getSet = function () { return FK.load("fk_set", null); };
  FK.setSet = function (s) { FK.save("fk_set", s); FK.refreshBadges(); };
  // Subscriptions: [{ id, freq, qty }]
  FK.getSubs = function () { return FK.load("fk_subs", []); };
  FK.setSubs = function (s) { FK.save("fk_subs", s); FK.refreshBadges(); };

  FK.toast = function (msg) {
    var t = document.createElement("div");
    t.className = "toast"; t.textContent = msg; t.setAttribute("role", "status");
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 1800);
  };

  var NAV = [
    ["index.html", "Home", "home"],
    ["builder.html", "Build a kit", "builder"],
    ["cookware.html", "Pots & pans", "cookware"],
    ["subscribe.html", "Subscribe", "subscribe"],
    ["recipes.html", "Recipes", "recipes"],
    ["about.html", "About", "about"]
  ];
  var page = document.body.getAttribute("data-page") || "";
  var head = document.createElement("header");
  head.className = "site-head";
  head.innerHTML = '<div class="wrap"><a class="brand" href="index.html">🍳 First Kitchen</a><nav aria-label="Main">' +
    NAV.map(function (n) {
      return '<a href="' + n[0] + '"' + (n[2] === page || (page === "product" && n[2] === "cookware") ? ' class="on" aria-current="page"' : '') + '>' + n[1] +
        (n[2] === "subscribe" ? '<span class="badge" id="subBadge" hidden></span>' : '') + '</a>';
    }).join("") + '</nav><a class="cta-sm" href="builder.html">Start your kit</a></div>';
  document.body.insertBefore(head, document.body.firstChild);

  var foot = document.createElement("footer");
  foot.className = "site-foot";
  foot.innerHTML = '<div class="wrap"><div>' + NAV.map(function (n) { return '<a href="' + n[0] + '">' + n[1] + '</a>'; }).join("") +
    '</div><div>© First Kitchen. Prices shown are sample prices.</div></div>';
  document.body.appendChild(foot);

  FK.refreshBadges = function () {
    var b = document.getElementById("subBadge");
    if (!b) return;
    var n = FK.getSubs().length;
    b.hidden = n === 0; b.textContent = n;
  };
  FK.refreshBadges();
})();
