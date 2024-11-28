CREATE TYPE printing_status AS ENUM ('PENDING', 'FINISHED', 'DELIVERED', 'CANCELLED');
CREATE TYPE paper_size AS ENUM ('A4', 'A3');
CREATE TYPE printing_type AS ENUM ('AUTO', 'MANUAL');

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    type printing_type NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    student VARCHAR(50) NOT NULL,
    printer INTEGER NOT NULL,
    available_at TIMESTAMP NOT NULL,
    status printing_status NOT NULL DEFAULT 'PENDING',
    FOREIGN KEY (student) REFERENCES students(email),
    FOREIGN KEY (printer) REFERENCES printers(id)
);


CREATE TABLE print_details(
    order_id INTEGER NOT NULL,
    id INTEGER NOT NULL,
    from_page INTEGER NOT NULL,
    to_page INTEGER NOT NULL,
    two_sided BOOLEAN NOT NULL,
    page_size paper_size NOT NULL,
    quantity INTEGER NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    file_path VARCHAR(255) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    PRIMARY KEY (order_id, id)
);


CREATE OR REPLACE FUNCTION auto_increment_print_detail_id()
RETURNS TRIGGER AS $$
DECLARE
    max_id INTEGER;
BEGIN
    -- Find the maximum id for the given order_id
    SELECT COALESCE(MAX(id), 0) INTO max_id
    FROM print_details
    WHERE order_id = NEW.order_id;

    -- Increment id for the new record
    NEW.id := max_id + 1;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER before_insert_print_detail
BEFORE INSERT ON print_details
FOR EACH ROW
EXECUTE FUNCTION auto_increment_print_detail_id();

-- insert into print_details (order_id, from_page, to_page, two_sided, colored, page_size, quantity, file_name, file_path) values (4, 1, 10, true, false, 'A4', 1, 'file.pdf', '/haha/file.pdf');
