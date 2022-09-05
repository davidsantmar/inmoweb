import React, { useState } from 'react';

const Hipotecas = () => {
    const [housePrice, setHousePrice] = useState('');
    //const housePrice = useSelector((state) => state.housePrice);
    const [loan, setLoan] = useState('');
    const [monthlyFee, setMonthlyFee] = useState('');
    const [savings, setSavings] = useState('');
    const [years, setYears] = useState(''); 
    const [interest, setInterest] = useState('' );
    const [show, setShow] = useState(false);
    const [notary, setNotary] = useState('');
    const [registration, setRegistration] = useState('');
    const [agency, setAgency] = useState('');
    const [taxes, setTaxes] = useState('');
    const [billsAndTaxes, setBillsAndTaxes] = useState('');

    const handleModalClose = (e) => {
        setShow(false);
    }
    const handleModal = () => {  
        setShow(true);
        setBillsAndTaxes(notary + registration + agency + taxes);
        setMonthlyFee(Math.ceil((loan / (years * 12)) * interest));
    }
    function handleChangeHousePrice(event) {
        setHousePrice(event.target.value);
        //addPoints();
    }
    function handleChangeSavings(event) {
        setSavings(event.target.value);
    }
    function handleChangeYears(event) {
        setYears(event.target.value);
    }
    function handleChangeInterest(event) {
        setInterest(Number(event.target.value)); 
    }
    const calculate = () => {
        if(document.getElementById('fixed').checked){
            calculateFixed();
        }else{
            calculateVariable();
        }
    }
    const calculateFixed = () => {
        setTaxes(Math.ceil(((housePrice - savings) * 9) / 100));
        setNotary(867);
        setRegistration(408);
        setAgency(300);
        setLoan(housePrice - savings);
        document.getElementById('info-globus').style.animationName = 'blink';
        document.getElementById('info-globus').style.animationDuration = '1.5s';
        document.getElementById('info-globus').style.animationIterationCount = '10';
    }
    const calculateVariable = () => {
        const euribor = 1.482;
        setTaxes(Math.ceil(((housePrice - savings) * 9) / 100));
        setNotary(867);
        setRegistration(408);
        setAgency(300);
        setLoan(housePrice - savings);
        setInterest(interest + euribor)
        document.getElementById('info-globus').style.animationName = 'blink';
        document.getElementById('info-globus').style.animationDuration = '1.5s';
        document.getElementById('info-globus').style.animationIterationCount = '10';
    }
    /*const addPoints = () => {
        const pointsNumber = Array.from(housePrice.toString()).map(Number);
        console.log(pointsNumber);
        if (pointsNumber.length === 4) {
            pointsNumber.splice(1, 0, '.');
        } else if (pointsNumber.length === 5) {
            pointsNumber.splice(2, 1, '.');
        } else if (pointsNumber.length === 6) {
            pointsNumber.splice(3, 2, '.');
        } else if (pointsNumber.length === 7) {
            pointsNumber.splice(2, 1, '.');
            pointsNumber.splice(5, 4, '.');
        }
        //const puntos = Number(pointsNumber.join(''));
        console.log(pointsNumber);
        //console.log(puntos);
    }*/
    const reset = () => {
        setHousePrice('');
        setLoan('');
        setMonthlyFee('');
        setSavings('');
        setYears(''); 
        setInterest('');
        setShow(false);
        setNotary('');
        setRegistration('');
        setAgency('');
        setTaxes('');
        setBillsAndTaxes('');
    }

    return (
        <>
            <div className='sub--title' data-testid='subTitle2'>
                <h1>MORTGAGE SIMULATOR</h1>
                <div className='reset' onClick={reset}></div>
            </div>
            <form>
                <div className='mortgage--title' data-testid='house-price-title'>
                    House price
                    <input  type='tel' className='house__price__input' 
                    value={housePrice}
                    onChange={handleChangeHousePrice} data-testid='mortgage-input'
                    pattern="\d*" maxLength="8"/>
                </div>
                <div className='mortgage--title' data-testid='savings-title'>
                    Savings
                    <input type='tel' className='savings__input'  
                    value={savings} onChange={handleChangeSavings} data-testid='mortgage-input'
                    pattern="\d*" maxLength="6"/>
                </div>
                <div className='mortgage--title' data-testid='years-title'>
                    Years
                    <input type='tel' className='years__input'  
                    value={years} data-testid='mortgage-input' onChange={handleChangeYears}
                    pattern="\d*" maxLength="2"/>
                </div>
                <div className='mortgage--title' data-testid='interest-title'>
                    Interest rate
                    <br />
                    <label>Fixed</label>
                    <input type='radio' value='fixed' id='fixed' className='mortgage--interest' name='interest'></input>
                    <label>Variable</label>
                    <input type='radio' value='variable' id='variable' name='interest'></input>
                    <input type='number' className='interest__input'  
                    value={interest} data-testid='mortgage-input' onChange={handleChangeInterest}
                    id='interest'  />
                </div>

                <div className='calculate--container'>
                        <a  href='#figures' className='calculate' onClick={calculate}>
                        Calculate
                        </a>
                </div>
            </form>
            <hr />
            <div className='figures--container' id='figures'>
                <div data-testid='bills-title'>
                    Bills and taxes: &nbsp;
                    <span className='info__globus' onClick={handleModal} id='info-globus'>
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
                <div data-testid='loan-title'>
                    Loan amount:
                </div>
                <div>
                    {loan + ' €'}
                </div>
            </div>
            <div className='figures--container'>
                <span className='monthly__fee__title' data-testid='monthly-title'>
                    Monthly fee:
                </span>
                <div>
                    {monthlyFee + ' €'}
                </div>
            </div>
        </>
    );
};

export default Hipotecas;