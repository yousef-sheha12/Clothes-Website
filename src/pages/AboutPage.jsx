// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  useEffect(() => {
    window.scrollTo(0, 0);
    toast.success(t("aboutPage"));
  }, [t]);

  return (
    <div className="w-full min-h-screen" dir={isRtl ? "rtl" : "ltr"}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white p-4">
          <h1 className="text-center text-3xl font-bold animate__animated animate__fadeInUp mb-10">
            {t("about")}
          </h1>

          <div className="p-6 max-w-3xl mx-auto leading-relaxed text-gray-800 border rounded-xl shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
              {t("privacyPolicy")}
            </h2>

            <p className="mb-6">{t("privacyIntro")}</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              {t("dataCollectTitle")}
            </h3>
            <ul className={`list-disc ${isRtl ? "pr-6" : "pl-6"} mb-4`}>
              <li>{t("fullName")}</li>
              <li>{t("email")}</li>
              <li>{t("phone")}</li>
              <li>{t("address")}</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              {t("dataUsageTitle")}
            </h3>
            <p className="mb-4">{t("fashionDescription")}</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              {t("dataProtectTitle")}
            </h3>
            <p className="mb-4">{t("dataProtectDesc")}</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              {t("dataSharingTitle")}
            </h3>
            <p className="mb-4">{t("dataSharingDesc")}</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              {t("cookiesTitle")}
            </h3>
            <p className="mb-4">{t("cookiesDesc")}</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              {t("userRightsTitle")}
            </h3>
            <p className="mb-4">{t("policyChangesDesc")}</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              {t("contactUsSection")}
            </h3>
            <p className="mb-4">{t("contactUsEmail")}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
