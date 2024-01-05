import React from "react";
import { Link } from "react-router-dom";
import Delete from "../assets/delete.svg";
import useFetch from "../customHooks/useFetch";

const Menu = () => {
  const { data, error, loading } = useFetch(`http://localhost:3001/info`);

  const handleDelete = (e, id) => {
    e.preventDefault();
    useFetch(`http://localhost:3001/info/${id}`, "DELETE");
  };

  if (!data) return;
  return (
    <div className=" mt-4">
      {error && <div>{error}</div>}
      <div className="bg-gradient-to-r from-green-200 via-green-300 to-blue-500 h-52 flex justify-center items-center text-3xl font-bold rounded-lg">
        Welcome to React World
      </div>
      {loading && <div>loading....</div>}

      <div className="flex gap-3 mt-2">
        {data &&
          data.map((item) => (
            <Link
              to={`details/${item.id}`}
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
              <img
                src={Delete}
                alt=""
                className=" self-end"
                onClick={() => handleDelete(item.id)}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Menu;
