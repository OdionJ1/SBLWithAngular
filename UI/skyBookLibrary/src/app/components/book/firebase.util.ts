import firebase from 'firebase/compat/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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


export const uploadFileToFirebase = (file: FileList, id: string): boolean => {
    const storageRef = ref(storage, `/${id}/${file[0].name}`)

    uploadBytes(storageRef, file[0]).then(snapshot => {
        console.log(snapshot)
        return true
    }).catch(err => {
        console.log(err)
        return false
    })

    return false
}


export const downloadFileFromFirebase = () => {
    const path: string = "33d3c575-c9c3-4d32-9e88-1673dc94830e/02. The City of Mirrors - Justin Cronin.epub"
    getDownloadURL(ref(storage, path)).then(url => {
        console.log(url)
    })
}





//33d3c575-c9c3-4d32-9e88-1673dc94830e/Database Design - 2nd Project (1).pdf"