SELECT b.id, d.kind, d.price, t.label, t.price, t.category FROM donuts d
JOIN box b ON d.boxid = b.id
JOIN dotop ON d.id = dotop.donut_id
JOIN toppings t ON dotop.topping_id = t.id
WHERE d.userid = $1;