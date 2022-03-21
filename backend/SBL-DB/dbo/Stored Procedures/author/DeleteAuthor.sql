CREATE PROCEDURE [dbo].[DeleteAuthor]
	@authorId int
AS
delete from authors where authorId = @authorId
