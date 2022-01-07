using SBL.Data.Models.Domain;
using SBL.Service.IService;
using SBL.Service.Service;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;


namespace SBL.Controllers
{
    [RoutePrefix("api/account")]
    public class AccountController : ApiController
    {
        private IUserService userService;

        public AccountController()
        {
            userService = new UserService();
        }


        [HttpPost]
        [Route("register")]
        public IHttpActionResult Register([FromBody]User user)
        {
            if (user != null)
            {
                userService.CreateUser(user);
                return Ok();
            } 
            else
            {
                return StatusCode(HttpStatusCode.BadRequest);
            }

        }
    }
}
