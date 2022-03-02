using SBL.Data.DAO;
using SBL.Data.Models.DB;
using SBL.Data.Models.Domain;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SBL.Data.IDAO
{
    public class AuthorData : IAuthorData
    {
        private string GetAuthorsSP = "GetAuthors";
        private string CreateAuthorSP = "CreateAuthor";
        private string AuthorNameExists = "AuthorNameExists";


        public void CreateAuthor(Author author, string userId)
        {
            IEnumerable<SqlParameter> paramList = new List<SqlParameter>()
            {
                new SqlParameter("authorName", author.AuthorName),
                new SqlParameter("userId", userId)
            };

            Helper.Execute(CreateAuthorSP, paramList);
        }

        public IEnumerable<Author> GetAuthors(string userId)
        {
            IEnumerable<SqlParameter> paramList = new List<SqlParameter>()
            {
                new SqlParameter("userId", userId)
            };

            DataTable data = Helper.Execute(GetAuthorsSP, paramList);
            IList<Author> authors = new List<Author>();

            foreach (DataRow row in data.Rows)
            {
                Author author = new Author
                {
                    AuthorId = (int)row["authorId"],
                    AuthorName = (string)row["authorName"]
                };
                authors.Add(author);
            }

            return authors;
        }

        public bool NameExists(Author author, string userId)
        {
            IEnumerable<SqlParameter> paramList = new List<SqlParameter>()
            {
                new SqlParameter("authorName", author.AuthorName),
                new SqlParameter("userId", userId)
            };

            if (author.AuthorId != null)
            {
                paramList.ToList().Add(new SqlParameter("authorId", author.AuthorId));
            }

            DataTable data = Helper.Execute(AuthorNameExists, paramList);

            if (data.Rows.Count > 0)
            {
                return true;
            }

            return false;
        }
    }
}
