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
                IEnumerable<Book> books = bookService.GetBookList(userId);
                return Ok(books);
            } else
            {
                return StatusCode(HttpStatusCode.BadRequest);
            }
        }

    }
}
