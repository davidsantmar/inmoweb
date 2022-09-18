import { useState, useEffect } from 'react';
import '../App.scss';
import { db } from '../firebase/index';
import { Link } from 'react-router-dom';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { ref, listAll, getStorage, getDownloadURL } from 'firebase/storage';



const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const propertiesCollectionsRef = collection(db, 'properties');
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newMeters, setNewMeters] = useState(0);
  const [newRooms, setNewRooms] = useState(0);
  const [newExtras, setNewExtras] = useState('');
  const [newPrice, setNewPrice] = useState(0);
  const [newPicture, setNewPicture] = useState('');
  const [showModal, setShowModal] = useState(false); 
  const [updateModal, setUpdateModal] = useState(false);
  const [updatedId, setUpdatedId] = useState('');
  const [deletedId, setDeletedId] = useState('');
  const [updatedRef, setUpdatedRef] = useState(0);
  const [updatedTitle, setUpdatedTitle] = useState(newTitle);
  const [updatedDescription, setUpdatedDescription] = useState(newDescription);
  const [updatedMeters, setUpdatedMeters] = useState(newMeters);
  const [updatedRooms, setUpdatedRooms] = useState(newRooms);
  const [updatedExtras, setUpdatedExtras] = useState(newExtras);
  const [updatedPrice, setUpdatedPrice] = useState(newPrice);

  useEffect(() => {
    const getProperties = async () => {
      const data = await getDocs(propertiesCollectionsRef);
      setProperties(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
    }
    getProperties();  
  }, []);

  const listing = () => {
    const storage = getStorage();
    getDownloadURL(ref(storage, 'images/101/Bandera_de_España.png'))
        .then((url) => {
        // Or inserted into an <img> element
        const img = document.getElementById('picture');
        console.log(url);
        img.setAttribute('src', url);
        })
        .catch((error) => {
            alert('An error has ocurred.');
    });
  }

  /*const updateProperty = async (id) => {
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
  }*/
    const deleteProperty = async (id) => {
        const propertyDoc = doc(db, 'properties', id);
        await deleteDoc(propertyDoc);
    }
    const handleDeleteModalClose = (e) => {
        setShowModal(false);
    }
    /*const handleUpdateModalClose = (e) => {
        setUpdateModal(false);
    }
    const handleUpdateModal = (id, ref, title, description, meters, rooms, extras, price) => {      
        setUpdateModal(true);
        updateFields(id, ref, title, description, meters, rooms, extras, price);
    }*/
    const handleDeleteModal = (id) => {  
        setShowModal(true);
        setDeletedId(id);
    }
     
    /*const updateFields = (id, ref, title, description, meters, rooms, extras, price) => {
        setUpdatedId(id);
        setUpdatedRef(ref);
        setUpdatedTitle(title);
        setUpdatedDescription(description);
        setUpdatedMeters(meters);
        setUpdatedRooms(rooms);
        setUpdatedExtras(extras);
        setUpdatedPrice(price);
    }*/
    const reset = () => {
        window.location.reload();
    }
   
    listing();
    return (
        <>
        <div className='sub--title' data-testid='subTitle'>
            <h1>PROPERTY LIST</h1>
            <div className='reset' onClick={reset}></div>
        </div>
        <nav className='admin--container'>
            <Link to='/createProperty' className = 'admin__button nav__link'>
                CreateProperty
            </Link> 
            <Link to='/addUser' className = 'admin__button nav__link'>
                Users management
            </Link> 
        </nav>
        <div className='properties--container'>
            {properties.sort(function (a, b) {
                return a.ref - b.ref;            //map sorted
            })
            .map((property, i) => { 
            return (
            <>
            <div className='property__card' key={i}>
                <span>Reference: {property.ref}</span>
                <span>Title: {property.title}</span>
                <span>Description: {property.description}</span>
                <span>Meters: {property.meters}</span>
                <span>Rooms: {property.rooms}</span>
                <span>Extras: {property.extras}</span>
                <span>Price: {property.price}</span>
                <div className='footer__card__container'>
                    <span className='left__arrow'>&#9664;</span>
                    <img className='picture__carousel' id='picture' />
                   {/*hay que enviarle property.ref para apuntar a la carpeta*/}
                    
                    <span className='right__arrow'>&#9654;</span>
                    {/*<button className='update__button' 
                        onClick={() => {handleUpdateModal(property.id, property.ref, property.title, 
                        property.description, property.meters, property.rooms, property.extras, 
                        property.price)}}
                    >
                        Update property<span className='check__symbol'>&nbsp;&#9989;</span>
                    </button>*/}
                        <button className='delete__button' 
                            onClick={() => {handleDeleteModal(property.id)}}
                        >
                        </button>
                    
                <div>
            </div>      
        
        </div>
            <div hidden={!showModal} className='modal'> 
                <div className='modal__pa__background' onClick={handleDeleteModalClose}>
                    <div className='modal__pa__card'>
                        <h2 className='modal__pa__title'>Are you sure?</h2>
                        <div className='modal--buttons--container'>
                            <button className='modal__delete__button' 
                                onClick={() => {deleteProperty(deletedId)}}
                            >
                                Delete
                            </button>
                            <button className='modal__cancel__button'>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div hidden={!updateModal} className='update--modal' >
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
                            {/*
                            <button className='modal__update__button' onClick={() => {updateProperty(updatedId)}}>Update</button>
                            <button className='modal__update__button' onClick={handleUpdateModalClose}>Close</button>
                            */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br />
        </>
        );
      })}
    </div>
    </>
    );
};

export default PropertyList;