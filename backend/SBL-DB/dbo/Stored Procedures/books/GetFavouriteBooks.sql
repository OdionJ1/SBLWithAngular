﻿CREATE PROCEDURE [dbo].[GetFavouriteBooks]
	@userId varchar(100)
AS
select bookId, title, rating, coverImageLink from books where inFav = CONVERT(BIT, 1) and userId = @userId;