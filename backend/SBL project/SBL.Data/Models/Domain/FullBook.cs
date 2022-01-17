using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SBL.Data.Models.Domain
{
    public class FullBook : Book
    {
        public DateTime DateUploaded { get; set; }
        public IEnumerable<Author> Authors { get; set; }
        public IEnumerable<Category> Categories { get; set; }
        public bool InReadingList { get; set; }
        public bool InFavouriteList { get; set; }
        public string Link { get; set; }
    }
}
