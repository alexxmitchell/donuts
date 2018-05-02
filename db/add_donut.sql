INSERT INTO donuts (users_id, kind, quantity)
VALUES($1, $2, 1)
RETURNING *;
