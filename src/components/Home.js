import React from 'react';
import './Home.css';
import { useLocation } from 'wouter';

export default function Home() {

    const [inputValue, setInputValue] = React.useState('');
    const [touchedBtn, setTouchedBtn] = React.useState(false);
    const [location, setLocation] = useLocation();

    const handleInputChange = e => {
        setInputValue(e.target.value);
    }
    const onButtonClick = () => {
        setTouchedBtn(true)
        if (inputValue) {
            setTouchedBtn(false)
            setLocation(`/gif/${inputValue}`);
        }
    };

    const Error = () => {
        return (
            <div style={{ marginTop: '10px', color: '#FFF' }}>
                Please, enter an input to search.
            </div>
        )
    }

    return (
        <div className='home'>
            <h3 className='title'> Gif Search </h3>
            <input className='input__home' type='text' onChange={handleInputChange} value={inputValue} />
            <button className='button__home' onClick={onButtonClick}> Get the GIF! </button>
            {
                touchedBtn && <Error />
            }
        </div>
    )

}