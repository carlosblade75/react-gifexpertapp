import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from './Components/GitGrid'

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    // const handlerAdd = () => {

    //     setCategories([...categories, `Nuevo elemento ${categories.length + 1}`] )
    // }

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr />
          
            <ol>
            {
                categories.map( (category) => (
                    <GifGrid 
                        key = { category }
                        category = { category } 
                    />
                ))

            }
            </ol>
        </>
    )
}

export default GiftExpertApp