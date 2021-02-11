import React from "react";
import classes from "./profile.module.scss";
import {useSelector} from "react-redux";
import {RootStateType} from "../../redux/store";
import {User} from "../../redux/reducers/profile";

const Profile = () => {

  const user = useSelector<RootStateType, User>(state => state.profile.user)

  return <div className={classes.Profile}>
    {Object.values(user).map(e => <div>{e}</div>)}
  </div>;
};
export default Profile;
