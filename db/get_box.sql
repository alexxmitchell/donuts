SELECT d.kind, d.peanuts, d.bacon, d.strawberries, d.gold, d.sprinkles, d.chocdrizzle, d.glaze, d.pbdrizzle, b.price FROM donuts
JOIN box b ON d.id = b.donutid;