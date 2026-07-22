

import React from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-12 sm:py-16 md:py-18 bg-dark-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
          Get In <span className="text-purple-500">Touch</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base text-center max-w-2xl mx-auto mb-8 sm:mb-2">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto items-center">
          <div className="bg-dark-100 border border-gray-800 rounded-xl p-5 sm:p-6 md:p-8">
            <form className="space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm sm:text-base mb-2">Your Name</label>
                <input
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-2.5 sm:py-3 outline-none focus:border-purple-500 transition-colors duration-300"
                  type="text"
                  id="name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm sm:text-base mb-2">Email Address</label>
                <input
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-2.5 sm:py-3 outline-none focus:border-purple-500 transition-colors duration-300"
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm sm:text-base mb-2">Your Message</label>
                <textarea
                  className="w-full h-20 bg-dark-300 border border-dark-400 rounded-lg px-4 py-2.5 sm:py-3 outline-none focus:border-purple-500 transition-colors duration-300"
                  id="message"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-2.5 sm:py-3 bg-purple-600 rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>

          {/* contact information */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 mt-2 lg:mt-0">
            <div className="flex items-center gap-4">
              <div className="text-purple-500 text-xl sm:text-2xl shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base mb-1">Location</h3>
                <p className="text-gray-400 text-sm sm:text-base">Navi Mumbai, Turbhe</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-purple-500 text-xl sm:text-2xl shrink-0">
                <FaEnvelope />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-sm sm:text-base mb-1">Email</h3>
                <p className="text-gray-400 text-sm sm:text-base break-all">ajinkyadoke6@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-purple-500 text-xl sm:text-2xl shrink-0">
                <FaPhoneAlt />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base mb-1">Phone</h3>
                <p className="text-gray-400 text-sm sm:text-base">+91 8169 4373 73</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-sm sm:text-base mb-4">Follow Me</h3>
              <div className="flex gap-5">
                <a
                  href="https://github.com/ajinkyadoke6-byte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-500 text-xl sm:text-2xl transition-colors duration-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/ajinkya-doke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-500 text-xl sm:text-2xl transition-colors duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://twitter.com/your-twitter-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-500 text-xl sm:text-2xl transition-colors duration-300"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact



