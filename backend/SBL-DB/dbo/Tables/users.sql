CREATE TABLE [dbo].[users] (
    [userId]    VARCHAR (100) NOT NULL,
    [firstName] VARCHAR (50)  NOT NULL,
    [lastName]  VARCHAR (50)  NOT NULL,
    [email]     VARCHAR (50)  NOT NULL,
    [password]  VARCHAR (50)  NOT NULL,
    CONSTRAINT [PK_user] PRIMARY KEY CLUSTERED ([userId] ASC)
);

