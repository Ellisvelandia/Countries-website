import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../features/countriesSlice";

const Search = () => {
  const { searchTerm } = useSelector((state) => state.country);
  const dispatch = useDispatch();

  const handleInputValueChange = (e) => {
    console.log("input value changed", e.target.value);
    dispatch(setSearchTerm(e.target.value.toLowerCase()));
  };

  return (
    <section className="flex items-center bg-white lg:w-[30%] md:w-[40%] w-full text-black py-2 px-2 rounded">
      <input
        type="text"
        placeholder="Search for a country"
        className="w-full border-none text-black md:text-base text-xs  focus:outline-none"
        value={searchTerm}
        autoFocus
        onChange={handleInputValueChange}
      />
      <BiSearchAlt size={20} className="mr-1 dark:text-[#000]" />
    </section>
  );
};

export default Search;
