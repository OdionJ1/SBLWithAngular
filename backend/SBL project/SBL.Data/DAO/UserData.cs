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
        private string GETUSERSSP = "GetUsers";

        public void CreateUser(User user)
        {
            try
            {
                IEnumerable<SqlParameter> paramList = new List<SqlParameter>()
                {
                    new SqlParameter("@id", 2)
                };
                DataTable data = Helper.Execute(GETUSERSSP, paramList);
                DataRow row = data.Rows[0];
                User user1 = new User()
                {
                    UserId = (int)row["UserId"],
                    FirstName = (string)row["FirstName"],
                    LastName = (string)row["LastName"],
                    Email = (string)row["LastName"],
                    Password = (string)row["Password"]
                };

                var user3 = user1;

            }
            catch (Exception error)
            {
                throw error;
            }
        }

    }
}
