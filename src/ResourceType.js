import React, { useState, useEffect } from "react";

export default function ResourceType() {

    const [resourceType, setResourceType] = useState("posts")
    // const [items, setItems] = useState([])
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth)


    // const handleWindowSize = () => {
    //     setWindowWidth(window.innerWidth)
    // }


    useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //     .then(response => response.json())
    //     .then(json => setItems(json))
        console.log("resource changed")
        return () => {
            console.log("returned from resource changed")
        }
    },[resourceType])

    // useEffect(() => {
    //     window.addEventListener("resize", handleWindowSize)

    //     return () => {
    //         window.removeEventListener("resize", handleWindowSize)
    //     }
    // }, [])

    return (
        <>
        <div>
            <button onClick={() => setResourceType("posts")}>Posts</button>
            <button onClick={() => setResourceType("users")}>Users</button>
            <button onClick={() => setResourceType("comments")}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
            {/* {items.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })} */}
            {/* {windowWidth} */}
        </>
    )
}

