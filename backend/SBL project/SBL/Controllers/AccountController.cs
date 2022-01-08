using SBL.Data.Models.Domain;
using SBL.Service.IService;
using SBL.Service.Service;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;
using System.Web.Http.Cors;

namespace SBL.Controllers
{
    [RoutePrefix("api/account")]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class AccountController : ApiController
    {
        private IUserService userService;

        public AccountController()
        {
            userService = new UserService();
        }


        [HttpPost]
        [Route("register")]
        public HttpResponseMessage Register([FromBody]User user)
        {
            if (user != null)
            {
                try
                {
                    RequestResult<bool> result = userService.CreateUser(user);
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
    }
}
