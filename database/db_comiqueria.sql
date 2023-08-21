-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-08-2023 a las 20:30:20
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_comiqueria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comics`
--

CREATE TABLE `comics` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `comics`
--

INSERT INTO `comics` (`id`, `title`, `image`, `price`, `description`) VALUES
(1, 'Batman: Year One', 'https://m.media-amazon.com/images/I/71OEX4Y3zJL._AC_UF1000,1000_QL80_.jpg', 2000, 'Descripción de Batman: Year One'),
(2, 'Batman: The Man Who Laughs', 'https://http2.mlstatic.com/D_NQ_NP_733688-MLA44472360924_012021-O.jpg', 1500, 'Descripción de Batman: The Man Who Laughs'),
(3, 'Batman: The Long Halloween', 'https://m.media-amazon.com/images/I/91D+7bVSo0L._AC_UF1000,1000_QL80_.jpg', 4000, 'Descripción de Batman: The Long Halloween'),
(4, 'Batman: Dark Victory', 'https://m.media-amazon.com/images/I/81cxae23MCL._AC_UF1000,1000_QL80_.jpg', 4000, 'Descripción de Batman: Dark Victory'),
(5, 'Batman: A Death in The Family', 'https://m.media-amazon.com/images/I/71yDogdr+pL.jpg', 3000, 'Descripción de Batman: A Death in The Family'),
(6, 'Batman: Arkham Asylum', 'https://m.media-amazon.com/images/I/81-ZMm0az2L._AC_UF1000,1000_QL80_.jpg', 3000, 'Descripción de Batman: Arkham Asylum'),
(7, 'Watchmen', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Watchmen-cover.svg/1200px-Watchmen-cover.svg.png', 4000, 'Descripción de Watchmen'),
(8, 'V For Vendetta', 'https://m.media-amazon.com/images/I/71f7i5dHDSL._AC_UF1000,1000_QL80_.jpg', 3000, 'Descripción de V For Vendetta'),
(9, 'All Star Superman', 'https://m.media-amazon.com/images/I/81JDRABs0zL.jpg', 3000, 'Descripción de All Star Superman');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imageneshome`
--

CREATE TABLE `imageneshome` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `imageneshome`
--

INSERT INTO `imageneshome` (`id`, `image`, `url`) VALUES
(1, 'superheroes', 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2018/12/marvel.jpg?fit=1200%2C799&quality=50&strip=all&ssl=1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenesnosotros`
--

CREATE TABLE `imagenesnosotros` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `imagenesnosotros`
--

INSERT INTO `imagenesnosotros` (`id`, `image`, `url`) VALUES
(1, 'FrankMiller', 'https://upload.wikimedia.org/wikipedia/commons/d/d4/FrankMiller_JimLee_DC%27s_2018PopUpShop2.jpg'),
(2, 'AlanMoore', 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Alan_Moore_%282%29.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comics`
--
ALTER TABLE `comics`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `imageneshome`
--
ALTER TABLE `imageneshome`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `imagenesnosotros`
--
ALTER TABLE `imagenesnosotros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comics`
--
ALTER TABLE `comics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `imageneshome`
--
ALTER TABLE `imageneshome`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `imagenesnosotros`
--
ALTER TABLE `imagenesnosotros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
