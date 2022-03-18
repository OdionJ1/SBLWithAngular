import firebase from 'firebase/compat/app';
import { getStorage, ref, uploadBytes, getDownloadURL, UploadResult, deleteObject } from 'firebase/storage';
import { Book } from 'src/app/data/models/book';

const config = {
    apiKey: "AIzaSyAQJCIB12p0T98aQOYobRRnck-g6xh2blk",
    authDomain: "sblibrary-d9499.firebaseapp.com",
    projectId: "sblibrary-d9499",
    storageBucket: "sblibrary-d9499.appspot.com",
    messagingSenderId: "620350463411",
    appId: "1:620350463411:web:87b6b5b4f5d50715da7fc6",
    measurementId: "G-46EZJC8F9X"
}

const firebaseApp = firebase.initializeApp(config)
const storage = getStorage(firebaseApp)


export const uploadFileToFirebase = async (file: FileList, userId: string, bookId: number): Promise<string> => {
    const storageRef = ref(storage, `/${userId}/${bookId}/${file[0].name}`)
    let fileUrl: string = await uploadBytes(storageRef, file[0]).then((snapshot: UploadResult) => {
        return snapshot.ref.fullPath
    })

    return fileUrl
}


export const downloadFileFromFirebase = async (path: string) => {
    // const path: string = "33d3c575-c9c3-4d32-9e88-1673dc94830e/Odion Asuelimen.pdf"

    const url: string = await getDownloadURL(ref(storage, path)).then(url => {
        return url
    })

    return url
}

export const deleteFileFromFireBase = async (path: string): Promise<void> => {
    await deleteObject(ref(storage, path))
}