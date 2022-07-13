import React from "react";
import './Gif.css';

export default function Gif({ id, title, url }) {
    return (
        <a href={`#${id}`} className='gif'>
            <h4 className='title'>{title}</h4>
            <img alt={title} src={url} />
        </a>
    );
}