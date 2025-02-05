import { useSelector, useDispatch } from "react-redux";
import { toggleItem, setOrderType } from "../redux/orderSlice";
import { menuItems } from "../constants"; // Dummy menu items

const OnlineOrder = () => {
  const dispatch = useDispatch();
  const { selectedItems, orderType } = useSelector((state) => state.order);

  const handleOrderNow = () => {
    if (selectedItems.length === 0) {
      alert("⚠️ Please select at least one item before ordering.");
      return;
    }
    alert(`✅ Your order for ${orderType} has been placed!\n🛒 Items: ${selectedItems.map((item) => item.name).join(", ")}`);
  };

  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">🛒 Order Online</h2>
        <p className="text-gray-600 mb-8">Choose your favorite dishes and place an order for takeaway or delivery!</p>

        {/* Order Type Buttons */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 mx-2 cursor-pointer rounded-lg text-white ${orderType === "takeaway" ? "bg-blue-600" : "bg-gray-400"}`}
            onClick={() => dispatch(setOrderType("takeaway"))}
          >
            Takeaway
          </button>
          <button
            className={`px-4 py-2 mx-2 cursor-pointer rounded-lg text-white ${orderType === "delivery" ? "bg-green-600" : "bg-gray-400"}`}
            onClick={() => dispatch(setOrderType("delivery"))}
          >
            Delivery
          </button>
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                selectedItems.some((i) => i.id === item.id) ? "bg-blue-100 border-blue-500" : "bg-white"
              }`}
              onClick={() => dispatch(toggleItem(item))}
            >
              <h3 className="text-xl text-black font-semibold">{item.name}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>

        {/* Order Now Button */}
        <button
          onClick={handleOrderNow}
          className="mt-6 cursor-pointer bg-red-500 hover:bg-red-700 text-white text-lg font-bold py-3 px-6 rounded-lg"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default OnlineOrder;
