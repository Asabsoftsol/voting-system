import React, { useEffect, useState } from 'react'

function Register() {

    useEffect(() => {
        document.title = 'Register'
    })

    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [email, setEmail] = useState('')
    // const [name,setName] = useState('')

    const handleForm = (e) => {
        e.preventDefault()

        // check all input is not empty
        if (name === '' || id === '') {
            alert('pleae fill all detail')
        }
        else {
            setEmail('')
            setId('')
            setName('')
            alert('ok')
        }
    }

    return (
        <div className="registerPage">
            <div className="form">
                <form onSubmit={handleForm}>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="number" placeholder="Registration number"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <input type="number" placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit">Next</button>
                </form>
            </div>
        </div>
    )
}

export default Register