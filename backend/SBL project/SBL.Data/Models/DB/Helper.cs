using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SBL.Data.Models.DB
{
    public static class Helper
    {
        private static string GetConnection()
        {
            return ConfigurationManager.ConnectionStrings["SBLContext"].ConnectionString;
        }

        public static DataTable Execute(string sp, IEnumerable<SqlParameter> paramList)
        {
            using (SqlConnection connection = new SqlConnection(GetConnection()))
            {
                SqlCommand command = new SqlCommand(sp, connection);
                paramList.ToList().ForEach(param => command.Parameters.Add(param));
                command.CommandType = CommandType.StoredProcedure;
                connection.Open();
                SqlDataAdapter result = new SqlDataAdapter(command);
                DataTable dt = new DataTable();
                connection.Close();

                result.Fill(dt);
                return dt;
            }
        }
    }
}
