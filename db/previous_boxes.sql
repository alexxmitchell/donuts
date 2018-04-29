SELECT b.id, SUM(t.price) from box b
JOIN donuts d ON b.id=d.id
JOIN dotop ON d.id=dotop.donut_id
JOIN toppings t ON dotop.topping_id=t.id
WHERE d.users_id=$1
GROUP BY b.id
ORDER BY b.id DESC
LIMIT 3;