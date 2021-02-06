import { useFormik } from "formik";
import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import Input from "../testComponents/c1-SuperInputText/SuperInputText";
import SuperButton from "../testComponents/c2-SuperButton/SuperButton";
import classes from "./register.module.scss";

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

  });

  return (
    <div className={classes.Register}>
      <h2>Register</h2>
      <form className={classes.registerForm}>
        <Input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <Input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
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
