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
Values (
	@id,
	@firstName,
	@lastName,
	@email,
	@password
)

