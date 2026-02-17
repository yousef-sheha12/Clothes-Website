import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  useEffect(() => {
    window.scrollTo(0, 0);
    toast.success(t("homePage"));
  }, [t]);

  return (
    <div
      className="w-full bg-linear-to-r from-blue-600 to-purple-600 h-full lg:h-[90%]"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 text-white w-[90%] mx-auto py-20">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate__animated animate__fadeInUp">
            {t("latestFashionTrends")}{" "}
            <span className="text-yellow-300">{t("trends")}</span>
          </h1>
          <p className="text-lg mb-8 animate__animated animate__fadeInLeft">
            {t("fashionDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#sale"
              className="btn bg-white text-blue-600 border-none hover:bg-gray-100"
            >
              {t("shopNow")}
            </a>
            <a
              href="#collection"
              className="btn bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
            >
              {t("viewCollection")}
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="Fashion"
            className="rounded-2xl shadow-2xl animate__animated animate__zoomIn"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
