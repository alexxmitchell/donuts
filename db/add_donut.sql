INSERT INTO donuts (users_id, kind)
VALUES($1, $2)
RETURNING *;
