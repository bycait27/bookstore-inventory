/* -- Seed data for the User table */
INSERT INTO user (name, email, password)
VALUES
  ('John Doe', 'john@example.com', 'password1'),
  ('Alice Smith', 'alice@example.com', 'password2'),
  ('Bob Johnson', 'bob@example.com', 'password3'),
  ('Emma Wilson', 'emma@example.com', 'password4'),
  ('Michael Brown', 'michael@example.com', 'password5'),
  ('Olivia Davis', 'olivia@example.com', 'password6'),
  ('William Jones', 'william@example.com', 'password7'),
  ('Sophia Miller', 'sophia@example.com', 'password8'),
  ('James Davis', 'james@example.com', 'password9'),
  ('Evelyn Lee', 'evelyn@example.com', 'password10');

/* -- Seed data for the Book table */
INSERT INTO book (title, authors, genre, average_rating, isbn, stock, user_id)
VALUES
  ('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic', 4.5, 1234567890, 10, 1),
  ('To Kill a Mockingbird', 'Harper Lee', 'Classic', 4.8, 9876543210, 8, 2),
  ('1984', 'George Orwell', 'Dystopian', 4.3, 5678901234, 12, 3),
  ('Pride and Prejudice', 'Jane Austen', 'Romance', 4.6, 3456789012, 6, 1),
  ('The Catcher in the Rye', 'J.D. Salinger', 'Coming-of-age', 4.2, 2345678901, 15, 2),
  ('The Hobbit', 'J.R.R. Tolkien', 'Fantasy', 4.7, 7890123456, 9, 3),
  ('Moby-Dick', 'Herman Melville', 'Adventure', 4.4, 4567890123, 7, 4),
  ('War and Peace', 'Leo Tolstoy', 'Historical Fiction', 4.9, 5678901234, 11, 5),
  ('The Lord of the Rings', 'J.R.R. Tolkien', 'Fantasy', 4.8, 6789012345, 13, 1),
  ('Crime and Punishment', 'Fyodor Dostoevsky', 'Psychological Fiction', 4.5, 7890123456, 5, 2),
  ('The Odyssey', 'Homer', 'Epic Poetry', 4.7, 8901234567, 14, 3),
  ('The Shining', 'Stephen King', 'Horror', 4.3, 9012345678, 8, 4),
  ('The Hunger Games', 'Suzanne Collins', 'Dystopian', 4.2, 1234567890, 10, 5),
  ('The Alchemist', 'Paulo Coelho', 'Adventure', 4.6, 2345678901, 6, 1),
  ('The Road', 'Cormac McCarthy', 'Post-Apocalyptic', 4.4, 3456789012, 12, 2),
  ('Brave New World', 'Aldous Huxley', 'Dystopian', 4.5, 4567890123, 9, 3);

/* -- You can continue adding more user and book records as needed. */