import { useState } from "react";
import { motion } from "framer-motion";
import { topicsData } from "@/data/scientistsData";
import TopicTabs from "@/components/TopicTabs";
import ScientistSwiper from "@/components/ScientistSwiper";
import { BookOpen, Sparkles } from "lucide-react";

const Index = () => {
  const [activeTopic, setActiveTopic] = useState(topicsData[0].id);

  const currentTopic = topicsData.find((topic) => topic.id === activeTopic)!;

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          
        </motion.header>

        {/* Topic Tabs */}
        <TopicTabs
          topics={topicsData}
          activeTopic={activeTopic}
          onTopicChange={setActiveTopic}
        />

        {/* Scientist Cards Swiper */}
        <motion.div
          key={activeTopic}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <ScientistSwiper
            scientists={currentTopic.scientists}
            topicName={currentTopic.name}
          />
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12 pt-8 border-t border-border/50"
        >
          
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;
