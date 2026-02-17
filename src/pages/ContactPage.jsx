import React, { useEffect } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "animate.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  useEffect(() => {
    window.scrollTo(0, 0);
    toast.success(t("contactPage"));
  }, [t]);

  const handleSubmit = () => {
    toast.success(t("successMessage"));
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(t("nameRequired")),
    email: Yup.string().email(t("invalidEmail")).required(t("emailRequired")),
    phone: Yup.string()
      .matches(/^[0-9]{11}$/, t("phoneDigits"))
      .required(t("phoneRequired")),
    text: Yup.string(),
    address: Yup.string().required(t("addressRequired")),
    city: Yup.string().required(t("cityRequired")),
  });

  return (
    <div className="w-full h-vh p-4 " dir={isRtl ? "rtl" : "ltr"}>
      <div className="flex flex-col md:flex-row  justify-center gap-10 items-center">
        <div className="form animate__animated animate__fadeInUp animate__fadeInUpBig animate__delay-1s">
          <h1 className="text-4xl text-black text-center py-5 font-bold animate__animated animate__fadeInUp animate__fadeInUpBig">
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 3 }}
              whileInView={{ opacity: 1 }}
            >
              {t("contactUs")}
            </motion.div>
          </h1>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              text: "",
              address: "",
              city: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col gap-5 bg-gray-900 p-5 w-100">
              <h1 className="text-gray-400 text-center">{t("sendMessage")}</h1>
              <div>
                <label className="text-white">{t("name")}</label>
                <Field
                  name="name"
                  type="text"
                  className="input w-full bg-white text-black"
                  placeholder={t("enterYourName")}
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label className="text-white">{t("email")}</label>
                <Field
                  name="email"
                  type="email"
                  className="input w-full bg-white text-black"
                  placeholder={t("enterYourEmail")}
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label className="text-white">{t("phone")}</label>
                <Field
                  name="phone"
                  type="text"
                  className="input w-full bg-white text-black"
                  placeholder={t("enterYourPhone")}
                />
                <ErrorMessage
                  name="phone"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label className="text-white">{t("message")}</label>
                <Field
                  as="textarea"
                  name="text"
                  className="w-full bg-white text-black p-5"
                  placeholder={t("typeYourMessage")}
                />
                <ErrorMessage
                  name="text"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              <button type="submit" className="btn btn-success">
                {t("submit")}
              </button>
            </Form>
          </Formik>
        </div>
        <div className="shipping hidden">
          <h1 className="text-4xl text-black text-center py-5 font-bold animate__animated animate__fadeInUp animate__fadeInUpBig">
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 3 }}
              whileInView={{ opacity: 1 }}
            >
              {t("shippingInformation")}
            </motion.div>
          </h1>
          <Formik
            initialValues={{
              address: "",
              city: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col gap-5 bg-gray-900 p-5 w-100">
              <h1 className="text-gray-400 text-center">{t("sendMessage")}</h1>
              <div>
                <label className="text-white">{t("address")}</label>
                <Field
                  name="address"
                  type="text"
                  className="input w-full bg-white text-black"
                  placeholder={t("enterYourAddress")}
                />
                <ErrorMessage
                  name="address"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label className="text-white">{t("city")}</label>
                <Field
                  name="city"
                  type="text"
                  className="input w-full bg-white text-black"
                  placeholder={t("enterYourCity")}
                />
                <ErrorMessage
                  name="city"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              <button type="submit" className="btn btn-success">
                {t("submit")}
              </button>
            </Form>
          </Formik>
        </div>
        <div
          id="contact"
          className="animate__animated animate__backInLeft animate__backInLeft"
        >
          <div className="flex flex-col justify-center items-center gap-4 mt-10 p-4">
            <div className="card flex flex-row gap-5 bg-gray-100 text-gray-700 p-4 w-full">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(0,0,0,0)",
                    "0 0 12px rgba(99,102,241,0.8)",
                    "0 0 0px rgba(0,0,0,0)",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="p-3 bg-white rounded-xl"
              >
                <Mail size={30} className="text-indigo-600" />
              </motion.div>
              <div>
                <p>{t("emailLabel")}</p>
                <h1 className="font-bold">joesheha8757@gmail.com</h1>
              </div>
            </div>
            <div className="card flex flex-row gap-5 bg-gray-100 text-gray-700 p-4 w-full">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(0,0,0,0)",
                    "0 0 12px rgba(99,102,241,0.8)",
                    "0 0 0px rgba(0,0,0,0)",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="p-3 bg-white rounded-xl"
              >
                <Phone size={30} className="text-indigo-600" />
              </motion.div>
              <div>
                <p>{t("phoneLabel")}</p>
                <h1 className="font-bold">+201092632833</h1>
              </div>
            </div>
            <div className="card flex flex-row gap-5 bg-gray-100 text-gray-700 p-4 w-full">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(0,0,0,0)",
                    "0 0 12px rgba(99,102,241,0.8)",
                    "0 0 0px rgba(0,0,0,0)",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="p-3 bg-white rounded-xl"
              >
                <MapPin size={30} className="text-indigo-600" />
              </motion.div>
              <div>
                <p>{t("locationLabel")}</p>
                <h1 className="font-bold">Menoufia , Egypt</h1>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3 p-3">
              <h1>{t("followUs")}</h1>
              <div className="bg-white rounded-full p-2">
                <Link to="">
                  <FaInstagram
                    size={20}
                    className="text-black cursor-pointer"
                  />
                </Link>
              </div>
              <div className="bg-white rounded-full p-2">
                <Link to="">
                  <FaFacebookSquare
                    size={20}
                    className="text-black cursor-pointer"
                  />
                </Link>
              </div>
              <div className="bg-white rounded-full p-2 ">
                <Link to="">
                  <AiFillTikTok
                    size={20}
                    className="text-black cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
