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
        void UpdateBook(FullBook book);
        bool TitleExists(string title, string userId, int? bookId = null);
        IEnumerable<Book> GetFavouriteBooks(string userId);
        IEnumerable<Book> GetReadingList(string userId);
        FullBook UploadBook(FullBook book, string userId);
        void CreateBookCategory(int bookId, int categoryId);
        void CreateBookAuthor(int bookId, int authorId);
        void DeleteBook(int bookId);
        IEnumerable<Book> GetBooksInCategory(int categoryId);
        IEnumerable<Book> GetBooksForAuthor(int authorId);
    }
}
