CREATE PROCEDURE [dbo].[GetBooks_Authors]
	@bookId int = null, @authorId int = null
AS

If @bookId is not null
select authors.authorId, authorName from books_authors
join authors 
on books_authors.authorId = authors.authorId
where books_authors.bookId = @bookId

else 
select books.bookId, title, rating, coverImageLink from books_authors
join books
on books_authors.bookId = books.bookId
where books_authors.authorId = @authorId