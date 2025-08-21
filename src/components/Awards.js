import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate, FaMedal } from 'react-icons/fa';

const Awards = () => {
  const awards = [
    {
      icon: <FaTrophy className="text-yellow-500" size={40} />,
      title: "國家新創獎",
      description: "第18、21屆 AI 類",
      year: "2023-2024"
    },
    {
      icon: <FaCertificate className="text-blue-500" size={40} />,
      title: "SPARK Taiwan",
      description: "資助團隊",
      year: "2023"
    },
    {
      icon: <FaMedal className="text-green-500" size={40} />,
      title: "CCNA 認證",
      description: "思科網路認證",
      year: "2024"
    }
  ];

  return (
    <section id="awards" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">獎項與認證</h2>
          <p className="section-subtitle">專業能力與成就的肯定</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="mb-6 flex justify-center"
              >
                {award.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {award.title}
              </h3>
              <p className="text-gray-600 mb-2">
                {award.description}
              </p>
              <span className="text-sm text-blue-600 font-medium">
                {award.year}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">
              持續學習與成長
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              這些獎項與認證不僅是對我專業能力的肯定，更是激勵我持續在 AI 產品管理領域深耕的動力。我相信透過不斷學習與實踐，能夠為更多企業創造價值。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards; 