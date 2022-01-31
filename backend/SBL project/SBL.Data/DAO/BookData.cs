﻿using SBL.Data.IDAO;
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
        private string GetBooksAuthorsSP = "GetBooks_Authors";
        private string GetBooksCategoriesSP = "GetBooks_Categories";
        private string GetBookSP = "GetBookFull";
        private string UpdateBookSP = "UpdateBook";
        private string TitleExistsSP = "TitleExists";

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
                    book.Authors = GetAuthorsForBook(book.BookId);
                    books.Add(book);
                }
            }

            return books;
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
                    Rating = (decimal)row["rating"],
                    DateUploaded = (DateTime)row["dateUploaded"],
                    InReadingList = (bool)row["inReadingList"],
                    InFavouriteList = (bool)row["inFav"],
                    Link = (string)row["link"]
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
                new SqlParameter("dateUploaded", book.DateUploaded),
                new SqlParameter("rating", book.Rating),
                new SqlParameter("inReadingList", book.InReadingList),
                new SqlParameter("inFav", book.InFavouriteList),
                new SqlParameter("link", book.Link)
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
    }
}
