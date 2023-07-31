import React, { useEffect} from 'react'
import gsap from 'gsap'
import Fade from 'react-reveal/Fade'
import Lenis from '@studio-freight/lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
gsap.registerPlugin(ScrollTrigger);
export default function Experience() {
  const lenis = new Lenis()
  lenis.on('scroll', (e) => {
    console.log(e)
  }) 
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  useEffect(() => {
    const sample_txt=new SplitType(".sampletxt")
    //console.log(sample_txt.chars.innerHTML)
    const figma_txt=new SplitType(".figmatxt")
    var trainglestroke=document.getElementById("stroke1")
    var length=trainglestroke.getTotalLength()
    trainglestroke.style.strokeDasharray=length
    trainglestroke.style.strokeDashoffset=length
    var intervalId=setInterval(() => {
    trainglestroke.addEventListener("scroll",myfunc())
    /*var circlestroke=document.getElementById("stroke2")
    var cs_length=circlestroke.getTotalLength()
    circlestroke.style.strokeDasharray=cs_length
    circlestroke.style.strokeDashoffset=cs_length
    circlestroke.addEventListener("scroll",myfunc2())
    function myfunc2(){
    var scrollpercent2=(document.body.scrollTop+document.documentElement.scrollTop)/
    (document.documentElement.scrollHeight-document.documentElement.clientHeight);
    var draw2=length*scrollpercent2*1.5;
    circlestroke.style.strokeDashoffset=cs_length-draw2;}
    <svg width="571" height="571" viewBox="0 0 571 571" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle id="stroke2" cx="285.5" cy="285.5" r="281" stroke="#4A588A" stroke-width="9"/>
   </svg>
    */
    function myfunc(){
      var scrollpercent=(document.body.scrollTop+document.documentElement.scrollTop)/
      (document.documentElement.scrollHeight-document.documentElement.clientHeight);
      var draw=length*scrollpercent*7;
      trainglestroke.style.strokeDashoffset=length-draw;
    }
  },0.1);
  //gsap.to(".bganim",{clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',duration:1})
  gsap.to(".bganim",{clipPath:'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',duration:0.7})
  gsap.to(".bganim1",{clipPath:'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',duration:0.7},'+=.01')
  gsap.from(sample_txt.chars,{
    scrollTrigger:{
      trigger: '.sampletxt',
      start:'top 80%',
      end:'top 20%',
      scrub:true
    },
    y:-20,
    stagger:0.1,
    scaleY:0,
    duration:1
  })
  gsap.from(figma_txt.chars,{
    scrollTrigger:{
      trigger: '.figmatxt',
      start:'top 80%',
      end:'top 20%',
      scrub:true,

    },
    y:-20,
    stagger:0.1,
    scaleY:0,
    duration:1
  })
  /*const tl=gsap.timeline()
  tl.fromTo(".firsti", {width:"0%"}, {width:"48%",duration:1})
  tl.fromTo("#ue_text1", {x:-100}, {x:100,duration:1},"-=1")
  gsap.to(".secondi",{scrollTrigger:".secondi",width:"81px",duration:1,transformOrigin:"0% 50%"})*/
  },[])
  return (
    <div className='absolute flex flex-row w-full h-[600vh] bg-[#d0d0d0] exp_page'>
    <div className='absolute w-screen h-screen bg-black bganim'>
    </div>
    <div className='absolute w-screen h-screen bg-black/50 bganim1'>

    </div>
    <svg id='main1' className='absolute right-72 top-8 ' width="400" height="540" viewBox="-20 0 660 528" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="stroke1" d="M310.5 0L620.97 528H0.0299072L310.5 0Z" fill="none"/>
    </svg>
    <Fade left delay={1200}>
    <div className='absolute w-[800px] h-32 transition-colors duration-500 shadow-2xl bg-teal-900/30 rounded-xl -left-2 firsti top-20 hover:bg-teal-950/40'>
      <img src='ue.svg' width="60px" className='absolute right-10 top-7'></img>
      <p id='ue_text1' className='absolute text-5xl tracking-wider font-break w-96 left-52 top-10'>UNREAL ENGINE</p>
    </div>
    </Fade>
      <h1 id='des' className='absolute h-48 font-fira font-bold text-2xl leading-10 top-72 right-32 w-[600px] text-black  '>"During my school days, I developed my own 3D game using Unreal Engine 3 and have a good passion for Game Development."</h1>
      <div className='flex flex-row'>
      <div className='relative w-[750px] top-[432px] h-96'>
      <img id='ue1'  src='/ue1.png' height="10px" width="990px" className='relative border-4 border-black shadow-2xl cursor-pointer top-12 left-10 rounded-xl'/>
      </div>
      <div className='relative w-[600px] top-[480px] left-44 text-xl'>
        <p className='p-10 text-2xl leading-10 text-black shadow-2xl font-fira font-bold bg-teal-950/30 rounded-2xl h-[455px]'>Unreal Engine 3 is the first Game Development software i have worked upon and I'am glad i did I  have made my first game during my 12th grade which was a 3D Shooter where the hero simply kills the randomly spawning bots around the terrain, well actually i have lost the ue3 project file hence i have attached a different picture</p>
        <Fade left duration={1000}>
        <div className=' absolute w-[900px] transition-colors duration-500 shadow-2xl top-[690px] right-[737px] bg-teal-900/30 rounded-xl secondi h-28 hover:bg-teal-950/40'>
           <img src='figma.svg' width="45px" className='absolute top-5 right-14'></img>
           <p id='ue_text2' className='absolute  font-break tracking-wider text-5xl w-[900px] left-80 top-10 '> FIGMA</p>
        </div>
        </Fade>
        <div className='relative  bg-teal-900/30 w-[600px] p-10 top-[670px] right-0 text-black rounded-xl'>
       <p className='text-2xl font-bold leading-10 font-fira figmatxt'>Food Ordering application project for the course provided by META via Coursera where i have learnt matching colors with the company specification, padding, fontography, font size, font padding, working with images, grids, Designing interactive components using auto layout and more.</p>
       </div>
       <div className='relative  bg-teal-900/30 w-[600px] p-10 -bottom-[792px] text-black rounded-xl'>
       <p className='text-2xl font-bold font-fira sampletxt'>Designing part is very interesting as it makes you think of all the possible color, font, padding, border, margin, rounded edges, usage of svgs, shapes... combinations which could affect the appearance of a site drastically.</p>
       </div>
       <Fade left duration={1000}>
        <div className='relative w-[815px] transition-colors duration-500 shadow-2xl  top-[1150px] right-[950px] bg-teal-900/30 rounded-xl secondi h-28 hover:bg-teal-950/40'>
           <img src='blender_logo.svg' width="200px" className='absolute top-7 right-14'></img>
           <p id='ue_text2' className='absolute  font-break tracking-wider  text-5xl w-[900px] left-60 top-10'>  BLENDER</p>
        </div>
        </Fade>
        <Fade left duration={1000}>
        <div className='relative w-[815px] transition-colors duration-500 shadow-2xl  top-[2150px] right-[950px] bg-teal-900/30 rounded-xl secondi h-28 hover:bg-teal-950/40'>
           <img src='react.svg' width="50px" className='absolute top-7 right-14'></img>
           <p id='ue_text2' className='absolute  font-break tracking-wider  text-5xl w-[900px] left-60 top-10'>  REACT</p>
        </div>
        </Fade>
        <div className='relative bg-red-400/5  top-[2490px] right-[885px] h-[800px] w-screen flex flex-row border-4'>
          <img src='reactp.png' width="755px" height="700px"  alt='reactproject' className='border-2 border-black rounded-xl'/>
          <div className='flex flex-col space-y-48'>
          <div className='relative w-[607px] p-10 left-32 bg-teal-900/30 rounded-xl h-[300px]'>
          <p className='relative mt-2 text-2xl font-bold text-black font-fira'>
            Web Development is by far my favourite field to work. Currently Iam trying to master the back-end technologies also since I love learning new technologies in future I plan in building a ecommerce website 
          </p>
          </div>
          <div className='relative w-[607px] p-10 left-32 bg-teal-900/30 rounded-xl h-[300px]'>
          <p className='relative mt-2 text-2xl font-bold text-black font-fira sampletxt'>
            This portfolio website itself is the first React project Im currently working upon. As i gain knowledge about new techniques i will update the portfolio.
          </p>
          </div>
          </div>
        </div>
        <Fade left duration={1000}>
        <div className='relative w-[815px] transition-colors duration-500 shadow-2xl  top-[2800px] right-[950px] bg-teal-900/30 rounded-xl secondi h-28 hover:bg-teal-950/40'>
           <img src='github.svg' width="50px" className='absolute top-7 right-14'></img>
           <p id='ue_text2' className='absolute  font-break tracking-wider  text-5xl w-[900px] left-60 top-10'>  GITHUB</p>
        </div>
        </Fade>
        <div className='relative bg-red-400/5  top-[3140px] right-[885px] h-[800px] w-screen flex flex-row '>
          <img src='reactp.png' width="755px" height="700px"  alt='reactproject' className='border-2 border-black rounded-xl'/>
          <div className='flex flex-col space-y-48'>
          <div className='relative w-[607px] p-10 left-32 bg-teal-900/30 rounded-xl h-[300px]'>
          <p className='relative mt-2 text-2xl font-bold text-black font-fira'>
            Web Development is by far my favourite field to work. Currently Iam trying to master the back-end technologies also since I love learning new technologies in future I plan in building a ecommerce website 
          </p>
          </div>
          <div className='relative w-[607px] p-10 left-32 bg-teal-900/30 rounded-xl h-[300px]'>
          <p className='relative mt-2 text-2xl font-bold text-black font-fira sampletxt'>
            This portfolio website itself is the first React project Im currently working upon. As i gain knowledge about new techniques i will update the portfolio.
          </p>
          </div>
          </div>
        </div>
         <div className='absolute scale-y-90 top-[900px] -left-[750px] h-[900px]'>
       <img src='/figma.png' width="500px" height="500px" className='relative left-0 scale-x-105 scale-y-90 border-2 border-black top-32 rounded-xl'/>
       </div>
       </div>
     </div>


      </div>
  )
}
