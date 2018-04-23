SELECT b.box_id, d.id, d.kind, t.label, t.price, t.category FROM donuts d
JOIN boxdo b ON d.id = b.don_id
JOIN dotop ON d.id = dotop.donut_id
JOIN toppings t ON dotop.topping_id = t.id
WHERE d.users_id = $1;