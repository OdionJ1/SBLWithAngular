using SBL.Data.IDAO;
using SBL.Data.Models.Domain;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using SBL.Data.Models.DB;

namespace SBL.Data.DAO
{
    public class UserData : IUserData
    {
        private string CreateUserSP = "CreateUser";
        private string GetUser = "GetUser";

        public void CreateUser(User user)
        {
            IEnumerable<SqlParameter> paramList = new List<SqlParameter>()
            {
                new SqlParameter("@id", Guid.NewGuid().ToString()),
                new SqlParameter("@firstName", user.FirstName),
                new SqlParameter("@lastName", user.LastName),
                new SqlParameter("@email", user.Email),
                new SqlParameter("@password", user.Password)
            };
            Helper.Execute(CreateUserSP, paramList);
        }

        public bool UserExists(string email)
        {
            IEnumerable<SqlParameter> paramList = new List<SqlParameter>()
            {
                new SqlParameter("@email", email)
            };

            DataTable data = Helper.Execute(GetUser, paramList);

            if (data.Rows.Count > 0)
            {
                return true;
            }

            return false;
        }

    }
}
