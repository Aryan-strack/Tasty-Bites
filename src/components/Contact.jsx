import { useDispatch, useSelector } from "react-redux";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { setFormData, setSuccessMessage, setErrorMessage, resetForm } from '../redux/contactSlice'; // Adjust the path accordingly

const Contact = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.contact.formData);
  const successMessage = useSelector((state) => state.contact.successMessage);
  const errorMessage = useSelector((state) => state.contact.errorMessage);

  const handleChange = (e) => {
    dispatch(setFormData({ [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setSuccessMessage(''));
    dispatch(setErrorMessage(''));
  
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      return dispatch(setErrorMessage("All fields are required."));
    }
  
    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json(); // Parse response body
      
      if (!response.ok) {
        throw new Error(data.message || "Request failed");
      }
  
      dispatch(setSuccessMessage(data.message));
      dispatch(resetForm());
      
    } catch (err) {
      dispatch(setErrorMessage(err.message || "An error occurred"));
    }
  };

  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">📍 Contact Us</h2>
        <p className="text-gray-600 mb-8">
          Have a question or need assistance? Feel free to reach out to us.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Contact Details */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-blue-500 text-2xl mr-3" />
              <p className="text-gray-700">
                123 Main Street, Vehari, Punjab, Pakistan
              </p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-green-500 text-2xl mr-3" />
              <p className="text-gray-700">+92 300 1234567</p>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-red-500 text-2xl mr-3" />
              <p className="text-gray-700">contact@yourwebsite.com</p>
            </div>

            {/* Google Map */}
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-md mt-6">
              <iframe
                title="Google Maps"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?q=Vehari,%20Punjab,%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Send Us a Message ✉️
            </h3>
            {successMessage && <p className="text-green-600">{successMessage}</p>}
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="border border-black rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="border border-black rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  className="border border-black text-black rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="cursor-pointer bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
