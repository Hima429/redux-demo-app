import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../users/userSlice";

const UserDetailsPage = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.userData);
  
  useEffect(() => {
    dispatch(getUserDetails());
  }, []);

  return (
    <div className="users">
      {console.log(userDetails)}
      <p>hai</p>
      {userDetails?.users?.map((user) => (
        <div className="user">{user?.firstName}</div>
      ))}
    </div>
  );
};

export default UserDetailsPage;
