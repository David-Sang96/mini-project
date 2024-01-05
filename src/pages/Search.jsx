import React from "react";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../customHooks/useFetch";

const Search = () => {
  const location = useLocation();
  const param = new URLSearchParams(location.search);
  const search = param.get("search");
  const { data, error, loading } = useFetch(
    `http://localhost:3001/info?q=${search}`
  );

  if (!data) return;
  return (
    <div className=" mt-4">
      {error && <div>{error}</div>}
      <div className="bg-gradient-to-r from-green-200 via-green-300 to-blue-500 h-52 flex justify-center items-center text-3xl font-bold rounded-lg">
        Welcome to React World
      </div>
      {loading && <div>loading....</div>}

      <div className="flex gap-3 mt-2">
        {!!data.length &&
          data.map((item) => (
            <Link
              to={`/details/${item.id}`}
              key={item.id}
              className="border border-1 p-4 flex flex-col gap-3 justify-center items-center shadow-lg rounded-lg w-72 "
            >
              <div className="text-xl">{item.title}</div>
              <div>{item.content}</div>
              <span className=" self-start">Read more...</span>
              <div className="flex gap-2 ">
                {item.categories.map((item) => (
                  <div
                    key={item}
                    className="text-sm bg-blue-500 text-white px-2 py-1 rounded-lg"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Link>
          ))}
      </div>
      {!data.length && (
        <p className=" text-lg text-center mt-5 font-bold">No Item Found</p>
      )}
    </div>
  );
};

export default Search;
