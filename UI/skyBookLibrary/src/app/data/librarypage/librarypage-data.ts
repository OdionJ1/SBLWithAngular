export const libraryNavArr: ILibraryNavLink[] = [
    { value: "Books", route: '/library' },
    { value: "Favourite", route: '/library/favourites' },
    { value: "Reading List", route: '/library/readinglist' },
    { value: "Authors", route: '' },
    { value: "Categories", route: '' },
    { value: "Search Google Books", route: ''}
]


export interface ILibraryNavLink {
    value: string
    route: string
}