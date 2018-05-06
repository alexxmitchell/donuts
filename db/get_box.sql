SELECT d.id, d.kind, SUM(t.price) FROM donuts d
FULL JOIN dotop ON d.id = dotop.donut_id
FULL JOIN toppings t ON dotop.topping_id = t.id
WHERE d.box_id=$1
GROUP BY d.id, d.kind;