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
        private string GetUserSP = "GetUser";

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

            DataTable data = Helper.Execute(GetUserSP, paramList);

            if (data.Rows.Count > 0)
            {
                return true;
            }

            return false;
        }

        public User GetUser(string email, string password)
        {
            IEnumerable<SqlParameter> paramList = new List<SqlParameter>()
            {
                new SqlParameter("@email", email),
                new SqlParameter("@password", password)
            };

            DataTable data = Helper.Execute(GetUserSP, paramList);
            if (data.Rows.Count > 0)
            {
                DataRow row = data.Rows[0];
                User user =  new User()
                {
                    UserId = (string)row["userId"],
                    FirstName = (string)row["firstName"],
                    LastName = (string)row["lastName"],
                    Email = (string)row["email"]
                };
                return user;
            }

            return null;
        }

        public User GetUser(string userId)
        {
            IEnumerable<SqlParameter> paramList = new List<SqlParameter>()
            {
                new SqlParameter("@id", userId),
            };

            DataTable data = Helper.Execute(GetUserSP, paramList);
            if (data.Rows.Count > 0)
            {
                DataRow row = data.Rows[0];
                User user = new User()
                {
                    UserId = (string)row["userId"],
                    FirstName = (string)row["firstName"],
                    LastName = (string)row["lastName"],
                    Email = (string)row["email"]
                };
                return user;
            }

            return null;
        }

    }
}
