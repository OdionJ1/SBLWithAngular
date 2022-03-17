using SBL.Data.IDAO;
using SBL.Data.Models.DB;
using SBL.Data.Models.Domain;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SBL.Data.DAO
{
    public class BookData : IBookData
    {
        private string GetBooksSP = "GetBooks";
        private string CreateBookSP = "CreateBook";
        private string CreateBook_Author = "CreateBook_Author";
        private string CreateBook_Category = "CreateBook_Category";
        private string GetBooksAuthorsSP = "GetBooks_Authors";
        private string GetBooksCategoriesSP = "GetBooks_Categories";
        private string GetBookSP = "GetBookFull";
        private string UpdateBookSP = "UpdateBook";
        private string TitleExistsSP = "TitleExists";
        private string GetFavouriteBooksSP = "GetFavouriteBooks";
        private string GetReadingListSP = "GetReadingList";
        private string DeleteBookSP = "DeleteBook";

        public FullBook UploadBook(FullBook book, string userId)
        {
            IEnumerable<SqlParameter> paramList = new List<SqlParameter>()
            {
                new SqlParameter("title", book.Title),
                new SqlParameter("userId", userId)
            };

            DataRow row = Helper.Execute(CreateBookSP, paramList).Rows[0];

            FullBook newBook = new FullBook()
            {
                BookId = (int)row["bookId"],
                Title = (string)row["title"],
                Rating = (int)row["rating"],
                DateUploaded = (DateTime)row["dateUploaded"],
                InReadingList = (bool)row["inReadingList"],
                InFavouriteList = (bool)row["inFav"],
            };

            foreach (Category category in book.Categories)
            {
                CreateBookCategory(newBook.BookId, (int)category.CategoryId);
            }

            foreach (Author author in book.Authors)
            {
                CreateBookAuthor(newBook.BookId, (int)author.AuthorId);
            }

            newBook.Authors = GetAuthorsForBook(newBook.BookId);
            newBook.Categories = GetCategoriesForBook(newBook.BookId);

            return newBook;
        }

        public void CreateBookCategory(int bookId, int categoryId)
        {
            IEnumerable<SqlParameter> paramList = new List<SqlParameter>()
            {
                new SqlParameter("bookId", bookId),
                new SqlParameter("categoryId", categoryId)
            };

            Helper.Execute(CreateBook_Category, paramList);
        }

        public void CreateBookAuthor(int bookId, int authorId)
        {
            IEnumerable<SqlParameter> paramList = new List<SqlParameter>()
            {
                new SqlParameter("bookId", bookId),
                new SqlParameter("authorId", authorId)
            };

            Helper.Execute(CreateBook_Author, paramList);
        }

        public IEnumerable<Book> GetBookList(string userId)
        {
            return GetBooks(GetBooksSP, userId);
        }

        public IEnumerable<Book> GetFavouriteBooks(string userId)
        {
            return GetBooks(GetFavouriteBooksSP, userId);
        }

        public IEnumerable<Book> GetReadingList(string userId)
        {
            return GetBooks(GetReadingListSP, userId);
        }

        public FullBook GetBook(int bookId)
        {
            IEnumerable<SqlParameter> paramList = new List<SqlParameter>()
            {
                new SqlParameter("bookId", bookId)
            };

            DataTable data = Helper.Execute(GetBookSP, paramList);

            if (data.Rows.Count == 1)
            {
                DataRow row = data.Rows[0];

                FullBook book = new FullBook()
                {
                    BookId = (int)row["bookId"],
                    Title = (string)row["title"],
                    Rating = (int)row["rating"],
                    DateUploaded = (DateTime)row["dateUploaded"],
                    InReadingList = (bool)row["inReadingList"],
                    InFavouriteList = (bool)row["inFav"],
                    FileLink = row["fileLink"] is DBNull ? null : (string)row["fileLink"],
                    CoverImageLink = row["coverImageLink"] is DBNull? null : (string)row["coverImageLink"]
                };

                book.Authors = GetAuthorsForBook(bookId);
                book.Categories = GetCategoriesForBook(bookId);

                return book;
            }

            return null;

        }

        public void UpdateBook(FullBook book)
        {
            IEnumerable<SqlParameter> paramList = new List<SqlParameter>()
            {
                new SqlParameter("bookId", book.BookId),
                new SqlParameter("title", book.Title),
                new SqlParameter("rating", book.Rating),
                new SqlParameter("inReadingList", book.InReadingList),
                new SqlParameter("inFav", book.InFavouriteList),
                new SqlParameter("fileLink", book.FileLink),
                new SqlParameter("coverImageLink", book.CoverImageLink)
            };

            Helper.Execute(UpdateBookSP, paramList);
        }

        public bool TitleExists(string title, string userId, int? bookId)
        {
            IEnumerable<SqlParameter> paramList = new List<SqlParameter>()
            {
                new SqlParameter("title", title),
                new SqlParameter("userId", userId),
                new SqlParameter("bookId", bookId)
            };

            DataTable data = Helper.Execute(TitleExistsSP, paramList);
            if (data.Rows.Count > 0)
            {
                return true;
            }
            return false;
        }

        public void DeleteBook(int bookId)
        {
            IEnumerable<SqlParameter> paramList = new List<SqlParameter>()
            {
                new SqlParameter("bookId", bookId)
            };

            Helper.Execute(DeleteBookSP, paramList);
        }
        
        private IEnumerable<Author> GetAuthorsForBook(int bookId)
        {
            IEnumerable<SqlParameter> paramList = new List<SqlParameter>()
            {
                new SqlParameter("bookId", bookId)
            };

            DataTable data = Helper.Execute(GetBooksAuthorsSP, paramList);
            IList<Author> authors = new List<Author>();

            foreach (DataRow row in data.Rows)
            {
                Author author = new Author()
                {
                    AuthorId = (int)row["authorId"],
                    AuthorName = (string)row["authorName"]
                };
                authors.Add(author);
            }

            return authors;
        }

        private IEnumerable<Category> GetCategoriesForBook(int bookId)
        {
            IEnumerable<SqlParameter> paramList = new List<SqlParameter>()
            {
                new SqlParameter("bookId", bookId)
            };

            DataTable data = Helper.Execute(GetBooksCategoriesSP, paramList);

            IList<Category> categories = new List<Category>();

            foreach (DataRow row in data.Rows)
            {
                Category category = new Category()
                {
                    CategoryId = (int)row["categoryId"],
                    CategoryName = (string)row["categoryName"]
                };

                categories.Add(category);
            }

            return categories;
        }

        private IEnumerable<Book> GetBooks(string SP, string userId)
        {
            IEnumerable<SqlParameter> paramList = new List<SqlParameter>()
            {
                new SqlParameter("userId", userId)
            };

            DataTable data = Helper.Execute(SP, paramList);

            IList<Book> books = new List<Book>();
            if (data.Rows.Count > 0)
            {
                foreach (DataRow row in data.Rows)
                {
                    Book book = new Book()
                    {
                        BookId = (int)row["bookId"],
                        Title = (string)row["title"],
                        Rating = (int)row["rating"],
                        CoverImageLink = row["coverImageLink"] is DBNull? null : (string)row["coverImageLink"]
                    };
                    book.Authors = GetAuthorsForBook(book.BookId);
                    books.Add(book);
                }
            }

            return books;
        }
    }
}
