import React from "react";
import { getUserId, getUserName } from "../reducks/users/selectors";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../reducks/users/operations";

const Home = () => {
  const selector = useSelector(state => state);
  const uid = getUserId(selector);
  const username = getUserName(selector);
  const dispatch = useDispatch();

  return(
    <div>
      <h2>Home</h2>
      <p>ユーザーID:{uid}</p>
      <p>ユーザー名:{username}</p>
      <button onClick={() => dispatch(signOut())}>SIGN OUT</button>
      <p></p>
    </div>

  )
}

export default Home;