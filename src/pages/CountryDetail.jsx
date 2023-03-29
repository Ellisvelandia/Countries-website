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
      dispatch(reset)
    }
    
 return () => {
   dispatch(reset());
 };

  }, [dispatch, code, error]);

  return (
    <section className="mt-8 p-20 w-full min-h-screen">
      <Link className="shadow-md shadow-[#efefef] rounded-md inline-flex items-center pl-2 pr-4 py-2" to="/">
        <AiOutlineDoubleLeft className="dark:text-white ml-1" /> Back
      </Link>

      <div className="mt-36 flex items-center">
        {countrySearched.length > 0 ? (
          <>
            <img
              src={countrySearched[0].flags.png}
              alt={countrySearched[0].flags.alt}
              className="block w-[40%] h-[40%] mr-40"
            />

            <div className="w-full">
              <h1 className="text-2xl">{countrySearched[0].name.common}</h1>
              <hr />
              <div className="flex items-center">
                <div className="min-w-[50%]">
                  <p className="mb-1 font-semibold">
                    Offcial Name:{" "}
                    <span>{countrySearched[0].name.official}</span>
                  </p>
                  <p className="mb-1 font-semibold">
                    Population: <span>{countrySearched[0].population}</span>
                  </p>
                  <p className="mb-1 font-semibold">
                    Region: <span>{countrySearched[0].region}</span>
                  </p>

                  <p className="mb-1 font-semibold">
                    Sub Region: <span>{countrySearched[0].subregion}</span>
                  </p>
                  <p className="mb-1 font-semibold">
                    Capital: <span>{countrySearched[0].capital}</span>
                  </p>
                </div>

                <div className="w-full">
                  <p className="mb-1 font-semibold">
                    Top Level Domain: <span>{countrySearched[0].tld[0]}</span>
                  </p>
                  <p className="mb-1 font-semibold">
                    Currencies:
                    <span>
                      {Object.values(countrySearched[0].currencies)
                        .map((item) => {
                          return item.name;
                        })
                        .join(",")}
                    </span>
                  </p>

                  <p className="mb-1 font-semibold">
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

              <div className="flex mt-32 items-center">
                <p className="mr-2 font-semibold">Border Countries:</p>
                {countrySearched[0].borders ? (
                  countrySearched[0].borders.map((item, index) => {
                    return (
                      <Link className="py-2.5 px-8 rounded shadow-lg mr-2 dark:shadow-[#efefef]" to={`/${item}`} key={index}>
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
