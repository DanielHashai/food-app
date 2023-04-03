-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 03, 2023 at 05:15 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `food_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `food`
--

CREATE TABLE `food` (
  `foodId` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `price` int(255) NOT NULL,
  `favorite` tinyint(1) NOT NULL,
  `originId` int(11) NOT NULL,
  `stars` decimal(10,2) NOT NULL,
  `cookTime` varchar(20) NOT NULL,
  `imageName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `food`
--

INSERT INTO `food` (`foodId`, `name`, `price`, `favorite`, `originId`, `stars`, `cookTime`, `imageName`) VALUES
(113, 'Sushi', 60, 0, 1, '2.00', '30-40', '0ab2cff2-9c41-46f1-b78a-7e97e9401059.png'),
(114, 'Pizza', 80, 0, 1, '3.40', '20-30', '3aa5a928-aed4-4835-b6da-b75acb0b3dfc.png'),
(116, 'Peperoni', 50, 0, 1, '0.00', '30-40', 'dd836395-27e8-45f1-868d-9f83211f01b8.png'),
(117, 'Pizza Veg', 45, 0, 1, '0.00', '20-30', '26e5c5db-e1c7-45b9-9b6b-39dd90b5de47.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `origins`
--

CREATE TABLE `origins` (
  `originId` int(11) NOT NULL,
  `country` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `origins`
--

INSERT INTO `origins` (`originId`, `country`) VALUES
(1, 'Israel'),
(2, 'USA'),
(3, 'Canada'),
(4, 'Japan');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(256) NOT NULL,
  `name` varchar(30) NOT NULL,
  `address` varchar(30) NOT NULL,
  `role` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `email`, `password`, `name`, `address`, `role`) VALUES
(1, 'daniel@gmail.com', '40091827878a594548c099f1fd2d9a20bb387aba26d9428993e79191222c1e2fab95cc03b81cef5455bf18808e20b68baf285049525c6b56aab3c60d5ff66db5', 'daniel', 'Etzel 13', 'Admin'),
(2, 'danielhasahi@gmail.com', '40091827878a594548c099f1fd2d9a20bb387aba26d9428993e79191222c1e2fab95cc03b81cef5455bf18808e20b68baf285049525c6b56aab3c60d5ff66db5', 'danielhashai', 'Etzel 13', 'User'),
(3, 'roeehasahi@gmail.com', '40091827878a594548c099f1fd2d9a20bb387aba26d9428993e79191222c1e2fab95cc03b81cef5455bf18808e20b68baf285049525c6b56aab3c60d5ff66db5', 'danielhashai', 'Etzel 13', 'User'),
(4, 'qweqw', '40091827878a594548c099f1fd2d9a20bb387aba26d9428993e79191222c1e2fab95cc03b81cef5455bf18808e20b68baf285049525c6b56aab3c60d5ff66db5', 'eqwewqe', 'daniel@gmail.com', 'User'),
(5, 'daniel@gmail.com', '40091827878a594548c099f1fd2d9a20bb387aba26d9428993e79191222c1e2fab95cc03b81cef5455bf18808e20b68baf285049525c6b56aab3c60d5ff66db5', 'qwewqe', 'wqe', 'User'),
(6, 'daniel@gmail.com', '40091827878a594548c099f1fd2d9a20bb387aba26d9428993e79191222c1e2fab95cc03b81cef5455bf18808e20b68baf285049525c6b56aab3c60d5ff66db5', 'ewrew', 'rer', 'User'),
(7, 'debby@gmail.com', '40091827878a594548c099f1fd2d9a20bb387aba26d9428993e79191222c1e2fab95cc03b81cef5455bf18808e20b68baf285049525c6b56aab3c60d5ff66db5', 'debby', 'qwewqe', 'User'),
(8, 'daniel@gmail.com', '40091827878a594548c099f1fd2d9a20bb387aba26d9428993e79191222c1e2fab95cc03b81cef5455bf18808e20b68baf285049525c6b56aab3c60d5ff66db5', 'ewrew', 'ree', 'User'),
(9, 'daniel@gmail.com', '40091827878a594548c099f1fd2d9a20bb387aba26d9428993e79191222c1e2fab95cc03b81cef5455bf18808e20b68baf285049525c6b56aab3c60d5ff66db5', 'wqe', 'werew', 'User'),
(10, 'daniel@gmail.com', '40091827878a594548c099f1fd2d9a20bb387aba26d9428993e79191222c1e2fab95cc03b81cef5455bf18808e20b68baf285049525c6b56aab3c60d5ff66db5', 'eee', 'eee', 'User'),
(11, 'daniel@gmail.com', '40091827878a594548c099f1fd2d9a20bb387aba26d9428993e79191222c1e2fab95cc03b81cef5455bf18808e20b68baf285049525c6b56aab3c60d5ff66db5', 'roee', 'sss', 'User'),
(12, 'daniel@gmail.com', '40091827878a594548c099f1fd2d9a20bb387aba26d9428993e79191222c1e2fab95cc03b81cef5455bf18808e20b68baf285049525c6b56aab3c60d5ff66db5', 'roee', 'sss', 'User'),
(13, 'daniel@gmail.com', '40091827878a594548c099f1fd2d9a20bb387aba26d9428993e79191222c1e2fab95cc03b81cef5455bf18808e20b68baf285049525c6b56aab3c60d5ff66db5', 'roee', 'sss', 'User'),
(14, 'daniel@gmail.com', '40091827878a594548c099f1fd2d9a20bb387aba26d9428993e79191222c1e2fab95cc03b81cef5455bf18808e20b68baf285049525c6b56aab3c60d5ff66db5', 'roee', 'sss', 'User'),
(15, 'daniel@gmail.com', '40091827878a594548c099f1fd2d9a20bb387aba26d9428993e79191222c1e2fab95cc03b81cef5455bf18808e20b68baf285049525c6b56aab3c60d5ff66db5', 'roee', 'sss', 'User'),
(16, 'daniel@gmail.com', '40091827878a594548c099f1fd2d9a20bb387aba26d9428993e79191222c1e2fab95cc03b81cef5455bf18808e20b68baf285049525c6b56aab3c60d5ff66db5', 'sdsd', 'sd', 'User');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`foodId`),
  ADD KEY `originId` (`originId`);

--
-- Indexes for table `origins`
--
ALTER TABLE `origins`
  ADD PRIMARY KEY (`originId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `food`
--
ALTER TABLE `food`
  MODIFY `foodId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT for table `origins`
--
ALTER TABLE `origins`
  MODIFY `originId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `food`
--
ALTER TABLE `food`
  ADD CONSTRAINT `food_ibfk_1` FOREIGN KEY (`originId`) REFERENCES `origins` (`originId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
