import React from "react";
import classes from "./newPass.module.scss";
import {useFormik} from 'formik';

type FormikErrorType = {
  password?: string
}

const NewPass:React.FC = () => {
  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validate: (values: FormikErrorType) => {
      const errors: FormikErrorType = {};
      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 7) {
        errors.password = 'Must be 7 characters or more';
      }
      return errors
    },
    onSubmit: values => {
      alert(JSON.stringify(values))
    },
  });
  return <div className={classes.NewPass}>
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
            id="password"
            type="password"
            placeholder={'New Password'}
            {...formik.getFieldProps('password')}
        />
      </div>
      {formik.touched.password && formik.errors.password ? (
          <div style={{color: 'red'}}>{formik.errors.password}</div>
      ) : null}
      <button type="submit">Login</button>
    </form>
  </div>;
};
export default NewPass;
