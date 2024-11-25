CREATE TABLE printers (
    id SERIAL PRIMARY KEY,
    brand VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    room CHAR(3) NOT NULL,
    building CHAR(2) NOT NULL,
    campus CHAR(3) NOT NULL,
    status BOOLEAN NOT NULL
);

CREATE TABLE printables (
    printer INTEGER REFERENCES printers(id) ON DELETE CASCADE,
    printable VARCHAR(4) NOT NULL,
    PRIMARY KEY (printer, printable)
);