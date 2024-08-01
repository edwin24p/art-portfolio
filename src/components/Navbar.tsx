import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between align-middle p-5">
      <div className="flex flex-col justify-center">
        <h3 className="font-bold">KIARA.</h3>
      </div>

      <div className="flex flex-col justify-center">
        <div className="w-7 h-[0.1875rem] bg-white mb-1.5"></div>
        <div className="w-7 h-[0.1875rem] bg-white mb-1.5"></div>
        <div className="w-7 h-[0.1875rem] bg-white"></div>
      </div>
    </div>
  );
};

export default Navbar;
