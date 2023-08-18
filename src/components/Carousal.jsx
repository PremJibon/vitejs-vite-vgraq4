import React from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Carousal.css"
import { useState } from 'react'

export const Carousal = ({data})=>{
  const [slide,setSlide] = useState(0);

  const nextSlide =()=>{
    setSlide(slide === data.length-1 ? 0: slide +1)
  }
  const prevSlide =()=>{
    setSlide(slide === 0? data.length -1:slide -1)
  }
  return(
    <div className='carousal'>
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide} />
      {data.map((item,idx)=>{
        return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide":"slide slide-hidden"}/>
      })}
      <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
      <span className='indicators'>
        {data.map((_,idx)=>{
          return <button key={idx} onClick={null} className={slide === idx ? "indicator": "indicator-inactive"}></button>
        })}
      </span>
    </div>
  )
}