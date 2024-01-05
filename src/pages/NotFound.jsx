import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 1500);
  return (
    <div className=" h-44 flex justify-center items-center text-3xl font-bold">
      404 Not Found 😓
    </div>
  );
};

export default NotFound;
