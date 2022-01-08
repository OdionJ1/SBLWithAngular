using SBL.Data.Models.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SBL.Data.IDAO
{
    public interface IUserData
    {
        void CreateUser(User user);
        bool UserExists(string email);
    }
}
