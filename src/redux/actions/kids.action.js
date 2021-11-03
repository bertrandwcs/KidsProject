import firebase from "../../utils/firebaseConfig";

export const GET_KIDS = "GET_KIDS";
export const ADD_KID = "ADD_KID";
export const ADD_KID_SELECTED = "ADD_KID_SELECTED";
export const ADD_ACTIVITIES = "ADD_ACTIVITIES";
export const DELETE_ACTIVITIES = "DELETE_ACTIVITIES";

export const getKids = () => {
  const getData = () => {
    let dataKid = [];
    firebase.auth().onAuthStateChanged((Currentuser) => {
      if (Currentuser) {
        const profile = firebase.database().ref(`profile/${Currentuser.uid}`);
        profile.on("value", (snapshot) => {
          let previousList = snapshot.val();
          let list = [];
          for (let id in previousList) {
            list.push({ id, ...previousList[id] });
          }
          dataKid.push(...list);
        });
      }
    });
    return dataKid;
  };

  let dataResult = getData();
  return (dispatch) => {
    return dispatch({ type: GET_KIDS, payload: dataResult });
  };
};

export const addKid = (data, firstname) => {
  firebase.auth().onAuthStateChanged((user) => {
    const kidsDB = firebase
      .database()
      .ref(`profile/${user.uid}/`)
      .child(firstname);
    kidsDB.update(data);
  });

  return (dispatch) => {
    return dispatch({ type: ADD_KID, payload: { id: firstname, ...data } });
  };
};

export const addKidSelected = (kidSelected) => {
  return (dispatch) => {
    return dispatch({ type: ADD_KID_SELECTED, payload: kidSelected });
  };
};

export const addActivity = (data, firstName) => {
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
};
