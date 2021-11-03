import firebase from "../../utils/firebaseConfig";

export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const ADD_ACTIVITIES = "ADD_ACTIVITIES";
export const DELETE_ACTIVITIES = "DELETE_ACTIVITIES";

export const getActivities = (selectedKid) => {
  let data = [];
  firebase.auth().onAuthStateChanged((user) => {
    const activities = firebase
      .database()
      .ref(`profile/${user.uid}/${selectedKid}/Activities/`);

    activities.on("value", (snapshot) => {
      let previousList = snapshot.val();
      let list = [];
      for (let id in previousList) {
        list.push({ id, ...previousList[id] });
      }
      data.push(...list);
    });
  });
  return (dispatch) => {
    return dispatch({ type: GET_ACTIVITIES, payload: data });
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
    return dispatch({ type: ADD_ACTIVITIES, payload: data });
  };
};

export const deleteActivity = (kid, itemId) => {
  let data = [];
  firebase.auth().onAuthStateChanged((user) => {
    firebase
      .database()
      .ref(`profile/${user.uid}/${kid}/Activities`)
      .child(itemId)
      .remove();
  });
  return (dispatch) => {
    return dispatch({ type: DELETE_ACTIVITIES, payload: data });
  };
};
