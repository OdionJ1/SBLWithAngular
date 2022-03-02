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

        public CategoryService()
        {
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
    }
}
