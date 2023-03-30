import React, { useEffect, useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { reset, setRegion } from "../features/countriesSlice";

const Filter = () => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [filter, setFilter] = useState("");
  const [displayDropDown, setDisplayDropDown] = useState(false);
  const dispatch = useDispatch();

  const handleDropdown = () => {
    setDisplayDropDown(!displayDropDown);
  };

  useEffect(() => {
    if (filter !== "") {
      dispatch(setRegion(filter.toLocaleLowerCase()));
    }
    return () => {
      dispatch(reset());
    };
  }, [dispatch, filter]);

  return (
    <section className="lg:w-1/5 md:w-[30%] w-full inline-block relative text-black md:pt-0 pt-4">
      <div className="bg-[#fff] w-full  h-full rounded p-1 flex items-center">
        <input
          type="text"
          readOnly
          placeholder="Filter by Region"
          value={filter}
          className="w-full border-none p-1 text-black focus:outline-none md:text-base text-xs"
        />

        <BsChevronDoubleDown
          className="dark:text-[#1a3855] mr-1 cursor-pointer"
          onClick={handleDropdown}
        />
      </div>
      {displayDropDown ? (
        <div className="absolute mt-1 bg-white rounded w-full">
          {regions.map((item, index) => {
            return (
              <div
                className="cursor-pointer p-2 text-black md:text-base text-xs"
                key={index}
                onClick={() => {
                  setFilter(item);
                  handleDropdown();
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      ) : null}
    </section>
  );
};

export default Filter;
