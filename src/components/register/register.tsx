import { useFormik } from "formik";
import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import Input from "../testComponents/c1-SuperInputText/SuperInputText";
import SuperButton from "../testComponents/c2-SuperButton/SuperButton";
import classes from "./register.module.scss";

type FormikErrorType = {
   email?: string
   password?: string
}


const Register = () => {
  const history = useHistory()
  const  redirectToLogin = () => {
      history.push(`/login`);
  };
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validate: (values) => {
      const errors: FormikErrorType = {};
      if (!values.email) {
        errors.email = 'Email required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.email = 'Password required'
      } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters'
      }
      return errors;
    }
  });

  return (
    <div className={classes.Register}>
      <h2>Register</h2>
      <form className={classes.registerForm}>
        <Input
          type="email"
          name="email"
          error={formik.errors.email}
          touched={formik.touched.email}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Input
          type="password"
          error={formik.errors.password}
          name="password"
          value={formik.values.password}
          touched={formik.touched.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <div className={classes.Btns}>
          <SuperButton type={"submit"} onClick={() => formik.handleSubmit()}>
            Register
          </SuperButton>
          <SuperButton onClick={redirectToLogin} color="blue">
            Login
          </SuperButton>
        </div>
      </form>
    </div>
  );
};
export default Register;
