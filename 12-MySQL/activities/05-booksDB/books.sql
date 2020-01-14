-- this is our prerequisite code that says to:
-- NOT create this database if it already exists
DROP DATABASE IF EXISTS books_db;
-- create the database otherwise
CREATE DATABASE books_db;
-- then use it
USE books_db;

-- this creates a new table called books that has the following column headers:
CREATE TABLE books(
  -- an id key that is an integer that autoincrements upon each new row creation and cannot be empty
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- an authorID which is an integer
  authorId INTEGER(11),
  -- the title which has a max char length of 100
  title VARCHAR(100),
  -- this sets the primary key for this table to be "id"
  PRIMARY KEY (id)
);

-- similarly, this creates a table called authors, and sets the columns as such:
CREATE TABLE authors(
  -- an id that is an integer, auto increments upon each new row, and cannot be null
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- a first name string that can be no longer than 100 chars
  firstName VARCHAR(100),
  -- see above, but for last name
  lastName VARCHAR(100),
  -- sets the primary key for this table to be "id"
  PRIMARY KEY (id)
);


-- the following lines insert various authors information into our authors table
INSERT INTO authors (firstName, lastName) values ('Jane', 'Austen');
INSERT INTO authors (firstName, lastName) values ('Mark', 'Twain');
INSERT INTO authors (firstName, lastName) values ('Lewis', 'Carroll');
INSERT INTO authors (firstName, lastName) values ('Andre', 'Asselin');

-- similarly, this code inserts book information into our books table, but specifies the authorId. This creates a one to many relationship between our two tables
INSERT INTO books (title, authorId) values ('Pride and Prejudice', 1);
INSERT INTO books (title, authorId) values ('Emma', 1);
INSERT INTO books (title, authorId) values ('The Adventures of Tom Sawyer', 2);
INSERT INTO books (title, authorId) values ('Adventures of Huckleberry Finn', 2);
INSERT INTO books (title, authorId) values ('Alice''s Adventures in Wonderland', 3);
INSERT INTO books (title, authorId) values ('Dracula', null);

-- this selects all the inforation from authors and books tables respectively
SELECT * FROM authors;
SELECT * FROM books;

-- show ALL books with authors
-- INNER JOIN will only return all matching values from both tables
SELECT title, firstName, lastName
FROM books
INNER JOIN authors ON books.authorId = authors.id;

-- show ALL books, even if we don't know the author
-- LEFT JOIN returns all of the values from the left table, and the matching ones from the right table
SELECT title, firstName, lastName
FROM books
LEFT JOIN authors ON books.authorId = authors.id;

-- show ALL books, even if we don't know the author
-- RIGHT JOIN returns all of the values from the right table, and the matching ones from the left table
SELECT title, firstName, lastName
FROM books
RIGHT JOIN authors ON books.authorId = authors.id;
