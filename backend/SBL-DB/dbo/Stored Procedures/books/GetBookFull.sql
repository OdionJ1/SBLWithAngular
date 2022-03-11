CREATE PROCEDURE [dbo].[GetBookFull]
	@bookId int
AS

select bookId, title, dateUploaded, rating, inReadingList, inFav, fileLink, coverImageLink 
from books 
where bookId = @bookId