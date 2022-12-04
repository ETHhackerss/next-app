import Head from "next/head";
import Image from "next/image";
import { Component, useEffect, useState } from "react";
import Input from "../../components/input";
import NftCertificate from "../../components/NftCertificate";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <section >
      <div className="flex flex-col justify-start -mb-20 pt-3 px-10">
          <p className="font-bold">0xc..20D</p>
          <p>0xCBFc2129396EA3B5EdfBA0eB1773d7dc5a05902D</p>
          <br />
          <br />
        </div>
      <div className="mt-12 h-screen flex flex-col items-center justify-center">
        
        <div class="grid grid-cols-2 grid-rows-2 gap-12">
          <NftCertificate/>
          <NftCertificate/>
          <NftCertificate/>
          <NftCertificate/>
        </div>
      </div>
    </section>
    </>
  );
}
