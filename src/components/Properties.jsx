import React from 'react';
import { useState, useEffect } from 'react';
import '../App.scss';
import { db, imagesData } from '../firebase/index';
import { Link } from 'react-router-dom';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { ref, getStorage, getDownloadURL, listAll } from 'firebase/storage';


const Properties  = () => {
    const [properties, setProperties] = useState([]);
const propertiesCollectionsRef = collection(db, 'properties');
const imagesDataCollections = collection(imagesData, 'pictures');
const [pictures, setPictures] = useState([]);
const picturesNames = [];
const picturesRefs = [];

  useEffect(() => {
    const getProperties = async () => {
      const data = await getDocs(propertiesCollectionsRef);
      setProperties(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
      const picturesData = await getDocs(imagesDataCollections);
      setPictures(picturesData.docs.map((doc) => ({...doc.data(), id:doc.id})));

      

    }
    getProperties();  
  }, []);
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
 
  
    

    return (
        <>
        <div className='properties'>
            <div className='sub--title' data-testid='subTitle'>
                <h1>PROPERTIES</h1>
            </div>
            <div className='filter--container' data-testid='filter-container'>
                <button className='cheaper__button'  data-testid='cheaper-button'>Cheaper</button>
                <button className='relevance__button' data-testid='relevance-button'>Relevance</button>
            </div>
            <div className='flats--grid' data-testid='flats-grid'>
                {properties.sort(function (a, b) {
                    return a.ref - b.ref;     //map sorted
                })
                .map((property) => { 
                return (
                <>
                    <div className='card__picture__container'>
                        <div className='card__picture'>
                        </div>
                    </div>
                    <div className='card__title'>
                        Title: {property.title}                    
                    </div>
                    <div className='card__description'>
                       Description: {property.description}                    
                    </div>
                    <i class="fa fa-money"><span className='money'>{property.price} €</span></i>
                    <div className='card__features'>
                        <i class="fa fa-bed"><span className='rooms'>{property.rooms}</span></i><br />
                        {property.meters} <span className='m2'>&#13217;</span><br />
                        Extras: {property.extras}</div>
                    <div className='card__reference'>
                        Ref: {property.ref}                    
                    </div>
                    <hr className='card__hr'/>
                    <div className='card__contact'>
                        <Link to="/contact" className='nav__link'>
                            Contact
                            <span className='contact__icon'>&#128196;</span>
                        </Link>
                        <Link to="/mortgages" className='nav__link'>
                            Mortgage calculator
                            <span className='money__icon'>&#128181;</span>
                        </Link>
                    </div>
                





                    
                    
            
          
            </>
            );
        })}
        
        </div>
        </div>
        </>
        );
    };



            {/*<div className='flats--grid' data-testid='flats-grid'>
                <div className='card' id='2' data-price='20000'>
                    <div className='card__picture__container'>
                        <div className='card__picture'>
                            <img className='flat1' src={flat1} alt='flat'/>
                        </div>
                    </div>
                    <div className='card__description'>
                        Fantastic flat in Balmes street
                    </div>
                    <span className='card__price'>300.000 €</span>
                    <div className='card__features'>4 hab.  110 m2  elevator</div>
                    <hr className='card__hr'/>
                    <div className='card__contact'>
                        <Link to="/contacto" className='nav__link'>
                            Contacto
                            <span className='contact__icon'>&#128196;</span>
                        </Link>
                        <Link to="/hipotecas" className='nav__link'>
                            Mortgage calculator
                            <span className='money__icon'>&#128181;</span>
                        </Link>
                    </div>
                </div>
                <div className='card' id='2' data-price='20000'>
                    <div className='card__picture__container'>
                        <div className='card__picture'>
                            <img className='flat2' src={flat2} alt='flat'/>
                        </div>
                    </div>
                    <div className='card__description'>
                        Fantastic flat in Balmes street
                    </div>
                    <span className='card__price' >200.000 €</span>
                    <div className='card__features'>4 hab.  110 m2  elevator</div>
                    <hr className='card__hr'/>
                    <div className='card__contact'>
                        <Link to="/contacto" className='nav__link'>
                            Contacto
                            <span className='contact__icon'>&#128196;</span>
                        </Link>
                    </div>
                </div>
                <div className='card' id='3'>
                    <div className='card__picture__container'>
                        <div className='card__picture'>
                            <img className='flat3' src={flat3} alt='flat'/>
                        </div>
                    </div>
                    <div className='card__description'>
                        Fantastic flat in Balmes street
                    </div>
                    <span className='card__price'>410.000 €</span>
                    <div className='card__features'>4 hab.  110 m2  elevator</div>
                    <hr className='card__hr'/>
                    <div className='card__contact'>
                        <Link to="/contacto" className='nav__link'>
                            Contacto
                            <span className='contact__icon'>&#128196;</span>
                        </Link>
                    </div>
                </div>
                <div className='card' id='4'>
                    <div className='card__picture__container'>
                        <div className='card__picture'>
                            <img className='flat4' src={flat4} alt='flat'/>
                        </div>
                    </div>
                    <div className='card__description'>
                        Fantastic flat in Balmes street
                    </div>
                    <span className='card__price'>420.000 €</span>
                    <div className='card__features'>4 hab.  110 m2  elevator</div>
                    <hr className='card__hr'/>
                    <div className='card__contact'>
                        <Link to="/contacto" className='nav__link'>
                            Contacto
                            <span className='contact__icon'>&#128196;</span>
                        </Link>
                    </div>
                </div>
            </div>
            </>
    );*/}


export default Properties;