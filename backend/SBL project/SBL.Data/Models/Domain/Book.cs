using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SBL.Data.Models.Domain
{
    public class Book
    {
        [JsonProperty("bookId")]
        public int BookId { get; set; }

        [JsonProperty("title")]
        public string Title { get; set; }

        [JsonProperty("authors")]
        public IEnumerable<Author> Authors { get; set; }

        [JsonProperty("rating")]
        public decimal Rating { get; set; }

        [JsonProperty("coverLink")]
        public string CoverLink { get; set; }

    }
}
