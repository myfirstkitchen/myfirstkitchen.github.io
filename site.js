/* Shared header, footer, storage and cart-style helpers. Pages set <body data-page="..."> */
(function () {
  var FK = window.FK;

  var mem = {};
  FK.load = function (key, fallback) {
    try { var v = localStorage.getItem(key); if (v) return JSON.parse(v); } catch (e) { if (mem[key]) return mem[key]; }
    return fallback;
  };
  FK.save = function (key, val) {
    mem[key] = val;
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  };

  FK.getSet = function () { return FK.load("fk_set", null); };
  FK.setSet = function (s) { FK.save("fk_set", s); };
  FK.getSubs = function () { return FK.load("fk_subs", []); };
  FK.setSubs = function (s) { FK.save("fk_subs", s); FK.refreshBadges(); };

  function ensureSet() {
    var s = FK.getSet();
    if (!s) s = { preset: "custom", color: "sage", cook: {}, it: {} };
    s.preset = "custom";
    return s;
  }
  // Add one pantry item or utensil to the saved kit
  FK.addItem = function (id, qty) {
    var s = ensureSet();
    s.it[id] = Math.min(6, (s.it[id] || 0) + (qty || 1));
    FK.setSet(s);
    return s;
  };
  // Add a cookware piece or appliance to the saved kit
  FK.addCook = function (id, size, qty, color) {
    var s = ensureSet();
    if (color) s.color = color;
    var cur = s.cook[id] || { size: 0, qty: 0 };
    s.cook[id] = { size: size, qty: Math.min(6, (cur.qty || 0) + qty) };
    FK.setSet(s);
    return s;
  };

  FK.toast = function (msg) {
    var t = document.createElement("div");
    t.className = "toast"; t.textContent = msg; t.setAttribute("role", "status");
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 2200);
  };

  var NAV = [
    ["index.html", "Home", "home"],
    ["shop.html", "Shop", "shop"],
    ["builder.html", "Build a kit", "builder"],
    ["subscribe.html", "Pantry refills", "subscribe"],
    ["recipes.html", "Recipes", "recipes"],
    ["about.html", "About", "about"]
  ];
  var page = document.body.getAttribute("data-page") || "";

  if (!document.querySelector('link[rel="icon"]')) {
    var ic = document.createElement("link");
    ic.rel = "icon"; ic.href = "images/icon.png"; document.head.appendChild(ic);
  }

  var skip = document.createElement("a");
  skip.className = "skip"; skip.href = "#main"; skip.textContent = "Skip to content";
  document.body.insertBefore(skip, document.body.firstChild);

  var head = document.createElement("header");
  head.className = "site-head";
  head.innerHTML = '<div class="wrap"><a class="brand" href="index.html"><img src="images/logo.png" alt="First Kitchen home" width="206" height="34"></a>' +
    '<button class="menu-btn" type="button" aria-expanded="false" aria-controls="mainnav">Menu</button>' +
    '<nav id="mainnav" aria-label="Main">' +
    NAV.map(function (n) {
      var on = n[2] === page || (page === "product" && n[2] === "shop");
      return '<a href="' + n[0] + '"' + (on ? ' class="on" aria-current="page"' : '') + '>' + n[1] +
        (n[2] === "subscribe" ? '<span class="badge" id="subBadge" hidden></span>' : '') + '</a>';
    }).join("") + '</nav><a class="cta-sm" href="builder.html">Build your kit</a></div>';
  document.body.insertBefore(head, skip.nextSibling);

  var btn = head.querySelector(".menu-btn"), nav = head.querySelector("nav");
  btn.addEventListener("click", function () {
    var o = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", o ? "true" : "false");
  });

  var main = document.querySelector("main") || document.querySelector(".page");
  if (main && !main.id) main.id = "main";

  var foot = document.createElement("footer");
  foot.className = "site-foot";
  foot.innerHTML = '<div class="wrap"><div class="cols">' +
    '<div><img src="images/logo.png" alt="First Kitchen" width="206" height="34"><p style="margin:0;max-width:30ch">Cookware, appliances, pantry staples and recipes, to start a kitchen or keep improving one.</p></div>' +
    '<div><h4>Shop</h4><a href="shop.html?cat=cookware">Cookware</a><a href="shop.html?cat=appliances">Appliances</a><a href="shop.html?cat=pantry">Pantry</a><a href="shop.html?cat=utensils">Utensils</a></div>' +
    '<div><h4>Kits and refills</h4><a href="builder.html">Build a kit</a><a href="subscribe.html">Pantry refills</a><a href="recipes.html">Recipes</a></div>' +
    '<div><h4>Company</h4><a href="about.html">About</a><a href="mailto:hello@example.com">hello@example.com</a></div>' +
    '</div><div class="legal">© First Kitchen. Prices shown are sample prices.</div></div>';
  document.body.appendChild(foot);

  FK.refreshBadges = function () {
    var b = document.getElementById("subBadge");
    if (!b) return;
    var n = FK.getSubs().length;
    b.hidden = n === 0; b.textContent = n;
  };
  FK.refreshBadges();
})();
