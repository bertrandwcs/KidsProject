import firebase from "../../utils/firebaseConfig";

export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const ADD_ACTIVITIES = "ADD_ACTIVITIES";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";

export const getActivities = (userUid, kidUid) => {
  return (dispatch) => {
    let data = [];
    const activities = firebase
      .database()
      .ref(`profile/${userUid}/${kidUid}/Activities`);

    activities.once("value", (snapshot) => {
      let previousList = snapshot.val();
      let list = [];
      for (let id in previousList) {
        list.push({ id, ...previousList[id] });
      }
      data.push(...list);
    });
    return dispatch({ type: GET_ACTIVITIES, payload: data });
  };
};

export const addActivity = (data, userUid, kidUid) => {
  console.log(userUid);
  console.log(kidUid);

  const kidsDB = firebase.database().ref(`profile/${userUid}/${kidUid}/`);
  var newActivityUrl = kidsDB.push().key;
  const updates = {};
  updates["/Activities/" + newActivityUrl] = data;

  kidsDB.update(updates);

  return (dispatch) => {
    return dispatch({
      type: ADD_ACTIVITIES,
      payload: { id: newActivityUrl, ...data },
    });
  };
};

export const deleteActivity = (uid, kidId, itemId) => {
  firebase
    .database()
    .ref(`profile/${uid}/${kidId}/Activities/`)
    .child(itemId)
    .remove();

  return (dispatch) => {
    return dispatch({
      type: DELETE_ACTIVITY,
      payload: itemId,
    });
  };
};
