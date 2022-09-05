import { useState, useEffect } from 'react';
import '../App.scss';
import { db } from '../firebase/index';
import { Link } from 'react-router-dom';
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';


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
      price: newPrice
    };  //actualización 
    await updateDoc(propertyDoc,newFields)
  }
  const deleteProperty = async (id) => {
    const propertyDoc = doc(db, 'properties', id);
    await deleteDoc(propertyDoc);
  }
  const handleModalClose = (e) => {
    setShowModal(false);
  }
    const handleModal = () => {  
        setShowModal(true);
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
            <span>Property: {property.ref}</span>
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
                <button className='update__button' onClick={updateProperty}>
                    Update property<span className='check__symbol'>&nbsp;&#9989;</span>
                </button>
                <button className='delete__button' onClick={handleModal}>
                    Delete property<span className='cross__symbol'>&nbsp;&#10060;</span>
                </button>
            </div>
            
            <div hidden={!showModal} className='modal'>
                <div className='modal__pa__background' onClick={handleModalClose}>
                    <div className='modal__pa__card'>
                        <h2 className='modal__pa__title'>Are you sure?</h2>
                        <div className='modal--buttons--container'>
                            <button className='modal__delete__button' onClick={() => {deleteProperty(property.id)}}>Delete</button>
                            <button className='modal__cancel__button'>Cancel</button>
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