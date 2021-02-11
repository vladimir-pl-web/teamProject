import React from "react";
import classes from "./login.module.scss";
import { useDispatch, useSelector } from "react-redux";

import { useFormik } from "formik";
import { setUserDateTC } from "../../redux/reducers/profile";
import { RootStateType } from "../../redux/store";
import { Redirect, useHistory } from "react-router-dom";
import Input from "../testComponents/c1-SuperInputText/SuperInputText";
import Preloader from "../preloader/spinner";
import Message from "../message/message";
import SuperButton from "../testComponents/c2-SuperButton/SuperButton";
import SuperCheckbox from "../testComponents/c3-SuperCheckbox/SuperCheckbox";

type FormikErrorsType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

const Login = () => {

    const dispatch = useDispatch();

    //here get error response from redux
    const errorLogin = useSelector<RootStateType, string>(state => state.profile.error)
    const isLoaded = useSelector<RootStateType, boolean>(state => state.profile.loading)
    const message = useSelector<RootStateType, string>(state => state.profile.user.message)
    const isAuthSuccess = useSelector<RootStateType, boolean>(state => state.profile.isAuthSuccess)

    const history = useHistory();

    const redirectToProfile = () => {
        history.push(`/`);
    };
    const redirectToRegistration = () => {
        history.push(`/register`);
    };

    isAuthSuccess && (() => {
        setTimeout(() => {
            redirectToProfile()
        }, 3000)
    })()

    let type = ''
    if (message) { type = 'success' }
    if (errorLogin) { type = 'error' }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        onSubmit: (values) => {
            dispatch(setUserDateTC(values));
        },
        validate: (values) => {
            const errors: FormikErrorsType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 8) {
                errors.password = 'Must be 8 characters or more';
            }
            return errors;
        }
    })

    // if (isAuthSuccess) {
    //     return <Redirect to="/profile" />
    // }

    return (
        <div className={classes.Login}>
            <h2>Login</h2>
            <form onSubmit={formik.handleSubmit} className={classes.Loginform}>
                {isLoaded ? (
                    <Preloader />
                ) : (
                        <>
                            <Input
                                type="email"
                                placeholder="Email"
                                error={formik.errors.email}
                                touched={formik.touched.email}
                                {...formik.getFieldProps("email")}
                                onBlur={formik.handleBlur}
                            />
                            <Input
                                type="password"
                                placeholder="Password"
                                error={formik.errors.password}
                                {...formik.getFieldProps("password")}
                                touched={formik.touched.password}
                                onBlur={formik.handleBlur}
                            />
                        </>
                    )}
                <Message message={errorLogin || message} type={type} />
                <div className={classes.BtnWrapper}>
                    <SuperCheckbox
                        type="checkbox"
                        {...formik.getFieldProps("rememberMe")}
                        onBlur={formik.handleBlur}
                    />
                    <span>Remember me</span>
                    <SuperButton
                        type={"submit"}
                        onClick={() => formik.handleSubmit()}
                        disabled={isLoaded}
                    >
                        Login
            </SuperButton>
                    <SuperButton onClick={redirectToRegistration} color="blue">
                        Register
            </SuperButton>
                </div>
            </form>
        </div>
    );
};
export default Login;
