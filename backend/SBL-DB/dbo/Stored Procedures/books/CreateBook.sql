CREATE PROCEDURE [dbo].[CreateBook]
	@title varchar(50), @fileLink varchar(MAX), @coverImageLink varchar(MAX) = null, @userId varchar(100) 
AS

insert into books(title, dateUploaded, rating, inReadingList, inFav, fileLink, coverImageLink, userId)
values
(	
	@title, 
	CAST( GETDATE() AS dateTime ), 
	0,
	CONVERT(bit, 0),
	CONVERT(bit, 0),
	@fileLink,
	@coverImageLink,
	@userId
)


SELECT @@IDENTITY as bookId
