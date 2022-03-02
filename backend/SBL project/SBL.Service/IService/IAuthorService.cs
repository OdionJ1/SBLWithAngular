﻿using SBL.Data.Models.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SBL.Service.IService
{
    public interface IAuthorService
    {
        RequestResult<bool> CreateAuthor(Author author, string userId);
        IEnumerable<Author> GetAuthors(string userId);
    }
}
