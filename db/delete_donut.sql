-- DELETE FROM box WHERE userid = $1 AND donutid IS IN ($1, $2, $3);
DELETE FROM donuts WHERE id=$1 AND users_id = $2;