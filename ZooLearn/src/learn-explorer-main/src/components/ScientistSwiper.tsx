import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Scientist } from "@/data/scientistsData";
import ScientistCard from "./ScientistCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ScientistSwiperProps {
  scientists: Scientist[];
  topicName: string;
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
};

const ScientistSwiper = ({ scientists, topicName }: ScientistSwiperProps) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const scientistIndex = ((page % scientists.length) + scientists.length) % scientists.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Topic Header */}
      <motion.h2
        key={topicName}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-xl font-bold text-center text-foreground mb-6"
      >
        {topicName}
      </motion.h2>

      {/* Swiper Container */}
      <div className="relative h-[520px] flex items-center justify-center">
        {/* Navigation Arrows */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-0 z-10 w-10 h-10 flex items-center justify-center rounded-full glass-card card-shadow text-foreground hover:text-primary transition-colors"
          aria-label="Previous scientist"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => paginate(1)}
          className="absolute right-0 z-10 w-10 h-10 flex items-center justify-center rounded-full glass-card card-shadow text-foreground hover:text-primary transition-colors"
          aria-label="Next scientist"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Card Container */}
        <div className="w-full overflow-hidden px-12">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={handleDragEnd}
              className="cursor-grab active:cursor-grabbing"
            >
              <ScientistCard scientist={scientists[scientistIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {scientists.map((_, index) => (
          <button
            key={index}
            onClick={() => setPage([index, index > scientistIndex ? 1 : -1])}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${index === scientistIndex
                ? "w-6 bg-primary"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }
            `}
            aria-label={`Go to scientist ${index + 1}`}
          />
        ))}
      </div>

      {/* Swipe Hint */}
      <p className="text-center text-muted-foreground text-sm mt-4">
        ← Swipe or drag to explore →
      </p>
    </div>
  );
};

export default ScientistSwiper;
