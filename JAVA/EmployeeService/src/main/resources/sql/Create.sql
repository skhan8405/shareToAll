CREATE TABLE `employee` (
  `id` bigint(20) NOT NULL,
  `date_of_birth` datetime(6) DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `is_lateral` bit(1) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
