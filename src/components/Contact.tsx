import React from "react";

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2 className="flex justify-center ">Contact Me</h2>
      <div className="flex flex-col md:flex-row  justify-between  p-2  md:p-20">
        <div className="md:w-1/2 mb-6 md:mb-0 pt-8 text-center md:text-left">
          <h3 className="mb-2 text-center md:text-left">Get in Touch</h3>
          <div className="flex items-center mb-4 justify-center md:justify-start">
            <span className="text-white mr-2">
              <i className="fas fa-envelope"></i>
            </span>
            <p>padillakiara18@gmail.com</p>
          </div>
        </div>

        <div className="md:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="border border-purple-600 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-600 bg-black"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="border border-purple-600 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#6F22EC] bg-black"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                className="border border-purple-600 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#6F22EC] h-32 bg-black"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
