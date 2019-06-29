CREATE TABLE "Comments" (
id SERIAL PRIMARY KEY,
quote_id INT REFERENCES "Quotes" (id),
user_id INT REFERENCES "Users" (id),
commentBody TEXT,
);

