using Newtonsoft.Json;
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
        [JsonProperty("categoryId")]
        public int? CategoryId { get; set; }

        [JsonProperty("categoryName")]
        public string CategoryName { get; set; }
    }
}
