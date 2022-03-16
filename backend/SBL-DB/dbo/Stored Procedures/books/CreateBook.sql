CREATE PROCEDURE [dbo].[CreateBook]
	@title varchar(50), @userId varchar(100) 
AS

insert into books(title, dateUploaded, rating, inReadingList, inFav, userId)
OUTPUT Inserted.bookId, Inserted.title, Inserted.rating, Inserted.inReadingList, Inserted.inFav, Inserted.dateUploaded
values
(	
	@title, 
	CAST( GETDATE() AS dateTime ), 
	1,
	CONVERT(bit, 0),
	CONVERT(bit, 0),
	@userId
) 
