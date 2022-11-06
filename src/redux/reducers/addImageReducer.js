import addImageActionTypes from "../actions/addImageActionTypes";

function addImageReducer(image, action) {
  const images = [];
  switch (action.type) {
    case addImageActionTypes.ADD_IMAGE:
        images.push(image);
      return images;
    default:
      return images;
  }
}

export default addImageReducer;