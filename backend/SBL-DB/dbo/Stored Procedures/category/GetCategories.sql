CREATE PROCEDURE [dbo].[GetCategories]
	@userId varchar(100)
AS

select categoryId, categoryName from categories where userId = @userId
