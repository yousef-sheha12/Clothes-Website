import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    toast.error("Error ,This Destination Not Found");
  }, []);
  return (
    <div className="w-full h-dvh justify-center items-center mt-40 text-2xl text-center animate__animated animate__fadeInUp animate__fadeInUpBig animate__delay-1s">
      <p className="font-bold text-4xl">404</p>
      <p className="font-bold text-4xl mt-3"> Page Not Found</p>
      <p className="text-gray-400 my-4 text-lg">The Link might be Corrupted </p>
      <p className="text-lg">Or The Page May Have been Removed</p>
      <button className="text-lg btn  mt-5" onClick={() => navigate("/")}>
        Go To Home
      </button>
    </div>
  );
};

export default Page404;
