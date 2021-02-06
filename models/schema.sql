
CREATE TABLE users
(
  user_id SERIAL PRIMARY KEY ,
  email VARCHAR NOT NULL,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  date_of_birth DATE NOT NULL,
  pswd VARCHAR
)
;
CREATE TABLE categories
(
  category_id SERIAL PRIMARY KEY,
  category_name VARCHAR
)
;
CREATE TABLE products
(
  product_id SERIAL PRIMARY KEY ,
  category_id BIGINT REFERENCES categories,
  product_title VARCHAR NOT NULL,
  product_description VARCHAR ,
  product_availability INT NOT NULL,
  product_price DECIMAL (6, 2) NOT NULL,
  thumbnail VARCHAR(500),
  image1 VARCHAR(500),
  image2 VARCHAR(500),
  image3 VARCHAR(500),
  image4 VARCHAR(500))
;

CREATE TABLE addresses
(
  address_id SERIAL PRIMARY KEY,
  user_id BIGINT REFERENCES users,
  full_name VARCHAR,
  address1 VARCHAR,
  address2 VARCHAR,
  postcode VARCHAR,
  city VARCHAR,
  phone VARCHAR
)
;

