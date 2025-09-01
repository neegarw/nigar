import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Sticker() {
    return (
        <div className="p-4">
            <DotLottieReact
                className="z-50 w-[700px] absolute lg:left-[-50px] md:left-[-100px]" 
                src="/src/assets/sticker/devgirl.json"
                autoplay
                loop
            />
        </div>
    );
}

export default Sticker;
