import React, { useEffect, useState } from "react";
import { useRef } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [service, setService] = useState([]);
  const [isAscending, setIsAscending] = useState(true);
  const [search, setSearch] = useState('')
  const searchRef = useRef();
  const handleSearch = () => {
    setSearch(searchRef.current.children.Search.value);

  }
  useEffect(() => {
    fetch(
      `http://localhost:5000/services?search=${search}&order=${isAscending ? "asc" : "desc"}`
    )
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [isAscending, search]);
  return (
    <section className="container mx-auto px-4 my-6">
      <div className="text-center mb-4">
        <p className="text-2xl text-red-700 font-bold">Service</p>
        <h2 className="text-5xl font-bold">Our service area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      {/* search */}
      <div>
        <fieldset className="w-full space-y-1 dark:text-gray-100">
          <label for="Search" className="hidden">
            Search
          </label>
          <div ref={searchRef} className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2 ">
              <button
              onClick={handleSearch}
                type="button"
                title="search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 dark:text-gray-100"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              
              type="search"
              name="Search"
              placeholder="Search..."
              className="bg-gray-300 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400"
            />
          </div>
        </fieldset>
      </div>
      {/* search */}
      <div>
        <label
          for="Toggle3"
          className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-800"
        >
          <input id="Toggle3" type="checkbox" className="hidden peer" />
          <span
            onClick={() => setIsAscending(true)}
            className="px-4 py-2 rounded-l-md bg-violet-400 peer-checked:bg-gray-300"
          >
            Ascending
          </span>
          <span
            onClick={() => setIsAscending(false)}
            className="px-4 py-2 rounded-r-md bg-gray-300 peer-checked:bg-violet-400"
          >
            Descending
          </span>
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {service.map((serv) => (
          <ServiceCard key={serv._id} info={serv}></ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
