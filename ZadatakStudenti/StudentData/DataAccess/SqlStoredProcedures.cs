using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using Dapper;
using StudentData.Models;

namespace DataLibrary.DataAccess
{
    public static class SqlStoredProcedures
    {
        //GetAll Students from DB
        public static List<T> StoredProcedureGetAll<T>()
        {
            string connString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            using (IDbConnection conn = new SqlConnection(connString))
            {
                return conn.Query<T>("dbo.spStudenti_GetAll").ToList();

            }
        }
        //Get Student by ID from DB
        public static List<StudentModel> StoredProcedureGetID<T>(int id)
        {
            var p = new DynamicParameters();
            p.Add("@ID", id);
            string connString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            using (IDbConnection conn = new SqlConnection(connString))
            {
                return conn.Query<StudentModel>("dbo.spStudent_GetID", new { ID = id }, commandType: CommandType.StoredProcedure).ToList();



            }
        }

    }

}