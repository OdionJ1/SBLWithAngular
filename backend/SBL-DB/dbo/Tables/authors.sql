CREATE TABLE [dbo].[authors] (
    [authorId]   INT           IDENTITY (1, 1) NOT NULL,
    [authorName] VARCHAR (100) NOT NULL,
    [userId]     VARCHAR (100) NOT NULL,
    CONSTRAINT [PK_author] PRIMARY KEY CLUSTERED ([authorId] ASC),
    CONSTRAINT [FK_author_users] FOREIGN KEY ([userId]) REFERENCES [dbo].[users] ([userId]) ON DELETE CASCADE ON UPDATE CASCADE
);

