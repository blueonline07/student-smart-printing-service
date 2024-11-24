CREATE TABLE users (
  email VARCHAR(50) PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE students (
  email VARCHAR(50) PRIMARY KEY REFERENCES users(email) ON DELETE CASCADE,
  balance INT NOT NULL
);

CREATE TABLE staffs (
  email VARCHAR(50) PRIMARY KEY REFERENCES users(email) ON DELETE CASCADE,
  workplace VARCHAR(50) NOT NULL
  -- room CHAR(3) NOT NULL,
  -- building CHAR(2) NOT NULL,
  -- campus CHAR(3) NOT NULL
);