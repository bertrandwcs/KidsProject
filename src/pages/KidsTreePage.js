import React, { useContext, useEffect, useState } from "react";
import DisplayTree from "../components/DisplayTree";
import UploadPictures from "../components/UploadPictures";
import { UidContext } from "../UidContext";
import firebase from "../utils/firebaseConfig";
import Button from "@material-ui/core/Button";

const KidsTreePage = () => {
  const uid = useContext(UidContext);

  const [profile, setProfile] = useState([]);
  const [selectedkid, setSelectedKid] = useState("");
  const [buttonPop, setButtonPop] = useState(false);

  const handleButton = () => {
    setButtonPop(!buttonPop);
  };

  useEffect(() => {
    const profile = firebase.database().ref(`profile/${uid}`);

    profile.on("value", (snapshot) => {
      let previousList = snapshot.val();
      console.log(previousList);
      let list = [];
      for (let id in previousList) {
        list.push({ id, ...previousList[id] });
        setSelectedKid(list === undefined ? null : list[0].id);
      }
      setProfile(list);
      console.log(list);
    });
  }, [uid]);

  return (
    <div className="container-kids-tree-page">
      <h1>Kid's Tree</h1>
      <Button
        className="button-add-a-picture"
        onClick={handleButton}
        variant="contained"
        color="primary"
        component="label"
      >
        shoot your kids!
      </Button>
      {buttonPop && (
        <div className="show-upload-pop">
          <div className="upload-content">
            <Button
              className="button-exit"
              onClick={handleButton}
              variant="outlined"
              color="primary"
              component="label"
            >
              Close
            </Button>
            <UploadPictures profile={profile} kidUser={selectedkid} />
          </div>
        </div>
      )}
      <div className="button-container">
        {profile.map((item, index) => (
          <button
            className={
              selectedkid === item.id
                ? "button-style-selected"
                : "button-style-unselected"
            }
            onClick={() => setSelectedKid(item.id)}
          >
            {item.id}
          </button>
        ))}
      </div>
      <div>
        {profile.map((item) => {
          if (item.id === selectedkid) {
            return <DisplayTree item={item} profile={profile} />;
          } else {
            return "";
          }
        })}
      </div>
    </div>
  );
};

export default KidsTreePage;
