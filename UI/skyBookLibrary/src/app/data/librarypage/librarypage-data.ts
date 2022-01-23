export const libraryNavArr: ILibraryNavLink[] = [
    { value: "Books", route: ['/library'] },
    { value: "Favourite", route: [] },
    { value: "Reading List", route: [] },
    { value: "Authors", route: [] },
    { value: "Categories", route: [] },
    { value: "Search Google Books", route: [] }
]


export interface ILibraryNavLink {
    value: string
    route: string[]
}