using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SBL.Data.Models.Domain
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public User User { get; set; }
    }
}
