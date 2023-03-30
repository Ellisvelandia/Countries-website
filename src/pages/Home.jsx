import React from "react";
import { Country, Filter, Search } from "../components";

const Home = () => {
  return (
    <>
      <section className="w-full h-full">
        <div className="w-full mt-20 py-0 px-20 flex md:flex-row flex-col items-center justify-between">
          <Search />
          <Filter />
        </div>
        <Country />
      </section>
    </>
  );
};

export default Home;
