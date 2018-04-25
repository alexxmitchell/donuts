UPDATE donuts
SET box_id=$1
WHERE id = $2;

SELECT d.id, d.kind, SUM(t.price) FROM donuts d
JOIN dotop ON d.id = dotop.donut_id
JOIN toppings t ON dotop.topping_id = t.id
WHERE d.box_id=$1
GROUP BY d.id, d.kind;