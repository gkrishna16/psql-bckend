CREATE TABLE input_data (
    id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT
    NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL 
);     


INSERT INTO input_data (first_name,
last_name,
email)
VALUES ('John','krishan','gopal@test.com');