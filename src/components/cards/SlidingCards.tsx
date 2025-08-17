import { useRef, type Key } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { TeamCard } from "./TeamCard";

interface HorizontalCardScrollerProps {
    team: any[];
}

export const CardCarousel = ({ team }: HorizontalCardScrollerProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollOneCard = (dir: "left" | "right") => {
        const container = scrollRef.current;
        if (!container) return;
        const cardWidth = container.offsetWidth / 3; // 3 cards in view
        container.scrollBy({
            left: dir === "right" ? cardWidth : -cardWidth,
            behavior: "smooth"
        });
    };

    return (
        <div className="relative w-full overflow-hidden mx-auto col-span-full h-fit">
            {/* Left Button */}
            <button
                onClick={() => scrollOneCard("left")}
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 p-2 bg-white rounded-full shadow"
            >
                <MdArrowBackIos className="md:w-8 md:h-8 text-[#194062]" />
            </button>

            {/* Right Button */}
            <button
                onClick={() => scrollOneCard("right")}
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 p-2 bg-white rounded-full shadow"
            >
                <MdArrowForwardIos className="md:w-8 md:h-8 text-[#194062]" />
            </button>

            {/* Scrollable container */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto w-full overflow-hidden py-6 sm:max-w-[80%] scrollbar-none no-scrollbar mx-auto scroll-smooth snap-x snap-mandatory gap-x-6 px-4"
            >
                {team?.map((member, i:Key) => (
                    <div
                        key={i}
                        className="w-full sm:w-1/2 md:w-1/3 h-fit  flex-shrink-0 snap-start"
                    >
                        <TeamCard member={member} show={false} />
                    </div>
                ))}
            </div>
        </div>
    );
};
