-- SELECT d.id, d.kind, t.price, t.label, t.category FROM donuts d
-- JOIN dotop ON d.id = dotop.donut_id
-- JOIN toppings t ON dotop.topping_id = t.id
-- WHERE d.users_id = $1;

SELECT d.id, d.kind, SUM(t.price) FROM donuts d
JOIN dotop ON d.id = dotop.donut_id
JOIN toppings t ON dotop.topping_id = t.id
WHERE d.users_id = $1
GROUP BY d.id;