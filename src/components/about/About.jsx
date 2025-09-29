import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import k1 from "../../assets/imgs/k1.jpeg";
import k2 from "../../assets/imgs/k2.jpeg";
import k3 from "../../assets/imgs/k3.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutSection from "./AboutSection";
import SkipButton from "../buttons/SkipButton";

const projects = [
    { id: 1, name: "kedi", img: k1, desc: "A101 React project demo." },
    { id: 2, name: "kedi", img: k2, desc: "Apple demo site in React." },
    { id: 3, name: "kedi", img: k3, desc: "Bayfilm project demo." },
];

export default function About() {
    const [cards, setCards] = useState(
        [...projects, ...projects]
            .sort(() => Math.random() - 0.5)
            .map((card, index) => ({ ...card, key: index, flipped: false, matched: false }))
    );

    const [selected, setSelected] = useState([]);
    const [matchedCount, setMatchedCount] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);
    const [showBlog, setShowBlog] = useState(false);
    const [pieces, setPieces] = useState(0); // konfeti sayı
    const [fromGame, setFromGame] = useState(false); // 👉 fərqləndirmək üçün



    const handleClick = (index) => {
        if (cards[index].flipped || cards[index].matched || selected.length === 2) return;

        const newCards = [...cards];
        newCards[index].flipped = true;
        const newSelected = [...selected, index];
        setCards(newCards);
        setSelected(newSelected);

        if (newSelected.length === 2) {
            const first = newCards[newSelected[0]];
            const second = newCards[newSelected[1]];

            if (first.id === second.id) {
                newCards[newSelected[0]].matched = true;
                newCards[newSelected[1]].matched = true;
                setTimeout(() => {
                    setMatchedCount((prev) => prev + 1);
                    setSelected([]);
                }, 500);
            } else {
                setTimeout(() => {
                    newCards[newSelected[0]].flipped = false;
                    newCards[newSelected[1]].flipped = false;
                    setCards([...newCards]);
                    setSelected([]);
                }, 800);
            }
        }
    };

    // MatchedCount dəyişəndə yoxlama və 3 saniyə sonra konfetti + blog
    useEffect(() => {
        if (matchedCount === projects.length) {
            setShowConfetti(true);
            const timer = setTimeout(() => {
                setShowConfetti(false);
                setCards([]); // oyun kartlarını silirik
                setShowBlog(true); // blog göstəririk
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [matchedCount]);

    useEffect(() => {
        AOS.init({ duration: 1500, once: true });
    }, []);


    // MatchedCount dəyişəndə konfeti idarəsi
    useEffect(() => {
        if (matchedCount === projects.length) {
            setShowConfetti(true);
            setFromGame(true); // 👉 oyunla gəldiyini yadda saxla
            setPieces(700); // əvvəlcə çox konfeti atsın

            // 3 saniyə sonra yeni konfeti gəlməsin (axırıncı tökülsün)
            const stop = setTimeout(() => {
                setPieces(0);
            }, 2000);

            // 6 saniyə sonra oyunu bağla və blogu göstər
            const end = setTimeout(() => {
                setShowConfetti(false);
                setCards([]);
                setShowBlog(true);
            }, 4000);

            return () => {
                clearTimeout(stop);
                clearTimeout(end);
            };
        }
    }, [matchedCount]);


    return (
        <div
            className="min-h-screen flex flex-col items-center bg-[#FEF8B3] py-10 relative px-4 md:px-0 selection:text-[#FEF8B3] selection:bg-white">
            {showConfetti && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    numberOfPieces={pieces}
                    gravity={0.3}
                    wind={0}
                    colors={['#FFC700', '#FF0000', '#00FF00', '#00BFFF', '#FF69B4']}
                />
            )}
            {
                !showBlog && (
                    <>
                        <h2
                            data-aos="flip-down"
                            className="text-[40px] md:text-[50px] lg:text-[60px] text-center px-4 font-bold md:mb-6 text-[#404040] "
                        >
                            Memory Game
                        </h2>

                        <p className="mb-4 text-center text-gray-700">
                            Play the memory game to unlock my About section 🎮
                            or skip directly if you prefer ⏩
                        </p>

                        <div className="flex justify-center gap-4 mb-6">
                            <div
                                onClick={() => setShowBlog(true)}
                            >
                                <SkipButton />
                            </div>

                        </div>

                        <div
                            data-aos="flip-down"
                            className="grid grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-0 pb-[50px]"
                        >
                            {cards.map((card, index) => (
                                <div
                                    key={card.key}
                                    className="w-34 md:w-38 md:h-48 h-38 perspective cursor-pointer"
                                    onClick={() => handleClick(index)}
                                >
                                    <motion.div
                                        style={{ transformStyle: "preserve-3d" }}
                                        animate={{ rotateY: card.flipped ? 180 : 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative w-full h-full"
                                    >
                                        <div
                                            style={{ backfaceVisibility: "hidden" }}
                                            className="absolute w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-xl font-bold"
                                        >
                                            ?
                                        </div>
                                        <div
                                            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                                            className="absolute w-full md:h-full bg-white rounded-lg flex flex-col items-center justify-center p-2"
                                        >
                                            <img src={card.img} alt={card.name} className="w-full h-full object-cover mb-2" />
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </>
                )
            }
            {showBlog && (
                <div>
                    <h3
                        onMouseEnter={() => setShowFlowers(true)}
                        onMouseLeave={() => setShowFlowers(false)}
                        data-aos="fade-right" 
                        className="text-[40px] md:text-[50px] lg:text-[60px] text-center px-4 text-pink-600">About 🌸</h3>

                    {fromGame && (
                        <p className="font-semibold text-pink-700 text-center">
                            🎉 Congratulations! You unlocked my About section by completing the game!
                        </p>
                    )}
                    <AboutSection />
                </div>

            )}
        </div>
    );
}


