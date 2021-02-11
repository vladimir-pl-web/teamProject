import React from "react";
import classes from "./profile.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/store";
import {deleteUserTC, User} from "../../redux/reducers/profile";
import SuperButton from "../testComponents/c2-SuperButton/SuperButton";
import { useHistory } from "react-router-dom";
import Preloader from "../preloader/spinner";

const Profile = () => {

  let isLoaded = useSelector<RootStateType, boolean>((state)=>state.profile.loading)
const dispatch = useDispatch()
const history = useHistory()
  
  const logoutHandler = () => {
    dispatch(deleteUserTC());
    history.push('/login')
  }
  const user = useSelector<RootStateType, User>(state => state.profile.user)

  return <div className={classes.Profile}>
    {isLoaded ? <Preloader /> : Object.values(user).map(e => <div>{e}</div>)}
    <SuperButton onClick={logoutHandler}>Logout</SuperButton>
  </div>;
};
export default Profile;
