CREATE PROCEDURE [dbo].[GetBooks]
	@userId varchar(100)
AS

select bookId, title, rating, coverImageLink from books where userId = @userId