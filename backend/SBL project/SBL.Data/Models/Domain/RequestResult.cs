using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace SBL.Data.Models.Domain
{
    public class RequestResult<T>
    {
        public RequestResult(HttpStatusCode statusCode, T data = default)
        {
            this.Data = data;
            this.StatusCode = statusCode;
        }
        public T Data { get; set; }
        public HttpStatusCode StatusCode { get; set; }
    }
}
