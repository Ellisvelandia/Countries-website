import React, { useEffect } from "react";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { searchByCode } from "../features/countriesAction";
import { reset } from "../features/countriesSlice";

const CountryDetail = () => {
  const { loading, error, countrySearched } = useSelector(
    (state) => state.country
  );
  const dispatch = useDispatch();
  const { code } = useParams();
  useEffect(() => {
    if (code) {
      dispatch(searchByCode(code.toLowerCase()));
    }

    if (error) {
      console.log(error);
    }

    return () => {
      dispatch(reset);
    };
  }, [dispatch, code, error]);

  return (
    <section className="mt-8 md:p-20 p-8 w-full min-h-screen">
      <Link
        className="shadow-md shadow-[#efefef] dark:shadow-[#1b1f3a] lg:text-lg md:text-base text-xs rounded-md inline-flex items-center pl-2 pr-4 py-2"
        to="/"
      >
        <AiOutlineDoubleLeft className="dark:shadow-[#1b1f3a] ml-1" /> Back
      </Link>

      <div className="mt-36 flex w-full lg:flex-row flex-col items-center">
        {countrySearched.length > 0 ? (
          <>
            <img
              src={countrySearched[0].flags.png}
              alt={countrySearched[0].flags.alt}
              className="block md:w-[40%] md:h-[40%] lg:mr-40 dark:shadow-lg dark:shadow-[#1b1f3a]"
            />

            <div className="w-full lg:mt-0 mt-8">
              <h1 className="md:text-2xl text-lg p-1">
                {countrySearched[0].name.common}
              </h1>
              <hr />
              <div className="flex items-center">
                <div className="md:min-w-[50%] w-full lg:text-lg md:text-base text-xs">
                  <p className="mb-1 p-1 font-semibold">
                    Offcial Name:{" "}
                    <span>{countrySearched[0].name.official}</span>
                  </p>
                  <p className="mb-1 p-1 font-semibold">
                    Population: <span>{countrySearched[0].population}</span>
                  </p>
                  <p className="mb-1 p-1 font-semibold">
                    Region: <span>{countrySearched[0].region}</span>
                  </p>

                  <p className="mb-1 p-1 font-semibold">
                    Sub Region: <span>{countrySearched[0].subregion}</span>
                  </p>
                  <p className="mb-1 p-1 font-semibold">
                    Capital: <span>{countrySearched[0].capital}</span>
                  </p>
                </div>

                <div className="w-full lg:text-lg md:text-base text-xs">
                  <p className="mb-1 p-1 font-semibold">
                    Top Level Domain: <span>{countrySearched[0].tld[0]}</span>
                  </p>
                  <p className="mb-1 p-1 font-semibold">
                    Currencies:
                    <span>
                      {Object.values(countrySearched[0].currencies)
                        .map((item) => {
                          return item.name;
                        })
                        .join(",")}
                    </span>
                  </p>

                  <p className="mb-1 p-1 font-semibold">
                    Languages:
                    <span>
                      {" "}
                      {Object.values(countrySearched[0].languages)
                        .map((item) => {
                          return item;
                        })
                        .join(",")}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex md:mt-32 mt-10 lg:text-lg md:text-base text-xs items-center">
                <p className="mr-2 font-semibold">Border Countries:</p>
                {countrySearched[0].borders ? (
                  countrySearched[0].borders.map((item, index) => {
                    return (
                      <Link
                        className="py-2.5 md:px-8 p-4 rounded shadow-lg mr-2  dark:shadow-[#1b1f3a]"
                        to={`/${item}`}
                        key={index}
                      >
                        <p>{item}</p>
                      </Link>
                    );
                  })
                ) : (
                  <span>No borders</span>
                )}
              </div>
            </div>
          </>
        ) : (
          <div> No details</div>
        )}
      </div>
    </section>
  );
};

export default CountryDetail;
