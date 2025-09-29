import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Göndərilir...");

    try {
      const res = await axios.post(
        "https://nigar-backend-jyeb4b8bc-neegars-projects.vercel.app/api/contact", // yeni deploy URL
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.data.success) {
        setStatus("Mesaj uğurla göndərildi ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Xəta baş verdi ❌");
      }
    } catch (err) {
      console.error(err);
      setStatus("Serverə qoşulmaq mümkün olmadı ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-purple-300 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Əlaqə Formu</h2>

        <input
          type="text"
          name="name"
          placeholder="Adınız"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Emailiniz"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <textarea
          name="message"
          placeholder="Mesajınız"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          rows="4"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition"
        >
          Göndər
        </button>

        {status && <p className="text-center text-gray-700 mt-2">{status}</p>}
      </form>
    </div>
  );
}
