import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Page404 = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
    toast.error(t("errorNotFound"));
  }, [t]);

  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center text-center px-4 animate__animated animate__fadeIn">
      <p className="font-black text-9xl text-gray-200">404</p>
      <h1 className="font-bold text-4xl mt-4">{t("pageNotFound")}</h1>
      <p className="text-gray-500 mt-4 max-w-md">{t("linkCorrupted")}</p>
      <p className="text-gray-500">{t("pageRemoved")}</p>
      <button
        className="btn btn-primary mt-8 px-10 text-white"
        onClick={() => navigate("/")}
      >
        {t("goToHome")}
      </button>
    </div>
  );
};

export default Page404;
