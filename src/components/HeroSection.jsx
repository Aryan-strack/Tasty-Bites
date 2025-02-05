import restaurant from "../assets/restaurant.mp4";

const HeroSection = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      
    }
  };
  return (
    <div className="relative w-screen h-screen overflow-hidden"> {/* Added overflow-hidden */}
      <video 
        autoPlay 
        loop 
        muted
        className="object-cover w-full h-full absolute top-0 left-0" // Ensures video covers the entire container
      >
        <source src={restaurant} type="video/mp4" />
        Your browser does not support the video tag. {/* Fallback message */}
      </video>

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center"> {/* Overlay with flexbox for centering */}

        {/* Content */}
        <div className="text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
            Welcome to <span className="text-red-700">Tasty Bites</span>
          </h1>
          <p className="text-lg mb-6 drop-shadow-md">
            Delicious Food, Great Ambience, Unforgettable Experience
          </p>

          <div className="space-x-4 ">
            <button  onClick={() => handleScroll('menu')} className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 cursor-pointer">
              View Menu
            </button>
            <button  className="bg-white hover:bg-gray-200 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 cursor-pointer">
              Book a Table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;