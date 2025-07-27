import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope size={24} />,
      label: "Email",
      value: "allen82218@gmail.com",
      link: "mailto:allen82218@gmail.com",
      color: "text-red-500"
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      label: "Location",
      value: "台灣桃園",
      color: "text-green-500"
    },
    {
      icon: <FaPhone size={24} />,
      label: "Phone",
      value: "+886-938-805-235",
      link: "tel:+886938805235",
      color: "text-blue-500"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin size={24} />,
      label: "LinkedIn",
      link: "https://linkedin.com",
      color: "text-blue-600"
    },
    {
      icon: <FaGithub size={24} />,
      label: "GitHub",
      link: "https://github.com",
      color: "text-gray-800"
    }
  ];

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">聯絡方式</h2>
          <p className="section-subtitle">歡迎對 AI 產品感興趣的科技／新創公司聯繫我</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                聯絡資訊
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className={`${info.color} flex-shrink-0`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-lg text-gray-800 hover:text-blue-600 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg text-gray-800">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                社群媒體
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${social.color} hover:opacity-80 transition-opacity duration-200`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              合作機會
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  AI 產品策略規劃與執行
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  技術團隊與業務團隊的橋梁角色
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  產品從 0 到 1 的開發與商業化
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  醫療 AI 與消費品產品管理經驗
                </p>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 w-full btn btn-primary"
              onClick={() => window.open('mailto:allen82218@gmail.com', '_blank')}
            >
              立即聯絡
            </motion.button>
          </motion.div>
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
              期待與您合作
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              如果您正在尋找能夠結合技術深度與商業洞察的 AI 產品經理，我期待與您討論如何為您的團隊和產品帶來價值。讓我們一起打造下一個成功的 AI 產品！
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 