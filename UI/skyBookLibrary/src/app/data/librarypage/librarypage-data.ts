export const libraryNavArr: ILibraryNavLink[] = [
    { value: "Books", route: '/library' },
    { value: "Favourites", route: '/library/favourites' },
    { value: "Reading List", route: '/library/readinglist' },
    { value: "Authors", route: '/library/authors' },
    { value: "Categories", route: '/library/categories' },
    { value: "Search Google Books", route: '/library/googlebooks'}
]


export interface ILibraryNavLink {
    value: string
    route: string
}