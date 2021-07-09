import React, { useEffect, useState } from 'react'

function Register() {

    useEffect(() => {
        document.title = 'Register'
    })

    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [disable, setDisable] = useState('')
    const handleForm = (e) => {
        e.preventDefault()

        // check all input is not empty
        if (name === '' || id === '') {
            setMessage('pleae fill all detail')
            disable = true
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
                    <div className={message.length > 2 ? 'errorMessage' : false}>
                        {message}
                    </div>
                    <input type="text" placeholder="Name"
                        value={name} onChange={(e) => setName(e.target.value)}
                    />
                    <input type="number" placeholder="Registration number"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <input type="email" placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" disabled={disable ? false : true}>Next</button>
                </form>
            </div>
        </div>
    )
}

export default Register