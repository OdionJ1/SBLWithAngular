using SBL.Data.Models.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SBL.Data.IDAO
{
    public interface ICategoryData
    {
        void CreateCategory(Category category, int userId);
        IEnumerable<Category> GetCategories(int userId);
        bool NameExists(Category category, int userId);
    }
}
