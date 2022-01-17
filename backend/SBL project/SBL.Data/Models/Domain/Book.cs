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
        public int BookID { get; set; }
        public string Title { get; set; }
        public decimal Rating { get; set; }

    }
}
