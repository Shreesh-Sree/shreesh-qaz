CREATE DATABASE IF NOT EXISTS supermarket;
USE supermarket;
CREATE TABLE IF NOT EXISTS products (id INT PRIMARY KEY, name VARCHAR(50), brand VARCHAR(50), price DECIMAL(10,2));
INSERT INTO products (id,name,brand,price) VALUES
(101,'Rice','India Gate',120),(102,'Milk','Amul',30),(103,'Bread','Britannia',40),(104,'Oil','Fortune',150),(105,'Biscuits','Parle',20)
ON DUPLICATE KEY UPDATE name=VALUES(name),brand=VALUES(brand),price=VALUES(price);
