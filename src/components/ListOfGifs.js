import React from 'react';
import Gif from './Gif';
import getGifs from '../services/getGifs';
import './ListOfGifs.css';
import { Link } from 'wouter';

function ListOfGifs({ params }) {
    const { keyword } = params;
    const [loading, setLoading] = React.useState(false);
    const [gifs, setGifs] = React.useState([]);

    React.useEffect(() => {
        setLoading(true);
        getGifs(keyword).then(gifs => {
            setGifs(gifs);
            setLoading(false);
        });
    }, [keyword]);

    const Back = () => (
        <div className='navigate'>
            <Link href="/">
                <button className='button__back'>

                    <a>Go back!</a>
                </button>
            </Link>
        </div>
    )

    if (loading) return (
        <div style={{ fontSize: '1rem', color: '#FFF' }}>
            Loading...
        </div>
    )

    if (gifs.length === 0) return (
        <div style={{ fontSize: '2rem', color: '#FFF' }}>
            <Back />
            No data
        </div>
    )

    return (
        <>
            <div className='list__container'>
                <Back />
                {
                    gifs.map(
                        ({ id, title, url }) =>
                            <Gif key={id} title={title} url={url} id={id} />
                    )
                }
            </div>
        </>
    );
}

export default ListOfGifs;