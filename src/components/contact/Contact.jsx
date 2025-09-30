import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ThemeContext } from "../../context/ThemeContext";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const [showToast, setShowToast] = useState(false);

    const { theme } = useContext(ThemeContext);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.message.trim()) {
            showMessage("Message cannot be empty ❌");
            return;
        }
        showMessage("Sending...");
        try {
            const res = await axios.post(
                "https://nigar-backend.vercel.app/api/contact",
                formData,
                { headers: { "Content-Type": "application/json" } }
            );
            if (res.data.success) {
                showMessage("Message sent successfully ✅");
                setFormData({ name: "", email: "", message: "" });
            } else {
                showMessage("Something went wrong ❌");
            }
        } catch (err) {
            console.error(err);
            showMessage("Failed to connect to server ❌");
        }
    };

    const showMessage = (msg) => {
        setStatus(msg);
        setShowToast(true);
    };

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => setShowToast(false), 4000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    return (
        <div
            id="contact"
            className={`flex items-center justify-center md:py-30 py-10 px-4 md:px-0 relative transition-colors duration-500 
                ${theme === "dark"
                    ? "bg-[#7F1E30] text-white"
                    : "bg-gradient-to-br from-pink-200 to-purple-300 text-gray-900"
                }`}
        >
            {/* Toast popup */}
            {showToast && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 py-6"
                    onClick={() => setShowToast(false)}
                >
                    <div
                        className={`px-8 py-4 rounded-2xl shadow-2xl text-white text-lg font-semibold transition-all duration-300 transform 
                            ${status.includes("successfully")
                                ? "bg-gradient-to-r from-green-400 to-green-600"
                                : status.includes("Sending")
                                    ? "bg-[#9152FF]"
                                    : "bg-[#FA98AC]"
                            } animate-fade-in`}
                    >
                        {status}
                    </div>
                </div>
            )}

            <form
                onSubmit={handleSubmit}
                className={`w-full max-w-md backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-6 transition-colors duration-500 
                    ${theme === "dark" ? "bg-white/10 text-white" : "bg-white/30 text-gray-800"}`}
            >
                <h2 className="text-3xl font-bold text-center">Contact Form</h2>

                {["name", "email", "message"].map((field) => (
                    <div key={field} className="relative z-0 w-full group">
                        {field !== "message" ? (
                            <input
                                type={field === "email" ? "email" : "text"}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                placeholder=" "
                                className="block w-full px-2 py-2.5 bg-transparent border-0 border-b-2 
                                    border-gray-300 focus:outline-none focus:border-pink-500 peer transition-colors duration-300"
                            />
                        ) : (
                            <textarea
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                placeholder=" "
                                rows={4}
                                className="block w-full px-2 py-2.5 bg-transparent border-0 border-b-2 
                                    border-gray-300 focus:outline-none focus:border-pink-500 peer resize-none transition-colors duration-300"
                            />
                        )}
                        <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            {field === "name" ? "Your Name" : field === "email" ? "Your Email" : "Your Message"}
                        </label>
                    </div>
                ))}

                <button type="submit" className="group text-[20px] flex items-center justify-center w-full group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 border text-left p-3 text-gray-50 font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
                    Send
                </button>
            </form>
        </div>
    );
}
