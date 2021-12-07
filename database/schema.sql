DROP DATABASE IF EXISTS cruze;

CREATE DATABASE cruze;

\c cruze;

-- ---
-- Table 'Riders'
--
-- ---

DROP TABLE IF EXISTS riders CASCADE;

CREATE TABLE riders (
  id SERIAL,
  firstName VARCHAR NULL DEFAULT NULL,
  lastName VARCHAR NULL DEFAULT NULL,
  email VARCHAR NULL DEFAULT NULL,
  phone INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'Drivers'
--
-- ---

DROP TABLE IF EXISTS drivers CASCADE;

CREATE TABLE drivers (
  id SERIAL,
  firstName VARCHAR NULL DEFAULT NULL,
  lastName VARCHAR NULL DEFAULT NULL,
  email VARCHAR NULL DEFAULT NULL,
  phone INTEGER NULL DEFAULT NULL,
  carMake VARCHAR NULL DEFAULT NULL,
  carModel VARCHAR NULL DEFAULT NULL,
  carColor VARCHAR NULL DEFAULT NULL,
  carCapacity INTEGER NULL DEFAULT NULL,
  licensePlate VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (id)
);


-- ---
-- Table Properties
-- ---

-- ALTER TABLE Riders ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Drivers ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

INSERT INTO riders (firstName,lastName,email,phone) VALUES
('Isaac','F','isaac@test.com', 1234567890);
INSERT INTO riders (firstName,lastName,email,phone) VALUES
('Tim','E Tim','tim@demo.com', 1234567890);

INSERT INTO drivers (firstName,lastName,email,carMake,carModel,carColor,carCapacity, licensePlate) VALUES
('David','D','david@test.com','BMW','M2','Blue', 4, '2FAST4U');
INSERT INTO drivers (firstName,lastName,email,carMake,carModel,carColor,carCapacity, licensePlate) VALUES
('Jake','A','jake@demo.com','Nissan','GT-R','Silver', 4, '3FAST5U');
