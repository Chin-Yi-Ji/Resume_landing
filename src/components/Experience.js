import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      icon: "🧠",
      title: "醫療 AI 工程師",
      company: "長庚醫療科技",
      achievements: [
        "領導 2 項 AI 醫療軟體產品，取得 QMS 認證並送件 TFDA",
        "NLP 工具每日每人省 1 小時工作時間",
        "專案入選 SPARK Taiwan，獲資助 50,000 美元",
        "國家新創獎 AI 類三項大獎（第18屆）"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "🌿",
      title: "創辦人",
      company: "InMountain 保健食品",
      achievements: [
        "開發登山能量果凍產品，成功募資 7,000 美元",
        "進駐全台登山店通路，與 T1 職籃合作"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: "🌐",
      title: "工程師",
      company: "Moxa",
      achievements: [
        "支援超過 200+ 歐洲客戶解決網路技術問題",
        "建立跨部門問題解決流程並進行內部訓練"
      ],
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="experience" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">精選經歷</h2>
          <p className="section-subtitle">從技術實作到產品創業的多元經驗</p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-12 bg-gray-300 transform -translate-x-1/2"></div>
              )}
              
              <div className="flex items-start space-x-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center text-white text-2xl font-bold flex-shrink-0`}
                >
                  {exp.icon}
                </motion.div>
                
                <div className="flex-1 bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-blue-600 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <motion.li
                        key={achievementIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">
              經驗總結
            </h3>
            <p className="text-lg opacity-90 max-w-4xl mx-auto">
              從醫療 AI 技術開發到消費品創業，我累積了完整的產品生命週期經驗。無論是技術導向的醫療軟體，還是市場導向的消費產品，我都能夠運用系統性思維，將複雜的技術轉化為使用者價值，並建立可持續的商業模式。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 