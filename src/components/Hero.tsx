import React from "react";
import Image4 from "../../public/image4.png";
import Image from "next/image";
import Image5 from "../../public/image5.png";
import Image6 from "../../public/image6.png";
import Image7 from "../../public/image7.png";
import Image8 from "../../public/image8.png";
import Image9 from "../../public/image9.png";
import Image10 from "../../public/image10.png";
import Image11 from "../../public/image11.png";
import Image12 from "../../public/image12.png";
import Image13 from "../../public/image13.png";
import Image14 from "../../public/image14.png";
import Image15 from "../../public/image15.png";
export default function Hero() {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col items-center justify-center  ">
        <div className="flex flex-col items-center bg-[#F5F5F5] w-full ">
          <h2 className="lg:text-lg lg:font-semibold md:text-lg md:font-semibold sm:text-lg sm:font-semibold text-sm font-semibold  ">
            Hello Nike App
          </h2>
          <p className="lg:text-lg lg:font-semibold md:text-lg md:font-semibold sm:text-lg sm:font-semibold text-sm font-semibold ">
            Download the app to access everything Nike.
            <button className="lg:text-lg lg:font-semibold md:text-lg md:font-semibold sm:text-lg sm:font-semibold text-sm font-semibold underline">
              Get You Great
            </button>
          </p>
        </div>
        <Image src={Image4} alt="image4" />
        <div className="flex flex-col items-center  space-y-5 mt-10">
          <span className="text-lg font-semibold">First Look</span>
          <h2 className="lg:text-7xl lg:font-semibold md:text-7xl md:font-semibold sm:text-5xl sm:font-semibold text-3xl font-semibold ">
            Nike Air Max Pulse
          </h2>
          <p className="lg:text-xl lg:font-semibold lg:w-[45rem] md:text-xl md:font-semibold md:w-[45rem] sm:text-sm sm:font-normal sm:w-[35rem] text-sm font-normal w-[20rem]">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse
            <p>
              {" "}
              —designed to push you past your limits and help you go to the max
            </p>
          </p>
          <div
            className="flex justify-center items-center space-x-10"
            id="hero_button"
          >
            <button className="h-12 w-36 text-lg font-semibold  rounded-3xl bg-black text-white">
              Notify ME
            </button>
            <button className="h-12 w-44 text-lg font-semibold  rounded-3xl bg-black text-white">
              Shop Air Max
            </button>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:flex-col items-center mt-7 space-y-3 ">
        <div className="lg:flex lg:items-center lg:space-x-[40rem] md:flex md:items-center md:space-x-[30rem] md:pl-5  sm:flex sm:items-center sm:space-x-[15rem] sm:pl-16  flex items-center space-x-[3rem] pl-2">
          <h2 className="text-lg font-medium">Best of Air Max</h2>
          <Image src={Image9} alt="image9" className="" />
        </div>
        <div className="lg:flex lg:flex-row lg:space-x-5 md:grid md:grid-cols-2 md:space-x-3 sm:flex sm:flex-col sm:items-center flex flex-col items-center">
          <Image src={Image5} alt="image5" />
          <Image src={Image6} alt="image6" />
          <Image src={Image7} alt="image7" />
        </div>
      </div>
      <div className="flex  items-center justify-center mt-14 ">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Featured</h2>
          <Image src={Image8} alt="image8" />
          <div className="flex flex-col items-center space-y-5">
            <h2 className="lg:text-6xl font-semibold md:text-6xl sm:text-4xl text-3xl">
              STEP INTO WHAT FEELS GOOD
            </h2>
            <p className="text-lg font-normal">
              Cause everyone should know the feeling of running in that perfect
              pair.
            </p>
            <button className="bg-black text-white font-semibold text-lg h-12 w-44 rounded-3xl">
              Find You Shoe
            </button>
          </div>
        </div>
      </div>
      <div className="">
      <h2 className="text-lg font-semibold pl-5">Gear Up</h2>
      <div className="lg:flex md:flex justify-around sm:flex flex items-center">
      <Image src={Image14} alt="image14"/>
      <Image src={Image15} alt="image15" className="lg:block md:block sm:hidden hidden"/>
      </div>
      <div className="lg:grid lg:grid-cols-4  lg:items-center md:grid md:grid-cols-2 md:item-center md:space-y-5 md:ml-16  sm:flex sm:flex-col sm:items-center sm:space-y-5 flex flex-col items-center space-y-5 ">
     
        <Image src={Image10} alt="image10" className="pt-5"/>
        <Image src={Image11} alt="image11"/>
       
        

      <div className="lg:hidden md:hidden">  <Image src={Image15} alt="image15"/></div>
      
      <Image src={Image12} alt="image12"/>
      <Image src={Image13} alt="image13"/>
     
        
      </div>
    
      </div>
    </div>
  );
}