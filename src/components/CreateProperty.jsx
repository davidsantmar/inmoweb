import { useState, useEffect} from 'react';
import '../App.scss';
import { db } from '../firebase/index';
import { Link } from 'react-router-dom';
import { collection, addDoc, doc, setDoc} from 'firebase/firestore';
import { storage} from '../firebase/index';
import {ref, uploadBytes, listAll, getDownloadURL, deleteObject } from 'firebase/storage';
import { addImage } from '../redux/actions/addImageActionCreator';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActionCreator';


function CreateProperty() {
  const propertiesCollectionsRef = collection(db, 'properties');
  const [newRef, setNewRef] = useState(0);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newMeters, setNewMeters] = useState(0);
  const [newRooms, setNewRooms] = useState(0);
  const [newExtras, setNewExtras] = useState('');
  const [newPrice, setNewPrice] = useState(0);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, 'images/');
  const auth = getAuth();
  const dispatch = useDispatch();
  const [imageOrder, setImageOrder] = useState(1);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(login());
    } else {
      console.log('logout');
    }
  });
  const uploadImage = () => {
    if (imageUpload === null) return;
    setImageOrder(0);
    const imageRef = ref(storage, `images/${newRef}/order${imageOrder}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {  //actualización de images en front sin reload page
        setImageList((prev) => [...prev, url]);
        addImage();  //addImage(url);
      });
    });
    setImageOrder(imageOrder + 1); //10 images max 0-9
  };
  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  });
  const createProperty = async () =>{
    await addDoc(propertiesCollectionsRef, {
      ref: Number(newRef), 
      title: newTitle,
      description: newDescription,
      meters: newMeters,
      rooms: newRooms,
      extras: newExtras,
      price: newPrice,
    })
    addImages();
    reset();
  }
  const addImages = async () => {
    await setDoc(doc(db, 'pictures', newRef), {
      refe: Number(newRef), 
      name: imageUpload.name,
    })
  }
  const deletePicture = (url, reference, name) => {
    let pictureRef = storage.refFromURL(url);
    pictureRef.delete()
      .then(() => {
        setImageList(imageList.filter((image) => image !== url));
        deleteObject(ref(storage, `images/${reference}/${name}`));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const reset = () => {
    window.location.reload();
  }
  return (
    <>
    <div className="create--property">
         <div className='sub--title' data-testid='subTitle'>
            <h1>CREATE PROPERTY</h1>
        </div>
        <nav className='admin--container'>
            <Link to='/propertyList' className = 'admin__button nav__link'>
              &nbsp;Property list&nbsp;&#128221;
            </Link> 
            <Link to='/usersList' className = 'admin__button nav__link'>
              &nbsp;Users management&nbsp;&#128105;&#128104;
            </Link> 
        </nav>
      <div className='create--property--container' data-testid='form-container'>
        <input className='ref__field'
          type='number'
          placeholder='Reference'
          id='ref-field'
          data-testid='ref-field'
          onChange={(event) => {
          setNewRef(event.target.value);
        }}></input>
        <input className='title__field'
          type='text'
          placeholder='Title'
          id='title-field'
          data-testid='ref-field' 
          onChange={(event) => {
          setNewTitle(event.target.value);
        }}></input>
        <textarea className='text__field'
          type='text-area'
          id='description-field'
          placeholder='Description'
          data-testid='text-field'
          onChange={(event) => {
            setNewDescription(event.target.value);
          }}></textarea>
        <input className='meters__field'
          type='number'
          placeholder='Meters'
          id='meters-field'
          data-testid='meters-field'
          onChange={(event) => {
            setNewMeters(event.target.value);
        }}></input>
        <input className='rooms__field'
          type='number'
          placeholder='Rooms'
          id='rooms-field'
          data-testid='rooms-field'
          onChange={(event) => {
            setNewRooms(event.target.value);
        }}></input>
        <input className='extras__field'
          type='text'
          placeholder='Extras'
          id='extras-field'
          data-testid='extras-field'
          onChange={(event) => {
            setNewExtras(event.target.value);
        }}></input>
        <input className='price__field'
          type='number'
          placeholder='Price'
          id='price-field'
          data-testid='price-field'
          onChange={(event) => {
            setNewPrice(event.target.value);
        }}></input>
        <div className='select__images'>
          <input  className='pictures__field' id='pictures-field' type='file' 
            onChange={(event) => {setImageUpload(event.target.files[0])}}
          >
          </input>
        </div>
        <button onClick={uploadImage} className='submit__button'>Upload image</button>
          <div>
            {imageList.map((url, i) => {
              return(
              <>
                <div className='picture__container' id='picture-container' key={i}>
                  <img src={url} className='picture__square' id='picture' alt='flat'>
                  </img>
                  <div className='delete__button__container'>
                    <button className='delete__button'
                      onClick={()=>{deletePicture(url, newRef, imageUpload.name)}}
                    > 
                    </button>
                  </div>
                </div>     
              </>
              )
            }
            )}
          </div>
        <button onClick={createProperty} 
          className='submit__button' 
          type='submit'
          data-testid='submit-button'
        >
          POST!
        </button>
      </div>
    </div>
    </>
  );
}

export default CreateProperty;