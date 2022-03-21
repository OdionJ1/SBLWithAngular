using SBL.Data.Models.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SBL.Service.IService
{
    public interface ICategoryService
    {
        RequestResult<bool> CreateCategory(Category category, string userId);
        IEnumerable<Category> GetCategories(string userId);
        RequestResult<bool> UpdateCategory(Category category, string userId);
        RequestResult<bool> DeleteCategory(int categoryId);
        IEnumerable<Book> GetBooksInCategory(int categoryId);
    }
}
