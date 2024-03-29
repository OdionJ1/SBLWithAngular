﻿using SBL.Data.DAO;
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
    public class UserService : IUserService
    {
        private IUserData userData;

        public UserService()
        {
            userData = new UserData();
        }
    
        public RequestResult<bool> CreateUser(User user)
        {
            if (userData.UserExists(user.Email))
            {
                return new RequestResult<bool>(HttpStatusCode.Conflict, false);
            }
            userData.CreateUser(user);
            return new RequestResult<bool>(HttpStatusCode.Created, true);
        }

        public RequestResult<User> AuthenticateUser(string email, string password)
        {
            User user = userData.GetUser(email, password);

            if (user == null)
            {
                return new RequestResult<User>(HttpStatusCode.NotFound, user);
            } else
            {
                return new RequestResult<User>(HttpStatusCode.Accepted, user);
            }
        }

        public RequestResult<User> GetUser(string userId)
        {
            User user = userData.GetUser(userId);

            if (user == null)
            {
                return new RequestResult<User>(HttpStatusCode.NotFound, user);
            } else
            {
                return new RequestResult<User>(HttpStatusCode.OK, user);
            }
        }

    }
}
