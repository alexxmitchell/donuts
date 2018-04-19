INSERT INTO dotop (donut_id, topping_id)
VALUES($1, $2)
RETURNING *;