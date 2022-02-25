CREATE PROCEDURE [dbo].[AuthorNameExists]
	@authorName varchar(50), @userId varchar(100), @authorId int = null
AS

If @authorId is null
	select * from authors 
	where
		authorName = @authorName
	and
		userId = @userId
else
	select * from authors 
	where
		authorName = @authorName
	and
		userId = @userId
	and 
		authorId != @authorId

