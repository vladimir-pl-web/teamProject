import React from "react";
import classes from "./login.module.scss";
import {useDispatch, useSelector} from "react-redux";

import {useFormik} from "formik";
import {setUserDateTC} from "../../redux/reducers/profile";
import {RootStateType} from "../../redux/store";
import {Redirect} from "react-router-dom";

type FormikErrorsType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

const Login = () => {

    const dispatch = useDispatch();

    //here get error response from redux
    const errorLogin = useSelector<RootStateType, string>(state => state.profile.error)
    const isAuthSuccess = useSelector<RootStateType, boolean>(state => state.profile.isAuthSuccess)


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        onSubmit: (values) => {
            dispatch(setUserDateTC(values))
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
            } else if (values.password.length < 4) {
                errors.password = 'Must be 4 characters or more';
            }
            return errors;
        }
    })

    if (isAuthSuccess) {
        return <Redirect to="/profile"/>
    }

    return <div className={classes.Login}>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email
                    ?
                    <div style={{color: "red"}}>{formik.errors.email}</div>
                    :
                    null
                }
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                />
            </div>
            {formik.errors.password && formik.touched.password
                ?
                <div style={{color: "red"}}>{formik.errors.password}</div>
                :
                null
            }
            {errorLogin && <div style={{color: "red"}}>{errorLogin}</div>}
            <div>
                <input
                    type="checkbox"
                    name="rememberMe"
                    onChange={formik.handleChange}
                    checked={formik.values.rememberMe}
                    onBlur={formik.handleBlur}
                />Remember me
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>;
};
export default Login;
