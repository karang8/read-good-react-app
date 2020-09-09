import React from 'react';

const Image = (props) => {
    return (
        <div>
            <img className={props.style} src={props.src} alt={props.alt} />
            
        </div>
    );
}

export default Image;
