import Head from "next/head";
import Image from "next/image";
import { Component, useEffect, useState } from "react";
import Input from "../../components/input";
import NftCertificate from "../../components/NftCertificate";
import Navbar from "../../components/Navbar";
import { useAccount } from "wagmi";


export default function Home() {
  const { address, connector, isConnected } = useAccount()
  const [nfts, setNfts] = useState([])

  useEffect(() => {
    const baseURL = "https://eth-mainnet.g.alchemy.com/v2/0mlbwf58EfUJH8lniVD4C8L4owK_Y1oU";
    const address = "0x6C9176A701601E21F7199BAf142c057466b4c933";
    const url = `${baseURL}/getNFTs/?owner=${address}`;

    let requestOptions = {
      method: 'get',
      redirect: 'follow'
    };

    (async () => {
      const response = await fetch(url, requestOptions)
      const body = await response.json()
      setNfts(body.ownedNfts)
    }
    )()

  }, [])
  return (
    <>
      <Navbar></Navbar> 
      <section className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700"> 
        <div className="flex flex-col justify-start -mb-20 pt-3 px-10"> 
          <p className="font-bold">0xc..20D</p> 
          <p>{address}</p> 
          <br /> 
          <br /> 
        </div> 
        <div className="h-screen bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 flex flex-col items-center justify-center">
          <div class="grid grid-cols-2 grid-rows-2 gap-12"> 
            {nfts.map((el,i) => <NftCertificate key={i} title={el.title} image={el.contractMetadata.openSea.imageUrl} />)}
          </div> 
        </div> 
      </section> 
      </>
  );
}
