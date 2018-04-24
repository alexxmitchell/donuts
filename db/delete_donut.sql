DELETE FROM dotop WHERE donut_id = $2;
DELETE FROM donuts WHERE id=$2 AND users_id = $1;

-- SELECT * FROM donuts WHERE users_id=$1;

