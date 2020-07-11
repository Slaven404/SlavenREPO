using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentData.Models
{
    public class KursModel
    {
        public int PKKursID { get; set; }
        public string NazivKursa { get; set; }
        public  List<StudentModel>  Students { get; set; }
        public StudentModel Student { get; set; }

       

    }
}
