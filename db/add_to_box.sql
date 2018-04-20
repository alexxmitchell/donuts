INSERT INTO donuts(boxid)
(SELECT id FROM box WHERE user_id = $1)
WHERE id = $2;