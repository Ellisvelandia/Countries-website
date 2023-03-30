import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchByRegion, showAllCountries } from "../features/countriesAction";
import { reset, setSearchTerm } from "../features/countriesSlice";

const Country = () => {
  const { countriesData, loading, success, error, region, searchTerm } =
    useSelector((state) => state.country);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showAllCountries());

    if (region) {
      dispatch(searchByRegion(region));
    }

    if (error) {
      console.log(error);
    }
  }, [dispatch, error, success, region]);

 const data = countriesData.filter((item) => item.name.common.toLowerCase().includes(searchTerm))

  return (
    <section className="w-full h-full mt-20 py-0 xl:px-10 md:px-8 px-3 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-8 place-content-center text-black">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        data.length > 0 &&
        data.map((item, index) => {
          return (
            <Link
              to={`/${item.cioc}`}
              className="w-full bg-white mr-16 my-12 decoration-inherit shadow-md shadow-[#dfd5d5]"
              key={index}
            >
              <img
                src={item.flags.png}
                alt={item.flags.alt}
                className="block w-full md:h-1/2 h-2/5 shadow-xl shadow-[#5496b4]"
                loading="lazy"
              />
              <div className="md:p-20 px-1 w-full h-full md:text-left text-center py-4 lg:text-lg md:text-base text-[10px]">
                <h3>{item.common} </h3>
                <p className="mt-1 font-semibold">
                  Population:{" "}
                  <span className="font-light">{item.population}</span>
                </p>
                <p className="mt-1 font-semibold">
                  Region: <span className="font-light">{item.region}</span>
                </p>
                <p className="mt-1 font-semibold">
                  Capital: <span className="font-light">{item.capital}</span>
                </p>
              </div>
            </Link>
          );
        })
      )}
    </section>
  );
};

export default Country;
