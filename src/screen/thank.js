import React from 'react'
import Img from '../thanks.png'
function App() {
    return (
        <>
            <h1 className="thanks">Thanks for Voting.</h1>
            <img src={Img} alt="Thanks" height="200" className="thanks-img"/>
        </>
    )
}

export default App