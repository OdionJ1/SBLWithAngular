CREATE Procedure [dbo].[GetUsers]
  @id int
AS

SELECT * FROM [User] where UserId = @id