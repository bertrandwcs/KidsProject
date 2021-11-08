import firebase from "../../utils/firebaseConfig";

export const GET_KIDS = "GET_KIDS";
export const ADD_KID = "ADD_KID";
export const ADD_KID_SELECTED = "ADD_KID_SELECTED";
export const DELETE_ACTIVITIES = "DELETE_ACTIVITIES";

export const getKids = () => {
  let data = [];
  firebase.auth().onAuthStateChanged((Currentuser) => {
    if (Currentuser) {
      const profile = firebase.database().ref(`profile/${Currentuser.uid}`);
      profile.once("value", (snapshot) => {
        let previousList = snapshot.val();
        let list = [];
        for (let id in previousList) {
          list.push({ id, ...previousList[id] });
        }
        data.push(...list);
      });
    }
  });

  return (dispatch) => {
    return dispatch({ type: GET_KIDS, payload: data });
  };
};

export const addKid = (data, firstname, uid) => {
  console.log("pq tu joues??");

  const kidsDB = firebase.database().ref(`profile/${uid}/`).child(firstname);
  kidsDB.update(data);

  return (dispatch) => {
    return dispatch({ type: ADD_KID, payload: { id: firstname, ...data } });
  };
};

export const addKidSelected = (kidSelected) => {
  return (dispatch) => {
    return dispatch({ type: ADD_KID_SELECTED, payload: kidSelected });
  };
};

/* export const addActivity = (data, firstName) => {
  firebase.auth().onAuthStateChanged((user) => {
    const kidsDB = firebase.database().ref(`profile/${user.uid}/${firstName}/`);
    var newActivityUrl = kidsDB.push().key;
    const updates = {};
    updates["/Activities/" + newActivityUrl] = data;

    kidsDB.update(updates);
  });

  return (dispatch) => {
    return dispatch({
      type: ADD_ACTIVITIES,
      payload: data,
    });
  };
}; */
