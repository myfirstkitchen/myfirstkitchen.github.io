/* Shared catalog for First Kitchen. Prices are sample prices. */
window.FK = window.FK || {};
(function (FK) {
  FK.COLORS = [
    { id: "sage", n: "Sage", c: "#8aa58a" },
    { id: "cream", n: "Cream", c: "#efe6d2" },
    { id: "char", n: "Charcoal", c: "#3b3b3f" },
    { id: "terra", n: "Terracotta", c: "#c4673d" },
    { id: "navy", n: "Navy", c: "#2f4a6d" }
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

  // Illustrations, drawn with the swatch color
  FK.art = function (kind, color) {
    var c = color || "#8aa58a";
    var d = "rgba(0,0,0,.28)";
    if (kind === "sheet")
      return '<svg viewBox="0 0 200 120" role="img" aria-label="Baking sheet"><rect x="14" y="30" width="172" height="70" rx="8" fill="' + c + '"/><rect x="22" y="38" width="156" height="54" rx="4" fill="' + d + '"/><rect x="14" y="30" width="172" height="10" rx="5" fill="' + c + '"/></svg>';
    if (kind === "pot")
      return '<svg viewBox="0 0 200 140" role="img" aria-label="Pot"><rect x="40" y="44" width="120" height="76" rx="10" fill="' + c + '"/><rect x="32" y="34" width="136" height="14" rx="6" fill="' + d + '"/><ellipse cx="100" cy="30" rx="26" ry="6" fill="' + c + '"/><rect x="20" y="64" width="20" height="8" rx="4" fill="' + c + '"/><rect x="160" y="64" width="20" height="8" rx="4" fill="' + c + '"/></svg>';
    return '<svg viewBox="0 0 220 120" role="img" aria-label="Pan"><ellipse cx="90" cy="64" rx="74" ry="40" fill="' + c + '"/><ellipse cx="90" cy="60" rx="60" ry="30" fill="' + d + '"/><rect x="156" y="56" width="58" height="10" rx="5" fill="' + c + '"/></svg>';
  };

  FK.money = function (x) { return "$" + x.toFixed(2); };
  FK.colorHex = function (id) { for (var i = 0; i < FK.COLORS.length; i++) if (FK.COLORS[i].id === id) return FK.COLORS[i].c; return FK.COLORS[0].c; };
  FK.cookById = function (id) { for (var i = 0; i < FK.COOK.length; i++) if (FK.COOK[i].id === id) return FK.COOK[i]; return null; };
  FK.itemById = function (id) {
    var all = FK.OILS.concat(FK.SEAS, FK.XSP, FK.UTEN);
    for (var i = 0; i < all.length; i++) if (all[i][0] === id) return all[i];
    return null;
  };
  FK.freqById = function (id) { for (var i = 0; i < FK.FREQ.length; i++) if (FK.FREQ[i].id === id) return FK.FREQ[i]; return FK.FREQ[1]; };
})(window.FK);
