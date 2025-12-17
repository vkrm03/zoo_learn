import { useState } from "react";
import { motion } from "framer-motion";
import { Scientist } from "@/data/scientistsData";
import { Lightbulb, Quote, RotateCcw } from "lucide-react";

interface ScientistCardProps {
  scientist: Scientist;
}

const ScientistCard = ({ scientist }: ScientistCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="w-full max-w-sm mx-auto perspective-1000 cursor-pointer"
      onClick={handleFlip}
    >
      <motion.div
        className="relative w-full h-[480px] transform-style-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        {/* Front of Card */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full glass-card card-shadow rounded-3xl p-6 flex flex-col items-center justify-center">
            {/* Image */}
            <div className="relative mb-6">
              <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-lg">
                <img
                  src={scientist.image}
                  alt={scientist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full gradient-primary text-primary-foreground text-xs font-medium shadow-md">
                {scientist.domain}
              </div>
            </div>

            {/* Name & Period */}
            <h2 className="font-display text-2xl font-bold text-foreground mb-2 text-center">
              {scientist.name}
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              {scientist.period}
            </p>

            {/* Description Preview */}
            <p className="text-center text-foreground/80 text-sm leading-relaxed line-clamp-3 mb-6">
              {scientist.description}
            </p>

            {/* Flip hint */}
            <div className="flex items-center gap-2 text-primary text-sm font-medium">
              <RotateCcw className="w-4 h-4" />
              <span>Tap to learn more</span>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full glass-card card-shadow rounded-3xl p-6 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border/50">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                <img
                  src={scientist.image}
                  alt={scientist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground">
                  {scientist.name}
                </h3>
                <p className="text-xs text-muted-foreground">{scientist.period}</p>
              </div>
            </div>

            {/* Contributions */}
            <div className="flex-1 overflow-y-auto">
              <div className="mb-4">
                <h4 className="flex items-center gap-2 text-sm font-semibold text-primary mb-3">
                  <Lightbulb className="w-4 h-4" />
                  Key Contributions
                </h4>
                <ul className="space-y-2">
                  {scientist.contributions.map((contribution, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {contribution}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fun Fact */}
              <div className="bg-accent/10 rounded-xl p-4">
                <h4 className="flex items-center gap-2 text-sm font-semibold text-accent-foreground mb-2">
                  <Quote className="w-4 h-4" />
                  Fun Fact
                </h4>
                <p className="text-sm text-foreground/80 italic">
                  {scientist.funFact}
                </p>
              </div>
            </div>

            {/* Flip back hint */}
            <div className="flex items-center justify-center gap-2 text-primary text-sm font-medium mt-4 pt-4 border-t border-border/50">
              <RotateCcw className="w-4 h-4" />
              <span>Tap to flip back</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ScientistCard;
