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
    public class KursController : ApiController
    {
        // GET: api/Kurs
        public List<KursModel> Get()
        {
            return UcitajKurs();
        }

        // GET: api/Kurs/5
        public List<KursModel> Get(int id)
        {
            return OdabraniKurs(id);
        }

        // POST: api/Kurs
        public void Post([FromBody]KursModel novKurs)
        {

            if (!ModelState.IsValid)
            {
                BadRequest("Neispravan model kursa!");
            }
           
            MapStudentiKurs(novKurs.Students, novKurs.NazivKursa);
           
        }

        // PUT: api/Kurs/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Kurs/5
        public void Delete(int id)
        {
            ObrisiKurs(id);
        }
    }
}
