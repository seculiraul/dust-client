import { useState } from 'react'

const ImageSlider = ({ slides }) => {
  const [crtIndex, setCrtIndex] = useState(0)

  const sliderStyle = {
    height: '100%',
    position: 'relative',
  }
  const slideStyles = {
    //    scale: '75%',
    height: '100%',
    //width: '100%',
    // borderRadius: '10px',
    // backgroundPosition: 'center',
    //backgroundSize: 'cover',
    // backgroundImage: `url(${slides?.[crtIndex]})`,
  }

  const leftArrow = {
    position: 'absolute',
    top: '50%',
    transform: 'transalte(0, -50%)',
    left: '32px',
    fontSize: '45px',
    zIndex: 1,
    cursor: 'pointer',
  }

  const rightArrow = {
    position: 'absolute',
    top: '50%',
    transform: 'transalte(0, -50%)',
    right: '32px',
    fontSize: '45px',
    zIndex: 1,
    cursor: 'pointer',
  }

  const dotStyles = {
    margin: '0 3px',
    cursor: 'pointer',
    fontSize: '20px',
  }

  const goToPrev = () => {
    crtIndex === 0
      ? setCrtIndex((crtIndex) => slides?.length - 1)
      : setCrtIndex((crtIndex) => crtIndex - 1)
  }

  const goToNext = () => {
    crtIndex === slides?.length - 1
      ? setCrtIndex(0)
      : setCrtIndex((crtIndex) => crtIndex + 1)
  }

  const goToSlide = (index) => {
    setCrtIndex(index)
  }
  return (
    <div style={sliderStyle}>
      <div className="text-zinc-700" style={leftArrow} onClick={goToPrev}>
        ❰
      </div>
      <div className="text-zinc-700" style={rightArrow} onClick={goToNext}>
        ❱
      </div>
      <img
        className="max-w=[500px] h-full max-h-[60vh] mx-auto"
        alt={slides?.[crtIndex]}
        src={slides?.[crtIndex]}
      />
      <div className="flex flex-row mx-auto gap-2 p-2 mt-2 mb-4 justify-center">
        {slides?.map((slide, index) => (
          <img
            className=" h-[10vh] cursor-pointer"
            onClick={() => goToSlide(index)}
            key={index}
            src={slide}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
