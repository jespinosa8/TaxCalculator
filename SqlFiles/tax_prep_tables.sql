CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL,
  enabled BOOLEAN NOT NULL
);

CREATE TABLE user_detail (
  user_detail_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id),
  ssn NUMERIC(9),
  first_name VARCHAR(50),
  middle_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100),
  dob DATE,
  street1 VARCHAR(50),
  street2 VARCHAR(50),
  city VARCHAR(50),
  state VARCHAR(50),
  zip NUMERIC(10),
  country VARCHAR(50)
);

CREATE TABLE tax_filing (
  tax_filing_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id),
  married BOOLEAN,
  dependents SMALLINT,
  total_refund_amount NUMERIC(8,2),
  total_amount_due NUMERIC(8,2)
);

CREATE TABLE form_w2 (
  form_w2_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id),
  tax_filing_id INTEGER REFERENCES tax_filing(tax_filing_id),
  income NUMERIC(8,2),
  ein NUMERIC(9),
  employer_street1 VARCHAR(50),
  employer_street2 VARCHAR(50),
  employer_city VARCHAR(50),
  employer_state VARCHAR(50),
  employer_zip NUMERIC(10),
  wages_and_tips NUMERIC(8,2),
  total_compensation NUMERIC(8,2),
  ss_wages NUMERIC(8,2),
  ss_withheld NUMERIC(8,2),
  taxes_withheld NUMERIC(8,2),
  medicare_wages NUMERIC(8,2),
  medicare_withheld NUMERIC(8,2)
);

CREATE TABLE form_1099 (
  form_1099_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id),
  tax_filing_id INTEGER REFERENCES tax_filing(tax_filing_id),
  payer_fin NUMERIC(9),
  payer_street1 VARCHAR(50),
  payer_street2 VARCHAR(50),
  payer_city VARCHAR(50),
  payer_state VARCHAR(50),
  payer_zip NUMERIC(10),
  recipient_ssn_ein NUMERIC(9),
  total_compensation NUMERIC(8,2)
);