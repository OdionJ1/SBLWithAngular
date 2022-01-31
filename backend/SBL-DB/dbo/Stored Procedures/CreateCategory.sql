CREATE PROCEDURE [dbo].[CreateCategory]
	@categoryName varchar(100), @userId varchar(100)
AS

insert into categories(categoryName, userId)
values(@categoryName, @userId)