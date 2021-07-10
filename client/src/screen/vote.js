import React, { useEffect } from 'react'

function Vote() {
    useEffect(() => {
        document.title = "Vote"
    })
    return (
        <main>
            <h1>Vote carefully</h1>

            <div className="header">
                <p>Heading</p>
                <div className="container">
                    <div className="section one">
                        <img src="https://avatars.githubusercontent.com/u/48112517?v=4" alt="candidate" />
                        <b>Arun Pratap Singh</b>
                        <button>Vote</button>
                    </div>
                    <div className="section two">
                        <img src="https://avatars.githubusercontent.com/u/48112517?v=4" alt="candidate" />
                        <b>Arun Pratap Singh</b>
                        <button>Vote</button>
                    </div>
                </div>
                <button className="nota">NOTA</button>
            </div>


            <div className="header">
                <p>Heading</p>
                <div className="container">
                    <div className="section one">
                        <img src="https://avatars.githubusercontent.com/u/48112517?v=4" alt="candidate" />
                        <b>Arun Pratap Singh</b>
                        <button>Vote</button>
                    </div>
                    <div className="section two">
                        <img src="https://avatars.githubusercontent.com/u/48112517?v=4" alt="candidate" />
                        <b>Arun Pratap Singh</b>
                        <button>Vote</button>
                    </div>
                </div>
                <button className="nota">NOTA</button>
            </div>

            <div className="header">
                <p>Heading</p>
                <div className="container">
                    <div className="section one">
                        <img src="https://avatars.githubusercontent.com/u/48112517?v=4" alt="candidate" />
                        <b>Arun Pratap Singh</b>
                        <button>Vote</button>
                    </div>
                    <div className="section two">
                        <img src="https://avatars.githubusercontent.com/u/48112517?v=4" alt="candidate" />
                        <b>Arun Pratap Singh</b>
                        <button>Vote</button>
                    </div>
                </div>
                <button className="nota">NOTA</button>
            </div>

            <div className="header">
                <p>Heading</p>
                <div className="container">
                    <div className="section one">
                        <img src="https://avatars.githubusercontent.com/u/48112517?v=4" alt="candidate" />
                        <b>Arun Pratap Singh</b>
                        <button>Vote</button>
                    </div>
                    <div className="section two">
                        <img src="https://avatars.githubusercontent.com/u/48112517?v=4" alt="candidate" />
                        <b>Arun Pratap Singh</b>
                        <button>Vote</button>
                    </div>
                </div>
                <button className="nota">NOTA</button>
            </div>
        </main>
    )
}

export default Vote