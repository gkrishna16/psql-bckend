CREATE TABLE input_data (
    id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT
    NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL 
);     

SELECT * FROM input_data;

INSERT INTO input_data (first_name,
last_name,
email)
VALUES ('John','krishan','gopal@test.com');

--psql -U api_user
--\c form_api
--heroku pg:psql