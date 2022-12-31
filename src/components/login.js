import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Login(props) {
    // console.log(props)
    // (useNavigate forward to Next page ( useNavigate : Hook) ) 
    let navigate = useNavigate();

    //  (useLocation (Location): Alert message  useLocation : Hook )
    let location = useLocation();

    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    function login() {

        // compare user data if user come first time

        if (localStorage.getItem('users') === null) {
            alert(' Create your Register Account. ')
            setEmail("")
            setpassword("")
            console.log(login)
        }
        else {
            let oldarr = JSON.parse(localStorage.getItem('users'))
            oldarr.forEach(Element => {
                if (Element.email === email && Element.password === password) {
                    localStorage.setItem('sign-In', true)
                    // alert("open account")
                    navigate('/DogDetails')
                }
                // if password  incorrect show alert message
                else if (Element.email === email && Element.password !== password) {
                    alert('Your Password is Wrong')
                }
                // if email incorrect show alert message
                else {
                    alert('Your account has been not Register / Error Password or Username')
                }
            })
        }
    }

    // (useLocation : Show Alert Message)
    useEffect(() => {
        if (location.search === '?fromRegister=true') {
            setTimeout(() => {
                alert(" Your Registeration is Successfully ")
                console.log(alert)
            }, 500)
        }

    }, [location]);

    return (
        <div className="form-container">
            <h2 className='text-center'>Sign-In</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail" onSubmit={handleSubmit}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" autoComplete="off" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder="Password" autoComplete="off" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                {/* buttons */}
                <div className='d-flex'>
                    <Button variant="primary" type="submit" onClick={login} className='w-50 h-25 mt-3'>
                        Login
                    </Button>
                    <Button variant="" type="submit">
                        Don't have an account?
                        <Link to="../Register"> Register Here.</Link>
                    </Button>
                </div>

                {/* Use localStorage */}
                {localStorage.getItem('Email') && (
                    <div>
                        Email-Id: <p>{localStorage.getItem('Email')}</p>
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

export default Login;