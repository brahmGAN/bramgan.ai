import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { Database, ref } from "firebase/database";
  
    const firebaseConfig = {
        apiKey: "AIzaSyCfSlEt6aagNBepS-1tPsd_xUWL5iQFiPw",
        authDomain: "brahmgan-7d2dd.firebaseapp.com",
        databaseURL: "https://brahmgan-7d2dd-default-rtdb.firebaseio.com",
        projectId: "brahmgan-7d2dd",
        storageBucket: "brahmgan-7d2dd.appspot.com",
        messagingSenderId: "492014097456",
        appId: "1:492014097456:web:765c00dd671d7c869889f5",
        measurementId: "G-QZRGQ65V81"
};
    

const firebaseApp = initializeApp(firebaseConfig);
const database = getFirestore(firebaseApp);

  
export default database;