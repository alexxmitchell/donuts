UPDATE users
SET name=$2, email=$3, address = $4, city=$5, st=$6, zip=$7
WHERE id = $1;

SELECT id, name, email, address, city, st, zip FROM users
WHERE id = $1;
