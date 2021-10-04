/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../images/afnftlogo.jpg'
import Layout from '../src/components/layout'
import styles from '../styles/search.module.css'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <div >
      <nav className="border-b p-2 bg-blue-300 font-sans font-bold "> 

        <p className="text-4xl font-bold font-sans ml-2 mt-2 "> 
        <Image src={logo} alt="AfricaNFT Marketplace Logo" width={50} height={50} className="rounded-full" />
           AfricaNFT Marketplace  

    <div className="flex relative text-gray-600 focus-within:text-pink-500 float-right w-1/3">
      <span class="absolute inset-y-0 left-0 flex pl-2">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        </button>
      </span>
      <input className="rounded-full px-8 p-4 mr-5 ml-1 divide-gray-500 float-right text-xl w-full" 
        placeholder='Search for Assets and Collectibles' type='text'
        //onChange={onChange}
        //onFocus={onFocus}
        //value={query}
        />
    </div>
      </p>
        <div className="flex mt-4 font-bold font-sans ml-8">
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
          <Link href="/my-assets">
            <a className="mr-6 text-pink-500">
              List My NFT Assets
            </a>
          </Link>
          <Link href="/lazy-mint">
            <a className="mr-6 text-pink-500">
              Lazy Mint Assets
            </a>
          </Link>
          <Link href="/upload-to-ipfs">
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
    </Layout>
  )
}

export default MyApp
