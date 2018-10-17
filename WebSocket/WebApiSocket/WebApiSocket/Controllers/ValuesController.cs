using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApiSocket.Controllers
{
   public class ValuesController : ApiController
    {
        public string[] Get()
        {
            Global.LogMessage("Data from Controller");
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5  
        public string Get(string id)
        {
            Global.LogMessage("Request param : " + id);
            return "value";
        }
    }
}
