using StudentData.DataAccess;
using StudentData.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentData.BusinessLogic
{
    public static class KursProcessor
    {

        public static int KreirajKurs(string NazivKursa)
        {
            KursModel data = new KursModel
            {
                NazivKursa = NazivKursa
            };
            
            string sql = @"insert into Kurs ( NazivKursa) Values (@NazivKursa);";
           return SqlDataAccess.SaveData(sql, data);
        }

        public static void MapStudentiKurs(List<StudentModel> Studenti, string NazivKursa)
        {
            int trenutniID = ID_Current();
            int KursID = trenutniID + 1;
            KreirajKurs(NazivKursa);

            foreach (StudentModel st in Studenti)
            {
                int StudentID = st.PKStudentID;
                string sql = @"insert into StudentiKurs (PKStudentID, PKKursID) values 
                        (" + StudentID + ", " + KursID + ");";
                SqlDataAccess.MapMany(sql);
            }
        }
       
        public static List<KursModel> UcitajKurs()
        {

            string sql = @"select PKKursID, NazivKursa from Kurs SELECT @@IDENTITY;";
            return SqlDataAccess.LoadData<KursModel>(sql);
        }

        public static List<KursModel> OdabraniKurs(int PKKursID)
        {
            string sql = @"SELECT k.NazivKursa , s.* FROM Kurs k INNER JOIN
                            StudentiKurs sk ON k.PKKursID = sk.PKKursID INNER JOIN
                            Studenti s ON sk.PKStudentID = s.PKStudentID
                            WHERE k.PKKursID =" + PKKursID + ";";

            return SqlDataAccess.LoadKurs<KursModel>(sql);
        }

        public static void ObrisiKurs(int PKKursID)
        {
            
            string del = @"delete sk from StudentiKurs sk 
                        INNER JOIN Kurs k ON sk.PKKursID = k.PKKursID
                        WHERE k.PKKursID=" + PKKursID + ";";
            SqlDataAccess.DeleteData(del);
            string sql = "delete from Kurs where PKKursID = " + PKKursID + ";";
            SqlDataAccess.DeleteData(sql);

         
        }

        public static int ID_Current()
        {
            string sql = @"SELECT IDENT_CURRENT('Kurs');";
            return SqlDataAccess.CurrentID(sql);
        }

        public static List<KursModel> StudentKurs(int PKStudentID)
        {
            string sql = @"SELECT k.* FROM Kurs k INNER JOIN
                        StudentiKurs sk ON sk.PKKursID = k.PKKursID INNER JOIN
                        Studenti s ON s.PKStudentID = sk.PKStudentID
                        WHERE s.PKStudentID = " + PKStudentID + ";";
            return SqlDataAccess.LoadData<KursModel>(sql);
        }
    }
}
