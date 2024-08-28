import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcXIokK8heXPvpVs0msz5E_WUZmvARkBU",
  authDomain: "negara-konoha.firebaseapp.com",
  projectId: "negara-konoha",
  storageBucket: "negara-konoha.appspot.com",
  messagingSenderId: "787704848050",
  appId: "1:787704848050:web:52777dac997a17fe8eb3ab",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
