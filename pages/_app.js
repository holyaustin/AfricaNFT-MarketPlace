/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../images/afnftlogo.jpg'


function MyApp({ Component, pageProps }) {
  return (
    <div >
      <nav className="border-b p-6 bg-blue-300"> 
        <p className="text-4xl font-bold"> 
        <Image src={logo} alt="AfricaNFT Marketplace Logo" width={50} height={50} className="rounded-full" />
           AfricaNFT Marketplace</p>
        <div className="flex mt-4 font-semibold">
          <Link href="/">
            <a className="mr-4 text-pink-500">
              Home
            </a>
          </Link>
          <Link href="/create-new-nft">
            <a className="mr-6 text-pink-500">
              Create New NFTs
            </a>
          </Link>
          <Link href="/lazy-mint-nft">
            <a className="mr-6 text-pink-500">
              Lazy Mint NFTs
            </a>
          </Link>
          <Link href="/slideshow">
            <a className="mr-6 text-pink-500">
              List My NFT Assets
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-pink-500">
              Transfer Assets
            </a>
          </Link>
          <Link href="/ss">
            <a className="mr-6 text-pink-500">
              IPFS Upload
            </a>
          </Link>
          
          <Link href="/creator-dashboard">
            <a className="mr-6 text-pink-500">
              Creator Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
