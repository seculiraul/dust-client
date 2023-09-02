import image from '../../all-project-assets/image-gallery/images/fallCollection.jpg'
import SlideShow from './SlideShow'
const HomePage = () => {
  const slides = [{ image }, { image }, { image }]
  return (
    <>
      <div className="flex flex-col allign-center items-center mx-auto max-w-[300px] lg:max-w-[1500px] md:max=w-[800px] ">
        <div className="w-full mx-auto bg-zinc-200">
          <SlideShow slides={slides} />
        </div>
        <div>
          <h2>Hot products</h2>
        </div>
      </div>
    </>
  )
}

export default HomePage
