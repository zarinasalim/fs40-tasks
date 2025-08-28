import { useState } from "react";
import { Plus } from "lucide-react"; // npm install lucide-react

export default function MainMenu({ user }) {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const handleAddPost = () => {
    if (newPost.trim()) {
      setPosts([{ id: Date.now(), text: newPost, author: user }, ...posts]);
      setNewPost("");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Salam, {user}! 👋</h1>
        <button
          onClick={handleAddPost}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition"
        >
          <Plus size={20} /> Post yarat
        </button>
      </header>

      {/* Post yaradış formu */}
      <div className="bg-white p-4 rounded-2xl shadow-md mb-6">
        <textarea
          placeholder="Nə paylaşmaq istəyirsən?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          className="w-full border rounded-lg p-3 mb-3 focus:ring-2 focus:ring-indigo-400 outline-none"
        />
        <button
          onClick={handleAddPost}
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Paylaş
        </button>
      </div>

      {/* Postlar listi */}
      <div className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-gray-500 text-center">Hələ post yoxdur 📭</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-4 rounded-2xl shadow-md text-left"
            >
              <h3 className="font-semibold text-indigo-600">{post.author}</h3>
              <p className="text-gray-700 mt-2">{post.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
