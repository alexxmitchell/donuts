-- Donut Table
-- CREATE TABLE donuts (
-- id SERIAL PRIMARY KEY,
-- users_id INTEGER REFERENCES users (id),
-- boxid INTEGER REFERENCES box (id),
-- kind VARCHAR(50),
-- price MONEY,
-- quantity INTEGER);

-- Box Table
-- CREATE TABLE box (
--     id SERIAL PRIMARY KEY,
--     userid INT REFERENCES users(id),
-- )

-- User Table
-- CREATE TABLE users (
--     id INT SERIAL PRIMARY KEY,
--     authid VARCHAR(200),
--     name VARCHAR(80)
-- )
--Dotop Table
-- CREATE TABLE dotop(
--     donut_id INT REFERENCES donuts(id),
--     topping_id INT REFERENCES toppings(id)
-- );


-- DUMMY DATA FOR DONUT TABLE 
-- INSERT INTO donuts (kind, peanuts, strawberries, sprinkles, chocdrizzle)
-- VALUES('cake', 1,1,1,1);

-- INSERT INTO donuts (kind, topping1, topping2, topping3, price, users_id)
-- VALUES ('Cake', 'strawberries', 'sprinkles', 'glaze', 2, 1);

-- INSERT INTO users (authid, name)
-- VALUES ('mitche16@miamioh.edu', 'Alexx');

-- CREATE TABLE toppings (
--     id SERIAL PRIMARY KEY,
--     price MONEY,
--     label TEXT,
--     category VARCHAR(80)
-- ) 

-- INSERT INTO toppings (category, label, price)
-- VALUES
-- ('nuts','peanuts', 0),
-- ('nuts','walnuts', 0.50),
-- ('nuts','pecans', 0.50),
-- ('savory','bacon', 1),
-- ('savory','gold flakes', 2),
-- ('fruit','strawberries', 0.50),
-- ('fruit','bananas', 0.50),
-- ('sweet','sprinkles', 0),
-- ('glaze','glaze', 0),
-- ('glaze', 'hot fudge', 0)
-- ('drizzle','chocolate', 0),
-- ('drizzle','peanut butter', 0)



-- INSERT INTO donuts (users_id, boxid, kind, price, quantity)
-- VALUES (2, 1, 'cake', 1, 1);
-- INSERT INTO donuts (users_id, boxid, kind, price, quantity)
-- VALUES (3, 2, 'chocolate', 0.5, 1);

-- INSERT INTO dotop (donut_id, topping_id)
-- VALUES (1, 2),
-- (1,6);


-- INSERT INTO dotop (donut_id, topping_id)
-- VALUES 
-- (1, 2),
-- (1,6)
-- (2,4),
-- (2,3),
-- (3,5);

-- INSERT INTO box (userid)
-- VALUES(1);

