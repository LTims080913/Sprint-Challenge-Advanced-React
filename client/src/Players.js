import React from 'react';

export function Players(props) {
    return(
        <div>
            <h2>{props.player.name}</h2>
            <p>Country: {props.player.country}</p>
            <p>Searches: {props.player.searches}</p>
            <p>Id: {props.player.id}</p>
        </div>
    )
}