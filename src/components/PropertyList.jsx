import { useState, useEffect, Fragment } from 'react';
import '../App.scss';
import { db, imagesData, storage } from '../firebase/index';
import { Link } from 'react-router-dom';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { ref, getStorage, getDownloadURL, listAll } from 'firebase/storage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActionCreator';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const propertiesCollectionsRef = collection(db, 'properties');
  const picturesDataCollections = collection(imagesData, 'pictures');
  const [pictures, setPictures] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deletedID, setDeletedId] = useState('');
  const [deletedRef, setDeletedRef] = useState(null);
  const auth = getAuth();
  const dispatch = useDispatch();
  /*const [reference, setReference] = useState(null);
  const [pictureName, setPictureName] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newMeters, setNewMeters] = useState(0);
  const [newRooms, setNewRooms] = useState(0);
  const [newExtras, setNewExtras] = useState('');
  const [newPrice, setNewPrice] = useState(0);
  const [newPicture, setNewPicture] = useState('');
  const [updateModal, setUpdateModal] = useState(false);
  const [updatedId, setUpdatedId] = useState('');
  const [deletedId, setDeletedId] = useState('');
  const [updatedRef, setUpdatedRef] = useState(0);
  const [updatedTitle, setUpdatedTitle] = useState(newTitle);
  const [updatedDescription, setUpdatedDescription] = useState(newDescription);
  const [updatedMeters, setUpdatedMeters] = useState(newMeters);
  const [updatedRooms, setUpdatedRooms] = useState(newRooms);
  const [updatedExtras, setUpdatedExtras] = useState(newExtras);
  const [updatedPrice, setUpdatedPrice] = useState(newPrice);*/
  const picturesNames = [];
  const picturesRefs = [];
  useEffect(() => {
    const getProperties = async () => {
      const data = await getDocs(propertiesCollectionsRef);
      setProperties(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
      const picturesData = await getDocs(picturesDataCollections);
      setPictures(picturesData.docs.map((doc) => ({...doc.data(), id:doc.id})));
    }
    getProperties();  
  }, []);
  onAuthStateChanged(auth, (user) => {  //keep user after refresh
    if (user) {
      const uid = user.uid;
      dispatch(login());
    } else {
      console.log('logout');
    }
  });
    pictures.map((picture) => {
        picturesNames.push(picture.name);
        picturesRefs.push(picture.refe);
    })
  const showPictures = (reference) => {
        for (let i = 0; i <= picturesRefs.length; i ++){
            if (picturesRefs[i] === reference){
                const storage = getStorage();
                const listRef = ref(storage, `images/${picturesRefs[i]}/`);
                listAll(listRef)
                    .then((res) => {
                    res.items.forEach((itemRef) => {
                        getDownloadURL(itemRef).then(function(url) {
                            const rootElement = document.getElementById(reference);
                            const element = document.createElement('img');
                            rootElement.append(element);
                            element.style.border = 'solid 2px green';
                            element.style.height = '5rem';
                            element.style.width = '5rem';
                            element.style.borderRadius = '10px';
                            element.style.marginRight = '1rem';
                            element.src = url;
                        });
                    })
                })
            }
        }
  }
  /* -------- UPDATE FUNCTIONS -----------
  const updateProperty = async (id) => {
    const propertyDoc = doc(db, 'properties', id);  //documento de la coleccion
    const newFields = {
      title: newTitle,
      description: newDescription,
      meters: newMeters,
      rooms: newRooms,
      extras: newExtras,
      price: newPrice,
      picture: newPicture,
    };  //actualización 
    await updateDoc(propertyDoc,newFields);
  }
  const handleUpdateModalClose = (e) => {
        setUpdateModal(false);
    }
    const handleUpdateModal = (id, ref, title, description, meters, rooms, extras, price) => {      
        setUpdateModal(true);
        updateFields(id, ref, title, description, meters, rooms, extras, price);
    }
    const updateFields = (id, ref, title, description, meters, rooms, extras, price) => {
        setUpdatedId(id);
        setUpdatedRef(ref);
        setUpdatedTitle(title);
        setUpdatedDescription(description);
        setUpdatedMeters(meters);
        setUpdatedRooms(rooms);
        setUpdatedExtras(extras);
        setUpdatedPrice(price);
    }
    */
    const actionModal = (id, refe) => {
        setDeletedId(id);
        setDeletedRef(refe);
        setShowModal(true);
        deleteImages(refe);  
    }
    const deleteProperty = async (id, refe) => {
        const propertyDoc = doc(db, (`properties/${id}/`));   
        await deleteDoc(propertyDoc);
        deletePictureData(refe);  //delete picturesData (refs)
        deleteImages(refe);       //delete images
        reset();
    }
    const deletePictureData = async (refe) => {
        const pictureDoc = doc(db, (`pictures/${refe}/`));   
        await deleteDoc(pictureDoc);
    }
    const deleteImages =  (refe) => {
        console.log(refe);
        // Create a root reference
        let storageRef = storage.ref();
        // Create a reference 
        let imageRef = storageRef.child(`images/${refe}/`);
        console.log(imageRef)
        // Now we get the references of these files
        imageRef.listAll().then(function (result) {
            result.items.forEach(function (file) {
                file.delete();
            });
        }).catch(function (error) {
            alert('An error has ocurred.')
        });    
    }
    const handleDeleteModalClose = (e) => {
        setShowModal(false);
    }
    const reset = () => {
        window.location.reload();
    }
    return (
        <>
            <div className='property--list'>
                <div className='sub--title' data-testid='subTitle'>
                    <h1>PROPERTY LIST</h1>
                    <div className='reset' onClick={reset}></div>
                </div>
                <nav className='admin--container'>
                    <Link to='/createProperty' className = 'admin__button nav__link'>
                        &nbsp;Create property&nbsp;&#127968;
                    </Link> 
                    <Link to='/usersList' className = 'admin__button nav__link'>
                        &nbsp;Users management&nbsp;&#128105;&#128104;
                    </Link> 
                </nav>
                <div className='properties--container'>
                {properties.sort(function (a, b) {
                    return a.ref - b.ref;    
                })
                .map((property) => { 
                    showPictures(property.ref)
                return (
                <Fragment key={property.id}>
                    <div className='property__card' id='card'>
                        <span>Reference: {property.ref}</span>
                        <span>Title: {property.title}</span>
                        <span>Description: {property.description}</span>
                        <span>Meters: {property.meters}</span>
                        <span>Rooms: {property.rooms}</span>
                        <span>Extras: {property.extras}</span>
                        <span>Price: {property.price}</span>
                        <div className='footer__card__container'>
                            <div className='properties__pictures' id={property.ref}>
                            </div>
                            {/* --------   UPDATE TO DEVELOP -----------
                            <button className='update__button' 
                                onClick={() => {handleUpdateModal(property.id, property.ref, property.title, 
                                property.description, property.meters, property.rooms, property.extras, 
                                property.price)}}
                            >
                                Update property<span className='check__symbol'>&nbsp;&#9989;</span>
                            </button>*/}
                        <div>
                            <div className='trash__div'>
                                <button className='delete__button' 
                                    onClick={() => {actionModal(property.id, property.ref)}}
                                >
                                </button>
                            </div>
                        </div>  
                    </div>
                    <div hidden={!showModal} className='modal'> 
                        <div className='modal__pa__background' onClick={handleDeleteModalClose}>
                            <div className='modal__pa__card'>
                                <h2 className='modal__pa__title'>Are you sure?</h2>
                                <div className='modal--buttons--container'>
                                    <button className='modal__delete__button' 
                                        onClick={() => {deleteProperty(deletedID, deletedRef)}}
                                    >
                                        Delete
                                    </button>
                                    <button className='modal__cancel__button'
                                        onClick={reset}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div hidden={!updateModal} className='update--modal' >
                            <div className='modal__update__background' >
                                <div className='modal__update__card'>
                                    <div className='inputs__container'>
                                        <h3>Reference: {updatedRef}</h3>
                                        <input className='update__title' defaultValue={updatedTitle} id='title' type='text'
                                            onChange={(event) => {setNewTitle(event.target.value);}} />
                                        <textarea className='update__description' defaultValue={updatedDescription} type='textarea' 
                                            onChange={(event) => {setNewDescription(event.target.value);}} />
                                        <input className='update__meters' defaultValue={updatedMeters} type='number'
                                            onChange={(event) => {setNewMeters(event.target.value);}} />
                                        <input className='update__rooms' defaultValue={updatedRooms} type='number'
                                            onChange={(event) => {setNewRooms(event.target.value);}}/>
                                        <input className='update__extras' defaultValue={updatedExtras} type='text'
                                            onChange={(event) => {setNewExtras(event.target.value);}}/>
                                        <input className='update__price' defaultValue={updatedPrice}  type='number'
                                            onChange={(event) => {setNewPrice(event.target.value);}}/>
                                    </div>
                                    <div className='modal--buttons--container'>
                                        {
                                        <button className='modal__update__button' onClick={() => {updateProperty(updatedId)}}>Update</button>
                                        <button className='modal__update__button' onClick={handleUpdateModalClose}>Close</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </Fragment>
                );
                })}
            </div>
        </div>
        </>
    );
};

export default PropertyList;