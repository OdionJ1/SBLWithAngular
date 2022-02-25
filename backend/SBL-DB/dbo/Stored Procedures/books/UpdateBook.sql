CREATE PROCEDURE [dbo].[UpdateBook]
	@bookId int, @title varchar(50), @dateUploaded date, @rating decimal,
	@inReadingList bit, @inFav bit, @link varchar (200)
AS

update books
set title = @title, dateUploaded = @dateUploaded, rating = @rating,
inReadingList = @inReadingList, inFav = @inFav, link = @link
where bookId = @bookId;