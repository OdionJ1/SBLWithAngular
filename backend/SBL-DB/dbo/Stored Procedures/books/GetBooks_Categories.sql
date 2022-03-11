CREATE PROCEDURE [dbo].[GetBooks_Categories]
	@bookId int = null, @categoryId int = null
AS

if @bookId is not null
select categories.categoryId, categories.categoryName from books_categories
join categories
on books_categories.categoryId = categories.categoryId
where books_categories.bookId = @bookId

else 
select books.bookId, title, rating, coverImageLink from books_categories
join books
on books_categories.bookId = books.bookId
where books_categories.categoryId = @categoryId