-- MySQL dump 10.19  Distrib 10.2.44-MariaDB, for debian-linux-gnu (aarch64)
--
-- Host: localhost    Database: marz
-- ------------------------------------------------------
-- Server version       10.2.44-MariaDB-1:10.2.44+maria~bionic

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Customer`
--

DROP TABLE IF EXISTS `Customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Customer` (
  `CustomerID` int(11) NOT NULL AUTO_INCREMENT,
  `CustomerFirstName` varchar(100) NOT NULL,
  `CustomerLastName` varchar(100) NOT NULL,
  PRIMARY KEY (`CustomerID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Customer`
--

LOCK TABLES `Customer` WRITE;
/*!40000 ALTER TABLE `Customer` DISABLE KEYS */;
INSERT INTO `Customer` VALUES (1,'Test1','McTest1'),(2,'Test2','McTest2'),(3,'Test3','McTest3'),(4,'Test4','McTest4');
/*!40000 ALTER TABLE `Customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Orders`
--

DROP TABLE IF EXISTS `Orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Orders` (
  `OrderID` int(11) NOT NULL AUTO_INCREMENT,
  `OrderStatus` enum('Queued','InProgress','QA','Cancelled','Complete') NOT NULL,
  `ProductID` int(11) NOT NULL,
  `CustomerID` int(11) NOT NULL,
  PRIMARY KEY (`OrderID`),
  KEY `CustomerID` (`CustomerID`),
  KEY `ProductID` (`ProductID`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`CustomerID`) REFERENCES `Customer` (`CustomerID`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`ProductID`) REFERENCES `Product` (`ProductID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Orders`
--

LOCK TABLES `Orders` WRITE;
/*!40000 ALTER TABLE `Orders` DISABLE KEYS */;
INSERT INTO `Orders` VALUES (2,'Queued',1,1),(3,'Queued',1,2),(4,'Queued',1,3),(5,'InProgress',2,3),(6,'InProgress',2,4),(7,'InProgress',3,1),(8,'QA',1,2),(9,'Complete',1,3),(10,'Cancelled',4,1),(11,'Cancelled',5,2);
/*!40000 ALTER TABLE `Orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Product`
--

DROP TABLE IF EXISTS `Product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Product` (
  `ProductID` int(11) NOT NULL AUTO_INCREMENT,
  `ProductName` varchar(100) NOT NULL,
  `ProductPhotoURL` varchar(255) NOT NULL,
  `ProductStatus` enum('Active','InActive') DEFAULT NULL,
  PRIMARY KEY (`ProductID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Product`
--

LOCK TABLES `Product` WRITE;
/*!40000 ALTER TABLE `Product` DISABLE KEYS */;
INSERT INTO `Product` 
VALUES (1,'Hat','https://lh3.googleusercontent.com/pw/AP1GczPbtJWMWa3iUqbdWbQ3ddnGY-7KLtTHsWVpoaXc-lDS1LRfCssnPqnbKk-mai2l1qqT8MRfKpyw5JxRJA1qks7EyAZALs44ufvShZFjE8wiZh1TzRGrfokJoJmss-WOu1CKR60B2tarLGiHSXWO3_s=w1495-h993-s-no-gm','Active'),
(2,'Shoes','https://lh3.googleusercontent.com/pw/AP1GczMHwnDE8OHnPZCu-9vebj7ZJlhO01TDu0AFLdk3kWEGlf-n_-_lhqjhG3tJQNSO1b4vsVfApDeKqEn1Su9pum3U8Hw-XfGP2etnw7ff7X7Dos4SKN8-mTBI3Tz_43yX2AqgcOnJAYCuXE261ko7guI=w1490-h993-s-no-gm','Active'),
(3,'Pants','https://lh3.googleusercontent.com/pw/AP1GczO6RZmahlhLTaRSLBbOW3Y7ZkuZqLk20YRqTfvEQ1Ltfv6I_k6rH6RKuOl-yGu47agz2Og1BdW904wMXkLv1pzRYWFU2jlVHsrhtDCTPy13fmn2bcJtOFemdZBP_K5dKLTjM3MC_-2yDr2bh2BNUJ8=w408-h612-s-no-gm','Active'),
(4,'Shirt','https://lh3.googleusercontent.com/pw/AP1GczOwYeXunpMK08jaQVwdDP3r9TUpI8Sh0FZzddBuIhEtZXPiHaHJA788YMNj4nYWq2LwybVY9sUAkfk2Uee6mrMpptCAGuHt_m76VsZnboIycz0M1xv0t5NIvVwC2hE5vT-bDsiLjm5l3grlzZrCb20=w408-h612-s-no-gm','InActive'),
(5,'Coat','https://lh3.googleusercontent.com/pw/AP1GczPKzeIMfXS4DBg4lcFTiCBVJ37-KLwbtxDo2lJvYLGRVvIcjRk6LP6RqbPq7CPM3_9ZN-BkVoHRczKPJ3CU_e1u0FztUlrvL3KHg-bOYYjCcT91-gdwKjRK2znH-hmAfSftDn_QHwI8I3IMyxzJSZE=w662-h993-s-no-gm','InActive');
/*!40000 ALTER TABLE `Product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-17 18:36:43