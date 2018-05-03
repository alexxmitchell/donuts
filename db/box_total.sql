SELECT SUM(t.price) FROM toppings t
FULL JOIN dotop ON dotop.topping_id = t.id
FULL JOIN donuts d ON d.id = dotop.donut_id
WHERE d.box_id = $1;