/* Shared catalog for First Kitchen. Prices are sample prices. */
window.FK = window.FK || {};
(function (FK) {
  FK.COLORS = [
    { id: "sage", n: "Sage", c: "#8FA88B" },
    { id: "cream", n: "Cream", c: "#E4D9BE" },
    { id: "char", n: "Charcoal", c: "#3b3b3f" },
    { id: "terra", n: "Terracotta", c: "#E9905F" },
    { id: "navy", n: "Navy", c: "#293D55" }
  ];

  // kind drives the illustration: pan | pot | sheet
  FK.COOK = [
    { id: "pan", n: "Frying pan", kind: "pan", tag: "Everyday searing & eggs",
      blurb: "A nonstick-coated pan with a cool-touch handle. The one pan you'll reach for every day.",
      uses: ["Eggs & omelets", "Stir-fries", "Searing chicken or fish", "Pancakes"],
      mat: "Aluminum core, ceramic nonstick", heat: "Gas, electric, induction", oven: "Oven safe to 400°F",
      s: [["8 in", 16], ["10 in", 22], ["12 in", 28]] },
    { id: "sauce", n: "Saucepan with lid", kind: "pot", tag: "Grains, sauces, soups for one",
      blurb: "Tall sides and a snug lid for rice, oats, pasta sauces and single-serve soup.",
      uses: ["Rice & grains", "Pasta sauce", "Oatmeal", "Reheating soup"],
      mat: "Aluminum core, ceramic nonstick", heat: "Gas, electric, induction", oven: "Lid not oven safe",
      s: [["1 qt", 16], ["2 qt", 22], ["3 qt", 28]] },
    { id: "pot", n: "Stockpot with lid", kind: "pot", tag: "Pasta, soups & big batches",
      blurb: "Roomy and well balanced, built for boiling pasta, simmering stock and cooking for friends.",
      uses: ["Boiling pasta", "Soups & stews", "Stock", "Batch cooking"],
      mat: "Aluminum core, ceramic nonstick", heat: "Gas, electric, induction", oven: "Lid not oven safe",
      s: [["4 qt", 28], ["6 qt", 36], ["8 qt", 44]] },
    { id: "saute", n: "Deep sauté pan", kind: "pan", tag: "One-pan dinners",
      blurb: "Straight, high sides keep splatter in and hold a full meal: braises, curries and skillet pastas.",
      uses: ["Curries", "Skillet pasta", "Braising", "Shallow frying"],
      mat: "Aluminum core, ceramic nonstick", heat: "Gas, electric, induction", oven: "Oven safe to 400°F",
      s: [["10 in", 30], ["12 in", 38]] },
    { id: "bake", n: "Baking sheet", kind: "sheet", tag: "Sheet-pan dinners & cookies",
      blurb: "Warp-resistant steel with a nonstick finish for roasted veggies, sheet-pan dinners and cookies.",
      uses: ["Roasting vegetables", "Sheet-pan dinners", "Cookies", "Reheating pizza"],
      mat: "Carbon steel, nonstick finish", heat: "Oven only", oven: "Oven safe to 450°F",
      s: [["Quarter", 10], ["Half", 16]] }
  ];

  FK.APPL = [
    { id: "kettle", n: "Electric kettle", kind: "kettle", noColor: true, tag: "Boiling water in minutes",
      blurb: "A gooseneck-free, easy-pour kettle with auto shut-off. Tea, pour-over, instant oats, and a faster start to pasta water.",
      uses: ["Tea & coffee", "Instant oats", "Pasta water", "Ramen"],
      spec: [["Material", "Stainless steel body, BPA-free lid"], ["Power", "Plug-in, 120V"], ["Safety", "Auto shut-off, boil-dry protection"]],
      s: [["1.0 L", 34], ["1.7 L", 44]] },
    { id: "toaster", n: "Toaster oven", kind: "toaster", noColor: true, tag: "Small oven for small kitchens",
      blurb: "Toast, bake and reheat without heating a full oven. A good fit for one or two people and tight counters.",
      uses: ["Toast & bagels", "Roasting vegetables", "Reheating leftovers", "Small bakes"],
      spec: [["Material", "Brushed steel, glass door"], ["Power", "Plug-in, 120V"], ["Includes", "Crumb tray and baking rack"]],
      s: [["4-slice", 79], ["6-slice", 109]] },
    { id: "blender", n: "Countertop blender", kind: "blender", noColor: true, tag: "Smoothies, soups and sauces",
      blurb: "A stable base and a sharp blade assembly for smoothies, sauces and blended soups.",
      uses: ["Smoothies", "Blended soups", "Sauces & dressings", "Pancake batter"],
      spec: [["Material", "BPA-free jar, steel blades"], ["Power", "Plug-in, 120V"], ["Care", "Jar is top-rack dishwasher safe"]],
      s: [["Personal, 20 oz", 39], ["Full size, 48 oz", 69]] },
    { id: "cooker", n: "Rice cooker", kind: "cooker", noColor: true, tag: "Rice and grains, on its own",
      blurb: "Add rice and water, press a button, walk away. It keeps food warm until you are ready to eat.",
      uses: ["Rice", "Quinoa & grains", "Steamed vegetables", "Oatmeal"],
      spec: [["Material", "Nonstick inner pot"], ["Power", "Plug-in, 120V"], ["Includes", "Measuring cup and paddle"]],
      s: [["3-cup", 44], ["5-cup", 59]] }
  ];
  FK.COOK.forEach(function (c) { c.cat = "cookware"; c.spec = [["Material", c.mat], ["Works on", c.heat], ["Oven", c.oven]]; });
  FK.APPL.forEach(function (c) { c.cat = "appliances"; });
  FK.ALLCOOK = FK.COOK.concat(FK.APPL);

  FK.OILS = [["o1", "Olive oil", "100 ml", 6], ["o2", "Avocado oil", "100 ml", 7], ["o3", "Toasted sesame oil", "50 ml", 5], ["o4", "Neutral cooking oil", "100 ml", 4]];
  FK.SEAS = [["s1", "Salt", "", 2], ["s2", "Black pepper", "", 3], ["s3", "Garlic powder", "", 3], ["s4", "Paprika", "", 3], ["s5", "Italian herb blend", "", 3], ["s6", "Chili powder", "", 3], ["s7", "Cumin", "", 3], ["s8", "Onion powder", "", 3]];
  FK.XSP = [["x1", "Red pepper flakes", "", 3], ["x2", "Curry powder", "", 3], ["x3", "Taco blend", "", 3], ["x4", "Cinnamon", "", 3], ["x5", "Smoked paprika", "", 3], ["x6", "Everything bagel blend", "", 4]];
  FK.UTEN = [["u1", "Silicone spatula", "", 6], ["u2", "Wooden spoon", "", 5], ["u3", "Tongs", "", 8], ["u4", "Whisk", "", 6], ["u5", "Ladle", "", 6], ["u6", "Chef's knife", "", 18], ["u7", "Cutting board", "", 12], ["u8", "Measuring cups & spoons", "", 9], ["u9", "Can opener", "", 7], ["u10", "Colander", "", 12]];

  FK.PRE = {
    mini: { n: "Mini", d: "1 pan, 1 pot, the basics", cook: { pan: [1, 1], sauce: [1, 1] }, it: { o4: 1, s1: 1, s2: 1, s3: 1, u1: 1, u2: 1 } },
    std: { n: "Standard", d: "Pans, pots, oils, seasonings", cook: { pan: [1, 1], sauce: [1, 1], pot: [1, 1] }, it: { o1: 1, o4: 1, s1: 1, s2: 1, s3: 1, s4: 1, s5: 1, s6: 1, u1: 1, u2: 1, u3: 1, u7: 1, u6: 1 } },
    full: { n: "Full", d: "Everything for cooking for friends", cook: { pan: [1, 2], sauce: [1, 1], pot: [2, 1], saute: [1, 1], bake: [1, 1] }, it: { o1: 1, o2: 1, o3: 1, o4: 1, s1: 1, s2: 1, s3: 1, s4: 1, s5: 1, s6: 1, s7: 1, s8: 1, x1: 1, x2: 1, x3: 1, u1: 1, u2: 1, u3: 1, u4: 1, u5: 1, u6: 1, u7: 1, u8: 1, u9: 1, u10: 1 } }
  };

  // Subscription: every frequency option, plus the discount for each.
  FK.FREQ = [
    { id: "2w", n: "Every 2 weeks", days: 14 },
    { id: "4w", n: "Every 4 weeks", days: 28 },
    { id: "6w", n: "Every 6 weeks", days: 42 },
    { id: "8w", n: "Every 8 weeks", days: 56 },
    { id: "12w", n: "Every 12 weeks", days: 84 },
    { id: "6m", n: "Every 6 months", days: 182 }
  ];
  FK.SUB_DISCOUNT = 0.10;

  FK.RECIPES = [
    { id: "r1", t: "Garlic-herb sheet-pan chicken", time: "35 min", lvl: "Easy",
      needs: ["Baking sheet", "Olive oil", "Salt", "Black pepper", "Garlic powder", "Italian herb blend"],
      steps: ["Heat oven to 425°F.", "Toss chicken thighs and chopped potatoes with olive oil, salt, pepper, garlic powder and Italian herbs.", "Spread on the baking sheet in a single layer.", "Roast 30 minutes until the chicken reaches 165°F."] },
    { id: "r2", t: "Weeknight chili-lime stir-fry", time: "20 min", lvl: "Easy",
      needs: ["Frying pan", "Neutral cooking oil", "Chili powder", "Garlic powder", "Salt"],
      steps: ["Heat neutral oil in the frying pan over medium-high.", "Stir-fry sliced vegetables and protein 6 to 8 minutes.", "Season with chili powder, garlic powder and salt.", "Finish with a squeeze of lime and serve over rice."] },
    { id: "r3", t: "One-pot tomato pasta", time: "25 min", lvl: "Easy",
      needs: ["Stockpot with lid", "Olive oil", "Italian herb blend", "Garlic powder", "Salt"],
      steps: ["Warm olive oil in the stockpot and stir in garlic powder and herbs.", "Add pasta, canned tomatoes and enough water to cover.", "Simmer, stirring often, until pasta is tender.", "Season with salt and finish with olive oil."] },
    { id: "r4", t: "Smoky paprika scrambled eggs", time: "10 min", lvl: "Beginner",
      needs: ["Frying pan", "Silicone spatula", "Paprika", "Salt", "Black pepper"],
      steps: ["Whisk eggs with salt and pepper.", "Cook gently in the frying pan, stirring with the spatula.", "Dust with paprika and serve."] },
    { id: "r5", t: "Cozy cumin lentil soup", time: "40 min", lvl: "Easy",
      needs: ["Saucepan with lid", "Olive oil", "Cumin", "Onion powder", "Salt"],
      steps: ["Warm olive oil in the saucepan and stir in cumin and onion powder.", "Add rinsed lentils and 4 cups water.", "Simmer covered about 25 minutes.", "Season with salt and mash lightly."] },
    { id: "r6", t: "Coconut chickpea curry", time: "30 min", lvl: "Medium",
      needs: ["Deep sauté pan", "Neutral cooking oil", "Curry powder", "Salt"],
      steps: ["Heat oil in the sauté pan and bloom the curry powder 30 seconds.", "Add chickpeas, canned tomatoes and coconut milk.", "Simmer 15 minutes, season with salt.", "Serve with rice."] }
  ];

  // Small product illustrations (SVG), drawn in the brand palette
  FK.art = function (kind, color) {
    var c = color || "#8FA88B", d = "rgba(0,0,0,.18)", n = "#293D55", k = "#79614E", cr = "#F9F5E9", t = "#E9905F";
    var o = '<svg viewBox="0 0 220 150" role="img" aria-label="' + kind + '">';
    switch (kind) {
      case "sheet": return o + '<path d="M20 50h180l-14 56H34z" fill="' + c + '"/><path d="M34 58h152l-10 38H44z" fill="' + d + '"/></svg>';
      case "pot": return o + '<ellipse cx="110" cy="128" rx="74" ry="8" fill="' + d + '"/><rect x="44" y="58" width="132" height="68" rx="12" fill="' + c + '"/><path d="M38 60q72-34 144 0z" fill="' + c + '"/><path d="M38 60q72-34 144 0z" fill="rgba(255,255,255,.14)"/><circle cx="110" cy="30" r="7" fill="' + k + '"/><rect x="26" y="78" width="20" height="9" rx="4.5" fill="' + c + '"/><rect x="174" y="78" width="20" height="9" rx="4.5" fill="' + c + '"/></svg>';
      case "kettle": return o + '<ellipse cx="104" cy="132" rx="60" ry="7" fill="' + d + '"/><path d="M52 128V68q0-34 52-34t52 34v60z" fill="' + cr + '" stroke="' + d + '" stroke-width="2"/><rect x="46" y="120" width="116" height="12" rx="5" fill="' + n + '"/><path d="M156 62q34 0 34 28t-34 26" fill="none" stroke="' + k + '" stroke-width="9" stroke-linecap="round"/><path d="M54 74L30 54" stroke="' + cr + '" stroke-width="9" stroke-linecap="round"/><circle cx="104" cy="30" r="6" fill="' + k + '"/></svg>';
      case "toaster": return o + '<ellipse cx="110" cy="132" rx="84" ry="7" fill="' + d + '"/><rect x="22" y="38" width="176" height="90" rx="14" fill="' + c + '"/><rect x="34" y="50" width="108" height="62" rx="8" fill="' + n + '"/><rect x="42" y="58" width="92" height="46" rx="5" fill="' + t + '" opacity=".35"/><circle cx="170" cy="68" r="8" fill="' + k + '"/><circle cx="170" cy="96" r="8" fill="' + k + '"/></svg>';
      case "blender": return o + '<ellipse cx="110" cy="136" rx="46" ry="6" fill="' + d + '"/><path d="M78 14h64l-10 74H88z" fill="' + c + '" opacity=".4" stroke="' + n + '" stroke-width="3"/><path d="M86 56h48l-4 32H90z" fill="#8FA88B" opacity=".85"/><rect x="72" y="8" width="76" height="9" rx="4" fill="' + n + '"/><path d="M84 88h52l8 46H76z" fill="' + c + '"/><circle cx="110" cy="112" r="7" fill="' + cr + '"/></svg>';
      case "cooker": return o + '<ellipse cx="110" cy="136" rx="66" ry="7" fill="' + d + '"/><rect x="42" y="62" width="136" height="70" rx="22" fill="' + c + '"/><path d="M46 68q64-52 128 0z" fill="' + c + '"/><path d="M46 68q64-52 128 0z" fill="rgba(255,255,255,.16)"/><circle cx="110" cy="22" r="7" fill="' + k + '"/><rect x="88" y="92" width="44" height="18" rx="6" fill="' + n + '"/><circle cx="110" cy="101" r="4" fill="' + t + '"/></svg>';
      case "bottle": return '<svg viewBox="0 0 120 150" role="img" aria-label="bottle"><path d="M46 52h28v16q22 10 22 30v38q0 6-6 6H30q-6 0-6-6V98q0-20 22-30z" fill="' + c + '"/><rect x="48" y="14" width="24" height="42" rx="4" fill="' + n + '"/><rect x="32" y="92" width="56" height="30" rx="4" fill="' + cr + '" opacity=".92"/><rect x="40" y="104" width="40" height="4" rx="2" fill="' + k + '" opacity=".5"/></svg>';
      case "jar": return '<svg viewBox="0 0 120 150" role="img" aria-label="jar"><rect x="26" y="34" width="68" height="100" rx="10" fill="' + c + '"/><rect x="30" y="16" width="60" height="22" rx="5" fill="' + k + '"/><rect x="34" y="70" width="52" height="34" rx="4" fill="' + cr + '" opacity=".92"/><rect x="42" y="84" width="36" height="4" rx="2" fill="' + k + '" opacity=".5"/></svg>';
      case "tool": return '<svg viewBox="0 0 120 150" role="img" aria-label="utensils"><rect x="30" y="70" width="60" height="64" rx="10" fill="' + c + '"/><rect x="44" y="14" width="9" height="62" rx="4" fill="' + k + '" transform="rotate(-8 48 70)"/><ellipse cx="68" cy="30" rx="12" ry="18" fill="#B39A76" transform="rotate(8 64 70)"/><rect x="64" y="34" width="8" height="40" rx="4" fill="#B39A76" transform="rotate(8 64 70)"/><rect x="78" y="22" width="8" height="52" rx="4" fill="' + n + '" transform="rotate(18 80 70)"/></svg>';
      case "pan": default: return o + '<ellipse cx="96" cy="124" rx="80" ry="8" fill="' + d + '"/><ellipse cx="94" cy="84" rx="82" ry="38" fill="' + c + '"/><ellipse cx="94" cy="80" rx="68" ry="29" fill="rgba(0,0,0,.28)"/><rect x="164" y="76" width="54" height="11" rx="5.5" fill="' + k + '"/></svg>';
    }
  };

  FK.money = function (x) { return "$" + x.toFixed(2); };
  FK.colorHex = function (id) { for (var i = 0; i < FK.COLORS.length; i++) if (FK.COLORS[i].id === id) return FK.COLORS[i].c; return FK.COLORS[0].c; };
  FK.cookById = function (id) { for (var i = 0; i < FK.ALLCOOK.length; i++) if (FK.ALLCOOK[i].id === id) return FK.ALLCOOK[i]; return null; };
  FK.itemById = function (id) {
    var all = FK.OILS.concat(FK.SEAS, FK.XSP, FK.UTEN);
    for (var i = 0; i < all.length; i++) if (all[i][0] === id) return all[i];
    return null;
  };
  FK.freqById = function (id) { for (var i = 0; i < FK.FREQ.length; i++) if (FK.FREQ[i].id === id) return FK.FREQ[i]; return FK.FREQ[1]; };

  // Price and contents of a starter kit preset (lowest-priced size used for cookware unless a size index is given)
  FK.kitTotal = function (key) {
    var p = FK.PRE[key], t = 0, n = 0;
    Object.keys(p.cook).forEach(function (id) { var c = FK.cookById(id), e = p.cook[id]; t += c.s[e[0]][1] * e[1]; n += e[1]; });
    Object.keys(p.it).forEach(function (id) { t += FK.itemById(id)[3] * p.it[id]; n += p.it[id]; });
    return { total: t, count: n };
  };
  FK.kitNames = function (key) {
    var p = FK.PRE[key], out = [];
    Object.keys(p.cook).forEach(function (id) { out.push((p.cook[id][1] > 1 ? p.cook[id][1] + " " : "") + FK.cookById(id).n); });
    Object.keys(p.it).forEach(function (id) { out.push(FK.itemById(id)[1]); });
    return out;
  };
  FK.kitLines = function (key) {
    var p = FK.PRE[key], out = [];
    Object.keys(p.cook).forEach(function (id) { var c = FK.cookById(id), e = p.cook[id]; out.push([(e[1] > 1 ? e[1] + " × " : "") + c.n + " (" + c.s[e[0]][0] + ")", c.s[e[0]][1] * e[1]]); });
    Object.keys(p.it).forEach(function (id) { var r = FK.itemById(id); out.push([r[1], r[3] * p.it[id]]); });
    return out;
  };
  FK.CATS = [["all", "All"], ["cookware", "Cookware"], ["appliances", "Appliances"], ["pantry", "Pantry"], ["utensils", "Utensils"]];
})(window.FK);
