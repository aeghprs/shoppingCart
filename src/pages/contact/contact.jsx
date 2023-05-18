import { ErrorMessage, Field, Formik, Form } from "formik";
import * as yup from "yup";

export const Contact = () => (
  <div>
    <div className="mt-24 text-center text-5xl">
      <h1>Contact</h1>
    </div>{" "}
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validationSchema={yup.object().shape({
        name: yup.string().required("Please enter your name"),
        email: yup
          .string()
          .required("Please enter your email")
          .email("Please enter a valid email"),

        message: yup.string().required("Please enter message"),
      })}
      onSubmit={(values, actions) => {
        actions.resetForm();
      }}
    >
      <Form>
        <div className="flex flex-cols-2 flex-col-reverse  justify-center px-20 py-8 md:flex-row ">
          <div className="lg:w-1/2 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <div className=" mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <Field
                type="name"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300  focus:ring-1 focus:ring-[#8A2BE2] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <p className="text-[#8A2BE2] center font-normal">
                <ErrorMessage name="name" />
              </p>
            </div>
            <div className=" mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300  focus:ring-1 focus:ring-[#8A2BE2] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <p className="text-[#8A2BE2] center font-normal">
                <ErrorMessage name="email" />
              </p>
            </div>

            <div className=" mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <Field
                type="message"
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:ring-1 focus:ring-[#8A2BE2] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
              <p className="text-[#8A2BE2] center font-normal">
                <ErrorMessage name="message" />
              </p>
            </div>
            <button className="text-white bg-[#8A2BE2] border-0 py-2 px-6 focus:outline-none hover:bg-black  rounded-md  text-lg hover:-translate-y-0.5 delay-100 transition ease-in-out">
              Submit
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  </div>
);
