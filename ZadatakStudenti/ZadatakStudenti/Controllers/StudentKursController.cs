using StudentData.DataAccess;
using StudentData.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using static StudentData.BusinessLogic.KursProcessor;

namespace ZadatakStudenti.Controllers
{
    [Authorize]
    public class StudentKursController : ApiController
    {
        // GET: api/StudentKurs
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/StudentKurs/5
        public List<KursModel> Get(int id)
        {
            return StudentKurs(id);
        }

        // POST: api/StudentKurs
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/StudentKurs/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/StudentKurs/5
        public void Delete(int id)
        {
        }
    }
}
