DROP DATABASE IF EXISTS trybe_flix;

CREATE DATABASE IF NOT EXISTS trybe_flix;

USE trybe_flix;

CREATE TABLE streamings (
  id INT PRIMARY KEY auto_increment NOT NULL,
  name VARCHAR(255),
  price DECIMAL(10, 2)
);

CREATE TABLE subscribers (
  id INT PRIMARY KEY auto_increment NOT NULL,
  name VARCHAR(255),
  email VARCHAR(255)
);

CREATE TABLE subscriptions (
  streaming_id INT,
  subscriber_id INT,
  PRIMARY KEY (streaming_id, subscriber_id),
  FOREIGN KEY `fk_streaming` (streaming_id) REFERENCES streamings (id),
  FOREIGN KEY `fk_subscriber` (subscriber_id) REFERENCES subscribers (id)
);