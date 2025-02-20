"use client";
import { motion } from "framer-motion";
import { Trophy, Users, Star, Award, Code, Monitor, Paintbrush } from "lucide-react";
import CountUp from 'react-countup';

const achievements = [
  {
    metric: "3",
    title: "Years Experience",
    icon: <Code className="w-6 h-6" />,
    postfix: "+",
  },
  {
    metric: "13",
    title: "Projects Completed",
    icon: <Star className="w-6 h-6" />,
    postfix: "+",
  },
  {
    metric: "10",
    title: "Websites Launched",
    icon: <Monitor className="w-6 h-6" />,
    postfix: "+",
  },
  {
    metric: "100",
    title: "Designs Created",
    icon: <Paintbrush className="w-6 h-6" />,
    postfix: "+",
  },
  {
    metric: "15",
    title: "Happy Clients",
    icon: <Users className="w-6 h-6" />,
    postfix: "+",
  },
  {
    metric: "1",
    title: "Certificates Earned",
    icon: <Award className="w-6 h-6" />,
    postfix: "",
  }
];

const AnimatedNumber = ({ number }: { number: number }) => {
  return <CountUp end={number} duration={2} />;
};

export default function AchievementsSection() {
  return (
    <section className="py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1c1c1c] p-6 rounded-lg border border-[#333333] text-center"
          >
            <div className="flex justify-center text-whatsapp-green mb-4">
              {achievement.icon}
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">
              <AnimatedNumber number={parseInt(achievement.metric)} />
              {achievement.postfix || ""}
            </h3>
            <p className="text-gray-400">{achievement.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
