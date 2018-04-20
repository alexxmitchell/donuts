DELETE FROM dotop WHERE donut_id = $2;
DELETE FROM donuts WHERE id=$2 AND userid = $1;

