CREATE PROCEDURE [dbo].[GetReadingList]
	@userId varchar(100)
AS
select bookId, title, rating, coverImageLink from books where inReadingList = CONVERT(BIT, 1) and userId = @userId;