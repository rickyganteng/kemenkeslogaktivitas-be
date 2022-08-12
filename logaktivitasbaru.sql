-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 12 Agu 2022 pada 05.53
-- Versi Server: 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `logaktivitas`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `booking_ruangan`
--

CREATE TABLE `booking_ruangan` (
  `id` int(11) NOT NULL,
  `id_peminjam` varchar(150) NOT NULL,
  `booking_ruangan_nama` varchar(150) NOT NULL,
  `booking_ruangan_nip` varchar(150) NOT NULL,
  `booking_ruangan_unitkerja` varchar(150) NOT NULL,
  `booking_ruangan_tanggal` varchar(50) NOT NULL,
  `booking_ruangan_nohp` varchar(150) NOT NULL,
  `booking_ruangan_direktorat` varchar(150) NOT NULL,
  `booking_ruangan_email` varchar(150) NOT NULL,
  `booking_ruangan_penaggung_jawab` varchar(150) NOT NULL,
  `booking_ruangan_keterangan_kegiatan_acara` varchar(150) NOT NULL,
  `booking_ruangan_ruangan` varchar(150) NOT NULL,
  `booking_ruangan_waktu_penggunaan_awal` time NOT NULL,
  `booking_ruangan_waktu_penggunaan_akhir` time NOT NULL,
  `booking_ruang_rapat_hadir_oleh` varchar(250) NOT NULL,
  `booking_ruangan_surat_dinas` varchar(150) NOT NULL,
  `booking_ruangan_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `booking_ruangan_updated_at` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `booking_ruangan`
--

INSERT INTO `booking_ruangan` (`id`, `id_peminjam`, `booking_ruangan_nama`, `booking_ruangan_nip`, `booking_ruangan_unitkerja`, `booking_ruangan_tanggal`, `booking_ruangan_nohp`, `booking_ruangan_direktorat`, `booking_ruangan_email`, `booking_ruangan_penaggung_jawab`, `booking_ruangan_keterangan_kegiatan_acara`, `booking_ruangan_ruangan`, `booking_ruangan_waktu_penggunaan_awal`, `booking_ruangan_waktu_penggunaan_akhir`, `booking_ruang_rapat_hadir_oleh`, `booking_ruangan_surat_dinas`, `booking_ruangan_created_at`, `booking_ruangan_updated_at`) VALUES
(40, '62', 'Bambang', '12345', 'Tu. Dirjen', '1667260800000', '0852', 'Sekertariat P2P', 'test08@gmail.com', 'bambang', 'rapat besar', 'Direktor P2PTM 1', '08:00:00', '12:00:00', '', '', '2022-06-05 16:00:27', ''),
(42, '62', 'Bambang', '12345', 'Tu. Dirjen', '1667260800000', '0852', 'Sekertariat P2P', 'test08@gmail.com', 'bambang', 'rapat besar', 'Direktor P2PTM 1', '08:00:00', '12:00:00', '', '', '2022-06-05 16:00:27', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `fasilitas_ruangan`
--

CREATE TABLE `fasilitas_ruangan` (
  `fasilitas_ruangan_id` int(11) NOT NULL,
  `id_r` int(11) NOT NULL,
  `nama_barang` varchar(150) NOT NULL,
  `jumlah_barang` int(10) NOT NULL,
  `fasilitas_barang` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `fasilitas_ruangan`
--

INSERT INTO `fasilitas_ruangan` (`fasilitas_ruangan_id`, `id_r`, `nama_barang`, `jumlah_barang`, `fasilitas_barang`) VALUES
(1, 34, 'meja', 100, 'lll'),
(2, 34, 'axcm', 100, 'ertre'),
(3, 35, 'a', 10, 'lll'),
(4, 35, 'd', 11, 'oo'),
(5, 35, 'p', 0, 'p'),
(6, 35, 'q', 0, '10'),
(7, 36, 'a', 10, 'lll'),
(8, 36, 'd', 11, 'oo'),
(9, 36, 'p', 0, 'p'),
(10, 36, 'q', 0, '10'),
(11, 37, 'ac', 10, 'bagus'),
(12, 38, '', 0, ''),
(13, 2, 'dewer', 11, 'oo'),
(14, 2, 'dqwe', 11, 'oo'),
(15, 34, 'saya', 100, 'bagus banget'),
(17, 11, 'mic meja', 29, 'bagus'),
(18, 11, 'mic stand', 3, 'baik'),
(19, 11, 'video tron', 1, 'baik'),
(20, 11, 'TV 65inch interative board', 1, 'baik'),
(21, 11, 'kursi', 60, 'baik'),
(22, 11, 'meja', 34, 'baik'),
(23, 11, 'kamera untuk zoom', 1, 'baik'),
(24, 11, 'speaker', 4, 'baik'),
(25, 11, 'ac', 1, 'baik'),
(26, 17, 'ac', 1, 'baik'),
(27, 17, 'meja ', 1, 'baik'),
(28, 17, 'kursi', 23, 'baik'),
(29, 17, 'TV 65inch', 1, 'baik'),
(30, 16, 'ac ', 1, 'baik'),
(31, 16, 'kursi', 5, 'baik'),
(32, 16, 'meja', 2, 'baik'),
(33, 16, 'TV 65inch', 1, 'baik'),
(34, 39, 'ac', 10, 'ba'),
(35, 40, 'q', 0, 'q'),
(36, 41, 'mic meja', 29, 'baik'),
(37, 41, 'mic stand', 3, 'baik'),
(38, 41, 'video tron', 1, 'baik'),
(39, 41, 'TV 65Inch interative board', 1, 'baik'),
(40, 41, 'TV 65Inch LED', 2, 'baik'),
(41, 41, 'kursi', 60, 'baik'),
(42, 41, 'meja', 34, 'baik'),
(43, 41, 'kamera untuk zoom', 1, 'baik'),
(44, 41, 'speaker', 4, 'baik'),
(45, 41, 'AC', 1, 'baik');

-- --------------------------------------------------------

--
-- Struktur dari tabel `laporan_ruangan`
--

CREATE TABLE `laporan_ruangan` (
  `id` int(11) NOT NULL,
  `id_peminjam` varchar(100) NOT NULL,
  `booking_ruangan_nama` varchar(150) NOT NULL,
  `booking_ruangan_nip` varchar(150) NOT NULL,
  `booking_ruangan_unitkerja` varchar(150) NOT NULL,
  `booking_ruangan_tanggal` varchar(50) NOT NULL,
  `booking_ruangan_nohp` varchar(150) NOT NULL,
  `booking_ruangan_direktorat` varchar(150) NOT NULL,
  `booking_ruangan_email` varchar(150) NOT NULL,
  `booking_ruangan_penaggung_jawab` varchar(150) NOT NULL,
  `booking_ruangan_keterangan_kegiatan_acara` varchar(150) NOT NULL,
  `booking_ruangan_ruangan` varchar(150) NOT NULL,
  `booking_ruangan_waktu_penggunaan_awal` varchar(250) NOT NULL,
  `booking_ruangan_waktu_penggunaan_akhir` varchar(250) NOT NULL,
  `booking_ruang_rapat_hadir_oleh` varchar(250) NOT NULL,
  `status_booking_ruangan` varchar(15) NOT NULL,
  `booking_ruangan_surat_dinas` varchar(150) NOT NULL,
  `booking_ruangan_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `booking_ruangan_updated_at` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `laporan_ruangan`
--

INSERT INTO `laporan_ruangan` (`id`, `id_peminjam`, `booking_ruangan_nama`, `booking_ruangan_nip`, `booking_ruangan_unitkerja`, `booking_ruangan_tanggal`, `booking_ruangan_nohp`, `booking_ruangan_direktorat`, `booking_ruangan_email`, `booking_ruangan_penaggung_jawab`, `booking_ruangan_keterangan_kegiatan_acara`, `booking_ruangan_ruangan`, `booking_ruangan_waktu_penggunaan_awal`, `booking_ruangan_waktu_penggunaan_akhir`, `booking_ruang_rapat_hadir_oleh`, `status_booking_ruangan`, `booking_ruangan_surat_dinas`, `booking_ruangan_created_at`, `booking_ruangan_updated_at`) VALUES
(40, '44', 'bambang', '34561', 'Tu. Dirjen', '1656633600000', '23456', 'Sekertariat P2P', 'test@gmail.com', 'bambang', 'rapat besar', 'Ruang Rapat 503 ', '13:00:00', '16:00:00', '', 'Selesai', '', '2022-06-05 15:36:41', ''),
(65, '62', 'Bambang', '12345', 'Tu. Dirjen', '1667260800000', '0852', 'Sekertariat P2P', 'test08@gmail.com', 'bambang', 'rapat besar sangat sangat sangatsangat sangat sangatsangat sangat sangatsangat sangat sangat', 'Direktor P2PTM 1', '08:00:00', '12:00:00', '', 'Dibatalkan', '', '2022-06-10 05:35:02', ''),
(66, '44', 'fety erlina', '111110990908', 'Gangguan Indra Dan Funsional', '1656115200000', '000087986899', 'P2PTM', 'fetyfety2@gmail.com', 'asmi ', 'penegahan mata minus pada ana usia dini', 'Direktorat P2PM ', '11:00:00', '15:00:00', '', 'Selesai', '2022-06-10T05-32-45.378Z16f5ffb7-6943-4ae1-8016-77d375f4e709.jpg', '2022-06-10 05:35:07', ''),
(68, '62', 'syaiful jamil', '111110900007658', 'Subag Adum Pengelolaan Imunisasi', '1643068800000', '098765475769', 'Pengelolaan  Imunisasi', 'syaifuljamil@gmail.com', 'adum imunisasi', 'sosialisas pentingnya imunisasi terhadap anasosialisas pentingnya imunisasi terhadap anasosialisas pentingnya imunisasi terhadap anasosialisas ', 'Ruang Rapat 503 ', '08:00:00', '11:00:00', '', 'Selesai', '2022-06-10T01-23-39.765Z16f5ffb7-6943-4ae1-8016-77d375f4e709.jpg', '2022-06-10 05:50:11', ''),
(105, '44', 'risqi', '12930', 'Tu. Dirjen', '1655078400000', '0928', 'Sekertariat P2P', 'g@gmail.com', 'saya', 'hehehe', 'Direktor P2PTM 1', '12:00:00', '14:39:00', '', 'Selesai', '2022-06-13T07-37-08.761Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-06-13 07:40:22', ''),
(106, '44', 'nama saya', '1234', 'Tu. Dirjen', '1643760000000', '087361', 'Sekertariat P2P', 'w@gmail.com', 'saya juga', 'buat rapat besar dengan menteri mendada ini ya', 'Direktor P2PTM 1', '01:00:00', '13:00:00', '', 'Dibatalkan', '2022-06-19T13-45-46.230Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-06-19 13:46:02', ''),
(107, '62', 'mas wahyu', '012345', 'Tu. Dirjen', '1655769600000', '085123456', 'Sekertariat P2P', 'test@gmail.com', 'pa Adum', 'rapat penting', 'Direktorat P2PM ', '08:00:00', '09:00:00', '', 'Selesai', '2022-06-21T01-28-11.513Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-06-21 01:30:13', ''),
(108, '44', 'fety erlina', '123456789', 'Tu. Dirjen', '1655856000000', '0857382', 'Sekertariat P2P', 'w@gmail.com', 'adum', 'rapat bersama', 'Direktorat P2PM ', '13:00:00', '15:40:00', 'eslon 1, eslon 2, eslon 3', 'Selesai', '2022-06-22T08-34-20.364Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-06-22 08:54:26', ''),
(109, '44', 'fety erlina', '123456789', 'Tu. Dirjen', '1655856000000', '0857382', 'Sekertariat P2P', 'w@gmail.com', 'adum', 'rapat bersama', 'Direktorat P2PM ', '13:00:00', '15:40:00', 'eslon 1, eslon 2, eslon 3', 'Selesai', '2022-06-22T08-34-20.364Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-06-22 08:54:26', ''),
(110, '44', 'fety erlina', '123456789', 'Tu. Dirjen', '1655856000000', '0857382', 'Sekertariat P2P', 'w@gmail.com', 'adum', 'rapat bersama', 'Direktorat P2PM ', '13:00:00', '15:40:00', 'eslon 1, eslon 2, eslon 3', 'Selesai', '2022-06-22T08-34-20.364Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-06-22 08:54:26', ''),
(111, '44', 'fety erlina', '123456789', 'Tu. Dirjen', '1655856000000', '0857382', 'Sekertariat P2P', 'w@gmail.com', 'adum', 'rapat bersama', 'Direktorat P2PM ', '13:00:00', '15:40:00', 'eslon 1, eslon 2, eslon 3', 'Selesai', '2022-06-22T08-34-20.364Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-06-22 08:54:26', ''),
(112, '44', 'fety erlina', '123456789', 'Tu. Dirjen', '1655856000000', '0857382', 'Sekertariat P2P', 'w@gmail.com', 'adum', 'rapat bersama', 'Direktorat P2PM ', '13:00:00', '15:40:00', 'eslon 1, eslon 2, eslon 3', 'Selesai', '2022-06-22T08-34-20.364Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-06-22 08:54:26', ''),
(113, '44', 'fety erlina', '123456789', 'Tu. Dirjen', '1655856000000', '0857382', 'Sekertariat P2P', 'w@gmail.com', 'adum', 'rapat bersama', 'Direktorat P2PM ', '13:00:00', '15:40:00', 'eslon 1, eslon 2, eslon 3', 'Selesai', '2022-06-22T08-34-20.364Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-06-22 08:54:26', ''),
(114, '44', 'fety erlina', '123456789', 'Tu. Dirjen', '1655856000000', '0857382', 'Sekertariat P2P', 'w@gmail.com', 'adum', 'rapat bersama', 'Direktorat P2PM ', '13:00:00', '15:40:00', 'eslon 1, eslon 2, eslon 3', 'Selesai', '2022-06-22T08-34-20.364Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-06-22 08:54:26', ''),
(115, '44', 'fety erlina', '123456789', 'Tu. Dirjen', '1655856000000', '0857382', 'Sekertariat P2P', 'w@gmail.com', 'adum', 'rapat bersama', 'Direktorat P2PM ', '13:00:00', '15:40:00', 'eslon 1, eslon 2, eslon 3', 'Selesai', '2022-06-22T08-34-20.364Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-06-22 08:54:26', ''),
(116, '44', 'fety erlina', '123456789', 'Tu. Dirjen', '1655856000000', '0857382', 'Sekertariat P2P', 'w@gmail.com', 'adum', 'rapat bersama', 'Direktorat P2PM ', '13:00:00', '15:40:00', 'eslon 1, eslon 2, eslon 3', 'Selesai', '2022-06-22T08-34-20.364Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-06-22 08:54:26', ''),
(117, '44', 'fety erlina', '123456789', 'Tu. Dirjen', '1655856000000', '0857382', 'Sekertariat P2P', 'w@gmail.com', 'adum', 'rapat bersama', 'Direktorat P2PM ', '13:00:00', '15:40:00', 'eslon 1, eslon 2, eslon 3', 'Selesai', '2022-06-22T08-34-20.364Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-06-22 08:54:26', ''),
(118, '44', 'fety erlina', '123456789', 'Tu. Dirjen', '1655856000000', '0857382', 'Sekertariat P2P', 'w@gmail.com', 'adum', 'rapat bersama', 'Direktorat P2PM ', '13:00:00', '15:40:00', 'eslon 1, eslon 2, eslon 3', 'Selesai', '2022-06-22T08-34-20.364Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-06-22 08:54:26', ''),
(119, '44', 'fety erlina', '123456789', 'Tu. Dirjen', '1655856000000', '0857382', 'Sekertariat P2P', 'w@gmail.com', 'adum', 'rapat bersama', 'Direktorat P2PM ', '13:00:00', '15:40:00', 'eslon 1, eslon 2, eslon 3', 'Selesai', '2022-06-22T08-34-20.364Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-06-22 08:54:26', ''),
(120, '44', 'fety erlina', '123456789', 'Tu. Dirjen', '1655856000000', '0857382', 'Sekertariat P2P', 'w@gmail.com', 'adum', 'rapat bersama', 'Direktorat P2PM ', '13:00:00', '15:40:00', 'eslon 1, eslon 2, eslon 3', 'Selesai', '2022-06-22T08-34-20.364Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-06-22 08:54:26', ''),
(121, '44', 'fety erlina', '123456789', 'Tu. Dirjen', '1655856000000', '0857382', 'Sekertariat P2P', 'w@gmail.com', 'adum', 'rapat bersama', 'Direktorat P2PM ', '13:00:00', '15:40:00', 'eslon 1, eslon 2, eslon 3', 'Selesai', '2022-06-22T08-34-20.364Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-06-22 08:54:27', ''),
(122, '44', 'fety erlina', '123456789', 'Tu. Dirjen', '1655856000000', '0857382', 'Sekertariat P2P', 'w@gmail.com', 'adum', 'rapat bersama', 'Direktorat P2PM ', '13:00:00', '15:40:00', 'eslon 1, eslon 2, eslon 3', 'Selesai', '2022-06-22T08-34-20.364Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-06-22 08:54:27', ''),
(123, '44', 'fety erlina', '123456789', 'Tu. Dirjen', '1655856000000', '0857382', 'Sekertariat P2P', 'w@gmail.com', 'adum', 'rapat bersama', 'Direktorat P2PM ', '13:00:00', '15:40:00', 'eslon 1, eslon 2, eslon 3', 'Selesai', '2022-06-22T08-34-20.364Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-06-22 08:54:27', ''),
(124, '44', 'fety erlina', '123456789', 'Tu. Dirjen', '1655856000000', '0857382', 'Sekertariat P2P', 'w@gmail.com', 'adum', 'rapat bersama', 'Direktorat P2PM ', '13:00:00', '15:40:00', 'eslon 1, eslon 2, eslon 3', 'Selesai', '2022-06-22T08-34-20.364Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-06-22 08:54:27', ''),
(125, '44', 'fety erlina', '123456789', 'Tu. Dirjen', '1655856000000', '0857382', 'Sekertariat P2P', 'w@gmail.com', 'adum', 'rapat bersama', 'Direktorat P2PM ', '13:00:00', '15:40:00', 'eslon 1, eslon 2, eslon 3', 'Selesai', '2022-06-22T08-34-20.364Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-06-22 08:54:27', ''),
(126, '44', 'fety erlina', '123456789', 'Tu. Dirjen', '1655856000000', '0857382', 'Sekertariat P2P', 'w@gmail.com', 'adum', 'rapat bersama', 'Direktorat P2PM ', '13:00:00', '15:40:00', 'eslon 1, eslon 2, eslon 3', 'Selesai', '2022-06-22T08-34-20.364Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-06-22 08:54:27', ''),
(127, '44', 'fety erlina', '123456789', 'Tu. Dirjen', '1655856000000', '0857382', 'Sekertariat P2P', 'w@gmail.com', 'adum', 'rapat bersama', 'Direktorat P2PM ', '13:00:00', '15:40:00', 'eslon 1, eslon 2, eslon 3', 'Selesai', '2022-06-22T08-34-20.364Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-06-22 08:54:27', ''),
(128, '44', 'fety erlina', '111110990908', 'Gangguan Indra Dan Funsional', '1656115200000', '000087986899', 'P2PTM', 'fetyfety2@gmail.com', 'asmi ', 'penegahan mata minus pada ana usia dini', 'Direktorat P2PM ', '11:00:00', '15:00:00', '', 'Selesai', '2022-06-10T05-32-45.378Z16f5ffb7-6943-4ae1-8016-77d375f4e709.jpg', '2022-06-27 02:33:58', ''),
(129, '44', 'coba', '0871', 'Tu. Dirjen', '1656460800000', '1829', 'Sekertariat P2P', 'w@gmail.com', 'cobaa', 'rapat', 'Ruang Rapat 503 ', '08:00:00', '09:00:00', 'eslon 3', 'Selesai', '2022-06-29T01-57-40.723Zlaporan.pdf', '2022-06-29 01:59:01', ''),
(130, '44', 'qwqw', '12', 'Subag Adum P2PM', '1657756800000', '0129', 'P2PM', 'g@gmail.com', 'asss', 'zxcv', 'Ruang Rapat 503 ', '08:00:00', '09:56:00', '', 'Selesai', '2022-06-14T02-54-23.773Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-07-19 06:11:19', ''),
(131, '44', 'qwqw', '12', 'Subag Adum P2PM', '1657756800000', '0129', 'P2PM', 'g@gmail.com', 'asss', 'zxcv', 'Ruang Rapat 503 ', '08:00:00', '09:56:00', '', 'Selesai', '2022-06-14T02-54-23.773Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-07-19 06:11:19', ''),
(133, '76', 'testmember', '012345', 'Projek Management Office (PMO)', '30059510400000', '089577', 'Sekertariat P2P', 'w@gmail.com', 'testmember', 'testmember', 'Percetakan Negara no29', '08:00:00', '11:50:00', 'testmember', 'Selesai', '2022-07-20T04-47-12.824Zphoto1627302596.pdf', '2022-07-20 05:13:32', ''),
(134, '76', 'edi pranoto', '01234', 'Tu. Dirjen', '1658707200000', '085123456', 'Sekertariat P2P', 'edipranoto@gmail.com', 'ade riski', 'pertemuan ', 'RUANGAN  503', '08:00:00', '16:00:00', 'eslon 2, eslon3', 'Selesai', '2022-07-21T08-52-12.092Zphoto1627302596.jpeg', '2022-07-21 08:54:59', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `logaktivitas`
--

CREATE TABLE `logaktivitas` (
  `logaktivitas_id` int(11) NOT NULL,
  `logaktivitas_user_id` int(11) NOT NULL,
  `logaktivitas_isi` text NOT NULL,
  `logaktivitas_image` varchar(150) NOT NULL,
  `logaktivitas_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `logaktivitas_updated_at` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `logaktivitas`
--

INSERT INTO `logaktivitas` (`logaktivitas_id`, `logaktivitas_user_id`, `logaktivitas_isi`, `logaktivitas_image`, `logaktivitas_created_at`, `logaktivitas_updated_at`) VALUES
(1, 75, 'mengerjakan project website', '', '2022-07-27 14:02:06', ''),
(2, 75, 'bagusn', '', '2022-07-27 16:19:56', '2022-07-31 16:41:45.415'),
(5, 44, 'swdwq hehddkdn ji', '', '2022-07-28 04:38:02', '2022-07-29 09:13:19.496'),
(7, 44, 'swdwq hehddkdn jihkkhk', '', '2022-07-31 04:38:02', '2022-07-29 09:13:19.496'),
(10, 76, 'halo semua', '', '2022-07-31 09:22:36', '2022-08-03 13:17:25.884'),
(11, 75, '--', '', '2022-07-31 09:24:01', ''),
(12, 62, 'hehehe', '', '2022-07-31 09:25:26', ''),
(15, 76, 'guyu heheguyu heheguyu heheguyu heheguyu heheguyu heheguyu hehe', '', '2022-08-03 06:08:41', '2022-08-05 02:07:20.467'),
(16, 62, 'dadads', '', '2022-08-03 07:14:11', '2022-08-03 17:40:52.788'),
(18, 76, 'ayo absne edit', '', '2022-08-04 03:11:35', '2022-08-04 10:21:18.283'),
(19, 44, 'ehuehue', '', '2022-08-04 04:24:12', ''),
(20, 67, 'ehuehue', '2022-08-04T04-25-26.824Z46d195c2-879e-45bf-aeda-7230a78b3dbf.jpg', '2022-08-04 04:25:26', ''),
(23, 78, 'heheheh', '2022-08-04T06-31-34.092ZNew Microsoft Word Document.docx', '2022-08-04 06:31:34', ''),
(24, 76, 'tambah', '', '2022-08-05 01:47:36', ''),
(27, 76, 'qw', '2022-08-07T07-34-57.470Z46d195c2-879e-45bf-aeda-7230a78b3dbf.jpg', '2022-08-07 07:34:57', '2022-08-08 09:40:38.310'),
(32, 76, 'hehe', '2022-08-08T03-11-51.621Zsskosong.jpg', '2022-08-08 03:11:51', ''),
(33, 76, 'qqqqq', '2022-08-09T06-45-13.948Zcah asuk.jpg', '2022-08-09 06:45:13', ''),
(35, 76, 'nenenene', '2022-08-10T04-50-50.761ZScreenshot_1.jpg', '2022-08-10 04:50:50', ''),
(64, 76, 'ini saya isi ya', '', '2022-08-12 02:04:00', '2022-08-12 10:20:14.151'),
(65, 75, '--', '', '2022-08-12 02:04:00', ''),
(66, 77, '--', '', '2022-08-12 02:04:01', ''),
(67, 44, '--', '', '2022-08-12 02:04:01', ''),
(68, 67, '--', '', '2022-08-12 02:04:01', ''),
(69, 74, '--', '', '2022-08-12 02:04:01', ''),
(70, 78, '--', '', '2022-08-12 02:04:01', ''),
(71, 72, '--', '', '2022-08-12 02:04:01', ''),
(72, 70, '--', '', '2022-08-12 02:04:01', ''),
(73, 63, '--', '', '2022-08-12 02:04:01', ''),
(74, 68, '--', '', '2022-08-12 02:04:01', ''),
(75, 62, '--', '', '2022-08-12 02:04:01', ''),
(76, 65, '--', '', '2022-08-12 02:04:01', ''),
(77, 66, '--', '', '2022-08-12 02:04:01', ''),
(78, 76, 'iki coba ya', '', '2022-08-01 06:08:41', '2022-08-05 02:07:20.467'),
(79, 76, 'iya ini coba', '', '2022-08-02 03:11:35', '2022-08-04 10:21:18.283');

-- --------------------------------------------------------

--
-- Struktur dari tabel `ruangan`
--

CREATE TABLE `ruangan` (
  `id_r` int(11) NOT NULL,
  `namaruang_r` varchar(50) NOT NULL,
  `ruangan_lantai` varchar(150) NOT NULL,
  `alamat_gedung` varchar(100) NOT NULL,
  `jumlah_kursi` int(5) NOT NULL,
  `ruangan_nama_pengelola` varchar(50) NOT NULL,
  `ruangan_nomor_pengelola` varchar(100) NOT NULL,
  `image_ruangan` varchar(150) NOT NULL,
  `ruangan_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ruangan_updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `ruangan`
--

INSERT INTO `ruangan` (`id_r`, `namaruang_r`, `ruangan_lantai`, `alamat_gedung`, `jumlah_kursi`, `ruangan_nama_pengelola`, `ruangan_nomor_pengelola`, `image_ruangan`, `ruangan_created_at`, `ruangan_updated_at`) VALUES
(16, 'Ex ULP', '9', 'Gedung dr. Adhyatma', 5, 'Dudu', '083808857384', 'exULP.jpg', '2022-05-17 00:37:56', '2022-06-28 05:01:10'),
(17, 'Ex BPK', '9', 'Gedung dr. Adhyatma', 10, 'Bang Jhon', '085282541900', 'exBPK.jpg', '2022-05-17 00:39:33', '2022-06-28 05:00:15'),
(18, 'Percetakan Negara no29', '2', 'Gedung D', 25, 'Irfan', '082213373751', 'RUANG RAPAT P2PTM SIJUDI LT 11 (1).jpeg', '2022-05-17 00:39:33', '2022-06-28 05:01:56'),
(41, 'RUANGAN  503', '5', 'Gedung Adhyatma', 35, 'Ramdhan', '081517988569', '2022-07-01T09-10-37.414ZRUANG RAPAT 503.jpeg', '2022-06-30 02:18:01', '2022-07-01 09:10:37');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `user_role` enum('basic','admin') NOT NULL,
  `user_verification` enum('pending','succes') NOT NULL,
  `user_nip` varchar(100) NOT NULL,
  `user_name` varchar(150) NOT NULL,
  `user_pangkat` varchar(100) NOT NULL,
  `user_unit_kerja` varchar(100) NOT NULL,
  `user_email` varchar(150) NOT NULL,
  `user_phone_number` varchar(13) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_profile_image` varchar(150) DEFAULT NULL,
  `user_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `user_role`, `user_verification`, `user_nip`, `user_name`, `user_pangkat`, `user_unit_kerja`, `user_email`, `user_phone_number`, `user_password`, `user_profile_image`, `user_created_at`, `user_updated_at`) VALUES
(44, 'admin', 'succes', '0789', 'Ricky Syahputra', 'IV A', 'P2P', 'asd@gmail.com', '123', '$2b$10$9x9CbVg8QV.B9yCQRQ.ZNOwSTMROtiLKx82rfKwidQEHm7CjDbbYS', '2021-08-11T11-01-30.220ZEllipse 11.png', '2021-07-04 11:36:53', '2022-07-29 02:13:45'),
(62, 'basic', 'succes', '12121212', 'dada', '', 'kemenkes', 'abc@gmail.com', '08512763', '$2b$10$gFzvl51N2YRIbHI49vBVN.JsK9j.j1Xt9fqBI6uMMGy7rT8X8LU2O', NULL, '2022-05-20 04:35:04', '2022-08-01 14:12:46'),
(63, 'basic', 'succes', '2', 'fety erlina', '', 'Subag Adum PL', 'test07@gmail.com', '08977', '$2b$10$FuCh3/XKHyu7SEq29l5/jO0G7Bmn52VjtfC7/IZRT9hs2Foyec3ZO', NULL, '2022-05-22 13:26:09', NULL),
(65, 'basic', 'succes', '3', 'Bambang sabirin', '', 'Kangker dan Kelainan Darah', 'test09@gmail.com', '4321', '$2b$10$NOVJwqzsI2/Y72yBDaX4lejA5d.iRFaWCFhgW.8h7Ok2FWa61Bomq', '2021-08-09T07-56-53.893Z2021-07-27T03-55-16.969ZEllipse 11.png', '2021-07-04 10:46:34', '2022-05-22 15:00:40'),
(66, 'admin', 'succes', '4', 'aripiansyah', '', 'Tu. Dirjen', 'test08@gmail.com', '08573281', '$2b$10$9x9CbVg8QV.B9yCQRQ.ZNOwSTMROtiLKx82rfKwidQEHm7CjDbbYS', '2021-08-11T11-01-30.220ZEllipse 11.png', '2021-07-04 11:36:53', NULL),
(67, 'basic', 'succes', '5', 'ricky syahputra', '', 'Sekertariat P2P (Program dan Informasi)', 'g@gmail.com', '08932847', '$2b$10$g364seEZr5dEkk5JApy2EuuYouvfvPp3iokpR4nd6kRsptxBKapni', '', '2021-07-07 07:53:11', '2022-05-22 15:03:05'),
(68, 'admin', 'succes', '6', 'fety', '', 'Sekertariat P2P (Program dan Informasi)', 'fety@gmail.com', '085263512', '$2b$10$YfZGfU/pnjR.IHd2.ebEb.MHvKXZD73bZTwRb6cJeJow0E4AMtvDS', NULL, '2022-06-21 01:43:28', NULL),
(70, 'admin', 'succes', '8', 'jajal', '', 'Sekertariat P2P (Program dan Informasi)', 'dhfj@gmail.com', '0897', '$2b$10$oZw/FKr.wIYIPfrQ5RbmUO/t5gx6EmQEV0lwxDhIfVTFuZKZDXan2', NULL, '2022-06-29 07:58:03', NULL),
(72, 'admin', 'succes', '10', 'lplpl', '', 'Sekertariat P2P (Program dan Informasi)', 'qwepo@gmail.com', '02128', '$2b$10$N3NKoCYfa4QsF4okrsqDluqH4suT8G1M5iTDBH7PZDgzey9IDZWw6', NULL, '2022-06-29 08:29:03', NULL),
(74, 'admin', 'succes', '12', 'qq', '', 'Sekertariat P2P (Program dan Informasi)', 'qw@gmail.com', '12', '$2b$10$.x99xLqLLUT5ektEEEtADeHzDg0GYYsBFctY6j0DpHB75CzPAByny', NULL, '2022-06-29 08:35:47', NULL),
(75, 'admin', 'succes', '32128399849238794', 'testadmin', '', 'Sekertariat P2P (Program dan Informasi)', 'testadmin@gmail.com', '08123456789', '$2b$10$QgwTwmzjkHP3jX2zNGgywuogjX5OkgGT25iqJCO0cXi1qcRCyYRwS', NULL, '2022-07-19 06:45:08', '2022-07-19 06:49:02'),
(76, 'basic', 'succes', '32849587918373', 'testmember', 'IV B', 'Sekertariat P2P (Program dan Informasi)', 'testmember@gmail.com', '08123456789', '$2b$10$7sVoBrnb9BiiVUgXQU3oSu.2i2uEgbbxNC4XJ021WjUzeDC08Jw8S', NULL, '2022-07-19 06:46:13', '2022-08-04 19:00:48'),
(77, 'basic', 'succes', 'll', 'sapa hayi', 'll', 'll', 'll', 'll', '$2b$10$z5EMdoKXSo9eNl4RzKVOLOdfXDF3m5q9OEV2uRew4VlosNjIuw6wm', NULL, '2022-07-28 04:23:37', '2022-08-03 10:33:55'),
(78, 'basic', 'succes', 'pp', 'pp', 'pp', 'pp', 'pp', 'pp', '$2b$10$0ZxlH/R318r9NLMSMqcF7.BcafZ55D5Ac9YICPzOpu0ZZcWeBPYNG', NULL, '2022-07-28 04:42:00', '2022-08-04 06:25:54');

-- --------------------------------------------------------

--
-- Struktur dari tabel `waitinglist_ruangan`
--

CREATE TABLE `waitinglist_ruangan` (
  `id` int(11) NOT NULL,
  `id_peminjam` varchar(150) NOT NULL,
  `booking_ruangan_nama` varchar(150) NOT NULL,
  `booking_ruangan_nip` varchar(150) NOT NULL,
  `booking_ruangan_unitkerja` varchar(150) NOT NULL,
  `booking_ruangan_tanggal` varchar(50) NOT NULL,
  `booking_ruangan_nohp` varchar(150) NOT NULL,
  `booking_ruangan_direktorat` varchar(150) NOT NULL,
  `booking_ruangan_email` varchar(150) NOT NULL,
  `booking_ruangan_penaggung_jawab` varchar(150) NOT NULL,
  `booking_ruangan_keterangan_kegiatan_acara` varchar(150) NOT NULL,
  `booking_ruangan_ruangan` varchar(150) NOT NULL,
  `booking_ruangan_waktu_penggunaan_awal` time NOT NULL,
  `booking_ruangan_waktu_penggunaan_akhir` time NOT NULL,
  `booking_ruang_rapat_hadir_oleh` varchar(250) NOT NULL,
  `booking_ruangan_surat_dinas` varchar(150) NOT NULL,
  `booking_ruangan_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `booking_ruangan_updated_at` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `waitinglist_ruangan`
--

INSERT INTO `waitinglist_ruangan` (`id`, `id_peminjam`, `booking_ruangan_nama`, `booking_ruangan_nip`, `booking_ruangan_unitkerja`, `booking_ruangan_tanggal`, `booking_ruangan_nohp`, `booking_ruangan_direktorat`, `booking_ruangan_email`, `booking_ruangan_penaggung_jawab`, `booking_ruangan_keterangan_kegiatan_acara`, `booking_ruangan_ruangan`, `booking_ruangan_waktu_penggunaan_awal`, `booking_ruangan_waktu_penggunaan_akhir`, `booking_ruang_rapat_hadir_oleh`, `booking_ruangan_surat_dinas`, `booking_ruangan_created_at`, `booking_ruangan_updated_at`) VALUES
(1, '44', 'q', '1', 'Subag Adum Sekertariat P2P', '1672531200000', '1', 'Sekertariat P2P', 'w@gmail.com', 'd', 'q', 'Ruang Rapat 503 ', '03:00:00', '05:00:00', 'qq', '2022-06-26T22-10-11.832Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-06-26 22:10:11', ''),
(2, '44', 'qq', '1', 'Kepegawaian dan Umum', '1704067200000', '1', 'Sekertariat P2P', 'w@gmail.com', 'd', 's', 'Ruang Rapat 503 ', '01:00:00', '02:00:00', 'qq', '2022-06-26T22-12-10.901Z26658de1-a2df-4946-968e-a8f2a75cc83a.jpg', '2022-06-26 22:12:11', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking_ruangan`
--
ALTER TABLE `booking_ruangan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fasilitas_ruangan`
--
ALTER TABLE `fasilitas_ruangan`
  ADD PRIMARY KEY (`fasilitas_ruangan_id`);

--
-- Indexes for table `laporan_ruangan`
--
ALTER TABLE `laporan_ruangan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `logaktivitas`
--
ALTER TABLE `logaktivitas`
  ADD PRIMARY KEY (`logaktivitas_id`);

--
-- Indexes for table `ruangan`
--
ALTER TABLE `ruangan`
  ADD PRIMARY KEY (`id_r`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `waitinglist_ruangan`
--
ALTER TABLE `waitinglist_ruangan`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking_ruangan`
--
ALTER TABLE `booking_ruangan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
--
-- AUTO_INCREMENT for table `fasilitas_ruangan`
--
ALTER TABLE `fasilitas_ruangan`
  MODIFY `fasilitas_ruangan_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
--
-- AUTO_INCREMENT for table `laporan_ruangan`
--
ALTER TABLE `laporan_ruangan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=135;
--
-- AUTO_INCREMENT for table `logaktivitas`
--
ALTER TABLE `logaktivitas`
  MODIFY `logaktivitas_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;
--
-- AUTO_INCREMENT for table `ruangan`
--
ALTER TABLE `ruangan`
  MODIFY `id_r` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;
--
-- AUTO_INCREMENT for table `waitinglist_ruangan`
--
ALTER TABLE `waitinglist_ruangan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
