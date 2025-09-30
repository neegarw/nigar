import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TrailCursor() {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const move = (e) => {
      const newTrail = { x: e.clientX, y: e.clientY, id: Date.now() };
      setTrails((prev) => [...prev.slice(-10), newTrail]); 
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {trails.map((trail) => (
        <motion.div
          key={trail.id}
          className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50"
          style={{
            background:
              "linear-gradient(135deg, #a855f7, #06b6d4)",
          }}
          initial={{ x: trail.x - 12, y: trail.y - 12, opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </>
  );
}
