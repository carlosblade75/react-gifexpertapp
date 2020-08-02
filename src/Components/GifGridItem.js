import React from 'react'

export const GifGridItem = ( { id, url, title } ) => {

    return (
        <div className= 'card animate__bounceIn'>
            <img src = { url } alt= { title} />
            <p>{ title }</p>
        </div>
    )
}