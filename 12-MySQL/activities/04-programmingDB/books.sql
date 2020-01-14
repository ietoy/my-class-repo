DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;
USE books_db;


CREATE TABLE books(
    -- primary key named id which will auto increment with each created row
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    -- string col called title
    title VARCHAR(50),
    PRIMARY KEY (id)

);

-- create new rows of last books read
INSERT INTO books (title)
VALUES ("The Power of Habit");

INSERT INTO books (title)
VALUES ("The Spirit Catches You and You Fall Down");

INSERT INTO books (title)
VALUES ("The Watchmen");

-- update some info in the table using the id
UPDATE books
SET title = "V for Vendetta"
WHERE id = 3;

CREATE TABLE authors(
    -- primary key called id
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    -- string col called firstName
    firstName VARCHAR(50),
    -- string col called lastName
    lastName VARCHAR(50),
    PRIMARY KEY (id)

);

-- insert some data into the authors table
INSERT INTO authors(firstName, lastName)
VALUES ("Charles", "Duhig");

INSERT INTO authors(firstName, lastName)
VALUES ("Idont", "Knowe");

INSERT INTO authors(firstName, lastName)
VALUES ("Alan", "Moore");

-- update values b/o id
UPDATE authors
SET firstName = "Nowi", lastName = "Knowit"
WHERE id = 2;