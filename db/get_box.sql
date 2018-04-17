SELECT d.kind, d.topping1, d.topping2, d.topping3, b.price FROM donuts
JOIN box b ON d.id = b.donutid;