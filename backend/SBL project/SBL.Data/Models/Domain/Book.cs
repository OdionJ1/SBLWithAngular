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
        [Key]
        public int BookID { get; set; }
        public string Title { get; set; }
        public DateTime DateUploaded { get; set; }
        public User User { get; set; }
        public virtual Author Author { get; set; }
        public virtual Category Category { get; set; }
    }
}
