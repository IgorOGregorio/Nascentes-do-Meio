-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 12/12/2019 às 23:32
-- Versão do servidor: 5.7.28-0ubuntu0.18.04.4
-- Versão do PHP: 7.2.24-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `nascentes`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `ponto_coleta`
--

CREATE TABLE `ponto_coleta` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `endereco` varchar(455) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `latitude` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `ponto_coleta`
--

INSERT INTO `ponto_coleta` (`id`, `nome`, `endereco`, `longitude`, `latitude`) VALUES
(1, 'teste 1', 'Av. Cap. Gomes, N. 114 - Boa Vista, Itajubá - MG, 37505-028', '-51.067442', '-26.228375'),
(2, 'teste 2', 'Rua teste 2, 245, BPS', '-49.24589', '-16.68335'),
(3, 'teste 3', 'Rua teste 3, 74, Centro', '147.456.359.28', '159.758.458.62'),
(4, 'teste4', 'Rua teste 4, Varginh', '123456789', '123456789'),
(5, 'teste 5', 'Rua teste 5, 84, Pin', '123', '123'),
(6, 'teste 6', 'rua 6', '123', '123'),
(7, 'teste 7', 'Rua Dr. Silvestre Ferraz, 1166, Pinheirinho, Itajubá, MG', '-45.45229', '-22.41613'),
(8, 'teste 8', 'Av. Prudente de Morais, 920 - Coracao de Jesus, Belo Horizonte - MG, 30380-260', '-43.94864', '-19.94356'),
(9, 'teste 9', 'Largo de São Sebastião - Centro, Manaus - AM, 69067-080', '-45.39892', '-23.80194'),
(10, 'teste 10', ' 5760 Polaris Ave, Las Vegas, NV 89118 ', '-115.18479', '36.08485'),
(11, 'teste 11', 'Rua tigre maia, itajubá, MG', '-45.453422', '-22.418812'),
(14, 'teste25', 'Av. Henriqueto Cardinale, 554 - Varginha, Itajubá - MG, 37501-153', '-45.443771', '-22.446751');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `ponto_coleta`
--
ALTER TABLE `ponto_coleta`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nome` (`nome`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `ponto_coleta`
--
ALTER TABLE `ponto_coleta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
