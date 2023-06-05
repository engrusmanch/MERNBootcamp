// firebase_service.js
import { initializeApp ,_apps} from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithPhoneNumber as signInWithPhone,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC50CRKhdavNUpN4OkH2dLrtzzqExOkK8Q",
    authDomain: "e-messaging.firebaseapp.com",
    databaseURL: "https://e-messaging-default-rtdb.firebaseio.com",
    projectId: "e-messaging",
    storageBucket: "e-messaging.appspot.com",
    messagingSenderId: "794682591395",
    appId: "1:794682591395:web:c28e5c14db8471003c9716"
  };
  // Initialize Firebase
  let app;
  if(!_apps.length){
 app = initializeApp(firebaseConfig);

  }
  const auth = getAuth(app);
  const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Sign in with Google
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Sign in with email and password
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Register with email and password
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Send password reset email
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Sign out
const logout = () => {
  signOut(auth);
};

// Sign in with phone number
const signInWithPhoneNumber = async (phoneNumber, recaptchaVerifier) => {
  try {
    const confirmationResult = await signInWithPhone(
      auth,
      phoneNumber,
      recaptchaVerifier
    );
    // Do something with the confirmation result if needed
    // For example, you can store the confirmationResult.verificationId for later use
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  signInWithPhoneNumber,
};
