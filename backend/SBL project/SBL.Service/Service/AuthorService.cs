﻿using SBL.Data.DAO;
using SBL.Data.IDAO;
using System.Net;
using SBL.Data.Models.Domain;
using SBL.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SBL.Service.Service
{
    public class AuthorService : IAuthorService
    {
        private IAuthorData authorData;

        public AuthorService()
        {
            authorData = new AuthorData();
        }

        public RequestResult<bool> CreateAuthor(Author author, int userId)
        {
            if (authorData.NameExists(author, userId))
            {
                return new RequestResult<bool>(HttpStatusCode.Conflict, false);
            }
            else
            {
                return new RequestResult<bool>(HttpStatusCode.OK, true);
            }
        }

        public IEnumerable<Author> GetAuthors(int userId)
        {
            return authorData.GetAuthors(userId);
        }

    }
}
