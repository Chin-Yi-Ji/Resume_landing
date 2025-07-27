import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      icon: "🔧",
      title: "技術能力",
      skills: [
        "Python、TensorFlow、NLP、Computer Vision",
        "醫療 AI 模組開發與 TFDA、QMS 認證經驗"
      ]
    },
    {
      icon: "🧭",
      title: "管理與跨部門合作",
      skills: [
        "AI 產品管理、Jira 專案管理、跨部門溝通（研發、臨床、行銷）",
        "產品從 0 到 1 的設計與推進經驗"
      ]
    },
    {
      icon: "📈",
      title: "商業與市場",
      skills: [
        "市場調查與產品定位",
        "成功募資與品牌行銷（B2B、KOL 合作）"
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">我的專業能力</h2>
          <p className="section-subtitle">跨領域技能組合，打造全方位產品思維</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">
              核心優勢
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              結合技術深度與商業洞察，能夠在 AI 產品開發過程中，有效平衡技術可行性、使用者需求與商業價值，成為技術團隊與業務團隊之間的關鍵橋梁。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 