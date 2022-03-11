CREATE PROCEDURE [dbo].[CreateBook_Author]
	@bookId int, @authorId int
AS
insert into books_authors (bookId, authorId) values(@bookId, @authorId)
