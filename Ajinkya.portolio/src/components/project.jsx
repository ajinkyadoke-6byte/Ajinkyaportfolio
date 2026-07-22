

// import React from 'react'
// import { motion } from 'framer-motion'
// import codechef from '../assets/code-chef.png'
// import leetcode from '../assets/leetcodee.png'

// const projectsData = [
//   {
//     title: 'LeetCode Profile',
//     description:
//       'My competitive programming journey — solving data structures and algorithms problems to sharpen problem-solving skills.',
//     image: leetcode,
//     tags: ['DSA', 'C++', 'Problem Solving'],
//     demoLink: 'https://leetcode.com/u/Ajinkya_2006/',
//     codeLink: 'https://leetcode.com/u/Ajinkya_2006/'
//   },
//   {
//     title: 'CodeChef Profile',
//     description:
//       'My competitive coding profile on CodeChef, showcasing contest participation and ranking progress.',
//     image: codechef,
//     tags: ['Competitive Coding', 'C++', 'Algorithms'],
//     demoLink: 'https://www.codechef.com/users/your_username',
//     codeLink: 'https://www.codechef.com/users/your_username'
//   }
// ]

// const Project = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, ease: 'easeOut' }}
//       viewport={{ once: false, amount: 0.2 }}
//       id="projects"
//       className="py-20 bg-dark-200"
//     >
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-4">
//           My <span className="text-purple-500">Projects</span>
//         </h2>

//         <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
//           A glimpse into my real-world based projects and coding journey
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projectsData.map((proj, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -8 }}
//               transition={{ duration: 0.3 }}
//               className="bg-dark-100 rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-purple-500 transition-colors duration-300"
//             >
//               <div className="overflow-hidden">
//                 <img
//                   src={proj.image}
//                   alt={proj.title}
//                   className="w-full h-30 object-cover hover:scale-110 transition-transform duration-500"
//                 />
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-2">
//                   {proj.title}
//                 </h3>

//                 <p className="text-gray-400 text-sm mb-4">
//                   {proj.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {proj.tags.map((tag, i) => (
//                     <span
//                       key={i}
//                       className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex gap-4">
//                   <a
//                     href={proj.demoLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg text-sm font-medium transition-colors duration-300"
//                   >
//                     View Demo
//                   </a>

//                   <a
//                     href={proj.codeLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 text-center border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-purple-400 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
//                   >
//                     Code
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// export default Project


// import React from 'react'
// import { motion } from 'framer-motion'
// import codechef from '../assets/code-chef.png'
// import leetcode from '../assets/leetcodee.png'
// import skillgap from '../assets/skillgap.png'

// const projectsData = [
//   {
//     title: 'LeetCode Profile',
//     description:
//       'My competitive programming journey — solving data structures and algorithms problems to sharpen problem-solving skills.',
//     image: leetcode,
//     tags: ['DSA', 'C++', 'Problem Solving'],
//     demoLink: 'https://leetcode.com/u/Ajinkya_2006/',
//     codeLink: 'https://leetcode.com/u/Ajinkya_2006/'
//   },
//   {
//     title: 'CodeChef Profile',
//     description:
//       'My competitive coding profile on CodeChef, showcasing contest participation and ranking progress.',
//     image: codechef,
//     tags: ['Competitive Coding', 'C++', 'Algorithms'],
//     demoLink: 'https://www.codechef.com/users/your_username',
//     codeLink: 'https://www.codechef.com/users/your_username'
//   },
//   {
//     title: 'SkillGap',
//     description:
//       'An AI-powered resume analysis platform that helps job seekers close their skill gap by uploading a resume and instantly seeing which skills are needed for their target role.',
//     image: skillgap,
//     tags: ['React', 'AI', 'Resume Analysis'],
//     demoLink: 'https://skill-gap-ecru.vercel.app',
//     codeLink: 'https://skill-gap-ecru.vercel.app'
//   }
// ]

// const Project = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, ease: 'easeOut' }}
//       viewport={{ once: false, amount: 0.2 }}
//       id="projects"
//       className="py-20 bg-dark-200"
//     >
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-4">
//           My <span className="text-purple-500">Projects</span>
//         </h2>

//         <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
//           A glimpse into my real-world based projects and coding journey
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projectsData.map((proj, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -8 }}
//               transition={{ duration: 0.3 }}
//               className="bg-dark-100 rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-purple-500 transition-colors duration-300"
//             >
//               <div className="overflow-hidden">
//                 <img
//                   src={proj.image}
//                   alt={proj.title}
//                   className="w-full h-30 object-cover hover:scale-110 transition-transform duration-500"
//                 />
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-2">
//                   {proj.title}
//                 </h3>

//                 <p className="text-gray-400 text-sm mb-4">
//                   {proj.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {proj.tags.map((tag, i) => (
//                     <span
//                       key={i}
//                       className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex gap-4">
//                   <a
//                     href={proj.demoLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-2 text-center bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg text-sm font-medium transition-colors duration-300"
//                   >
//                     View Demo
//                   </a>

//                   <a
//                     href={proj.codeLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 text-center border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-purple-400 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
//                   >
//                     Code
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// export default Project






import React from 'react'
import { motion } from 'framer-motion'
import codechef from '../assets/code-chef.png'
import leetcode from '../assets/leetcodee.png'
import skillgap from '../assets/skillgap.png'

const projectsData = [
  {
    title: 'LeetCode Profile',
    description:
      'My competitive programming journey — solving data structures and algorithms problems to sharpen problem-solving skills.',
    image: leetcode,
    tags: ['DSA', 'C++', 'Problem Solving'],
    demoLink: 'https://leetcode.com/u/Ajinkya_2006/',
    codeLink: 'https://leetcode.com/u/Ajinkya_2006/'
  },
  {
    title: 'CodeChef Profile',
    description:
      'My competitive coding profile on CodeChef, showcasing contest participation and ranking progress.',
    image: codechef,
    tags: ['Competitive Coding', 'C++', 'Algorithms'],
    demoLink: 'https://www.codechef.com/users/your_username',
    codeLink: 'https://www.codechef.com/users/your_username'
  },
  {
    title: 'SkillGap',
    description:
      'An AI-powered resume analysis platform that helps job seekers close their skill gap by uploading a resume and instantly seeing which skills are needed for their target role.',
    image: skillgap,
    tags: ['React', 'AI', 'Resume Analysis'],
    demoLink: 'https://skill-gap-ecru.vercel.app',
    codeLink: 'https://skill-gap-ecru.vercel.app'
  }
]

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="projects"
      className="pt-10 pb-20 scroll-mt-24 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple-500">Projects</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
          A glimpse into my real-world based projects and coding journey
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projectsData.map((proj, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-dark-100 rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-purple-500 transition-colors duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">
                  {proj.title}
                </h3>

                <p className="text-gray-400 text-xs mb-2 line-clamp-2">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {proj.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={proj.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white py-1.5 rounded-lg text-xs font-medium transition-colors duration-300"
                  >
                    View Demo
                  </a>

                  <a
                    href={proj.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-purple-400 py-1.5 rounded-lg text-xs font-medium transition-colors duration-300"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Project