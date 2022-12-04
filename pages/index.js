import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
//import '../styles/index.css'
import { useNavigate } from "react";
import Link from "next/link";
import { Alert } from "@material-tailwind/react";
import Image from "next/image";

function index() {
  const [connected, setConnected] = useState(false);

  const getAccount = async () => {
    const addressess = await window.ethereum.request({
      method: "eth_accounts",
    });
    if (addressess.length > 0) {
      setConnected(true);
    } else {
      setConnected(false);
    }
  };
  useEffect(() => {
    getAccount();
  }, [connected]);

  return (
    <>
      <div className=" h-screen">
        <Navbar connected={setConnected} />
        <div className="flex flex-row">
          <div>
            <Image
              src="/space-ship.png"
              width="500"
              height="800"
              className="mt-[160px]"
            />
          </div>
          <div className="ml-40 text-6xl mt-20  font-bold">
            <h1 className="ml-12">MORE</h1><h1>FREEDOM</h1>
            <h2 className="ml-24">TO</h2>
            <h1 className="ml-8">DIGITAL</h1><h1 className="mr-20">CERTIFICATES</h1>
          </div>
        </div>
        <div className="flex justify-center align-middle"></div>
        <div className="flex justify-center align-bottom">
          {connected && (
            <button class="bg-green-500 absolute mx-[500px] mb-11 inset-x-0 bottom-0 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link href="/wallet">Create an organization</Link>
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default index;
