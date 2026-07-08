import { initializeApp } from "firebase/app";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence , getAuth } from 'firebase/auth';





const firebaseConfig = {
  apiKey: "AIzaSyCWDMmyDbfs9dgdcUGpXDF8cZ3SLCXhB84",
  authDomain: "swiftpay-2e35f.firebaseapp.com",
  projectId: "swiftpay-2e35f",
  storageBucket: "swiftpay-2e35f.firebasestorage.app",
  messagingSenderId: "856392917478",
  appId: "1:856392917478:web:346859439f4974c70a3627",
  measurementId: "G-T08H6X02L8"
};




const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);






