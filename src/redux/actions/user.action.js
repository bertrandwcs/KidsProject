import firebase from "../../utils/firebaseConfig";

export const GET_USER = "GET_USER";

export const getUser = () => {
  let data = [];
  firebase.auth().onAuthStateChanged((user) => {
    data.push(user.uid);
  });
  return (dispatch) => {
    console.log(data);
    return dispatch({ type: GET_USER, payload: data });
  };
};
