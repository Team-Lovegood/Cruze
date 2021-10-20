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
-- Table 'Orders'
--
-- ---

DROP TABLE IF EXISTS orders CASCADE;

CREATE TABLE orders (
  id SERIAL,
  riderId INTEGER NULL DEFAULT NULL,
  driverId INTEGER NULL DEFAULT NULL,
  status VARCHAR NULL DEFAULT NULL,
  cost DECIMAL NULL DEFAULT NULL,
  departure VARCHAR NULL DEFAULT NULL,
  destination VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'Rider ratings'
--
-- ---

DROP TABLE IF EXISTS rider_ratings CASCADE;

CREATE TABLE rider_ratings (
  id SERIAL,
  rating INT NULL DEFAULT NULL,
  riderId INT NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'Driver ratings'
--
-- ---

DROP TABLE IF EXISTS driver_ratings CASCADE;

CREATE TABLE driver_ratings (
  id SERIAL,
  rating INT NULL DEFAULT NULL,
  driverId INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE orders ADD FOREIGN KEY (riderId) REFERENCES riders (id);
ALTER TABLE orders ADD FOREIGN KEY (driverId) REFERENCES drivers (id);
ALTER TABLE rider_ratings ADD FOREIGN KEY (riderId) REFERENCES riders (id);
ALTER TABLE driver_ratings ADD FOREIGN KEY (driverId) REFERENCES drivers (id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE Riders ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Drivers ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Orders ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Rider ratings ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Driver ratings ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO riders (firstName,lastName,email,phone) VALUES
-- ('Isaac','Favila','isaac@test.com', 1234567890);
-- INSERT INTO drivers (firstName,lastName,email,carMake,carModel,carColor,licensePlate) VALUES
-- ('Isaac','Favila','isaac@test.com','Honda','Accord','Black','plate123');
-- INSERT INTO orders (`id`,`riderId`,`driverId`,`status`,`cost`,`departure`,`destination`) VALUES
-- ('','','','','','','');
-- INSERT INTO rider_ratings (`id`,`rating`,`riderId`) VALUES
-- ('','','');
-- INSERT INTO driver_ratings (`id`,`rating`,`driverId`) VALUES
-- ('','','');