using SBL.Data.Models.Domain;
using SBL.Service.IService;
using SBL.Service.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace SBL.Controllers
{
    [RoutePrefix("api/library")]
    [EnableCors(origins: "http://localhost:4200, https://skybooklibrary.netlify.app", headers: "*", methods: "*")]
    public class LibraryController : ApiController
    {
        private IBookService bookService;
        private ICategoryService categoryService;
        private IAuthorService authorService;

        public LibraryController()
        {
            bookService = new BookService();
            categoryService = new CategoryService();
            authorService = new AuthorService();
        }

        [HttpGet]
        [Route("{userId}")]
        public IHttpActionResult GetBookList(string userId)
        {
            if (userId != null)
            {
                try
                {
                    IEnumerable<Book> books = bookService.GetBookList(userId);
                    return Ok(books);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            else
            {
                return StatusCode(HttpStatusCode.BadRequest);
            }
        }

        [HttpPost]
        [Route("uploadbook/{userId}")]
        public HttpResponseMessage UploadBook([FromBody]FullBook book, string userId)
        {
            if (userId != null && book != null)
            {
                try
                {
                    RequestResult<FullBook> result = bookService.UploadBook(book, userId);
                    return Request.CreateResponse(result.StatusCode, result.Data);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            } 
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        [HttpDelete]
        [Route("deletebook/{bookId}")]
        public HttpResponseMessage DeleteBook(int bookId)
        {
            if (bookId > 0)
            {
                try
                {
                    RequestResult<bool> result = bookService.DeleteBook(bookId);
                    return Request.CreateResponse(result.StatusCode, result.Data);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        [HttpGet]
        [Route("book/{bookId}")]
        public HttpResponseMessage GetBook(int bookId)
        {
            if (bookId > 0)
            {
                try
                {
                    RequestResult<FullBook> book = bookService.GetBook(bookId);
                    return Request.CreateResponse(book.StatusCode, book.Data);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        [HttpPut]
        [Route("updatebook/{userId}")]
        public HttpResponseMessage UpdateBook([FromBody] FullBook book, string userId)
        {
            if (book != null && userId != null)
            {
                try
                {
                    RequestResult<bool> result = bookService.UpdateBook(book, userId);
                    return Request.CreateResponse(result.StatusCode, result.Data);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        [HttpGet]
        [Route("favourites/{userId}")]
        public IHttpActionResult GetFavouriteBooks(string userId)
        {
            if (userId != null)
            {
                try
                {
                    IEnumerable<Book> results = bookService.GetFavouriteBooks(userId);
                    return Ok(results);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            else
            {
                return StatusCode(HttpStatusCode.BadRequest);
            }
        }

        [HttpGet]
        [Route("readinglist/{userId}")]
        public IHttpActionResult GetReadingList(string userId)
        {
            if (userId != null)
            {
                try
                {
                    IEnumerable<Book> results = bookService.GetReadingList(userId);
                    return Ok(results);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            else
            {
                return StatusCode(HttpStatusCode.BadRequest);
            }
        }

        [HttpPut]
        [Route("favourites/remove/{bookId}")]
        public IHttpActionResult RemoveFromFavourites(int bookId)
        {
            if (bookId > 0)
            {
                try
                {
                    bookService.RemoveFromFavourites(bookId);
                    return Ok();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            else
            {
                return StatusCode(HttpStatusCode.BadRequest);
            }
        }

        [HttpPut]
        [Route("readinglist/remove/{bookId}")]
        public IHttpActionResult RemoveFromReadingList(int bookId)
        {
            if (bookId > 0)
            {
                try
                {
                    bookService.RemoveFromReadingList(bookId);
                    return Ok();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            else
            {
                return StatusCode(HttpStatusCode.BadRequest);
            }
        }

        //Categories
        [HttpPost]
        [Route("createcategory/{userId}")]
        public HttpResponseMessage CreateCategory([FromBody]Category category, string userId)
        {
            if (category.CategoryName != null && userId != null)
            {
                try
                {
                    RequestResult<bool> result = categoryService.CreateCategory(category, userId);
                    return Request.CreateResponse(result.StatusCode, result.Data);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        [HttpGet]
        [Route("booksincategory/{categoryId}")]
        public IHttpActionResult GetBooksInCategory(int categoryId)
        {
            if (categoryId > 0)
            {
                try
                {
                    IEnumerable<Book> books = categoryService.GetBooksInCategory(categoryId);
                    return Ok(books);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            else
            {
                return StatusCode(HttpStatusCode.BadRequest);
            }
        }

        [HttpDelete]
        [Route("deletecategory/{categoryId}")]
        public HttpResponseMessage DeleteCategory(int categoryId)
        {
            if (categoryId > 0)
            {
                try
                {
                    RequestResult<bool> result = categoryService.DeleteCategory(categoryId);
                    return Request.CreateResponse(result.StatusCode, result.Data);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        [HttpPut]
        [Route("updatecategory/{userId}")]
        public HttpResponseMessage UpdateCategory([FromBody]Category category, string userId)
        {
            if (category.CategoryId != null && category.CategoryName != null && userId != null )
            {
                try
                {
                    RequestResult<bool> result = categoryService.UpdateCategory(category, userId);
                    return Request.CreateResponse(result.StatusCode, result.Data);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        [HttpGet]
        [Route("getcategories/{userId}")]
        public IHttpActionResult GetCategories(string userId)
        {
            if (userId != null)
            {
                try
                {
                    IEnumerable<Category> categories = categoryService.GetCategories(userId);
                    return Ok(categories);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            else
            {
                return StatusCode(HttpStatusCode.BadRequest);
            }
        }
        //



        //Authors
        [HttpPost]
        [Route("createauthor/{userId}")]
        public HttpResponseMessage CreateAuthor([FromBody]Author author, string userId)
        {
            if (author.AuthorName != null && userId != null)
            {
                try
                {
                    RequestResult<bool> result = authorService.CreateAuthor(author, userId);
                    return Request.CreateResponse(result.StatusCode, result.Data);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        [HttpPut]
        [Route("updateauthor/{userId}")]
        public HttpResponseMessage UpdateAuthor([FromBody]Author author, string userId)
        {
            if (author.AuthorId != null && author.AuthorName != null && userId != null)
            {
                try
                {
                    RequestResult<bool> result = authorService.UpdateAuthor(author, userId);
                    return Request.CreateResponse(result.StatusCode, result.Data);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        [HttpDelete]
        [Route("deleteauthor/{authorId}")]
        public HttpResponseMessage DeleteAuthor(int authorId)
        {
            if (authorId > 0)
            {
                try
                {
                    RequestResult<bool> result = authorService.DeleteAuthor(authorId);
                    return Request.CreateResponse(result.StatusCode, result.Data);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        [HttpGet]
        [Route("booksforauthor/{authorId}")]
        public IHttpActionResult GetBooksForAuthor(int authorId)
        {
            if (authorId > 0)
            {
                try
                {
                    IEnumerable<Book> books = authorService.GetBooksForAuthor(authorId);
                    return Ok(books);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            else
            {
                return StatusCode(HttpStatusCode.BadRequest);
            }
        }

        [HttpGet]
        [Route("getauthors/{userId}")]
        public IHttpActionResult GetAuthors(string userId)
        {
            if (userId != null)
            {
                try
                {
                    IEnumerable<Author> authors = authorService.GetAuthors(userId);
                    return Ok(authors);
                }
                catch (Exception)
                {

                    throw;
                }
            }
            else
            {
                return StatusCode(HttpStatusCode.BadRequest);
            }
        }


    }
}
