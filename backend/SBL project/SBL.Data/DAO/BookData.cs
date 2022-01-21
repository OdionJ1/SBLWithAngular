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
        private string GetBooksAuthors = "GetBooks_Authors";

        public IEnumerable<Book> GetBookList(string userId)
        {
            IEnumerable<SqlParameter> paramList = new List<SqlParameter>()
            {
                new SqlParameter("userId", userId)
            };

            DataTable data = Helper.Execute(GetBooksSP, paramList);

            IList<Book> books = new List<Book>();
            if (data.Rows.Count > 0)
            {
                foreach (DataRow row in data.Rows)
                {
                    Book book = new Book()
                    {
                        BookId = (int)row["bookId"],
                        Title = (string)row["title"],
                        Rating = (decimal)row["rating"]
                    };
                    book.Authors = GetAuthors(book.BookId);
                    books.Add(book);
                }
            }
            return books;
        }

        public IEnumerable<Author> GetAuthors(int bookId)
        {
            IEnumerable<SqlParameter> paramList = new List<SqlParameter>()
            {
                new SqlParameter("bookId", bookId)
            };

            DataTable data = Helper.Execute(GetBooksAuthors, paramList);
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
    }
}
