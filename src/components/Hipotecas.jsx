import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Hipotecas = () => {
    const [housePrice, setHousePrice] = useState(100000);
    //const housePrice = useSelector((state) => state.housePrice);
    const [loan, setLoan] = useState(0);
    const [monthlyFee, setMonthlyFee] = useState(0);
    const [savings, setSavings] = useState(10000);
    const [years, setYears] = useState(25);
    const [interest, setInterest] = useState(1.39);
    const [show, setShow] = useState(false);
    const [notary, setNotary] = useState(867);
    const [registration, setRegistration] = useState(408);
    const [agency, setAgency] = useState(300);
    const [taxes, setTaxes] = useState(((housePrice - savings) / 100) * 9);
    const [billsAndTaxes, setBillsAndTaxes] = useState(notary + registration + agency + taxes);
    /*const dispatch = useDispatch();
    useEffect(() => {
        addMoney();
    }, [housePrice]);*/

    const handleModalClose = (e) => {
        setShow(false);
    }
    function handleClick(){         
        setShow(true);
    }
    const addMoney = () => {
        console.log(taxes)
        setHousePrice(housePrice + 10000);
        setTaxes(((housePrice - savings) / 100) * 9);
        setBillsAndTaxes(notary + registration + agency + taxes);
    }
    const removeMoney = () => {
        setHousePrice(housePrice - 10000);
        setTaxes(((housePrice - savings) / 100) * 9);
        setBillsAndTaxes(notary + registration + agency + taxes);
    }
  
    const addSavingsMoney = () => {
        setSavings(savings + 1000);
    }
    const removeSavingsMoney = () => {
        setSavings(savings - 1000);
    }
    const addYears = () => {
        setYears(years + 1);
    }
    const removeYears = () => {
        setYears(years - 1);
    }
    const addInterest = () => {
        setInterest(interest + 0.1);
    }
    const removeInterest = () => {
        setInterest(interest - 0.1);
    }
    return (
        <>
            <div className='sub--title'>
                <h2>MORTGAGE SIMULATOR</h2>
            </div>
            <div className='mortgage--title'>
                House price
                <div className='price--container'>
                    <span className='change__numbers__buttons' onClick={removeMoney}>-</span>
                    <input className='mortgage__input' type='number' min='0' />
                    <span> €</span>
                    <span className='change__numbers__buttons' onClick={addMoney}>+</span>
                </div>
            </div>
            <div className='mortgage--title'>
                Savings
                <div className='savings--container'>
                    <span className='change__numbers__buttons' onClick={removeSavingsMoney}>-</span>
                    {savings + ' €'}
                    <span className='change__numbers__buttons' onClick={addSavingsMoney}>+</span>                
                </div>
            </div>
            <div className='mortgage--title'>
                Years
                <div className='years--container'>
                    <span className='change__numbers__buttons' onClick={addYears}>-</span>
                    {years}
                    <span className='change__numbers__buttons' onClick={removeYears}>+</span>                
                </div>
            </div>
            <div className='mortgage--title'>
                Interest rate
                <br />
                <label for="fixed">Fixed</label>
                <input type='radio' value='fixed' name='interest'></input>
                <label for="variable">Variable</label>
                <input type='radio' value='variable' name='interest'></input>
                <div className='interest--container'>
                    <span className='change__numbers__buttons' onClick={removeInterest}>-</span>
                    {interest.toFixed(2)}
                    <span className='change__numbers__buttons' onClick={addInterest}>+</span>                
                </div>
            </div>
            <hr />
            <div className='figures--container'>
                <div>
                    Bills and taxes: &nbsp;
                    <span className='info__globus' onClick={handleClick}>
                        &nbsp;&nbsp;i&nbsp;&nbsp;
                    </span>
                </div>
                <div>
                    {billsAndTaxes + ' €'}
                </div>
                
                <div hidden={!show}>
                    <div className='modal__background' onClick={handleModalClose}>
                        
                            <div className='modal__card'>
                                <h2 className='modal__title'>Total bills</h2>
                                <ul>
                                    <div className='listed__items__container'>
                                        <li className='listed__items'>
                                            Notary:
                                            <span className='listed__numbers'>{notary + ' €'}</span>
                                        </li>
                                    </div>
                                    <div className='listed__items__container'>
                                        <li className='listed__items'>
                                            Registration:
                                            <span className='listed__numbers'>{registration + ' €'}</span>
                                        </li>
                                    </div>
                                    <div className='listed__items__container'>
                                        <li className='listed__items'>
                                            Agency:
                                            <span className='listed__numbers'>{agency + ' €'}</span>
                                        </li>
                                    </div>
                                    <div className='listed__items__container'>
                                        <li className='listed__items'>
                                            Taxes:
                                            <span className='listed__numbers'>{taxes + ' €'}</span>
                                        </li>
                                    </div>
                                    <div className='listed__items__container'>
                                        <li className='listed__items total__amount'>
                                            Total amount:
                                            <span className='listed__numbers'>{billsAndTaxes + ' €'}</span>
                                        </li>
                                    </div>
                                </ul>
                                <span className='modal__footer'>Non-binding indicative calculation</span>
                            </div>

                    </div>
                </div>
            </div>
            <div className='figures--container'>
                Loan amount:
                <div>
                    {loan + ' €'}
                </div>
            </div>
            <div className='figures--container'>
                <span className='monthly__fee__title'>Monthly fee:</span>
                <div>
                    {monthlyFee + ' €'}
                </div>
            </div>
        </>
    );
};

export default Hipotecas;