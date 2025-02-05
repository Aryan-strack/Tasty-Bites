import { testimonials } from "../constants";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import PropTypes from 'prop-types';



const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return <div className="flex">{stars}</div>;
  };
StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

const Testimonials = () => {
  return (
    <section id="reviews">
    <div className="mt-20 tracking-wide">
     <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are saying
    </h2>
    <div className="flex flex-wrap justify-center mb-5">
     {testimonials.map((testimonials, index) => (
        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
        <div className="bg-white rounded-md p-6 text-black border border-neutral-950 font-bold">
        <p className="text-black">{testimonials.review}</p>
        <div className="flex mt-8 items-start">
         <img className="w-12 h-12 mr-6 rounded-full border border-neutral-300" src={testimonials.image} alt="" />
         <div>
            <h6>{testimonials.name}</h6>
            <span className="text-sm font-normal italic text-yellow-500">
            <StarRating rating={testimonials.rating} />
                </span>
              </div>
            </div>
        </div>
    </div>
   ))}
  </div>
 </div>
</section>
  );
};

export default Testimonials;
