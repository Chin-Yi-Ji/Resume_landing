import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">關於我</h2>
          <p className="section-subtitle">跨域人才的獨特視角</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              我是 Allen，一位心理學背景出身、橫跨 AI 技術與產品創業的跨域人才。過去曾任 AI 工程師，負責醫療影像與 NLP 模組開發，並帶領產品從 0 到 TFDA 認證上線。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              我也曾創辦戶外營養補給品牌，完成從市場調查、產品設計到實體通路與職業運動合作。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              我相信好的 AI 產品應該結合技術深度與使用者洞察，我能在產品開發、商業策略與技術溝通之間，成為高效的橋梁。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">產品思維</h3>
                  <p className="text-gray-600">從使用者需求出發，打造有價值的解決方案</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">技術深度</h3>
                  <p className="text-gray-600">AI 技術實作經驗，理解技術可行性與限制</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">創業精神</h3>
                  <p className="text-gray-600">從 0 到 1 的產品開發與商業化經驗</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 