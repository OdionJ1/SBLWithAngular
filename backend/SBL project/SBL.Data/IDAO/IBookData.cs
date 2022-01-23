using SBL.Data.Models.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SBL.Data.IDAO
{
    public interface IBookData
    {
        IEnumerable<Book> GetBookList(string userId);
        FullBook GetBook(int bookId);
    }
}
