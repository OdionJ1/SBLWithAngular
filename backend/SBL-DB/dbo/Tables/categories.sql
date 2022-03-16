CREATE TABLE [dbo].[categories] (
    [categoryId]   INT           IDENTITY (1, 1) NOT NULL,
    [categoryName] VARCHAR (100) NOT NULL,
    [userId]       VARCHAR (100) NULL,
    CONSTRAINT [PK_categories] PRIMARY KEY CLUSTERED ([categoryId] ASC),
    CONSTRAINT [FK_categories_users] FOREIGN KEY ([userId]) REFERENCES [dbo].[users] ([userId]) ON DELETE CASCADE ON UPDATE CASCADE
);

