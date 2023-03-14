import React, { useEffect } from 'react'
import { useState } from 'react'

function Effect() {
    const [resourceType, setResourceType] = useState("posts")
    const [items, setItems] = useState([])
    // useEffect has dependancies meaning it will change when a certain dep changes
    // when empty-means it will render on mount
    useEffect( () =>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))

        console.log("rendered inside the useeffect")
    },[resourceType])
  return (

    
    <div>
        <div>

        <button onClick={() => setResourceType("posts")}> Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
        </div>
    <p>{items.map(item =>{
        return <pre>{JSON.stringify(item)}</pre>
    })}</p>
        
    </div>
  )
}

export default Effect