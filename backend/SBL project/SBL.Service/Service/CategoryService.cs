using SBL.Data.DAO;
using SBL.Data.IDAO;
using SBL.Data.Models.Domain;
using SBL.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace SBL.Service.Service
{
    public class CategoryService : ICategoryService
    {
        private ICategoryData categoryData;
        private IBookData bookData;

        public CategoryService()
        {
            bookData = new BookData();
            categoryData = new CategoryData();
        }

        public IEnumerable<Category> GetCategories(string userId)
        {
            return categoryData.GetCategories(userId);
        }

        public RequestResult<bool> CreateCategory(Category category, string userId)
        {
            if (categoryData.NameExists(category, userId))
            {
                return new RequestResult<bool>(HttpStatusCode.Conflict, false);
            }
            categoryData.CreateCategory(category, userId);
            return new RequestResult<bool>(HttpStatusCode.OK, true);
        }

        public RequestResult<bool> UpdateCategory(Category category, string userId)
        {
            string categoryName = categoryData.GetCategory((int)category.CategoryId).CategoryName;
            if (categoryName == "Default Category")
            {
                return new RequestResult<bool>(HttpStatusCode.Forbidden, false);
            }

            if (categoryData.NameExists(category, userId))
            {
                return new RequestResult<bool>(HttpStatusCode.Conflict, false);
            }

            categoryData.UpdateCategory(category);
            return new RequestResult<bool>(HttpStatusCode.OK, true);
        }

        public RequestResult<bool> DeleteCategory(int categoryId)
        {
            if (GetBooksInCategory(categoryId).Count() > 0)
            {
                return new RequestResult<bool>(HttpStatusCode.Conflict, false);
            }
            categoryData.DeleteCategory(categoryId);
            return new RequestResult<bool>(HttpStatusCode.OK, true);
        }

        public IEnumerable<Book> GetBooksInCategory(int categoryId)
        {
            return bookData.GetBooksInCategory(categoryId);
        }
    }
}
