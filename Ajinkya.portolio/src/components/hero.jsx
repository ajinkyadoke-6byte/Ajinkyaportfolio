
// import React from 'react'
// import { motion } from 'framer-motion'
// import profile from '../assets/profile.avif'

// const Hero = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       id='home'
//       className='min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] text-white px-6'
//     >
//       <div className='max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12'>

//         {/* Left: text content */}
//         <div className='text-center md:text-left flex-1'>

//           <motion.h1
//             initial={{ opacity: 1, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 100 }}
//             className='text-4xl md:text-6xl font-bold mb-4'
//           >
//             Hi, I'm{' '}
//             <motion.span
//               className='text-purple-500 inline-block'
//               animate={{
//                 textShadow: [
//                   '0 0 10px rgb(147 51 234)',
//                   '0 0 30px rgb(147 51 234)',
//                   '0 0 10px rgb(147 51 234)',
//                   '0 0 0px rgb(147 51 234)',
//                 ],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 repeatDelay: 1,
//                 ease: 'easeInOut',
//               }}
//             >
//               Ajinkya Doke
//             </motion.span>
//           </motion.h1>

//           <motion.h2
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className='text-2xl md:text-4xl font-semibold mb-4'
//           >
//             MERN Stack Developer
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 1 }}
//             className='text-gray-300 mb-8 max-w-md mx-auto md:mx-0'
//           >
//           computer enginerring student specialization in (AI & DS)
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 1.3 }}
//             className='flex justify-center md:justify-start space-x-4'
//           >
//             <motion.a
//               href='#projects'
//               whileHover={{ scale: 1, boxShadow: '0 0 15px rgb(147 51 234)' }}
//               whileTap={{ scale: 0.95 }}
//               className='px-6 py-3 bg-purple-600 rounded-lg font-medium cursor-pointer'
//             >
//               View Work
//             </motion.a>

//             <motion.a
//               href='#contact'
//               whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgb(147 51 234)' }}
//               whileTap={{ scale: 0.95 }}
//               className='px-6 py-3 border border-purple-500 rounded-lg font-medium cursor-pointer'
//             >
//               Contact Me
//             </motion.a>
//           </motion.div>
//         </div>

//         {/* Right: profile image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.7 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 15 }}
//           className='flex-shrink-0'
//         >
//           <motion.div
//             animate={{
//               boxShadow: [
//                 '0 0 20px rgb(147 51 234 / 0.4)',
//                 '0 0 50px rgb(147 51 234 / 0.6)',
//                 '0 0 20px rgb(147 51 234 / 0.4)',
//               ],
//               scale: [1, 1.02, 1],
//             }}
//             transition={{ duration: 2, repeat: Infinity , ease: 'easeInOut' }}
//             className='rounded-full p-1.5 bg-gradient-to-r from-purple to-purple'
//           >
//             <img
//               src={profile}
//               alt='Ajinkya Doke'
//               className='w-700 h-700 md:w-80 md:h-80 rounded-full object-cover object-top border-4 border-[#1a1a1a]'
//             />
//           </motion.div>
//         </motion.div>

//       </div>
//     </motion.div>
//   )
// }

// export default Hero



import React from 'react'
import { motion } from 'framer-motion'
import profile from '../assets/profile.avif'

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='home'
      className='min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] text-white px-4 sm:px-6'
    >
      <div className='max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12'>

        {/* Left: text content */}
        <div className='text-center md:text-left flex-1'>

          <motion.h1
            initial={{ opacity: 1, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 100 }}
            className='text-3xl sm:text-4xl md:text-6xl font-bold mb-4'
          >
            Hi, I'm{' '}
            <motion.span
              className='text-purple-500 inline-block'
              animate={{
                textShadow: [
                  '0 0 10px rgb(147 51 234)',
                  '0 0 30px rgb(147 51 234)',
                  '0 0 10px rgb(147 51 234)',
                  '0 0 0px rgb(147 51 234)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: 'easeInOut',
              }}
            >
              Ajinkya Doke
            </motion.span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='text-xl sm:text-2xl md:text-4xl font-semibold mb-4'
          >
            MERN Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='text-gray-300 text-sm sm:text-base mb-8 max-w-md mx-auto md:mx-0'
          >
          computer enginerring student specialization in (AI & DS)
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className='flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 w-full sm:w-auto'
          >
            <motion.a
              href='#projects'
              whileHover={{ scale: 1, boxShadow: '0 0 15px rgb(147 51 234)' }}
              whileTap={{ scale: 0.95 }}
              className='w-full sm:w-auto px-6 py-3 bg-purple-600 rounded-lg font-medium cursor-pointer text-center'
            >
              View Work
            </motion.a>

            <motion.a
              href='#contact'
              whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgb(147 51 234)' }}
              whileTap={{ scale: 0.95 }}
              className='w-full sm:w-auto px-6 py-3 border border-purple-500 rounded-lg font-medium cursor-pointer text-center'
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>

        {/* Right: profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 15 }}
          className='flex-shrink-0'
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgb(147 51 234 / 0.4)',
                '0 0 50px rgb(147 51 234 / 0.6)',
                '0 0 20px rgb(147 51 234 / 0.4)',
              ],
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 2, repeat: Infinity , ease: 'easeInOut' }}
            className='rounded-full p-1.5 bg-gradient-to-r from-purple to-purple'
          >
            <img
              src={profile}
              alt='Ajinkya Doke'
              className='w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full object-cover object-top border-4 border-[#1a1a1a]'
            />
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  )
}

export default Hero