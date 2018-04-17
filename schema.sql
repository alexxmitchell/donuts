-- Donut Table
-- CREATE TABLE donuts (
--     id SERIAL PRIMARY KEY,
--     kind VARCHAR(50),
--     peanuts INT,
--     bacon INT,
--     strawberries INT,
--     gold INT,
--     sprinkles INT,
--     chocdrizzle INT,
--     glaze INT,
--     pbdrizzle INT

)
--NEW TABLE STRUCTURE FOR DONUTS
-- CREATE TABLE donuts (
-- id SERIAL PRIMARY KEY,
-- kind VARCHAR(50),
-- topping1 VARCHAR(80),
-- topping2 VARCHAR(80),
-- topping3 VARCHAR(80),
-- price MONEY,
-- users_id INTEGER REFERENCES users (id));

-- Box Table
-- CREATE TABLE box (
--     id SERIAL PRIMARY KEY,
--     userid INT REFERENCES users(id),
--     price MONEY,
--     donutid INT REFERENCES donuts(id)
-- )

-- User Table
-- CREATE TABLE users (
--     id INT SERIAL PRIMARY KEY,
--     authid VARCHAR(200),
--     name VARCHAR(80)
-- )


-- DUMMY DATA FOR DONUT TABLE 
-- INSERT INTO donuts (kind, peanuts, strawberries, sprinkles, chocdrizzle)
-- VALUES('cake', 1,1,1,1);

-- INSERT INTO donuts (kind, topping1, topping2, topping3, price, users_id)
-- VALUES ('Cake', 'strawberries', 'sprinkles', 'glaze', 2, 1);

-- INSERT INTO users (authid, name)
-- VALUES ('mitche16@miamioh.edu', 'Alexx'); 