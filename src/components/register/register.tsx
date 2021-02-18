import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {userRegType} from "../../api/api";
import { makeRegistration, onError } from "../../redux/actions/register";
import { RegisterStateType } from "../../redux/reducers/register";
import { RootStateType } from "../../redux/store";
import Message from "../message/message";
import Preloader from "../preloader/spinner";
import Input from "../testComponents/c1-SuperInputText/SuperInputText";
import SuperButton from "../testComponents/c2-SuperButton/SuperButton";
import classes from "./register.module.scss";

type FormikErrorType = {
   email?: string
   password?: string
}


const Register = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const registerStatuses = useSelector<RootStateType, RegisterStateType>((state) => state.register);
  let type = ''
  if(registerStatuses.user){type = 'success'}
  if (registerStatuses.error) { type = 'error' }
  
  const  redirectToLogin = () => {
    history.push(`/login`);
  };
  
  registerStatuses.user && (()=> {
    setTimeout(() => {
      redirectToLogin()
    }, 3000)
  })()

  const onFocus = ()=>{
    dispatch(onError(''))
  }
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(makeRegistration(values));
      formik.resetForm();
    },

    validate: (values: userRegType) => {
      const errors: FormikErrorType = {};
      if (!values.email) {
        errors.email = "Email required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.email = "Password required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
      }
      return errors;
    },
  });

  return (
    <div className={classes.Register}>
      <h2>Register</h2>

      <form className={classes.registerForm}>
        {registerStatuses.loading ? (
          <Preloader />
        ) : (
          <>
            <Input
              type="email"
              error={formik.errors.email}
              touched={formik.touched.email}
              {...formik.getFieldProps("email")}
              onBlur={formik.handleBlur}
              onFocus={onFocus}
            />
            <Input
              type="password"
              error={formik.errors.password}
              {...formik.getFieldProps("password")}
              touched={formik.touched.password}
              onBlur={formik.handleBlur}
              onFocus={onFocus}
            />
          </>
        )}
        <Message
          message={registerStatuses.error || registerStatuses.user}
          type={type}
        />
        <div className={classes.Btns}>
          <SuperButton
            type={"submit"}
            onClick={() => formik.handleSubmit()}
            disabled={registerStatuses.loading}
          >
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

