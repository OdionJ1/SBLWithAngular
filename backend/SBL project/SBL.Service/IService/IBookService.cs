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
        RequestResult<bool> UpdateBook(FullBook book, string userId);
        IEnumerable<Book> GetFavouriteBooks(string userId);
        IEnumerable<Book> GetReadingList(string userId);
        void RemoveFromFavourites(int bookId);
        void RemoveFromReadingList(int bookId);
        RequestResult<FullBook> UploadBook(FullBook book, string userId);
        RequestResult<bool> DeleteBook(int bookId);
    }
}
