CREATE PROCEDURE [dbo].[CreateAuthor]
	@authorName varchar(100), @userId varchar(100)
AS

insert into authors(authorName, userId)
values(@authorName, @userId)