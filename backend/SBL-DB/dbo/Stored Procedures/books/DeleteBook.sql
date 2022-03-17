CREATE PROCEDURE [dbo].[DeleteBook]
	@bookId int
AS
delete from books where bookId = @bookId
