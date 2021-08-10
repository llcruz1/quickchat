// firebase imports
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import { useAuthState } from "react-firebase-hooks/auth";

// components
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import ChatRoom from "./components/ChatRoom";

// styles
import "./App.css";

firebase.initializeApp({
  // your firebase web app configuration
  apiKey: "AIzaSyCTE-bhyOS5kSq-AXoxGu72PMVjQH26PCs",
  authDomain: "quickchat-c7992.firebaseapp.com",
  projectId: "quickchat-c7992",
  storageBucket: "quickchat-c7992.appspot.com",
  messagingSenderId: "930690179608",
  appId: "1:930690179608:web:8e9fd39858748b18db996d",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1> Quickchat 💬</h1>
        <SignOut auth={auth} />
      </header>

      <section>
        {user ? (
          <ChatRoom auth={auth} firestore={firestore} />
        ) : (
          <SignIn auth={auth} />
        )}
      </section>
    </div>
  );
}

export default App;
