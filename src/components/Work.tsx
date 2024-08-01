import React, { useState } from "react";

interface WorkProps {
  image: string;
  title: string;
  description: string;
}

const Work: React.FC<WorkProps> = ({ image, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="relative overflow-hidden rounded-lg group grow h-[40vh]">
      <img src={image} alt={title} className="w-full h-full object-cover " />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
        <p className="text-white text-sm">{description}</p>
        <button
          onClick={toggleModal}
          className="mt-2 bg-white text-black py-2 px-4 rounded hover:bg-gray-300 transition"
        >
          View
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="bg-white rounded-lg p-3 max-w-md w-full relative">
            <img src={image} alt={title} className="w-full h-auto rounded" />
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-black bg-red-500 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition"
            >
              &times; {/* X symbol */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
