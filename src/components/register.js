import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register(props) {
    console.log(props)
    //  (Navigate : Forward to next page)
    let navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    function handleSubmitDetails(event) {
        event.preventDefault()
    }
    function SignUp() {
        if (localStorage.getItem('users') === null) {
            
            let userArr = []
            let userDetail = {
                email: email,
                password: password
            }
            userArr.push(userDetail)
            localStorage.setItem('users', JSON.stringify(userArr))
            navigate('/?fromRegister=true')
            console.log(SignUp)
        }
        else {
            let oldUserArr = JSON.parse(localStorage.getItem('users'))
            oldUserArr.forEach(Element => {
                // if user has already register then show alert message
                if (Element.email === email) {
                    alert("Your account has already been registered. Please login.")
                    return
                }
                // if user has not register, then store user email password in oldUserArr
                else {
                    let userDetail = {
                        email: email,
                        password: password
                    }
                    oldUserArr.push(userDetail)
                    localStorage.setItem('users', JSON.stringify(oldUserArr))
                    navigate('/?fromRegister=true')
                }
            })
        }
    }

    function handleName(event) {
        setName(event.target.value)
    }


    return (
        <div className="form-container">
            <h2 className='text-center'>Sign-Up</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword" onSubmit={handleSubmitDetails} >
                    <Form.Label>FullName</Form.Label >
                    <Form.Control value={name} onChange={handleName} type="username" placeholder="username" autoComplete="off" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Enter email" autoComplete="off" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" autoComplete="off" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div className='d-flex'>
                    <Button variant="primary" type="submit" onClick={SignUp} className='w-50 h-25 mt-3'  >
                        Sign-Up
                    </Button>
                    <Button variant="" type="submit" className='pe-2'>
                        Already have an account?
                        <Link to="../"> Login</Link>
                    </Button>
                </div>
                {localStorage.getItem('Email') && (
                    <div>
                        Email-Id: <p>{localStorage.getItem('Email-Id')}</p>
                    </div>
                )}
                {localStorage.getItem('Password') && (
                    <div>
                        Password: <p>{localStorage.getItem('Password')}</p>
                    </div>
                )}
            </Form>
        </div>
    )
}

export default Register;