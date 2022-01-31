CREATE PROCEDURE [dbo].[TitleExists]
	@title varchar(50), @userId varchar(100), @bookId int = null
AS

If @bookId is null
	select * from books 
	where
		title = @title
	and
		userId = @userId
else
	select * from books 
	where
		title = @title
	and
		userId = @userId
	and 
		bookId != @bookId



