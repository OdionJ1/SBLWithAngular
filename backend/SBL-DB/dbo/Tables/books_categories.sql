CREATE TABLE [dbo].[books_categories] (
    [bookId]     INT NOT NULL,
    [categoryId] INT NOT NULL,
    CONSTRAINT [FK_books_categories_books] FOREIGN KEY ([bookId]) REFERENCES [dbo].[books] ([bookId]),
    CONSTRAINT [FK_books_categories_categories] FOREIGN KEY ([categoryId]) REFERENCES [dbo].[categories] ([categoryId])
);

