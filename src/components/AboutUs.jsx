
import chef1 from "../assets/chef1.webp";
import chef from "../assets/chef.jpg";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Restaurant Story */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">🍽️ Our Story</h2>
        <p className="text-gray-600 text-lg mb-8">
          Welcome to <span className="font-bold text-black">Tasty Bites</span>! Our journey began with a simple passion—bringing people together over delicious food. 
          Established in 2015, we take pride in serving freshly prepared, high-quality meals that tantalize your taste buds.
        </p>

        {/* Mission Statement */}
        <h3 className="text-3xl font-bold text-gray-800 mb-4">🎯 Our Mission</h3>
        <p className="text-gray-600 text-lg mb-10">
          Our mission is to craft unforgettable dining experiences by offering a perfect blend of flavors, 
          hospitality, and ambiance. We are committed to using fresh ingredients and traditional recipes 
          to create dishes that feel like home.
        </p>

        {/* Meet Our Chefs */}
        <h3 className="text-3xl font-bold text-gray-800 mb-6">👨‍🍳 Meet Our Chefs</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src={chef1} alt="Chef John" className="w-40 h-40 mx-auto rounded-full mb-4"/>
            <h4 className="text-2xl font-bold text-gray-800">Chef John Doe</h4>
            <p className="text-gray-600 text-lg">&quot;Cooking is an art, and I bring passion to every plate I serve.&quot;</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src={chef} alt="Chef Sarah" className="w-40 h-40 mx-auto rounded-full mb-4"/>
            <h4 className="text-2xl font-bold text-gray-800">Chef Sarah Smith</h4>
            <p className="text-gray-600 text-lg">&quot;Every dish tells a story, and my goal is to create unforgettable flavors.&quot;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
