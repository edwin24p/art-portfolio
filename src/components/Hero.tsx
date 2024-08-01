import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-5">
      <div className="relative w-full md:w-6/12">
        <img
          src="../public/bg1.jpg"
          className="hidden md:block w-full h-96 object-cover md:w-64 md:h-96 ml-0 md:ml-24 mt-14 "
        />
        <h1 className="block md:hidden text-center">Kiara Padilla</h1>
        <img
          src="../public/fg1.jpg"
          className="block md:hidden mx-auto w-48 h-60 mt-4 mb-8 md:mb-0"
        />
        <img
          src="../public/fg1.jpg"
          className="hidden md:block absolute top-0 left-0 translate-x-60 translate-y-40 border-4 border-white w-48 h-60"
        />
      </div>
      <div className="md:w-6/12">
        <h1 className="hidden md:block my-10">Kiara Padilla</h1>
        <h3 className="font-bold mb-3 md:text-left text-center">
          Visual Artist/Creative
        </h3>
        <p className="text-center md:text-left">
          Hello! I'm Kiara, a 17-year-old high school artist with a passion for
          bringing my imagination to life through drawings, paintings, and
          crafts. Ever since I could hold a pencil, I've been captivated by the
          world of art. From the intricate details of a graphite sketch to the
          vibrant strokes of a paintbrush, I love exploring different mediums
          and techniques to express my creativity. My artwork often reflects my
          personal experiences, emotions, and the beauty I find in everyday
          life. Whether it's a detailed portrait, a whimsical landscape, or a
          handcrafted piece, each creation holds a special place in my heart.
        </p>
        <button className="bg-purple-700 px-6 py-4 rounded-full mt-6 block mx-auto md:mx-0 mb-10 md:mb-0 ">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Hero;
