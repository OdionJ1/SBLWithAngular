CREATE TABLE [dbo].[books] (
    [bookId]        INT            IDENTITY (1, 1) NOT NULL,
    [title]         VARCHAR (50)   NOT NULL,
    [dateUploaded]  DATE           NULL,
    [rating]        DECIMAL (4, 1) NULL,
    [inReadingList] BIT            NULL,
    [inFav]         BIT            NULL,
    [link]          VARCHAR (200)  NULL,
    [userId]        VARCHAR (100)  NOT NULL,
    CONSTRAINT [PK_books] PRIMARY KEY CLUSTERED ([bookId] ASC),
    CONSTRAINT [FK_books_users] FOREIGN KEY ([userId]) REFERENCES [dbo].[users] ([userId]) ON DELETE CASCADE ON UPDATE CASCADE
);

