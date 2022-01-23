using SBL.Data.Models.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SBL.Service.IService
{
    public interface IBookService
    {
        IEnumerable<Book> GetBookList(string userId);
        RequestResult<FullBook> GetBook(int bookId);
    }
}
