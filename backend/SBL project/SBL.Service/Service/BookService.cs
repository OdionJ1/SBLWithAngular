using SBL.Data.DAO;
using SBL.Data.IDAO;
using SBL.Data.Models.Domain;
using SBL.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
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
        public RequestResult<FullBook> UploadBook(FullBook book, string userId)
        {
            if (bookData.TitleExists(book.Title, userId))
            {
                return new RequestResult<FullBook>(HttpStatusCode.Conflict, null);
            }
            FullBook newBook = bookData.UploadBook(book, userId);

            return new RequestResult<FullBook>(HttpStatusCode.Created, newBook);
        }

        public IEnumerable<Book> GetBookList(string userId)
        {
            return bookData.GetBookList(userId);
        }

        public RequestResult<FullBook> GetBook(int bookId)
        {
            FullBook book = bookData.GetBook(bookId);
            if (book != null)
            {
                return new RequestResult<FullBook>(HttpStatusCode.OK, book);
            } else
            {
                return new RequestResult<FullBook>(HttpStatusCode.NotFound, book);
            }
        }

        public RequestResult<bool> UpdateBook(FullBook book, string userId)
        {
            if (bookData.TitleExists(book.Title, userId, book.BookId))
            {
                return new RequestResult<bool>(HttpStatusCode.Conflict, false);
            }
            bookData.UpdateBook(book);
            return new RequestResult<bool>(HttpStatusCode.OK, true);
        }

        public IEnumerable<Book> GetFavouriteBooks(string userId)
        {
            return bookData.GetFavouriteBooks(userId);
        }

        public IEnumerable<Book> GetReadingList(string userId)
        {
            return bookData.GetReadingList(userId);
        }

        public void RemoveFromFavourites(int bookId)
        {
            FullBook book = bookData.GetBook(bookId);
            book.InFavouriteList = false;
            bookData.UpdateBook(book);
        }

        public void RemoveFromReadingList(int bookId)
        {
            FullBook book = bookData.GetBook(bookId);
            book.InReadingList = false;
            bookData.UpdateBook(book);
        }
    }
}
