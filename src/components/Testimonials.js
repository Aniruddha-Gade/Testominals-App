import { React, useState } from 'react'
import Card from './Card'

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Testimonials(props) {

    let reviews = props.reviews;

    const [index, setIndex] = useState(0);


    const leftShiftHandler = () => {
        if (index - 1 < 0)
            setIndex(reviews.length - 1);

        else setIndex(index - 1);
    }

    const rightShiftHandler = () => {
        if (index + 1 >= reviews.length)
            setIndex(0);

        else setIndex(index + 1);
    }


    const surpriseHandler = () => {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

    return (
        <div className="w-[85vw] md:w-[700px] sm:mt-10 p-10 bg-white dark:bg-[#DDE6ED] rounded-3xl 
        flex flex-col justify-center items-center transition-all duration-500 hover:shadow-xl 
        mt-[7.5rem] min-h-[35rem] sm:min-h-0 ">
            <Card review={reviews[index]}></Card>


            <div className="flex mx-auto text-3xl mt-7 gap-3 text-violet-400 font-bold justify-center ">
                <button onClick={leftShiftHandler}
                    className="hover:text-violet-700 transition-all duration-200 outline-none">
                    <FiChevronLeft />
                </button>

                <button onClick={rightShiftHandler}
                    className="hover:text-violet-700 transition-all duration-200 outline-none">
                    <FiChevronRight />
                </button>
            </div>

            <div className="bg-violet-60 mt-4 ">
                <button onClick={surpriseHandler}
                    className="bg-violet-700 rounded-lg px-4 py-2 text-white 
                sm:hover:bg-violet-500 font-bold transition-all duration-200 text-lg 
                select-none outline-none  ">
                    Surprise Me
                </button>
            </div>

        </div>
    )
}

export default Testimonials;






