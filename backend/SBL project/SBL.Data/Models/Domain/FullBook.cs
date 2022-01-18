using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SBL.Data.Models.Domain
{
    public class FullBook : Book
    {
        [JsonProperty("dateUploaded")]
        public DateTime DateUploaded { get; set; }

        [JsonProperty("authors")]
        public IEnumerable<Author> Authors { get; set; }

        [JsonProperty("categories")]
        public IEnumerable<Category> Categories { get; set; }

        [JsonProperty("inReadingList")]
        public bool InReadingList { get; set; }

        [JsonProperty("inFavouriteList")]
        public bool InFavouriteList { get; set; }

        [JsonProperty("link")]
        public string Link { get; set; }
    }
}
