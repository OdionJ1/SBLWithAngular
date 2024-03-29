﻿using SBL.Data.Models.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SBL.Data.DAO
{
    public interface IAuthorData
    {
        IEnumerable<Author> GetAuthors(string userId);
        Author GetAuthor(int authorId);
        void CreateAuthor(Author author, string userId);
        bool NameExists(Author author, string userId);
        void UpdateAuthor(Author author);
        void DeleteAuthor(int authorId);
    }
}
