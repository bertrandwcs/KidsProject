import React, { useState, useContext, useEffect } from "react";
import firebase from "../utils/firebaseConfig";
import { storage } from "../utils/firebaseConfig";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import { UidContext } from "../UidContext";
import TextField from "@material-ui/core/TextField";

const UploadPictures = ({ profile, kidUser }) => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState("");
  const [comment, setComment] = useState("");
  const [pictureDate, setPictureDate] = useState(Date.now());

  const uid = useContext(UidContext);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setFileName(e.target.files[0].name);
      setPictureDate(e.target.files[0].lastModified);
    }
  };

  useEffect(() => {
    if (image !== null) {
      const uploadTask = storage.ref(`images/${uid}/${image.name}`).put(image);
      uploadTask.on(
        "state changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref(`images/${uid}`)
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setUrl(url);
            });
        }
      );
    }
  }, [image]);

  const createImage = () => {
    const kidsDB = firebase.database().ref(`profile/${uid}/${kidUser}/`);

    const postUrl = {
      url,
      comment,
      postTime: pictureDate,
      fichier: fileName,
    };
    var newPostUrl = kidsDB.push().key;
    const updates = {};
    updates["/pictures/" + newPostUrl] = postUrl;

    kidsDB.update(updates);
    setUrl("");
    setFileName("");
    setComment("");
    alert("picture added to your tree!");
  };

  return (
    <div className="container-upload-pictures">
      <div className="container-form-grid">
        <div className="openfile-button">
          <Button variant="contained" color="primary" component="label">
            <input type="file" onChange={handleChange} hidden />
            Open file
          </Button>
          {fileName && (
            <input
              className="input-file"
              value={fileName}
              onChange={(e) => setUrl(e.target.value)}
            />
          )}
        </div>
        <div className="upload-button">
          <LinearProgress
            variant="determinate"
            value={progress}
            max="100"
            color="secondary"
          />
        </div>

        <div>
          {url && (
            <div className="previsualisation-container-grid">
              <img className="selected-img" src={url} alt="ProfilePicture" />
              <span className="trunk"></span>
              <p>{comment}</p>
            </div>
          )}
        </div>
        <div className="comment">
          <TextField
            id="outlined-multiline-static"
            label="tell me more!"
            multiline
            rows={6}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            variant="filled"
          ></TextField>
        </div>
        <Button onClick={createImage} variant="contained" color="primary">
          Create
        </Button>
      </div>
    </div>
  );
};

export default UploadPictures;
