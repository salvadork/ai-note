
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"

const firebaseConfig = {
  apiKey:process.env.FIREBASE_API_KEY,
  authDomain: "notebook-ai-5a566.firebaseapp.com",
  projectId: "notebook-ai-5a566",
  storageBucket: "notebook-ai-5a566.appspot.com",
  messagingSenderId: "540877627457",
  appId: "1:540877627457:web:512ba98697c4604225a6c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)


export async function uploadFileToFirebase(image_url:string, name: string) {
  try {
    const response = await fetch(image_url)
    const buffer = await response.arrayBuffer()
    const file_name= name.replace(' ','') + Date.now + '.jpeg'
    const storageRef = ref(storage, file_name)
    await uploadBytes(storageRef, buffer, {
      contentType: 'image/jpeg'
    })
    const firebase_url = await getDownloadURL(storageRef)
    return firebase_url
  } catch (error) {
    console.error(error)
    
  }  
}