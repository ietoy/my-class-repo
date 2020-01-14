-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

-- Use programming db for the following statements --
USE programming_db;

CREATE TABLE programming_languages (
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Create a string column called "language" --
  language VARCHAR(50),
  -- Create an integer column called "rating" --
  rating INTEGER(11),
  -- Create a boolean column called "mastered" which will automatically fill --
  -- with true when a new row is made and the value isn't otherwise defined. --
  mastered BOOLEAN DEFAULT(true),
  -- Set the id as this table's primary key
  PRIMARY KEY (id)
);

-- Create new example rows


-- Create a table called programmers
CREATE TABLE programmers (
  -- a primary key named id
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- a string col called firstname
  firstName VARCHAR(50),
  -- a string col called lastname
  LASTName VARCHAR(50),

  PRIMARY KEY (id)

);

-- insert some data into the table then modify using the id col