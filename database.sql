use master
go
CREATE DATABASE HotelWeb;
go
USE HotelWeb;
GO

CREATE TABLE room(
	id INT IDENTITY(1,1) PRIMARY KEY,
	[name] NVARCHAR(100) UNIQUE,
	price FLOAT,
	[description] NVARCHAR(500)

)
GO
CREATE TABLE room_image(
	id INT IDENTITY(1,1) PRIMARY KEY,
	main_img BIT DEFAULT 0,
	[path] VARCHAR(MAX),
	room_id INT FOREIGN KEY REFERENCES room(id)
)
GO
CREATE TABLE customer(
	id INT IDENTITY(1,1) PRIMARY KEY,
	[name] NVARCHAR(100),
	phone VARCHAR(15),
	email VARCHAR(100),
	order_number INT,
	[image] VARCHAR(100),
	[password] VARCHAR(MAX),
)
GO
CREATE TABLE comment(
	id INT IDENTITY(1,1) PRIMARY KEY,
	content NVARCHAR(300),
	cus_id INT FOREIGN KEY REFERENCES customer(id),
	room_id INT FOREIGN KEY REFERENCES room(id)
)
GO
CREATE TABLE [like](
	id INT IDENTITY(1,1) PRIMARY KEY,
	[status] NVARCHAR(10),
	cus_id INT FOREIGN KEY REFERENCES customer(id),
	room_id INT FOREIGN KEY REFERENCES room(id)
)
GO
CREATE TABLE administration(
	id INT IDENTITY(1,1) PRIMARY KEY,
	[username] VARCHAR(100),
	[password] VARCHAR(MAX),
	img VARCHAR(MAX)
)
GO
CREATE TABLE [order](
	id INT IDENTITY(1,1) PRIMARY KEY,
	order_date DATETIME DEFAULT GETDATE(),
	expired_date datetime,
	money_total FLOAT,
	accept BIT DEFAULT 0,
	cancel BIT DEFAULT 0,
	cus_id INT FOREIGN KEY REFERENCES customer(id),
	admin_id INT FOREIGN KEY REFERENCES administration(id)
)
GO
CREATE TABLE [order_detail](
	ord_id INT FOREIGN KEY REFERENCES [order](id),
	room_id INT FOREIGN KEY REFERENCES room(id),
	PRIMARY KEY(ord_id,room_id)
)
GO
CREATE TABLE news(
	id INT IDENTITY(1,1) PRIMARY KEY,
	title NVARCHAR(100),
	content TEXT,
	admin_id INT FOREIGN KEY REFERENCES administration(id)
)

