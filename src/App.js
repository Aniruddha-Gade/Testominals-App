import React, { useContext, useEffect } from "react";
import Testimonials from "./components/Testimonials";
import reviews from "./data";
import { MdOutlineDarkMode } from 'react-icons/md';
import { BiSun } from 'react-icons/bi';
import { AppContext } from "./Context/AppContext";

const App = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);

  // use previous theme
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('dark');

    if (savedDarkMode) setDarkMode(JSON.parse(savedDarkMode))

  }, [])



  // save cureent theme whenever user changes theme
  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode))
  }, [darkMode])



  return (
    <div className={` ${darkMode ? 'dark' : ''}  overflow-x-hidden `}>
      <div className="dark:bg-[#27374D] flex flex-col justify-center items-center min-h-screen
        bg-gray-200 overflow-x-hidden duration-500 ">

        <div className="text-center px-4 mt-3 sm:mt-[2rem] mb-10">
          <div className="flex flex-col justify-center items-center mb-6 sm:flex-row sm:justify-between sm:mb-10">

            <div className="sm:ml-[15rem] flex flex-col items-center justify-center sm:gap-1 ">
              <h1 className="font-bold text-4xl mb-4 sm:mb-0 dark:text-slate-100">Our Testimonials</h1>
              <div className="w-1/2 h-1 bg-violet-400 -mt-2 mx-auto sm:w-1/1 sm:mt-1"></div>
            </div>

            <div
              onClick={() => setDarkMode(!darkMode)}
              className="flex justify-between items-center gap-4 p-3 rounded-lg cursor-pointer select-none
                        bg-slate-300 dark:bg-slate-700 sm:dark:hover:bg-slate-600 sm:hover:bg-violet-500
                        sm:hover:text-white duration-300 dark:text-slate-100 sm:mt-0 sm:relative absolute mt-[12rem] right-[2.3rem]"
            >
              <p className="text-xl font-bold">{darkMode ? 'Light' : 'Dark'}</p>
              <p className="text-xl font-extrabold animate-bounce">
                {darkMode ? <BiSun /> : <MdOutlineDarkMode />}
              </p>
            </div>
          </div>


          <Testimonials reviews={reviews} />
        </div>

      </div>
    </div>
  );
};

export default App;
