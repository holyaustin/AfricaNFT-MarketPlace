/* pages/random.js */
import { useState } from 'react'
import { ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'
import Image from 'next/image'
import random from '../images/random1.jpg'
import Head from 'next/head'

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

import {
  nftaddress, nftmarketaddress, randomaddress
} from '../config'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import NFTMarket from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'

export default function RandomItem() {
  const [fileUrl, setFileUrl] = useState(null)
  const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' })
  const router = useRouter()

  async function fetchItem(url) {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)    
    const signer = provider.getSigner()

    /* next, create the item */
    let contract = new ethers.Contract(nftaddress, NFT.abi, signer)
    let transaction = await contract.createToken(url)
    let tx = await transaction.wait()
    let event = tx.events[0]
    let value = event.args[2]
    let tokenId = value.toNumber()
    const price = ethers.utils.parseUnits(formInput.price, 'ether')

    /* then list the item for sale on the marketplace */
    contract = new ethers.Contract(nftmarketaddress, NFTMarket.abi, signer)
    let listingPrice = await contract.getListingPrice()
    listingPrice = listingPrice.toString()

    transaction = await contract.createMarketItem(nftaddress, tokenId, price, { value: listingPrice })
    await transaction.wait()
    router.push('/')
  }

  return (
    <div className="flex justify-center">
      <Head>
        <title>Random Asset - AfricaNFT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
       <div className="w-1/3 flex flex-col pb-12" >
              <div className="bg-blue-300 border shadow rounded-xl overflow-hidden">
              <Image 
                src={random}
                alt="random NFT"
                height={600}
                //className="object-fill h-200 w-full"
                //style={{ height: '200px', width:"100%"  }}
  />    
                <div className="p-4">
                  <p style={{ height: '50px' }} className="text-2xl font-semibold">{"Random Asset"}</p>
                  <div style={{ height: '50px', overflow: 'hidden' }}>
                    <p className="text-black">{"description"}</p>
                  </div>
                </div>
                <div className="p-4 bg-black">
                  <p className="text-2xl mb-4 font-bold text-white">{3.6} MATIC</p>
                  <button className="w-full bg-pink-500 text-white font-bold py-2 px-12 rounded" onClick={() => buyNft()}>Buy</button>
                </div>
                
              </div>   
              <div className="w-full flex flex-col pb-12" >
        <button onClick={fetchItem} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
          Randomly Pick another Asset
        </button>
      </div>     
        </div>


    </div>
  )
}
