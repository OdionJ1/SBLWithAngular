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
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class LibraryController : ApiController
    {
        private IBookService bookService;

        public LibraryController()
        {
            bookService = new BookService();
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
        [Route("book/update/{userId}")]
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
    }
}
