import React, { useState } from "react";
import {useFormik} from "formik"
import {registerSchema} from "../schemas"
import VideoPopup from "./VideoPopup";
import Download_Btn from "../Buttons/Download-btn";
import axios from "axios";


const initialValues = {
  name: "",
  email:"",
}

export default function Banner() {
  const [showPopup, setShowPopup] = useState(false);
  const handlePopup = () => setShowPopup(false);

  // form validation
  const {values , errors, touched, handleBlur, handleChange} = useFormik({
    initialValues: initialValues,
    validationSchema: registerSchema,

    onSubmit: (values, action) =>{
      // console.log(values)
      action.resetForm()
    }
   
  })
  console.log(errors)

  //mailchimp
  function handleSubmit(values) {
  const { name, email } = values;
  console.log(values)

  const apiKey = "42bb7227b34304961354d8eb89720d30-us10";

  axios.post(
    `https://us10.api.mailchimp.com/3.0/lists/1ed106f84a/members`,
    {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: name,
      },
    },
    {
      headers: {
        Authorization: `Basic ${apiKey}`,
      },
    }
  );
}


  return (
    <section className=" bg-black border-y-red-600 border-y-4" id="banner">
      <div className=" grid gap-5 items-center w-10/12 mx-auto sm:justify-center lg:grid-cols-2">
        <div
          onClick={() => setShowPopup(true)}
          className=" mb-6 my-14 cursor-pointer w-full sm:w-fit lg:my-16"
        >
          <img
            src="https://www.animonlive.com/wp-content/uploads/2022/12/Lead-Box.jpg"
            alt="Website-maintenance-guide-video"
            width={500}
            className=" rounded-md"
          />
        </div>
        <div className=" mt-6 my-14 w-full lg:my-16">
          <div className=" container rounded-md bg-white p-6">
        
            <form onSubmit={handleSubmit}>
              <div className="flex items-center gap-4 py-3">
                <label htmlFor="name" className=" font-bold w-1/3">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className=" p-2 border-2 rounded-md border-gray-300 w-full"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
               
              </div>
              {errors.name && touched.name ?(<p className=" text-red-600 text-sm">{errors.name}</p>) : null }

              <div className="flex items-center gap-4 py-3">
                <label htmlFor="email" className=" font-bold w-1/3">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className=" p-2 border-2 rounded-md border-gray-300 w-full"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                

              </div>
                {errors.email && touched.email ?(<p className=" text-red-600 text-sm">{errors.email}</p>) : null }
              <div className="items-center gap-4 py-3">
                <Download_Btn />
              </div>
            </form>
         
          </div>
        </div>
      </div>
      <VideoPopup
        onClose={handlePopup}
        visible={showPopup}
        className="md:w-10/12"
      />
    </section>
  );
}
