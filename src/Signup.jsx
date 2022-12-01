import React from 'react';
import { useFormik } from "formik"
import * as Yup from "yup"
import "./Signup.css"

export default function Signup() {

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, "Max 15 letters")
                .required("Required"),

            lastName: Yup.string()
                .max(15, "Max 15 letters")
                .required("Required"),

            email: Yup.string()
                .email("Enter valid email")
                .required("Required")
        }),
        
        onSubmit: (values) => {
            alert("Grymmt! Kolla consollen för värden")
            console.log('Dina värden är loggade! Grattis!', formik.values);
        }
    })


  return (
    <form onSubmit={formik.handleSubmit}>
        <div className='input-container'>
            <input 
                type="text"
                name='firstName'
                id='firstname'
                placeholder='First Name'
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
            />
            {formik.errors.firstName ? <p>{formik.touched.firstName && formik.errors.firstName}</p> : null }

            <input 
                type="text"
                name='lastName'
                id='lastname'
                placeholder='Last Name'
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
            />
            {formik.errors.lastName ? <p>{formik.touched.lastName && formik.errors.lastName}</p> : null }

            <input 
                type="text"
                name='email'
                id='email'
                placeholder='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
            />
            {formik.errors.email ? <p>{formik.touched.email && formik.errors.email}</p> : null }

        </div>
        <button>
            Submit
        </button>
    </form>
  )
}
