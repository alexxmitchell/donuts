SELECT b.id, d.kind, d.price, t.label, t.price, t.category FROM donuts d
JOIN box b ON d.userid = b.user_id
JOIN dotop ON d.id = dotop.donutid
JOIN toppings t ON dotop.toppingid = t.id
GROUP BY b.id;