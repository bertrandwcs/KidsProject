import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../UidContext";
import firebase from "../utils/firebaseConfig";
import Button from "@material-ui/core/Button";
import { storage } from "../utils/firebaseConfig";

const DisplayTree = ({ item }) => {
  const uid = useContext(UidContext);
  const itemId = item.id;

  const [picturesList, setPictruresList] = useState([]);

  const dateParser = (millis) => {
    const d = new Date(millis);
    return d.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    const profile = firebase
      .database()
      .ref(`profile/${uid}/${itemId}/pictures`);

    profile.on("value", (snapshot) => {
      let previousList = snapshot.val();
      let list = [];
      for (let id in previousList) {
        list.push({ id, ...previousList[id] });
      }
      setPictruresList(list);
    });
  }, [uid, itemId]);

  return (
    <div className="display-tree">
      <div className="container-grid">
        <div className="cards-grid1">
          {picturesList
            .sort((a, b) => a.postTime - b.postTime)
            .map((elem) => {
              return (
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    className="button-delete"
                    onClick={() => {
                      firebase
                        .database()
                        .ref(`profile/${uid}/${itemId}/pictures/`)
                        .child(elem.id)
                        .remove();
                      storage.ref(`images/${uid}/${elem.fichier}`).delete();
                    }}
                  >
                    Delete
                  </Button>
                  <img className="img-card" src={elem.url} alt="pictures" />
                </div>
              );
            })}
        </div>
        <span className="trunk"></span>
        <div className="cards-grid2">
          {picturesList
            .sort((a, b) => a.postTime - b.postTime)
            .map((elem) => {
              return (
                <div className="info">
                  <p>{dateParser(elem.postTime)}</p>
                  <p>" {elem.comment} "</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DisplayTree;
