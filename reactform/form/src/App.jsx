import { useState } from "react";
import LoginForm from "./components/LoginForm";
import MainMenu from "./components/MainMenu";


export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-400 to-purple-500">
      {!user ? <LoginForm onLogin={setUser} /> : <MainMenu user={user} />}
    </div>
  );
}

