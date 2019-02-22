import React from 'react';

export default function Header(props) {
    return ( 
        <div>
            <h3>House</h3>
                <p>
                    {props.name} {props.address} {props.city} {props.state} {props.zipcode}
                </p>
                <button onClick={() => props.deleteHouse(props.id)}>Delete</button>
        </div>
    )
}