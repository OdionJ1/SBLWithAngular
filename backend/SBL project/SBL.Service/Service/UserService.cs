using SBL.Data.DAO;
using SBL.Data.IDAO;
using SBL.Data.Models.Domain;
using SBL.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
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


        public void CreateUser(User user)
        {
            userData.CreateUser(user);
        }

    }
}
