import React from 'react'

// import { FaQuoteLeft, FaQuoteRight,FiChevronLeft, FiChevronRight } from 'react-icons/fa';




import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';


const Card = (props) => {
    let review = props.review;

    return (
        <div className="flex flex-col md:relative ">

            <div className="absolute top-[6.5rem] left-12 sm:left-0 sm:top-[-7rem] z-[10] mx-auto">
                <div className="aspect-square w-[140px] h-[140px] rounded-full overflow-hidden">
                    <img className="object-cover w-full h-full" src={review.image} alt="Testimonial" />
                </div>
                <div className="w-[140px] h-[140px] bg-violet-600 rounded-full absolute top-[-6px] left-[9px] z-[-10]"></div>
            </div>


            <div className="text-center mt-7">
                <p className="tracking-widest font-bold text-2xl capitalize">{review.name}</p>
                <p className="uppercase text-violet-400 text-sm mt-1 font-bold">{review.job}</p>
            </div>


            <div className="mx-auto text-violet-400 mt-4">
                <FaQuoteLeft />
            </div>

            <div className="text-slate-700 text-center mt-4 dark:text-black h-32 sm:h-auto">
                {review.description}
            </div>


            <div className="mx-auto text-violet-400 mt-[5.3rem] sm:mt-4">
                <FaQuoteRight />
            </div>


        </div>
    )
}

export default Card;




