import { useState, useEffect } from 'react';
import '../App.scss';
import { db } from '../firebase/index';
import { Link } from 'react-router-dom';
import {collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const propertiesCollectionsRef = collection(db, 'properties');
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newMeters, setNewMeters] = useState(0);
  const [newRooms, setNewRooms] = useState(0);
  const [newExtras, setNewExtras] = useState('');
  const [newPrice, setNewPrice] = useState(0);
  const [showModal, setShowModal] = useState(false); 
  const [updateModal, setUpdateModal] = useState(false);
  const [updatedId, setUpdatedId] = useState('');
  const [deletedId, setDeletedId] = useState('');
  const [updatedRef, setUpdatedRef] = useState(0);

  useEffect(() => {
    const getProperties = async () => {
      const data = await getDocs(propertiesCollectionsRef);
      setProperties(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
    }
    getProperties();  
  }, []);

  const updateProperty = async (id) => {
    const propertyDoc = doc(db, 'properties', id);  //documento de la coleccion
    const newFields = {
      title: newTitle,
      description: newDescription,
      meters: newMeters,
      rooms: newRooms,
      extras: newExtras,
      price: newPrice,
    };  //actualización 
    await updateDoc(propertyDoc,newFields);
  }
  const deleteProperty = async (id) => {
    const propertyDoc = doc(db, 'properties', id);
    await deleteDoc(propertyDoc);
  }
  const handleDeleteModalClose = (e) => {
    setShowModal(false);
  }
  const handleUpdateModalClose = (e) => {
    setUpdateModal(false);
  }
    const handleDeleteModal = (id) => {  
        setShowModal(true);
        setDeletedId(id);
    }
    const handleUpdateModal = (id, ref) => {      
        setUpdateModal(true);
        setUpdatedId(id);
        setUpdatedRef(ref);
        document.getElementById('title').value = ref;
    }
    const reset = () => {
        window.location.reload();
    }

    return (
        <>
        <div className='sub--title' data-testid='subTitle'>
            <h1>PROPERTY LIST</h1>
            <div className='reset' onClick={reset}></div>
        </div>
        <nav className='admin--container'>
            <Link to='/pa' className = 'admin__button nav__link'>
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
      .map((property) => { 
        return (
        <>
        <div className='property__card'>
            <span>Reference: {property.ref}</span>
            <br />
            <span>Title: {property.title}</span>
            <br />
            <span>Description: {property.description}</span>
            <br />
            <span>Meters: {property.meters}</span>
            <br />
            <span>Rooms: {property.rooms}</span>
            <br />
            <span>Extras: {property.extras}</span>
            <br />
            <span>Price: {property.price}</span>
            <br />
            <br />
            <div className='buttons--container'>        
                <button className='update__button' 
                 onClick={() => {handleUpdateModal(property.id, property.ref)}}>
                    Update property<span className='check__symbol'>&nbsp;&#9989;</span>
                </button>
                <button className='delete__button' onClick={() => {handleDeleteModal(property.id)}}>
                    Delete property<span className='cross__symbol'>&nbsp;&#10060;</span>
                </button>
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
                                <button className='modal__cancel__button'>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            <div hidden={!updateModal} className='update--modal' >
                <div className='modal__update__background' >
                    <div className='modal__update__card'>
                        <div className='inputs__container'>
                            <h3>Reference: {updatedRef}</h3>
                            <input className='update__title' placeholder='Title' id='title'
                                onChange={(event) => {setNewTitle(event.target.value);}} />
                                
                            <textarea className='update__description' placeholder='Description' 
                                onChange={(event) => {setNewDescription(event.target.value);}} />
                            <input className='update__meters' placeholder='Meters' 
                                onChange={(event) => {setNewMeters(event.target.value);}} />
                            <input className='update__rooms' placeholder='Rooms' 
                                onChange={(event) => {setNewRooms(event.target.value);}}/>
                            <input className='update__extras' placeholder='Extras' 
                                onChange={(event) => {setNewExtras(event.target.value);}}/>
                            <input className='update__price' placeholder='Price' 
                                onChange={(event) => {setNewPrice(event.target.value);}}/>
                        </div>
                        <div className='modal--buttons--container'>
                            <button className='modal__update__button' onClick={() => {updateProperty(updatedId)}}>Update</button>
                            <button className='modal__update__button' onClick={handleUpdateModalClose}>Close</button>
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