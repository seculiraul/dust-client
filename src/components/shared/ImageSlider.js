import { useState } from 'react'

const ImageSlider = ({ slides }) => {
  const [crtIndex, setCrtIndex] = useState(0)

  const sliderStyle = {
    height: '100%',
    position: 'relative',
  }
  const slideStyles = {
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides?.[crtIndex]})`,
  }

  const leftArrow = {
    position: 'absolute',
    top: '50%',
    transform: 'transalte(0, -50%)',
    left: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
  }

  const rightArrow = {
    position: 'absolute',
    top: '50%',
    transform: 'transalte(0, -50%)',
    right: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
  }

  const dotsContainer = {
    display: 'flex',
    justifyContent: 'center',
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
      <div style={leftArrow} onClick={goToPrev}>
        ❰
      </div>
      <div style={rightArrow} onClick={goToNext}>
        ❱
      </div>
      <div style={slideStyles}></div>
      <div style={dotsContainer}>
        {slides?.map((slide, index) => (
          <div style={dotStyles} onClick={() => goToSlide(index)} key={index}>
            ●
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
