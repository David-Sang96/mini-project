import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";

const Details = () => {
  const id = useParams().id;
  console.log(id);
  const { data, error, loading } = useFetch(`http://localhost:3001/info/${id}`);
  if (!data) return;
  return (
    <div className=" space-y-5 max-w-[600px] mx-auto mt-10 shadow-lg rounded-2xl p-5">
      {loading && <div>Loading....</div>}
      {error && <div>{error}</div>}
      <div className=" text-3xl text-center">{data.title}</div>
      <div>{data.description}</div>
      <div className="flex gap-2 ">
        {data.categories.map((item) => (
          <div
            key={item}
            className="text-sm bg-blue-500 text-white px-2 py-1 rounded-lg"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
