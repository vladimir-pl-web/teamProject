import React from 'react'
import classes from './passRecover.module.scss'
import {useFormik} from 'formik';

type FormikErrorType = {
    email?: string
}

const PassRecover: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate: (values: FormikErrorType) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors
        },
        onSubmit: values => {
            alert(JSON.stringify(values))
        },
    });
    return (
        <div className={classes.PassRecover}>
            RECOVER
            <form onSubmit={formik.handleSubmit}>
                <div>
                <input
                    id="email"
                    type="email"
                    placeholder={'Email'}
                    {...formik.getFieldProps('email')}
                />
                </div>
                {formik.touched.email && formik.errors.email ? (
                    <div style={{color: 'red'}}>{formik.errors.email}</div>
                ) : null}
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default PassRecover