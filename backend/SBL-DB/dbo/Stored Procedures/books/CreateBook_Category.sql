CREATE PROCEDURE [dbo].[CreateBook_Category]
	@bookId int, @categoryId int
AS
insert into books_categories(bookId, categoryId) values (@bookId, @categoryId)
