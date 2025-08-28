import { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && password.trim()) {
      onLogin(name);
    } else {
      alert("Xanaları doldurun!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-2xl w-96 text-center"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Daxil ol</h2>

      <input
        type="text"
        placeholder="İstifadəçi adı"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 w-full p-3 mb-4 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
      />

      <input
        type="password"
        placeholder="Şifrə"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 w-full p-3 mb-6 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
      />

      <button
        type="submit"
        className="bg-indigo-500 text-white w-full py-3 rounded-xl hover:bg-indigo-600 transition font-semibold"
      >
        Giriş
      </button>
    </form>
  );
}
