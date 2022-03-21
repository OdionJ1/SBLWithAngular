CREATE PROCEDURE [dbo].[DeleteCategory]
	@categoryId int
AS
delete from categories where categoryId = @categoryId
