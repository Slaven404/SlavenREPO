
using DataLibrary.DataAccess;
using StudentData.DataAccess;
using StudentData.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace StudentData.BusinessLogic
{
    public static class StudentProcessor
    {
        public static int KreirajStudenta(string brIndeksa, string ime, string prezime,
           int godina, string statusStudenta)
        {

            StudentModel data = new StudentModel
            {

                BrojIndeksa = brIndeksa,
                Ime = ime,
                Prezime = prezime,
                Godina = godina,
                StatusStudenta = statusStudenta
            };

            string sql = @"insert into Studenti ( BrojIndeksa, Ime, Prezime, Godina, StatusStudenta)
                        values ( @BrojIndeksa, @Ime, @Prezime, @Godina, @StatusStudenta);";

            return SqlDataAccess.SaveData(sql, data);
        }

        public static List<StudentModel> UcitajStudente()
        {
            string sql = @"select PKStudentID, BrojIndeksa, Ime, Prezime, Godina, StatusStudenta from Studenti;";

            return SqlDataAccess.LoadData<StudentModel>(sql);
        }

        public static List<StatusModel> UcitajStatus()
        {
            string sql = @"select NazivStatusa from StatusStudenta;";
            return SqlDataAccess.LoadData<StatusModel>(sql);
        }

        public static List<StudentModel> StoredProceduraGetAll()
        {

            return SqlStoredProcedures.StoredProcedureGetAll<StudentModel>();
        }
      
      
        public static List<StudentModel> StoredProceduraGetID(int ID)
        {
            return SqlStoredProcedures.StoredProcedureGetID<StudentModel>(ID);
        }
      

        public static void ObrisiStudenta(int PKStudentID) 
        {
            string del = @"delete sk from StudentiKurs sk 
                        INNER JOIN Studenti s ON sk.PKStudentID = s.PKStudentID
                        WHERE s.PKStudentID=" + PKStudentID + ";";
            SqlDataAccess.DeleteData(del);

            string sql = "delete from Studenti where PKStudentID = "+ PKStudentID + ";";
            SqlDataAccess.DeleteData(sql);
           

            
        }

        public static int IzmjeniStudenta(int ID, string brIndeksa, string ime, string prezime,
          int godina, string statusStudenta)
        {

            StudentModel data = new StudentModel
            {
                PKStudentID = ID,
                BrojIndeksa = brIndeksa,
                Ime = ime,
                Prezime = prezime,
                Godina = godina,
                StatusStudenta = statusStudenta
            };
            string sql = @"UPDATE Studenti SET BrojIndeksa = @BrojIndeksa, Ime = @Ime,
                        Prezime = @Prezime, Godina = @Godina,
                        StatusStudenta = @StatusStudenta
                        WHERE
                        PKStudentID = @pkStudentID;";

            return SqlDataAccess.SaveData(sql, data);
        }
    }
}
