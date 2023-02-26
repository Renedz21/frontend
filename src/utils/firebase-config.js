import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { v4 } from 'uuid';
import * as dotenv from 'dotenv';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile(file) {
    const storageRef = ref(storage, v4());
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
}