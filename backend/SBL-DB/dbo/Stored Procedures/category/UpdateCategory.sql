CREATE PROCEDURE [dbo].[UpdateCategory]
	@categoryId int, @categoryName varchar(50)
AS
update categories 
set categoryName = @categoryName 
where categoryId = @categoryId
