import React from 'react';
import classes from './newPass.module.scss';
import {useFormik} from 'formik';
import {Redirect, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setNewPassword} from '../../redux/reducers/password';
import {RootStateType} from '../../redux/store';
import Preloader from '../preloader/spinner';

type FormikErrorType = {
    password?: string
}
type ParamTypes = {
    token: string
}

const NewPass: React.FC = () => {
    const dispatch = useDispatch()
    const isFetching = useSelector<RootStateType, boolean>(state => state.password.isFetching)
    const isError = useSelector<RootStateType, string | null>(state => state.password.isError)
    const isNewPasswordSet = useSelector<RootStateType, boolean>(state => state.password.isNewPasswordSet)
    const {token} = useParams<ParamTypes>()
    const formik = useFormik({
        initialValues: {
            password: '',
        },
        validate: (values: FormikErrorType) => {
            const errors: FormikErrorType = {};
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 8) {
                errors.password = 'Must be 8 characters or more';
            }
            return errors
        },
        onSubmit: values => {
            dispatch(setNewPassword(values.password, token))
        },
    });

    if (isNewPasswordSet) {
        return <Redirect to={'/login'}/>
    }
    if (isFetching) {
      return <div className={classes.NewPass}><Preloader/></div>
    }
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
            <button type="submit">Set New Password</button>
            {isError? <div style={{color: 'red'}}>{isError}</div> : <></>}
        </form>
    </div>;
};
export default NewPass;
