CREATE PROCEDURE [dbo].[CategoryNameExists]
	@categoryName varchar(50), @userId varchar(100), @categoryId int = null
AS

If @categoryId is null
	select * from categories 
	where
		categoryName = @categoryName
	and
		userId = @userId
else
	select * from categories 
	where
		categoryName = @categoryName
	and
		userId = @userId
	and 
		@categoryId != categoryId
