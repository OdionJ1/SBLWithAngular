CREATE Procedure [dbo].[CreateUser]
  @id varchar(100), @firstName varchar(50), @lastName varchar(50), @email varchar(100), @password varchar(50) 
AS

insert into users(
	userId,
	firstName,
	lastName,
	email,
	password
)
values (
	@id,
	@firstName,
	@lastName,
	@email,
	@password
)

insert into authors(authorName, userId)
values('Default Author', @id)

insert into categories(categoryName, userId)
values('Default Category', @id)
