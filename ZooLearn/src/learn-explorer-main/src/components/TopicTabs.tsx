import { motion } from "framer-motion";
import { Topic } from "@/data/scientistsData";

interface TopicTabsProps {
  topics: Topic[];
  activeTopic: string;
  onTopicChange: (topicId: string) => void;
}

const TopicTabs = ({ topics, activeTopic, onTopicChange }: TopicTabsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {topics.map((topic, index) => (
        <motion.button
          key={topic.id}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          onClick={() => onTopicChange(topic.id)}
          className={`
            relative px-5 py-3 rounded-xl font-medium text-sm
            transition-all duration-300 ease-out
            ${activeTopic === topic.id
              ? "glass-card card-shadow-hover text-primary"
              : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
            }
          `}
        >
          {activeTopic === topic.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 rounded-xl gradient-primary opacity-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-2">
            <span className="text-lg">{topic.icon}</span>
            <span className="hidden sm:inline">{topic.name}</span>
          </span>
        </motion.button>
      ))}
    </div>
  );
};

export default TopicTabs;
