CREATE PROCEDURE [dbo].[deleteBook_Authors_n_Categories]
	@bookId int
AS
delete from books_authors where bookId = @bookId
delete from books_categories where bookId = @bookId
