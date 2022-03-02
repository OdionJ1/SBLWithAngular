
export class Category implements ICategory {
    public categoryId?: number
    public categoryName: string;

    static create(category: ICategory){
        if(!category) return category
        let c = new Category()
        c.categoryId = category.categoryId
        c.categoryName = category.categoryName
        return c
    }
    
}



export interface ICategory {
    categoryId?: number,
    categoryName: string
}