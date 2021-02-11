import React, {useEffect, useState} from 'react'
import classes from './passRecover.module.scss'
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {sendMessageToUser, setErrorAC, setMessageSendAC} from '../../redux/reducers/password';
import {RootStateType} from '../../redux/store';
import Preloader from '../preloader/spinner';
import SuperInputText from '../testComponents/c1-SuperInputText/SuperInputText';
import SuperButton from '../testComponents/c2-SuperButton/SuperButton';

const PassRecover: React.FC = React.memo(() => {
    const dispatch = useDispatch();
    const isMessageSend = useSelector<RootStateType, boolean>(state => state.password.isMessageSend)
    const isError = useSelector<RootStateType, string | null>(state => state.password.isError)
    const isFetching = useSelector<RootStateType, boolean>(state => state.password.isFetching)
    const [timeForNextTry, setTimeForNextTry] = useState<number>(60)

    //for timer after send message, for try again
    useEffect(() => {
        if (isMessageSend) {
            const id = setTimeout(() => {
                setTimeForNextTry(timeForNextTry - 1)
            }, 1000)
            if (timeForNextTry === 0) {
                setTimeForNextTry(60)
                clearTimeout(id)
                dispatch(setMessageSendAC(false))
            }
            return () => {
                clearTimeout(id)
            }
        } else {
            return
        }
    }, [timeForNextTry, isMessageSend, dispatch, isFetching])

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
            dispatch(sendMessageToUser(values.email))
        },
    });

    //cancel error, if server send good request after bad
    const cancelError = () => {
        if (isError) {
            dispatch(setErrorAC(null))
        }
    }
    //preloader
    if (isFetching) {
        return <div className={classes.PassRecover}><Preloader/></div>
    }
    //next try send message
    if (isMessageSend) {
        return (
            <div className={classes.PassRecover}>
                <span>Email sent, check your email </span>
                <br/>
                <span>You can try again after: {timeForNextTry}</span>
            </div>
        )
    }

    return (
        <div className={classes.PassRecover}>
            <form onSubmit={formik.handleSubmit}>
                RECOVER
                <div>
                    <SuperInputText
                        id="email"
                        type="email"
                        placeholder={'Email'}
                        onFocus={cancelError}
                        {...formik.getFieldProps('email')}
                    />
                </div>
                {formik.touched.email && formik.errors.email ? (
                    <div style={{color: 'red'}}>{formik.errors.email}</div>
                ) : null}
                <SuperButton type="submit">Send Email</SuperButton>
                {isError ? <div style={{color: 'red'}}>{isError}</div> : <></>}
            </form>
        </div>
    )
})
export default PassRecover

//Types
type FormikErrorType = {
    email?: string
}