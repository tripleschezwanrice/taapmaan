import React, { useRef, useState } from "react";
import { GoLocation } from "react-icons/go";

const Search = ({ city, setCity, unit, setUnit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.elements.city.value.length != 0) {
      setCity(event.target.elements.city.value);
    }
  };

  const handleUnit = () => {
    unit == "C" ? setUnit("F") : setUnit("C");
  };

  return (
    <div className="flex justify-center mx-auto max-w-[1080px] ">
      <form
        action=""
        className="flex w-[75%] "
        onSubmit={handleSubmit}
      >
        <input
          name="city"
          type="text"
          placeholder="Search for cities..."
          className="capitalize outline-none text-lg w-full px-4 py-3 rounded-l-lg"
          onSubmit={(e) => setCity(e.target.value)}
        />
        <GoLocation className="bg-white   border-x-2  py-3 " size={52} />
      </form>
      <button
        className="bg-white font-semibold px-4 py-3 text-xl rounded-r-md w-[60px]"
        onClick={handleUnit}
      >
        °{unit}
      </button>
    </div>
  );
};

export default Search;
