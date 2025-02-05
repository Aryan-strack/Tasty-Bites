import { featuredDishes, specialOffers } from '../constants/index';

const Menu = () => {
  return (
    <section id='menu'>
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Featured Dishes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {featuredDishes.map((dish, index) => (
          <div key={index} className="border rounded-lg shadow-md">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4 flex flex-col justify-between"> {/* Flex column for vertical alignment */}
              <div>
                <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                <p className="text-gray-700 mb-2">{dish.description}</p>
              </div>
              <p className="text-lg font-bold">{dish.price}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-4 mt-8 text-center">Special Offers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4"> {/* Grid for offers */}
        {specialOffers.map((offer, index) => (
          <div key={index} className="border rounded-lg shadow-md">
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-700 mb-2">{offer.description}</p>
              </div>
              <p className="text-lg font-bold">{offer.discount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Menu;