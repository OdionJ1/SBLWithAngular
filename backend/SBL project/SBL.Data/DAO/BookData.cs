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
                        BookID = (int)row["bookId"],
                        Title = (string)row["title"],
                        Rating = (decimal)row["rating"]
                    };
                    books.Add(book);
                }
            }

            return books;
        }
    }
}
