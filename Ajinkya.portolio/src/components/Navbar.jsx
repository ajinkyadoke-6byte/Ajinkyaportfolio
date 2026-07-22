
// import React, { useState } from 'react'
// import { FaBars } from 'react-icons/fa'
// import { FaXmark } from 'react-icons/fa6'

// export default function Navbar() {

//     const [showMenu, setshowMenu] = useState(false);
    
//   return (
//     <nav className='fixed w-full z-50 bg-gray-900 backdrop-blur-sm py-4 px-8 shadow-lg'>
//         <div className='container mx-auto flex justify-between items-center'>
            
//             {/* Logo */}
//             <div>
//                 <a href="#" className="text-3xl font-bold text-white">
//                     Ajinkya
//                     <span className="text-purple-500"> Doke</span>
//                     <div className='w-4 h-4 bg-purple-500 rounded-full inline-block ml-1'></div>
//                 </a>
//             </div>

//             {/* Desktop Menu */}
//             <div className='hidden md:flex gap-12'>
//                 <a href="#home" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
//                     <span>Home</span>
//                     <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
//                 </a>
//                 <a href="#about" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
//                     <span>About</span>
//                     <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
//                 </a>
//                 <a href="#skills" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
//                     <span>Skills</span>
//                     <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
//                 </a>
//                 <a href="#projects" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
//                     <span>Projects</span>
//                     <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
//                 </a>
//                 {/* <a href="#experience" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
//                     <span>Experience</span>
//                     <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
//                 </a> */}
//                 <a href="#contact" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
//                     <span>Contact</span>
//                     <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
//                 </a>
//             </div>

//             {/* Mobile Button */}
//             <div className="md:hidden text-white">
//                 {showMenu ?
//                     <FaXmark onClick={() => setshowMenu(!showMenu)} className='text-2xl cursor-pointer'/> :
//                     <FaBars onClick={() => setshowMenu(!showMenu)} className='text-2xl cursor-pointer'/>
//                 }
//             </div>
//         </div>

//         {/* Mobile Menu */}
//         {showMenu && (
//             <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center'>

//                  <a  onClick={() => setshowMenu(!showMenu)}href= "#home" className= 'relative text-white/80 transition duration-300 hover:text-purple group'>
//                      <span>Home</span>
                     
//                 </a>

//                 <a onClick={() => setshowMenu(!showMenu)} href= "#About " className= 'relative text-white/80 transition duration-300 hover:text-purple group'>
//                     <span>About</span>
                    
//                 </a>

//                  <a onClick={() => setshowMenu(!showMenu)} href= "#Skills" className= 'relative text-white/80 transition duration-300 hover:text-purple group'>
//                      <span>Skills</span>
                     
//                  </a>

//                  <a onClick={() => setshowMenu(!showMenu)} href= "#Projects" className= 'relative text-white/80 transition duration-300 hover:text-purple group'>
//                      <span>Projects</span>
                     
//                  </a>

//                  {/* <a onClick={() => setshowMenu(!showMenu)} href= "#experience" className= 'relative text-white/80 transition duration-300 hover:text-purple group'>
//                      <span>Experience</span>
                    
//                 </a> */}

//                  <a onClick={() => setshowMenu(!showMenu)} href= "#Contact" className= 'relative text-white/80 transition duration-300 hover:text-purple group'>
//                      <span>Contact</span>
                     
//                  </a>

//             </div>
//         )}
//     </nav>
//   )
// }


import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

export default function Navbar() {

    const [showMenu, setshowMenu] = useState(false);
    
  return (
    <nav className='fixed w-full z-50 bg-gray-900 backdrop-blur-sm py-3 sm:py-4 px-4 sm:px-6 md:px-8 shadow-lg'>
        <div className='container mx-auto flex justify-between items-center'>
            
            {/* Logo */}
            <div>
                <a href="#" className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    Ajinkya
                    <span className="text-purple-500"> Doke</span>
                    <div className='w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full inline-block ml-1'></div>
                </a>
            </div>

            {/* Desktop Menu */}
            <div className='hidden md:flex gap-8 lg:gap-12'>
                <a href="#home" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>Home</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#about" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>About</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#skills" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>Skills</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#projects" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>Projects</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
                {/* <a href="#experience" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>Experience</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a> */}
                <a href="#contact" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                    <span>Contact</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden text-white">
                {showMenu ?
                    <FaXmark onClick={() => setshowMenu(!showMenu)} className='text-xl sm:text-2xl cursor-pointer'/> :
                    <FaBars onClick={() => setshowMenu(!showMenu)} className='text-xl sm:text-2xl cursor-pointer'/>
                }
            </div>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
            <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center text-base sm:text-lg'>

                 <a onClick={() => setshowMenu(!showMenu)} href="#home" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                     <span>Home</span>
                </a>

                <a onClick={() => setshowMenu(!showMenu)} href="#about" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>About</span>
                </a>

                 <a onClick={() => setshowMenu(!showMenu)} href="#skills" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                     <span>Skills</span>
                 </a>

                 <a onClick={() => setshowMenu(!showMenu)} href="#projects" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                     <span>Projects</span>
                 </a>

                 {/* <a onClick={() => setshowMenu(!showMenu)} href="#experience" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                     <span>Experience</span>
                </a> */}

                 <a onClick={() => setshowMenu(!showMenu)} href="#contact" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                     <span>Contact</span>
                 </a>

            </div>
        )}
    </nav>
  )
}