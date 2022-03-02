﻿using SBL.Data.IDAO;
using SBL.Data.Models.DB;
using SBL.Data.Models.Domain;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SBL.Data.DAO
{
    public class CategoryData : ICategoryData
    {
        private string CreateCategorySP = "CreateCategory";
        private string GetCategorySP = "GetCategories";
        private string CategoryNameExistsSP = "CategoryNameExists";

        public void CreateCategory(Category category, string userId)
        {
            IEnumerable<SqlParameter> paramList = new List<SqlParameter>()
            {
                new SqlParameter("categoryName", category.CategoryName),
                new SqlParameter("userId", userId)
            };

            Helper.Execute(CreateCategorySP, paramList);
        }

        public IEnumerable<Category> GetCategories(string userId)
        {
            IEnumerable<SqlParameter> paramList = new List<SqlParameter>()
            {
                new SqlParameter("userId", userId)
            };

            DataTable data = Helper.Execute(GetCategorySP, paramList);

            IList<Category> categories = new List<Category>();

            foreach (DataRow row in data.Rows)
            {
                Category category = new Category
                {
                    CategoryId = (int)row["categoryId"],
                    CategoryName = (string)row["categoryName"]
                };

                categories.Add(category);
            }

            return categories;
        }

        public bool NameExists(Category category, string userId)
        {
            IEnumerable<SqlParameter> paramList = new List<SqlParameter>()
            {
                new SqlParameter("categoryName", category.CategoryName),
                new SqlParameter("userId", userId)
            };

            if (category.CategoryId != null)
            {
                paramList.ToList().Add(new SqlParameter("categoryId", category.CategoryId));
            }

            DataTable data = Helper.Execute(CategoryNameExistsSP, paramList);

            if (data.Rows.Count > 0)
            {
                return true;
            }

            return false;
        }

    }
}