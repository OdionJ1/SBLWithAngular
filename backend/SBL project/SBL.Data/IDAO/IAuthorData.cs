using SBL.Data.Models.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SBL.Data.DAO
{
    public interface IAuthorData
    {
        IEnumerable<Author> GetAuthors(int userId);
        void CreateAuthor(Author author, int userId);
        bool NameExists(Author author, int userId);
    }
}
