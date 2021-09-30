import Image from 'next/image'
import banner from '../images/bg1.jpg'

function banner1() {
  return (
    <>
      <Image
        src={banner}
        alt="AfricaNFT site"
        // width={500} automatically provided
        height={500} //automatically provided
        // blurDataURL="data:..." automatically provided
        // Optionally allows to add a blurred version of the image while loading
        // placeholder="blur"
      />
      <p>Welcome to my homepage!</p>
    </>
  )
}

export default banner1