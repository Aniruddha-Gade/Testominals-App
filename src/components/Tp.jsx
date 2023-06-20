import React, { useContext } from "react";
import Testimonials from "./components/Testimonials";

import reviews from "./data";


import { MdOutlineDarkMode } from 'react-icons/md';
import { BiSun } from 'react-icons/bi';
import { AppContext } from "./Context/AppContext";


const App = () => {


  const {darkMode, setDarkMode} = useContext(AppContext);


  return (

    <div className={` ${darkMode ? 'dark' : ''} bg-blue-800 `}>
      <div className="dark:bg-[#27374D] flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-gray-200 ">

        <div className="text-center ">
          <div className="flex justify-between items-center mb-[rem] ">

            <h1 className="font-bold  text-4xl ml-[15rem] dark:text-slate-100">Our Testimonals</h1>

            <div onClick={() => setDarkMode(!darkMode)}
              className="flex justify-between items-center gap-4 p-3 rounded-lg cursor-pointer select-none bg-slate-300
                 dark:bg-slate-700 dark:hover:bg-slate-600 hover:bg-violet-500 hover:text-white duration-300
                  dark:text-slate-100 ">
              <p className="text-xl font-bold  ">{darkMode ? 'Light' : 'Dark'}</p>
              <p className="text-xl font-extrabold animate-bounce ">{darkMode ? <BiSun /> : <MdOutlineDarkMode />}</p>
            </div>

          </div>

          <div className="w-1/4 h-[4px] bg-violet-400 mt-1 ml-[18rem]"></div>

          <Testimonials reviews={reviews}></Testimonials>
        </div>

      </div>
    </div>
  )
};

export default App;
