-- Drops the passport if it exists currently --
DROP DATABASE IF EXISTS passport_demo;
-- Creates the "passport" database --
CREATE DATABASE passport_demo;

USE passport_demo;

CREATE table articles
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	title varchar(255) NOT NULL,
    body TEXT,
    clearance INT,
	position BOOLEAN
);
