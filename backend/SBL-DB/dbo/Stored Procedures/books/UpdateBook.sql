CREATE PROCEDURE [dbo].[UpdateBook]
	@bookId int, @title varchar(50), @rating decimal,
	@inReadingList bit, @inFav bit, @fileLink varchar (MAX), @coverImageLink varchar (MAX) = null
AS

update books
set title = @title, rating = @rating, inReadingList = @inReadingList, 
inFav = @inFav, fileLink = @fileLink, coverImageLink = @coverImageLink
where bookId = @bookId;