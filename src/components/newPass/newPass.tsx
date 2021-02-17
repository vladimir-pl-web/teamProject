import React from 'react';
import classes from './newPass.module.scss';
import {useFormik} from 'formik';
import {Redirect, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setNewPassword} from '../../redux/reducers/password';
import {RootStateType} from '../../redux/store';
import Preloader from '../preloader/spinner';
import SuperInputText from '../testComponents/c1-SuperInputText/SuperInputText';
import SuperButton from '../testComponents/c2-SuperButton/SuperButton';

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

    // if success password changed
    if (isNewPasswordSet) {
        return <Redirect to={'/login'}/>
    }
    //Preloader
    if (isFetching) {
        return <div className={classes.NewPass}><Preloader/></div>
    }
    return <div className={classes.NewPass}>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <SuperInputText
                    id="password"
                    type="password"
                    placeholder={'New Password'}
                    {...formik.getFieldProps('password')}
                />
            </div>
            {formik.touched.password && formik.errors.password ? (
                <div style={{color: 'red'}}>{formik.errors.password}</div>
            ) : null}
            <SuperButton type="submit" color='blue'>Set New Password</SuperButton>
            {isError ? <div style={{color: 'red'}}>{isError}</div> : <></>}
        </form>
    </div>;
};
export default NewPass;

//Types
type FormikErrorType = {
    password?: string
}
type ParamTypes = {
    token: string
}
