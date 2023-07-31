import React, { useEffect } from 'react'
import {gsap} from 'gsap'
import {motion as m} from 'framer-motion'
import SplitType from 'split-type'
function HomeScreen() {
  const tl=gsap.timeline({repeat:-1})
  useEffect(() => {
    const titles=gsap.utils.toArray("p")
    titles.forEach(title=>{
      const splitTitle=new SplitType(title)
      tl 
      .from(splitTitle.chars,{
        opacity:0,
        y:80,
        rotateX:-90,
        stagger:.02,
      },"<")
      .to(splitTitle.chars,{
        opacity:0,
        y:-15,
        rotateX:90,
        stagge:.02,
      },"<1")
    })
},[]) 
  return (
    <div className=''>
    <div className='flex flex-col w-[810px] p-5 mt-0 rounded-lg bg-teal-950/30 shadow-xl h-64 pl-16 pt-10 space-y-10 -mb-10'>
      <h1 className='text-[45px] font-oswald font-bold text-black tracking-normal ' >I am a</h1>  
      <div id="text_3d" className='text-[42px] naturebeauty tracking-widest w-96'>
        <p>Student</p>
        <p>Engineer</p>
        <p>Web Designer</p>
        <p>Game Developer</p>
        <p>Coder</p>
      </div>   
    </div>
    <div className='relative flex items-center justify-center w-[810px] pt-1 h-96 top-20 bg-teal-950/30 rounded-xl shadow-xl'>
      <m.ul className='font-light absolute flex flex-col content-start space-y-5 font-oswald tracking-wide text-[22px] top-8 left-12 ' >
        <li className='space-x-10'>▷️ CREATIVITY</li>
        <li>▷ PERSEVERANCE</li>
        <li>▷ SELF-DISCIPLINE</li>
        <li>▷ LOGICAL SKILLS</li>
        <li>▷ PROBLEM SOLVER</li>
        <li>▷ POSITIVE MINDSET</li>
      </m.ul>
      <img src="/Management.png" height="450" width="450" alt="bg" className='relative left-28 opacity-80 '/>
    </div>
    </div>
  )
}


export default HomeScreen