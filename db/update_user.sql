UPDATE users
SET name=$2, email = $3, address_line_1 = $4, address_line_2 = $5, city = $6, st = $7, zip = $8
WHERE id = $1;

SELECT id, name, email, address_line_1, address_line_2, city, st, zip FROM users
WHERE id = $1;
