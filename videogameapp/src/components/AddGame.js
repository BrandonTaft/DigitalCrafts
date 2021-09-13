
import React, { useState } from 'react'

function AddGame (){

    const [user, setUser] = useState({})

    const handleAddGame = (e) => {
        setUser({
            // copy the old state/ spread operator  
            ...user, 
            [e.target.name]: e.target.value
        })
    }

    const postTODB = () => {
        return (null)
    }



    return(
        <div>
            <h1>ADD GAME HERE</h1>
            <input type = "text" name= "title" onChange = {handleAddGame} placeholder = "Game Title" />
            <input type = "text" name = "gameID" onChange = {handleAddGame} placeholder = "Game Id" />
            <button onClick = {postTODB}>Login</button>
        </div>
    )
}

export default AddGame