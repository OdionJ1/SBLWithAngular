using SBL.Data.DAO;
using SBL.Data.IDAO;
using SBL.Data.Models.Domain;
using SBL.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SBL.Service.Service
{
    public class BookService : IBookService
    {
        private IBookData bookData;

        public BookService()
        {
            bookData = new BookData();
        }

        public IEnumerable<Book> GetBookList(string userId)
        {
            return bookData.GetBookList(userId);
        }
    }
}
