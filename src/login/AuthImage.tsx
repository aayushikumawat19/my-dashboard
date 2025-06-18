import React, { useState } from 'react';
import Logo from '../assets/login/logo.svg';
import Slide1 from '../assets/login/Group 165 (1).svg';
import Slide2 from '../assets/images/Rectangle 22.svg';

const slides = [
  {
    img: Slide1,
    title: 'Introducing New Features',
    desc: 'Analyzing previous decision trends ensure that decision businesses always make the right decision. And as the scale of the decision and its impact magnifies...',
  },
  {
    img: Slide2,
    title: 'New Features',
    desc: 'And as the scale of the decision and its impact magnifies...',
  },
  {
    img: Slide1,
    title: 'Third Slide',
    desc: 'Analyzing previous trends ensure that businesses always make the right decision. And as the scale of the decision and its impact magnifies...',
  },
];

const AuthImage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center text-white px-4 py-8">
      <img src={Logo} alt="Logo" className="mb-12 mt-10 w-[180px] h-[38px]" />

      <img
        src={slides[currentIndex].img}
        alt="Slide"
        className="mb-8 h-[297px] object-cover"
      />

      <div className="w-[417px] h-[89px] text-center mt-[-25px]">
        <h2 className="text-xl mb-2">{slides[currentIndex].title}</h2>
        <p className="text-xs">{slides[currentIndex].desc}</p>
      </div>

      <div className="flex items-center space-x-2 mt-4">
        <button
          onClick={handlePrev}
          className="text-white text-lg  hover:opacity-80"
        >
          &#8249;
        </button>

        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-white' : 'bg-gray-500'
            }`}
          ></span>
        ))}

        <button
          onClick={handleNext}
          className="text-white text-lg font-bold hover:opacity-80"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default AuthImage;
