import React, { useEffect, useState, useRef } from 'react'

function Vote() {
    useEffect(() => {
        document.title = "Vote"
    })

    const president1 = useRef()
    const president2 = useRef()
    const v_president1 = useRef()
    const v_president2 = useRef()
    const g_s1 = useRef()
    const g_s2 = useRef()
    const ag_s1 = useRef()
    const ag_s2 = useRef()
    const nota1 = useRef()
    const nota2 = useRef()
    const nota3 = useRef()
    const nota4 = useRef()
    return (
        <main>
            <h1>Vote carefully</h1>

            <form>
                <div className="header">
                    <p>President</p>
                    <div className="container">
                        <div className="section one" ref={president1}>
                            {/* change image from here */}
                            <img src="https://avatars.githubusercontent.com/u/48112517?v=4" alt="candidate" />
                            <b>Arun Pratap Singh</b>
                            <button onClick={(e) => {
                                e.target.innerHTML = 'voted'
                                president2.current.style.display = 'none'
                                nota1.current.style.display = 'none'
                            }}>Vote</button>
                        </div>
                        <div className="section two" ref={president2}>
                            <img src="https://avatars.githubusercontent.com/u/48112517?v=4" alt="candidate" />
                            <b>Varun Pratap Singh</b>
                            <button onClick={(e) => {
                                e.target.innerHTML = 'voted'
                                president1.current.style.display = 'none'
                                nota1.current.style.display = 'none'
                            }}>Vote</button>
                        </div>
                    </div>
                    <button className="nota" ref={nota1} onClick={() => {
                        president1.current.style.display = 'none'
                        president2.current.style.display = 'none'
                    }}>NOTA</button>

                </div>


                <div className="header">
                    <p>Vice President</p>
                    <div className="container">
                        <div className="section one" ref={v_president1}>
                            <img src="https://avatars.githubusercontent.com/u/48112517?v=4" alt="candidate" />
                            <b>Arun Pratap Singh</b>
                            <button onClick={(e) => {
                                e.target.innerHTML = 'voted'
                                v_president2.current.style.display = 'none'
                                nota2.current.style.display = 'none'
                            }}>Vote</button>
                        </div>
                        <div className="section two" ref={v_president2}>
                            <img src="https://avatars.githubusercontent.com/u/48112517?v=4" alt="candidate" />
                            <b>Arun Pratap Singh</b>
                            <button onClick={(e) => {
                                e.target.innerHTML = 'voted'
                                v_president1.current.style.display = 'none'
                                nota2.current.style.display = 'none'
                            }}>Vote</button>
                        </div>
                    </div>
                    <button className="nota" ref={nota2} onClick={() => {
                        v_president1.current.style.display = 'none'
                        v_president2.current.style.display = 'none'
                    }}>NOTA</button>
                </div>

                <div className="header">
                    <p>General Secretary</p>
                    <div className="container">
                        <div className="section one" ref={g_s1}>
                            <img src="https://avatars.githubusercontent.com/u/48112517?v=4" alt="candidate" />
                            <b>Arun Pratap Singh</b>
                            <button onClick={(e) => {
                                e.target.innerHTML = 'voted'
                                g_s2.current.style.display = 'none'
                                nota3.current.style.display = 'none'
                            }}>Vote</button>
                        </div>
                        <div className="section two" ref={g_s2}>
                            <img src="https://avatars.githubusercontent.com/u/48112517?v=4" alt="candidate" />
                            <b>Arun Pratap Singh</b>
                            <button onClick={(e) => {
                                e.target.innerHTML = 'voted'
                                g_s1.current.style.display = 'none'
                                nota3.current.style.display = 'none'
                            }}>Vote</button>
                        </div>
                    </div>
                    <button className="nota" ref={nota3} onClick={() => {
                        g_s1.current.style.display = 'none'
                        g_s2.current.style.display = 'none'
                    }}>NOTA</button>
                </div>

                <div className="header">
                    <p>Asst. General Secretary</p>
                    <div className="container">
                        <div className="section one" ref={ag_s1}>
                            <img src="https://avatars.githubusercontent.com/u/48112517?v=4" alt="candidate" />
                            <b>Arun Pratap Singh</b>
                            <button onClick={(e) => {
                                e.target.innerHTML = 'voted'
                                ag_s2.current.style.display = 'none'
                                nota4.current.style.display = 'none'
                            }}>Vote</button>
                        </div>
                        <div className="section two" ref={ag_s2}>
                            <img src="https://avatars.githubusercontent.com/u/48112517?v=4" alt="candidate" />
                            <b>Pratap Singh</b>
                            <button onClick={(e) => {
                                e.target.innerHTML = 'voted'
                                ag_s1.current.style.display = 'none'
                                nota4.current.style.display = 'none'
                            }}>Vote</button>
                        </div>
                    </div>
                    <button className="nota" ref={nota4} onClick={() => {
                        ag_s1.current.style.display = 'none'
                        ag_s2.current.style.display = 'none'
                    }}>NOTA</button>
                </div>
                <button type="submit" className="btn">Submit Vote</button>
            </form>
        </main>
    )
}

export default Vote