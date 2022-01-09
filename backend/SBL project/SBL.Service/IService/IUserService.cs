using SBL.Data.Models.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SBL.Service.IService
{
    public interface IUserService
    {
        RequestResult<bool> CreateUser(User user);
        RequestResult<User> AuthenticateUser(string email, string password);
        RequestResult<User> GetUser(string userId);
    }
}
