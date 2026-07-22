
// import React from 'react'
// import { motion } from 'framer-motion'
// import { Lightbulb, Palette, Code2 } from 'lucide-react'
// import profile from '../assets/profile1.avif'
 
// const cardData = [
//   {
//     icon: Lightbulb,
//     title: 'Innovative',
//     description:
//       'I love creating unique solutions to complex problems with cutting-edge technologies.',
//   },
//   {
//     icon: Palette,
//     title: 'Design Oriented',
//     description:
//       'Beautiful design and user experience are at the heart of everything I create.',
//   },
 
// ]
 
// const About = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//       viewport={{ once: true }}
//       id='about'
//       className='py-18 bg-dark-200'
//     >
//       <div className='container mx-auto px-1'>
//         {/*Heading*/}
//         <h2 className='text-3xl font-bold text-center mb-4'> About
//           <span className='text-purple'>Me</span>
//         </h2>
//         <p className='text-gray-400 text-center max-w-2xl mx-auto mb-4 '>Get to know more about my background and passion</p>
 
 
//         {/*image + my journey */}
//         <div className='flex flex-col md:flex-row items-start gap-23'>
//           {/*image*/}
//           <div className='w-full max-w-xs mx-auto md:mx-0 rounded-2xl overflow-hidden'>
//             <motion.img
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.9, ease: 'easeOut ' }}
//               viewport={{ once: false, amount: 0.2 }}
//               className='w-full h-auto object-cover '
//               src={profile} alt="Ajinkya Doke"></motion.img>
//           </div>
//           {/*Text  content*/}
//           <motion.div initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, ease: 'easeOut ' }}
//             viewport={{ once: false, amount: 0.2 }}
//             className='flex-1 self-start'>
//             <div className='rounded-2xl p-0.2'>
//               <h3 className='text-2xl font-semibold mb-1'>My Journey</h3>
//               <p className='text-gray-400 leading-relaxed self-start'>I'm a passionate MERN-stack developer. My journey started with basic HTML/CSS websites and has evolved into building complex web applications with modern frameworks.</p>
 
//               <p className='text-gray-400 leading-relaxed mt-6'>When I'm not coding .you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and tutorials. I believe in continous learning and pushing the boundaries of what's possible on the web </p>
 
//               {/*cards: first 2 in a row, 3rd centered below */}
//               <div className='flex flex-col items-center gap-2 mt-10'>
//                 <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full'>
//                   {cardData.slice(0, 2).map((card, index) => {
//                     const Icon = card.icon
//                     return (
//                       <motion.div
//                         key={card.title}
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         whileHover={{ y: -10 }}
//                         transition={{
//                           duration: 0.6,
//                           delay: index * 0.2,
//                           ease: 'easeOut',
//                         }}
//                         viewport={{ once: false, amount: 0.2 }}
//                         className='bg-dark-300 rounded-xl p-2.5 cursor-pointer'
//                       >
//                         <Icon className='text-purple mb-3' size={24} />
//                         <h4 className='text-base font-semibold mb-1'>{card.title}</h4>
//                         <p className='text-gray-400 text-sm leading-relaxed'>
//                           {card.description}
//                         </p>
//                       </motion.div>
//                     )
//                   })}
//                 </div>
 
//                 <div className='w-full sm:w-1/2'>
//                   {cardData.slice(2, 3).map((card) => {
//                     const Icon = card.icon
//                     return (
//                       <motion.div
//                         key={card.title}
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         whileHover={{ y: -10 }}
//                         transition={{
//                           duration: 0.6,
//                           delay: 0.4,
//                           ease: 'easeOut',
//                         }}
//                         viewport={{ once: false, amount: 0.2 }}
//                         className='bg-dark-300 rounded-xl p-2 cursor-pointer'
//                       >
//                         <Icon className='text-purple mb-2' size={24} />
//                         <h4 className='text-base font-semibold mb-1'>{card.title}</h4>
//                         <p className='text-gray-400 text-sm leading-relaxed'>
//                           {card.description}
//                         </p>
//                       </motion.div>
//                     )
//                   })}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }
 
// export default About





import React from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Palette, Code2 } from 'lucide-react'
import profile from '../assets/profile1.avif'

const cardData = [
  {
    icon: Lightbulb,
    title: 'Innovative',
    description:
      'I love creating unique solutions to complex problems with cutting-edge technologies.',
  },
  {
    icon: Palette,
    title: 'Design Oriented',
    description:
      'Beautiful design and user experience are at the heart of everything I create.',
  },
]

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='about'
      className='py-12 sm:py-16 md:py-18 bg-dark-200'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/*Heading*/}
        <h2 className='text-2xl sm:text-3xl font-bold text-center mb-4'>
          About <span className='text-purple'>Me</span>
        </h2>
        <p className='text-gray-400 text-sm sm:text-base text-center max-w-2xl mx-auto mb-8 sm:mb-4'>
          Get to know more about my background and passion
        </p>

        {/*image + my journey */}
        <div className='flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-20'>
          {/*image*/}
          <div className='w-full max-w-[220px] sm:max-w-xs mx-auto md:mx-0 rounded-2xl overflow-hidden flex-shrink-0'>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut ' }}
              viewport={{ once: false, amount: 0.2 }}
              className='w-full h-auto object-cover'
              src={profile}
              alt='Ajinkya Doke'
            ></motion.img>
          </div>
          {/*Text content*/}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut ' }}
            viewport={{ once: false, amount: 0.2 }}
            className='flex-1 w-full self-start'
          >
            <div className='rounded-2xl p-1 sm:p-0.2'>
              <h3 className='text-xl sm:text-2xl font-semibold mb-1 text-center md:text-left'>
                My Journey
              </h3>
              <p className='text-gray-400 text-sm sm:text-base leading-relaxed text-center md:text-left'>
                I'm a passionate MERN-stack developer. My journey started with basic HTML/CSS websites and has evolved into building complex web applications with modern frameworks.
              </p>

              <p className='text-gray-400 text-sm sm:text-base leading-relaxed mt-4 sm:mt-6 text-center md:text-left'>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and tutorials. I believe in continuous learning and pushing the boundaries of what's possible on the web.
              </p>

              {/*cards: first 2 in a row, 3rd centered below */}
              <div className='flex flex-col items-center gap-3 sm:gap-4 mt-8 sm:mt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full'>
                  {cardData.slice(0, 2).map((card, index) => {
                    const Icon = card.icon
                    return (
                      <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -10 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.2,
                          ease: 'easeOut',
                        }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='bg-dark-300 rounded-xl p-3 sm:p-2.5 cursor-pointer'
                      >
                        <Icon className='text-purple mb-3' size={22} />
                        <h4 className='text-sm sm:text-base font-semibold mb-1'>
                          {card.title}
                        </h4>
                        <p className='text-gray-400 text-xs sm:text-sm leading-relaxed'>
                          {card.description}
                        </p>
                      </motion.div>
                    )
                  })}
                </div>

                <div className='w-full sm:w-1/2'>
                  {cardData.slice(2, 3).map((card) => {
                    const Icon = card.icon
                    return (
                      <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -10 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.4,
                          ease: 'easeOut',
                        }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='bg-dark-300 rounded-xl p-3 sm:p-2 cursor-pointer'
                      >
                        <Icon className='text-purple mb-2' size={22} />
                        <h4 className='text-sm sm:text-base font-semibold mb-1'>
                          {card.title}
                        </h4>
                        <p className='text-gray-400 text-xs sm:text-sm leading-relaxed'>
                          {card.description}
                        </p>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About