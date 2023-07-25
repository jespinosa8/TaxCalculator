INSERT INTO users (username, password, enabled)
VALUES
    ('john_doe', '5f4dcc3b5aa765d61d8327deb882cf99', true),
    ('jane_smith', '098f6bcd4621d373cade4e832627b4f6', true),
    ('bob_johnson', 'e99a18c428cb38d5f260853678922e03', true),
    ('mary_jackson', 'fcea920f7412b5da7be0cf42b8c93759', true),
    ('alex_brown', 'd41d8cd98f00b204e9800998ecf8427e', true);

INSERT INTO user_detail (user_id, ssn, first_name, middle_name, last_name, email, dob, street1, street2, city, state, zip, country)
VALUES
    (1, '123456789', 'John', 'A.', 'Doe', 'john_doe@example.com', '1990-06-15', '123 Main St', NULL, 'New York', 'New York', 10001, 'United States'),
    (2, '987654321', 'Jane', NULL, 'Smith', 'jane_smith@example.com', '1988-02-28', '456 Maple Ave', NULL, 'Los Angeles', 'California', 90001, 'United States'),
    (3, '555555555', 'Bob', NULL, 'Johnson', 'bob_johnson@example.com', '1995-11-10', '789 Oak Rd', 'Apt 3B', 'Chicago', 'Illinois', 60601, 'United States'),
    (4, '111111111', 'Mary', NULL, 'Jackson', 'mary_jackson@example.com', '1992-09-22', '321 Elm St', 'Suite 10', 'Houston', 'Texas', 77001, 'United States'),
    (5, '999999999', 'Alex', NULL, 'Brown', 'alex_brown@example.com', '1998-12-03', '567 Pine Dr', NULL, 'Phoenix', 'Arizona', 85001, 'United States');

INSERT INTO tax_filing (user_id, married, dependents, total_refund_amount, total_amount_due)
VALUES
    (1, true, 2, 1500.25, 0),
    (2, false, 0, 0, 800.50),
    (3, true, 3, 250.75, 0),
    (4, false, 1, 320.00, 0),
    (5, true, 2, 0, 1125.30);

INSERT INTO form_w2 (user_id, tax_filing_id, income, ein, employer_street1, employer_street2, employer_city, employer_state, employer_zip, wages_and_tips, total_compensation, ss_wages, ss_withheld, taxes_withheld, medicare_wages, medicare_withheld)
VALUES
    (1, 1, 75000.00, 123456789, 'ABC Corp', 'Suite 100', 'New York', 'New York', 10001, 70000.00, 75000.00, 67000.00, 6500.00, 8500.00, 67000.00, 1500.00),
    (2, 2, 60000.00, 987654321, 'XYZ Company', NULL, 'Los Angeles', 'California', 90001, 55000.00, 60000.00, 52000.00, 3500.00, 4500.00, 52000.00, 1000.00),
    (3, 3, 45000.00, 555555555, '123 Inc', 'Suite 200', 'Chicago', 'Illinois', 60601, 40000.00, 45000.00, 39000.00, 3000.00, 3500.00, 39000.00, 500.00),
    (4, 4, 80000.00, 111111111, 'XYZ Corporation', NULL, 'Houston', 'Texas', 77001, 75000.00, 80000.00, 73000.00, 4000.00, 5000.00, 73000.00, 1000.00),
    (5, 5, 90000.00, 999999999, 'ABC Company', 'Suite 500', 'Phoenix', 'Arizona', 85001, 85000.00, 90000.00, 81000.00, 5000.00, 6500.00, 81000.00, 1500.00);

INSERT INTO form_1099 (user_id, tax_filing_id, payer_fin, payer_street1, payer_street2, payer_city, payer_state, payer_zip, recipient_ssn_ein, total_compensation)
VALUES
    (1, 1, 987654321, 'XYZ Investments', 'Suite 300', 'New York', 'New York', 10001, 987654321, 1200.00),
    (2, 2, 555555555, '123 Investments', NULL, 'Los Angeles', 'California', 90001, 555555555, 3000.00),
    (3, 3, 111111111, 'ABC Investments', 'Suite 400', 'Chicago', 'Illinois', 60601, 111111111, 1500.00),
    (4, 4, 999999999, 'XYZ Financial', NULL, 'Houston', 'Texas', 77001, 999999999, 2500.00),
    (5, 5, 123456789, 'ABC Financial', 'Suite 600', 'Phoenix', 'Arizona', 85001, 123456789, 1800.00);
	
SELECT * FROM users;