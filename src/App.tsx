import React from "react";
import "./App.css";

function App() {
  return (
    <div
      className="App pl-28 pr-10 py-5 text-white flex flex-col bg-cover m-10 rounded-xl"
      style={{
        backgroundImage: "url(https://i.postimg.cc/HW2DTSBZ/6kyxlx.jpg)",
      }}
    >
      <div className="flex space-x-28">
        <div className="text-3xl font-extrabold">Tar1ovo</div>
        <div className="flex-1 mt-2 cursor-pointer font-medium">
          iherewithmyheart@gmail.com
        </div>
        <div className="print text-2xl pr-24 pt-2 font-medium">
          I ❤️ Here With My Heart
        </div>
        <div className="">
          <i className="fas fa-bars text-3xl mt-1 pr-0 cursor-pointer"></i>
        </div>
      </div>
      <div className="mt-32 flex-1 flex">
        <div className="flex-1 space-y-2">
          <div className="font-bold text-5xl anm1">Hi,</div>
          <div className="flex space-x-3">
            <div className="font-bold text-5xl anm2">I'm</div>
            <div className="font-bold text-5xl text-red-500 anm3">Tar1ovo</div>
          </div>
          <div className="font-medium text-2xl anm4">
            User Interface Designer
          </div>
          <div className="text-white outline-none anm5">
            <button className="rounded-lg bg-red-500 border-white flex shadow-xl outline-none mt-10">
              <div className="ml-4 mr-8 mt-2 mb-2 font-medium">Hire Me</div>
              <div className="bg-red-400 mt-1 mr-1 rounded-md">
                <i className="fas fa-long-arrow-alt-right text-xl w-8"></i>
              </div>
            </button>
          </div>
        </div>
        <div className="mr-12">
          <div className="text-red-500 text-lg">Expert on</div>
          <div className="text-2xl font-medium my-2">
            <div>Based in Netherland</div>
            <div>i'm developer and</div>
            <div>UI/UX designer</div>
          </div>
          <div className="mt-4 text-gray-600">
            <div>Hey are looking for designer to build</div>
            <div>your brand and grow your business?</div>
            <div>let's shake hands with me.</div>
          </div>
          <div className="flex mt-6 space-x-1 text-red-500 cursor-pointer">
            <div className="font-semibold">Download CV</div>
            <div>
              <i className="fas fa-download"></i>
            </div>
          </div>
          <div className="bg-red-500 h-0.5 w-32"></div>
        </div>
      </div>
      <div className="flex space-x-32 mb-2">
        <div className="flex flex-col space-y-8 text-xl mt-1">
          <i className="fab fa-facebook-f cursor-pointer"></i>
          <i className="fab fa-twitter cursor-pointer"></i>
          <i className="fab fa-instagram font-thin cursor-pointer"></i>
        </div>
        <div className="flex-1 text-xl flex space-x-3 pt-24">
          <div>
            <i className="fab fa-apple text-3xl cursor-pointer"></i>
          </div>
          <div className="text-sm pt-3 font-medium cursor-pointer">
            https://resumeovo.netlify.app
          </div>
        </div>
        <div className="flex space-x-2 pt-16 pr-4 cursor-pointer">
          <div className="mt-4 text-lg font-medium">Let's Chat</div>
          <div>
            <i className="far fa-comment-dots text-6xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
