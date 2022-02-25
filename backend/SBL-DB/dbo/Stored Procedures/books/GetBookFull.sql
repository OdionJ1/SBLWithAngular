CREATE PROCEDURE [dbo].[GetBookFull]
	@bookId int
AS

select bookId, title, dateUploaded, rating, inReadingList, inFav, link 
from books 
where bookId = @bookId