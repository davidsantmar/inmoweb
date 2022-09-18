import addImageActionTypes from './addImageActionTypes';

export function addImage(image){
    return { type: addImageActionTypes.ADD_IMAGE, image }
}
