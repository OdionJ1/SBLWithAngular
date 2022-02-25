CREATE Procedure [dbo].[GetUser]
  @id varchar(100) = null, @email varchar(50) = null, @password varchar(50) = null
AS

IF @id is not null
SELECT * FROM users where userId = @id

IF @email is not null and @password is null
SELECT * FROM users where email = @email

IF @email is not null and @password is not null
SELECT * FROM users where email = @email and password = @password