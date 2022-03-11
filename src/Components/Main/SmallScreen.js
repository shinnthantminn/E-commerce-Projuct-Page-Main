import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'

function SmallScreen({ Image }) {
  const slideImages = [
    {
      url: Image.Image[0],
      caption: 'Slide 1',
    },
    {
      url: Image.Image[1],
      caption: 'Slide 2',
    },
    {
      url: Image.Image[2],
      caption: 'Slide 3',
    },
    {
      url: Image.Image[3],
      caption: 'Slide 4',
    },
  ]

  return (
    <div>
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <img src={slideImage.url} alt="" />
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default SmallScreen
