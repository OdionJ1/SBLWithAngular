CREATE PROCEDURE [dbo].[GetCategory]
	@categoryId int
AS
select categoryId, categoryName from categories where categoryId = @categoryId
