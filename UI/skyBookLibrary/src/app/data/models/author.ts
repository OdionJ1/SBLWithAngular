
export class Author implements IAuthor {
    public authorId?: number
    public authorName: string;


    static create(author: IAuthor) {
        if(!author) return author
        let a = new Author()
        a.authorId = author.authorId
        a.authorName = author.authorName
        return a
    }
}



export interface IAuthor {
    authorId?: number
    authorName: string
}