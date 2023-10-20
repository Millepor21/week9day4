import { Route, Routes } from "react-router-dom";
import Account from "./components/Account";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Subscription Tracker with FirebaseAuth/TailwindCSS/React/Firestore
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
