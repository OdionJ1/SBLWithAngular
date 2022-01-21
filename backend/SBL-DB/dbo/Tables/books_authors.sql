CREATE TABLE [dbo].[books_authors] (
    [bookId]   INT NOT NULL,
    [authorId] INT NOT NULL,
    CONSTRAINT [FK_books_authors_authors] FOREIGN KEY ([authorId]) REFERENCES [dbo].[authors] ([authorId]),
    CONSTRAINT [FK_books_authors_books] FOREIGN KEY ([bookId]) REFERENCES [dbo].[books] ([bookId])
);

