import { useState } from "react";
import axios from "axios";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://portfolio-backend-topaz-nine.vercel.app/api/send", formData);
            alert(res.data.message);
        } catch (err) {
            alert("Xəta oldu: " + err.message);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-1/2 mx-auto p-5">
            <input type="text" name="name" placeholder="Adınız" onChange={handleChange} className="border p-2" />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} className="border p-2" />
            <textarea name="message" placeholder="Mesaj" onChange={handleChange} className="border p-2" />
            <button type="submit" className="bg-blue-500 text-white p-2">Göndər</button>
        </form>
    );
}
