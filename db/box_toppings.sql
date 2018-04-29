SELECT dotop.donut_id, t.label, t.category FROM  dotop
JOIN toppings t ON dotop.topping_id = t.id
WHERE dotop.donut_id=$1;