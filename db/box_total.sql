SELECT SUM(t.price) FROM toppings t
JOIN dotop ON dotop.topping_id = t.id
JOIN donuts d ON d.id = dotop.donut_id
WHERE d.box_id = $1
GROUP BY d.box_id;