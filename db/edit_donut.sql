UPDATE dotop
SET toppingid =$1
WHERE donutid = $2 AND toppingid=$3
RETURNING *;


--get old topping and donut and replace old topping w/ the new topping