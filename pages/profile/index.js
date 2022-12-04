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
    <section className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700">
      <div className="flex flex-col justify-start -mb-20 pt-3 px-10">
          <p className="font-bold">0xc..20D</p>
          <p>0xCBFc2129396EA3B5EdfBA0eB1773d7dc5a05902D</p>
          <br />
          <br />
        </div>
      <div className="h-screen bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 flex flex-col items-center justify-center">
        
        <div class="grid grid-cols-2 grid-rows-2 gap-12">
          <NftCertificate name={"ETHIndia"} url={"https://pbs.twimg.com/media/FjAqq-YWQAYlcYg?format=jpg&name=medium"}/>
          <NftCertificate name={"Aadhar"} url={"https://akm-img-a-in.tosshub.com/businesstoday/images/story/202205/aadhaar_card11-sixteen_nine.jpg?size=948:533"}/>
          <NftCertificate name={"Pan card"} url={"https://images.livemint.com/img/2019/10/25/600x338/pan_card_1565610340828_1572021543426.PNG"}/>
          <NftCertificate name={"Driving liscence"} url={"https://insurance-b2c-assets.s3.ap-south-1.amazonaws.com/uploads/news/image/How%20to%20apply%20for%20driving%20license%20in%20India.jpg"}/>
        </div>
      </div>
    </section>
    </>
  );
}
