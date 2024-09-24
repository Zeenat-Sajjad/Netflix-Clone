import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/netflix_react_assets/assets/hero_title.png";
import play_icon from "../../assets/netflix_react_assets/assets/play_icon.png";
import info_icon from "../../assets/netflix_react_assets/assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="m-0 p-0 box-border bg-black text-white">
      <Navbar />
      <div className="relative">
        <img src={hero_banner} alt="" className="w-full mask-gradient" />
        <div className="absolute w-full pl-[6%] bottom-0">
          <img
            src={hero_title}
            alt=""
            className="max-w-[420px] w-[90%] mb-[30px]"
          />
          <p className="max-w-[700px] text-[17px] mb-[20px]">
            Discovering his ties to a secret ancient order, a young man living
            in the modren Istanbul embarks on a quest to save city from an
            immortal enemy.
          </p>
          <div className="flex gap-[10px] mb-[50px] text-black">
            <button className="btn hover:bg-[#ffffffbf] border-0 outline-0 py-2 px-5 inline-flex items-center rounded-[4px] cursor-pointer  bg-white  gap-[10px] text-[15px] font-[600] ">
              <img src={play_icon} alt="" className=" w-[25px]" />
              Play
            </button>
            <button
              className="btn dark-btn text-white hover:bg-[#6d6d6e66]
 border-0 outline-0 py-2 px-5 inline-flex items-center rounded-[4px] cursor-pointer  bg-[#6d6d6eb3]  gap-[10px] text-[15px] font-[600]"
            >
              <img
                src={info_icon}
                alt=""
                className=" w-[25px]"
              />
              More Info
            </button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="pl-[6%] font-semibold">
      <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
      <TitleCards title={"Only on Netflix"}    category={"popular"}/>
      <TitleCards title={"Upcoming"}   category={"upcoming"}/>
      <TitleCards title={"Top Pics for You"}   category={"now_playing"}/> 
      </div>
      <Footer/>
    </div>
  );
};

export default Home; 
