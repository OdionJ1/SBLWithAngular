export const homepageData: IFeature[] = [
    {
        title: 'Collaborate',
        summary: 'SBLibrary is a centralised and personal eBook library to manage ebooks as well as collaborate with other users',
        image: 'assets/images/homepage/collaborate.jpg'
    },
    {
        title: 'Share',
        summary: 'With SBLibrary you can share or recommend a book to friends and also share thought through the app note share on the book',
        image: 'assets/images/homepage/share.jpg'
    },
    {
        title: 'Favorite',
        summary: 'You can easily choose your favorite books and add them to reading list',
        image: 'assets/images/homepage/favorite.jpg'
    },
]




export interface IFeature {
    title: string
    summary: string
    image: string
}


