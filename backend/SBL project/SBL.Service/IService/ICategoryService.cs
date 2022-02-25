﻿using SBL.Data.Models.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SBL.Service.IService
{
    public interface ICategoryService
    {
        RequestResult<bool> CreateCategory(Category category, int userId);
        IEnumerable<Category> GetCategories(int userId);
    }
}
