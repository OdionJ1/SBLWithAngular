CREATE TABLE [dbo].[books] (
    [bookId]         INT           IDENTITY (1, 1) NOT NULL,
    [title]          VARCHAR (50)  NOT NULL,
    [dateUploaded]   DATETIME      NOT NULL,
    [rating]         INT           NOT NULL,
    [inReadingList]  BIT           NOT NULL,
    [inFav]          BIT           NOT NULL,
    [fileLink]       VARCHAR (MAX) NULL,
    [coverImageLink] VARCHAR (MAX) NULL,
    [userId]         VARCHAR (100) NOT NULL,
    CONSTRAINT [PK_books] PRIMARY KEY CLUSTERED ([bookId] ASC),
    CONSTRAINT [FK_books_users] FOREIGN KEY ([userId]) REFERENCES [dbo].[users] ([userId]) ON DELETE CASCADE ON UPDATE CASCADE
);

