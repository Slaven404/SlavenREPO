using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using static StudentData.BusinessLogic.StudentProcessor;
using StudentData.Models;

namespace ZadatakStudenti.Controllers
{
    public class StatusController : ApiController
    {
        // GET: api/Status
        public List<StatusModel> Get()
        {
            var data = UcitajStatus();
            return data;
        }

    }
}
