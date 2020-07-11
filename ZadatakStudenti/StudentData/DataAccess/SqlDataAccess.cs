using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using StudentData.Models;

namespace StudentData.DataAccess
{
    public static class SqlDataAccess
    {
        public static string GetConnectionString(string connectionName = "DefaultConnection")
        {
            return ConfigurationManager.ConnectionStrings[connectionName].ConnectionString;
        }

        public static List<T> LoadData<T>(string sql)
        {
            using (IDbConnection conn = new SqlConnection(GetConnectionString()))
            {
                return conn.Query<T>(sql).ToList();
            }
        }


        public static int SaveData<T>(string sql, T data)
        {
            using (IDbConnection conn = new SqlConnection(GetConnectionString()))
            {
                return conn.Execute(sql, data);
            }
        }

        public static void DeleteData(string sql)
        {
            using (IDbConnection conn = new SqlConnection(GetConnectionString()))
            {
                conn.Execute(sql);
            }
        }
        public static void MapMany(string sql)
        {
            using (IDbConnection conn = new SqlConnection(GetConnectionString()))
            {
                conn.Execute(sql);
            }
        }

        public static List<KursModel> LoadKurs<T>(string sql)
        {
            using (IDbConnection conn = new SqlConnection(GetConnectionString()))
            {
                return conn.Query<KursModel, StudentModel, KursModel>(sql, (kurs, student)=>{
                    kurs.Student = student;
                    return kurs;
                }, splitOn:"PKStudentID").ToList();
            }
        }

      
        public static int CurrentID(string sql)
        {
            using (IDbConnection conn = new SqlConnection(GetConnectionString()))
            {
                return conn.QuerySingle<int>(sql);
            }
        }
    
    }
}
