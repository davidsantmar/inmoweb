import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import '../App.scss';
import { db, imagesData } from '../firebase/index';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { ref, getStorage, getDownloadURL, listAll } from 'firebase/storage';

const Properties  = () => {
    const [properties, setProperties] = useState([]);
    const propertiesCollectionsRef = collection(db, 'properties');
    const imagesDataCollections = collection(imagesData, 'pictures');
    const [pictures, setPictures] = useState([]);
    const [order, setOrder] = useState('');
    const picturesToDelete = [];
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
        setOrder('ref');
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
                let index = 0;
                listAll(listRef)
                    .then((res) => {
                    res.items.forEach((itemRef) => {
                        getDownloadURL(itemRef).then(function(url) {
                            index = index + 1;
                            const rootElement = document.getElementById(reference);
                            const element = document.createElement('img');
                            rootElement.append(element);
                            element.style.border = 'solid 2px green';
                            element.style.height = '22rem';
                            element.style.width = '100%';
                            element.style.borderRadius = '10px';
                            element.style.marginRight = '1rem';
                            element.id = picturesRefs[i] + '-' + index; 
                            element.src = url;
                            picturesToDelete.push(picturesRefs[i] + '-' + index);
                        });
                    })
                })
            }
        }
    }
    const orderByPrice = () => {
        for (let i = 0; i < picturesToDelete.length; i++) {
            document.getElementById(picturesToDelete[i]).remove();
        }
        setOrder('price');
    }
    return (
        <>
        <div className='properties'>
            <div className='sub--title' data-testid='subTitle'>
                <h1>PROPERTIES</h1>
            </div>
            <div className='filter--container' data-testid='filter-container'>
                <button className='cheaper__button' 
                    onClick={orderByPrice} 
                    data-testid='cheaper-button'
                >
                    Cheaper
                </button>
            </div>
            <div className='flats--grid' data-testid='flats-grid'>
                {properties.sort (function (a, b) {
                    return  a[order] - b[order];
                })
                .map((property) => { 
                    showPictures(property.ref);
                return (                        //to solve error 'Each child in a list should have a unique "key" prop' use <Fragment> with key
                <Fragment key={property.id}>   
                    <div className='property--card' >
                        <div className='properties__pictures' id={property.ref}></div>
                        <div className='card__title'>
                            {property.title}
                        </div>
                        <div className='card__description'>
                            {property.description}                    
                        </div>
                        <i className='fa fa-money' style={{color: 'green'}}><span className='money'>{property.price} €</span></i>
                        <div className='card__features'>
                            <i className='fa fa-bed' style={{color: 'blue'}}><span className='rooms'>{property.rooms}</span></i><br />
                            {property.meters} 
                            <span className='m2'>&#13217;</span><br />
                            Extras: {property.extras}</div>
                        <div className='card__reference'>
                            Ref: {property.ref}                    
                        </div>
                        <hr className='card__hr'/>
                        <div className='card__contact'>
                            <Link to="/contact" className='nav__link' onClick={() => window.scrollTo(0, 0)}>
                                Contact
                                <span className='contact__icon'>&#128196;</span>
                            </Link>
                            <Link to="/mortgages" className='nav__link' onClick={() => window.scrollTo(0, 0)}>
                                Mortgage calculator
                                <span className='money__icon'>&#128181;</span>
                            </Link>
                        </div>
                    </div>
                </Fragment>
                );
                })}
            </div>
        </div>
        </>
    );
};

export default Properties;