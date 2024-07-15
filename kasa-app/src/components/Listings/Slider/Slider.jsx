import React, { useState } from 'react'
import ArrowRight from '../../../assets/ArrowRight.svg'
import ArrowLeft from '../../../assets/ArrowLeft.svg'
import './Slider.scss'
import SliderItem from './SliderItem'
import NavigationArrow from './NavigationArrow'
import Annotation from './Annotation'

function Slider({pictures, title}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex -1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex +1))
  }
  return (
    <div className='slider'>
      <SliderItem 
      picture={pictures[currentIndex]}
      title={title}
      />
      {pictures.length > 1 && (
        <>
          <NavigationArrow 
          direction="prev"
          onClick={handlePrev}
          icon={ArrowLeft}
          />
          <NavigationArrow 
          direction="next"
          onClick={handleNext}
          icon={ArrowRight}
          />
          <Annotation
          currentIndex={currentIndex}
          total={pictures.length}
          />
        </>
      )}
    </div>

  );
}

export default Slider;

    // <div className="slider">
    //   <img src={pictures[currentIndex]} alt={title} />
    //   {pictures.length > 1 && (
    //     <>
    //       <img src={ArrowLeft} alt="Previous" className="nav-icon prev-icon" onClick={handlePrev} />
    //       <img src={ArrowRight} alt="Next" className="nav-icon next-icon" onClick={handleNext} />
    //       <div className="annotation">
    //         {currentIndex + 1} / {pictures.length}
    //       </div>
    //     </>
    //   )}
    // </div>