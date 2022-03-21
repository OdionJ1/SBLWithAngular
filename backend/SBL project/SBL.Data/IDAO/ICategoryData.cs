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
        void CreateCategory(Category category, string userId);
        IEnumerable<Category> GetCategories(string userId);
        bool NameExists(Category category, string userId);
        void UpdateCategory(Category category);
        void DeleteCategory(int categoryId);
    }
}
