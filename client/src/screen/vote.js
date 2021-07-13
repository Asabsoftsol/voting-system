import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { vote_API } from '../api'

function Vote() {


    useEffect(() => {
        document.title = "Vote"
    })

    const history = useHistory()

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

    const submitBtn = useRef()

    const handleVote = async (e) => {
        e.preventDefault()
        console.log(e)
        history.replace('/thanks')
    }

    return (
        <main>
            <h1>Vote carefully</h1>

            <form onSubmit={handleVote}>
                <form className="header">
                    <p>President</p>
                    <div className="container">
                        <div className="section one" ref={president1}>
                            {/* change image from here */}
                            <img src="https://randomuser.me/api/portraits/lego/6.jpg" alt="candidate" />
                            <b>Ram Kundu</b>
                            <button type="button" onClick={(e) => {
                                const x = window.confirm(`"Ram Kundu" is selected. Are You Sure ?`)
                                if (x === true) {
                                    vote_API({voteURL:'president/1',vote:'1'})
                                    e.currentTarget.disabled = true
                                    e.target.innerHTML = 'voted'
                                    president2.current.style.display = 'none'
                                    nota1.current.style.display = 'none'
                                }
                            }}>Vote</button>
                        </div>
                        <div className="section two" ref={president2}>
                            <img src="https://randomuser.me/api/portraits/lego/8.jpg" alt="candidate" />
                            <b>Abhijit Das</b>
                            <button type="button" onClick={(e) => {
                                const x = window.confirm(`"Abhijit Das" is selected. Are You sure ?`)
                                if (x === true) {
                                    vote_API({voteURL:'president/1',vote:'2'})
                                    e.currentTarget.disabled = true
                                    e.target.innerHTML = 'voted'
                                    president1.current.style.display = 'none'
                                    nota1.current.style.display = 'none'
                                }
                            }}>Vote</button>
                        </div>
                    </div>
                    <button className="nota" ref={nota1} type="button" onClick={(e) => {
                        const x = window.confirm(`"NOTA" is selected. Are You sure ?`)
                        if (x === true) {
                            vote_API({voteURL:'president/1',vote:'0'})
                            e.currentTarget.disabled = true
                            president1.current.style.display = 'none'
                            president2.current.style.display = 'none'
                        }
                    }}>NOTA</button>
                </form>


                <div className="header">
                    <p>Vice President</p>
                    <div className="container">
                        <div className="section one" ref={v_president1}>
                            <img src="https://randomuser.me/api/portraits/lego/4.jpg" alt="candidate" />
                            <b>Jina Sharma</b>
                            <button type="button" onClick={(e) => {
                                const x = window.confirm(`"Jina Sharma" is selected. Are You sure ?`)
                                if (x === true) {
                                    e.currentTarget.disabled = true
                                    e.target.innerHTML = 'voted'
                                    v_president2.current.style.display = 'none'
                                    nota2.current.style.display = 'none'
                                }
                            }}>Vote</button>
                        </div>
                        <div className="section two" ref={v_president2}>
                            <img src="https://randomuser.me/api/portraits/lego/0.jpg" alt="candidate" />
                            <b>Dipika Devi</b>
                            <button type="button" onClick={(e) => {
                                const x = window.confirm(`"Dipika Devi" is selected. Are You sure ?`)
                                if (x === true) {
                                    e.currentTarget.disabled = true
                                    e.target.innerHTML = 'voted'
                                    v_president1.current.style.display = 'none'
                                    nota2.current.style.display = 'none'
                                }
                            }}>Vote</button>
                        </div>
                    </div>
                    <button className="nota" type="button" ref={nota2} onClick={(e) => {
                        const x = window.confirm(`"NOTA" is selected. Are You sure ?`)
                        if (x === true) {
                            e.currentTarget.disabled = true
                            v_president1.current.style.display = 'none'
                            v_president2.current.style.display = 'none'
                        }
                    }}>NOTA</button>
                </div>

                <div className="header">
                    <p>General Secretary</p>
                    <div className="container">
                        <div className="section one" ref={g_s1}>
                            <img src="https://randomuser.me/api/portraits/lego/8.jpg" alt="candidate" />
                            <b>Morjina Khatun</b>
                            <button type="button" onClick={(e) => {
                                const x = window.confirm(`"Morjina Khatun" is selected. Are You sure ?`)
                                if (x === true) {
                                    e.currentTarget.disabled = true
                                    e.target.innerHTML = 'voted'
                                    g_s2.current.style.display = 'none'
                                    nota3.current.style.display = 'none'
                                }
                            }}>Vote</button>
                        </div>
                        <div className="section two" ref={g_s2}>
                            <img src="https://randomuser.me/api/portraits/lego/6.jpg" alt="candidate" />
                            <b>Shek Haju Ali</b>
                            <button type="button" onClick={(e) => {
                                const x = window.confirm(`"Shek Haju Ali" is selected. Are You sure ?`)
                                if (x === true) {
                                    e.currentTarget.disabled = true
                                    e.target.innerHTML = 'voted'
                                    g_s1.current.style.display = 'none'
                                    nota3.current.style.display = 'none'
                                }
                            }}>Vote</button>
                        </div>
                    </div>
                    <button className="nota" type="button" ref={nota3} onClick={(e) => {
                        const x = window.confirm(`"NOTA" is selected. Are You sure ?`)
                        if (x === true) {
                            e.currentTarget.disabled = true
                            g_s1.current.style.display = 'none'
                            g_s2.current.style.display = 'none'
                        }
                    }}>NOTA</button>
                </div>

                <div className="header">
                    <p>Asst. General Secretary</p>
                    <div className="container">
                        <div className="section one" ref={ag_s1}>
                            <img src="https://randomuser.me/api/portraits/lego/2.jpg" alt="candidate" />
                            <b>Avhinas Chetry</b>
                            <button type="button" onClick={(e) => {
                                const x = window.confirm(`"Avhinas Chetry" is selected. Are You sure ?`)
                                if (x === true) {
                                    e.currentTarget.disabled = true
                                    e.target.innerHTML = 'voted'
                                    ag_s2.current.style.display = 'none'
                                    nota4.current.style.display = 'none'
                                }

                            }}>Vote</button>
                        </div>
                        <div className="section two" ref={ag_s2}>
                            <img src="https://randomuser.me/api/portraits/lego/0.jpg" alt="candidate" />
                            <b>Rahul Sharma</b>
                            <button type="button" onClick={(e) => {
                                const x = window.confirm(`"Rahul Sharma" is selected. Are You sure ?`)
                                if (x === true) {
                                    e.currentTarget.disabled = true
                                    e.target.innerHTML = 'voted'
                                    ag_s1.current.style.display = 'none'
                                    nota4.current.style.display = 'none'
                                }
                            }}>Vote</button>
                        </div>
                    </div>
                    <button className="nota" type="button" ref={nota4} onClick={(e) => {
                        const x = window.confirm(`"NOTA" is selected. Are You sure ?`)
                        if (x === true) {
                            e.currentTarget.disabled = true
                            ag_s1.current.style.display = 'none'
                            ag_s2.current.style.display = 'none'
                        }
                    }}>NOTA</button>
                </div>
                <button type="submit" className="btn" ref={submitBtn}>Submit Vote</button>
            </form>
        </main>
    )
}

export default Vote