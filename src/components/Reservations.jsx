import { useSelector, useDispatch } from "react-redux";
import { updateFormData, setSuccessMessage, setErrorMessage, clearMessages } from "../redux/reservationSlice";

const Reservations = () => {
  const dispatch = useDispatch();
  const { formData, successMessage, errorMessage } = useSelector((state) => state.reservation);

  const handleChange = (e) => {
    dispatch(updateFormData({ [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(clearMessages());

    if (!formData.date || !formData.time || !formData.guests) {
      dispatch(setErrorMessage("⚠️ Please fill in all fields!"));
      return;
    }

  

    try {
      const response = await fetch("http://localhost:8080/api/reservations", { // Updated port
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      
      });
      
      const data = await response.json(); 
      console.log(data);
      
      if (response.ok) {
        dispatch(setSuccessMessage("🎉 Table Reserved Successfully!"));
        dispatch(updateFormData({ date: "", time: "", guests: "" }));
      } else {
        dispatch(setErrorMessage(`❌ Error: ${data.message || "Something went wrong. Try again."}`));
      }
      } catch (error) {
        dispatch(setErrorMessage(`❌ Error: ${error.message || "Something went wrong. Try again."}`));
      }
    };
          

  return (
    <div className="bg-amber-400 py-12 px-6">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">🍽️ Book a Table</h2>
        <p className="text-gray-600 mb-8">Secure your spot now! Select your preferred date and time.</p>

        <div className="bg-red p-6 rounded-lg shadow-md">
          {successMessage && <p className="text-green-600">{successMessage}</p>}
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Date 📅</label>
              <input type="date" name="date" className="border rounded-md text-black w-full px-3 py-2" value={formData.date} onChange={handleChange} required />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Time ⏰</label>
              <input type="time" name="time" className="border rounded-md text-black w-full px-3 py-2" value={formData.time} onChange={handleChange} required />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Number of Guests 👥</label>
              <input type="number" name="guests" className="border text-black rounded-md w-full px-3 py-2" value={formData.guests} onChange={handleChange} required min="1" max="20" />
            </div>
            <button type="submit" className=" cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full">Confirm Reservation ✅</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
