import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'


function Register() {
    useEffect(() => {
        document.title = 'Registration'
    })
    let history = useHistory('')
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const handleForm = async (e) => {
        e.preventDefault()
        // check all input is not empty
        if (name === '' || id === '' || email === '' || phone === '') {
            setMessage('pleae fill all detail')
        }
        if (phone.length < 9 || phone.length > 10) {
            setMessage('Pleae enter valid phone number')
        }
        if (id.length < 7 || id.length > 8) {
            setMessage('Please enter valid registration number')
        }
        else {
            const data = await axios.post('http://localhost:3001/api/register',{
                name,email,phone,id
            },
                {
                    headers: {
                        'Content-Type':'application/json' 
                    }
                }
            )
            console.log(data)
            if(data.data.msg === 'error'){
                setMessage('Pleae enter valid phone number')
            }
            if(data.data.msg === 'ok'){
                setEmail('')
                setId('')
                setPhone('')
                setName('')
                history.replace('/vote')
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