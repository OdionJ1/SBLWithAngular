using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SBL.Data.Models.Domain
{
    public class Author
    {
        [JsonProperty("authorId")]
        public int AuthorId { get; set; }

        [JsonProperty("authorName")]
        public string AuthorName { get; set; }
    }
}
