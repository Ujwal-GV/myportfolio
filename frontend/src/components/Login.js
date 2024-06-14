import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
from 'mdb-react-ui-kit';

export default function Login() {
    const [email, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
        if (res.data.token) {
            Cookies.set('name', res.data.name, { expires: 1/24 });
            localStorage.setItem('token', res.data.token);
            navigate('/main');
        }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    setError('Invalid credentials');
                } else if (error.response.status === 500) {
                    setError('Server error, please try again later');
                } else {
                    setError('An unknown error occurred');
                }
            } else if (error.request) {
                setError('No response from the server');
            } else {
                setError('Error in setting up request');
            }
            console.error('Error logging in', error);
        }
    };
return(
    <MDBContainer className="my-5">
        <form onSubmit={handleSubmit}>
        <MDBCard>
            <MDBRow className='g-0'>

            <MDBCol md='6'>
                <MDBCardImage src='/homeImage.png' alt="login form" className='rounded-start w-75 mx-5 p-5'/>
            </MDBCol>

            <MDBCol md='6'>
                <MDBCardBody className='d-flex flex-column'>

                <div className='d-flex flex-row mt-2'>
                    <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                    <span className="h1 fw-bold mb-0">WELCOME TO MY PORTFOLIO</span>
                </div>

                <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                    <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={email} onChange={(e) => setUserEmail(e.target.value)} required />
                    <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

                <MDBBtn className="mb-4 px-5" color='dark' size='lg' type='submit'>Login</MDBBtn>
                <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="/signup" style={{color: '#393f81'}}>Register here</a></p>

                </MDBCardBody>
            </MDBCol>

            </MDBRow>
        </MDBCard>
        </form>

    </MDBContainer>
    );
}
