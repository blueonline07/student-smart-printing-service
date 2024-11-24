CREATE TYPE printing_status AS ENUM ('pending', 'finished', 'delivered', 'cancelled');
CREATE TYPE paper_size AS ENUM ('A4', 'A3');

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    student VARCHAR(50) NOT NULL,
    status printing_status NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student) REFERENCES students(email),
    printer INTEGER NOT NULL,
    FOREIGN KEY (printer) REFERENCES printers(id)
);

CREATE TABLE counterOrders(
    id INTEGER PRIMARY KEY,
    FOREIGN KEY (id) REFERENCES orders(id) ON DELETE CASCADE,
    available_since TIMESTAMP NOT NULL
);

CREATE TABLE instantOrders(
    id INTEGER PRIMARY KEY,
    FOREIGN KEY (id) REFERENCES orders(id) ON DELETE CASCADE,
    available_at TIMESTAMP NOT NULL
);

CREATE TABLE print_details(
    id INTEGER NOT NULL,
    order_id INTEGER NOT NULL,
    from_page INTEGER NOT NULL,
    to_page INTEGER NOT NULL,
    sides INTEGER NOT NULL,
    page_size paper_size NOT NULL,
    quantity INTEGER NOT NULL,
    file_path VARCHAR(255) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    PRIMARY KEY (order_id, id)
);
