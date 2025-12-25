import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "animate.css";

const ShippingInfo = () => {
  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{11}$/, "Phone must be 11 digits")
      .required("Phone is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    postalCode: Yup.string()
      .matches(/^[0-9]{5}$/, "Postal Code must be 5 digits")
      .required("Postal Code is required"),
    notes: Yup.string(),
  });

  const handleSubmit = ({ resetForm }) => {
    toast.success("Shipping information submitted successfully 🚚");
    resetForm();
  };

  return (
    <div className="max-w-xl mx-auto p-5 animate__animated animate__fadeInUp animate__fadeInUpBig">
      <h1 className="text-3xl font-bold text-center mb-6 animate__animated animate__fadeInUp animate__fadeInUpBig animate__delay-1s">
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 3 }}
          whileInView={{ opacity: 1 }}
        >
          Shipping Information
        </motion.div>
      </h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-4 bg-gray-900 p-6 rounded-xl">
          <div>
            <label className="text-white">Full Name</label>
            <Field
              name="fullName"
              className="input w-full bg-white text-black"
              placeholder="Enter your full name"
            />
            <ErrorMessage
              name="fullName"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label className="text-white">Email</label>
            <Field
              name="email"
              type="email"
              className="input w-full bg-white text-black"
              placeholder="Enter your email"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label className="text-white">Phone</label>
            <Field
              name="phone"
              className="input w-full bg-white text-black"
              placeholder="01XXXXXXXXX"
            />
            <ErrorMessage
              name="phone"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label className="text-white">Address</label>
            <Field
              name="address"
              className="input w-full bg-white text-black"
              placeholder="Street, building, floor..."
            />
            <ErrorMessage
              name="address"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label className="text-white">City</label>
            <Field
              name="city"
              className="input w-full bg-white text-black"
              placeholder="City"
            />
            <ErrorMessage
              name="city"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label className="text-white">Postal Code</label>
            <Field
              name="postalCode"
              className="input w-full bg-white text-black"
              placeholder="Postal Code"
            />
            <ErrorMessage
              name="postalCode"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label className="text-white">Notes (Optional)</label>
            <Field
              as="textarea"
              name="notes"
              className="w-full bg-white text-black p-3"
              placeholder="Any delivery notes"
            />
          </div>

          <button type="submit" className="btn btn-success mt-3">
            Submit Shipping Info
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ShippingInfo;
