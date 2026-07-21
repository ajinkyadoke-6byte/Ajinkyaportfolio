
import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Server, Database, Trophy, Cloud, Smartphone } from 'lucide-react'

const skillsData = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Mongodb'],
  },
  {
    icon: Database,
    title: 'Machine Learning',
    description: 'I am completed a summer internship in machine learning and data handling.',
    tags: ['Python', 'Pandas', 'Matplotlib'],
  },
  {
    icon: Trophy,
    title: 'Hackathon',
    description: 'In second year I participated in the SIH hackathon.',
    tags: ['React', 'HTML', 'CSS', 'JS'],
  },
]

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20 bg-dark-100 scroll-mt-24"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          My <span className="text-purple">Skills</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Technologies I work with to bring ideas to life
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {skillsData.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.2 }}
                className="bg-dark-200 rounded-lg p-4 hover:-translate-y-1 transition-transform duration-300"
              >
                <Icon className="text-purple mb-2" size={22} />
                <h3 className="text-sm font-semibold mb-1.5">{skill.title}</h3>
                <p className="text-gray-400 text-xs mb-3 leading-snug">{skill.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] rounded-full bg-dark-100 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default Skills