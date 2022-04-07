import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0o-OgxOd4YFgT18L0WfILDQAuNaacHNs",
  authDomain: "chat-fb14c.firebaseapp.com",
  databaseURL: "https://chat-fb14c-default-rtdb.firebaseio.com",
  projectId: "chat-fb14c",
  storageBucket: "chat-fb14c.appspot.com",
  messagingSenderId: "532362379527",
  appId: "1:532362379527:web:542d9fa2fbbf14e1e0c5a2",
  measurementId: "G-S3VBS834WF"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();

export { db, auth };
