CREATE PROCEDURE [dbo].[UpdateAuthor]
	@authorId int, @authorName varchar(50)
AS
update authors 
set authorName = @authorName
where authorId = @authorId
