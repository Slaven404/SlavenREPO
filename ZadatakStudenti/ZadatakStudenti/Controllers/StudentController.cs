using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using  static StudentData.BusinessLogic.StudentProcessor;
using StudentData.Models;
using System.Web.Http.Cors;

namespace ZadatakStudenti.Controllers
{
    [Authorize]
    public class StudentController : ApiController
    {
        // GET: api/Student
        public List<StudentModel> Get()
        {
            var data = StoredProceduraGetAll();
            return data;
        }
      
        // GET: api/Student/5
        public List<StudentModel> Get(int id)
        {
            return StoredProceduraGetID(id);
           
        }

        // POST: api/Student
        public void Post([FromBody]StudentModel noviStudent)
        {
            if (!ModelState.IsValid)
            {
              BadRequest("Neispravan model studenta.");
            }
         
                KreirajStudenta(noviStudent.BrojIndeksa, noviStudent.Ime, noviStudent.Prezime,
                noviStudent.Godina, noviStudent.StatusStudenta);
        }

        // PUT: api/Student/5
        public void Put(int id, [FromBody]StudentModel student)
        {
            if (!ModelState.IsValid)
            {
                BadRequest("Neispravan model studenta.");
            }

            IzmjeniStudenta(id, student.BrojIndeksa, student.Ime, student.Prezime,
                student.Godina, student.StatusStudenta);
        }

        // DELETE: api/Student/5
        public void Delete(int id)
        {
            ObrisiStudenta(id);
        }
    }
}
