CREATE PROCEDURE [dbo].[GetAuthors]
	@userId varchar(100)
AS

select authorId, authorName from authors where userId = @userId
