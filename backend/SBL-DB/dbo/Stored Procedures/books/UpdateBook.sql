CREATE PROCEDURE [dbo].[UpdateBook]
	@bookId int, @title varchar(50), @dateUploaded datetime, @rating decimal,
	@inReadingList bit, @inFav bit, @fileLink varchar (MAX), @coverLink varchar (MAX)
AS

update books
set title = @title, dateUploaded = @dateUploaded, rating = @rating,
inReadingList = @inReadingList, inFav = @inFav, fileLink = @fileLink, coverImageLink = @coverLink
where bookId = @bookId;