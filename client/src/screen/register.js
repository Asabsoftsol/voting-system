import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'


function Register() {
    const [error, setError] = useState(false)

    useEffect(() => {
        document.title = 'Registration'
    }, [error])

    let history = useHistory('')
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')


    const handleForm = async (e) => {
        e.preventDefault()
        console.log(name, email, phone, id)
        if (name === '' || email === '' || phone === '' || id === '') {
            setMessage('Please fill all detail.')
            setError(false)
        }
        console.log(error)
        if (error === true) {
            //  chnage the address for production mode
            const data = await axios.post('http://localhost:3001/api/register', {
                name, email, phone, id
            },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            console.log(data)
            if (data.data.status === 'error') {
                setMessage(data.data.msg)
            }
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
                    required
                    />
                    <input type="number" placeholder="Registration number"
                        required
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <input type="email" placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="number" placeholder="Phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <button type="submit">Next</button>
                </form>
            </div>
        </div>
    )
}

export default Register