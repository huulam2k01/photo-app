import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Container } from "reactstrap";
import Images from "../../../../constants/images";
import Banner from "../../../../components/Banner";
import { useSelector } from "react-redux";
import PhotoList from "../../components/PhotoList";
import { removePhoto } from "../../photoSlice";
import { useDispatch } from "react-redux";

MainPage.prototypes = {};

function MainPage() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos);
  const history = useHistory();

  // console.log("List of photos:", photos);

  const handlePhotoEditClick = (photo) => {
    console.log("Photo edit", photo);
    const editPhotoUrl = `photos/${photo.id}`;
    history.push(editPhotoUrl);
  };

  const handlePhotoRemoveClick = (photo) => {
    console.log("Photo remove", photo);
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(action);
  };

  return (
    <div className="photo-main">
      <Banner title="Your lover is here" backgroundUrl={Images.anh1} />

      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add">Add new photo</Link>
        </div>

        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage;
