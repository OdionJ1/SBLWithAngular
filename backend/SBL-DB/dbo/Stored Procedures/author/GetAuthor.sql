CREATE PROCEDURE [dbo].[GetAuthor]
	@authorId int
AS
select authorId, authorName from authors where authorId = @authorId
