import { Header } from "../Components/Navbar and Footer/Header"
import { Footer } from "../Components/Navbar and Footer/Footer"
import emailIcon from '../Images/Sign Up Pics/email.png';
import passwordIcon from '../Images/Sign Up Pics/password.png';
import personIcon from '../Images/Sign Up Pics/person.png';
import { useEffect, useState } from "react";
import '../App.css';
import axios from "axios";

export const CreateAccountpage = () => {

    //Need states for our user attributes
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    //Adding password validation
    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');
    const [showStrengthIndicator, setShowStrengthIndicator] = useState(false);

    //Adding a notification pop up for cancel
    const [showPopUp, setShowPopUp] = useState(false);

    //We need a function to validate the password
    const validatePassword = (password: string | any[]) => {

        let passwordStrength = '';

        if (password.length < 6) {
            passwordStrength = 'Weak';
        } else if (password.length < 10) {
            passwordStrength = 'Moderate';
        } else {
            passwordStrength = 'Strong';
        }
        return passwordStrength;
    }

    //We need a useEffect hook to check each keystroke entered by the user
    useEffect(() => {
        if (password) {
            setPasswordStrength(validatePassword(password));
        } else {
            setPasswordStrength('');
        }
    }, [password]) //[password] = Dependency Array

    //Handling cancel button
    const handleCancel = () => {
        setShowPopUp(true);
        setTimeout(() => {
            setShowPopUp(false);
            window.location.href = '/';
        }, 2000);
    }

    //Need to handle register for account creation
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }

        //We need to create a user instance and initialize it
        const user = { firstName, lastName, username, email, password };

        //Now we need to use axios to send a post request to the endpoint
        try {

            //Need a response variable
            // const response = await axios.post('/api/users/create', user, {
            const response = await axios.post('http://localhost:8080/api/users/create', user, {
                headers: { 'Content-Type': 'application/json'}
            });

            //Lets check the status to make sure it was successful
            if(response.status === 200){
                alert('Account created successfully');
                window.location.href = '/sign-in';
            } else {
                alert('Failed to create account');
            }

        } catch (error) {
            console.error('Error', error);
            alert('Error occurred during registration');
        }
    }

    return (

        <div className='App'>

            <Header />

            <div className='create-account-container'>
                <div className='create-account-header'>
                    <div className='create-account-text'>Create Account</div>
                    <div className='underline'></div>

                    {/*We need to have a form tag, the submit button calls */}
                    {/*the handleSubmit method because the 'type' is submit below*/}
                    <form onSubmit={handleSubmit} className='inputs'>

                    {/* For handling the text input for username, email, and password */}
                    <div className='inputs'>

                        <div className='input'>
                            <img src={personIcon} alt='Name Icon' />
                            <input type='text' placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                        </div>

                        <div className='input'>
                            <img src={personIcon} alt='Name Icon' />
                            <input type='text' placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                        </div>

                        <div className='input'>
                            <img src={personIcon} alt='Person Icon' />
                            <input type='text' placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>

                        <div className='input'>
                            <img src={emailIcon} alt='Email Icon' />
                            <input type='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        <div className='input'>
                            <img src={passwordIcon} alt='Password Icon' />
                            <input
                                type='password'
                                placeholder="Password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    if (e.target.value) {
                                        setShowStrengthIndicator(true);
                                    }
                                }}
                                onBlur={() => {
                                    if (!password) {
                                        setShowStrengthIndicator(false);
                                    }
                                }}
                                required
                            />
                        </div>

                        <div className='input'>
                            <img src={passwordIcon} alt='PasswordConfirm Icon' />
                            <input type='password' placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        </div>

                        {showStrengthIndicator && (
                        <div className='password-strength'>
                            <div className={`strength-bar ${passwordStrength.toLowerCase()}`}></div>
                            <div className='strength-text'>{passwordStrength}</div>
                        </div>
                    )}

                    </div>


                    <div className='submit-container'>
                        {/*<div className='submit sign-in-create-account-button-scaling'>Register</div>*/}
                        <button type='submit' className='submit sign-in-create-account-button-scaling'>Register</button>
                        <div 
                            className='submit dark-red sign-in-create-account-button-scaling'
                            onClick={handleCancel}>
                        Cancel
                        </div>
                    </div>

                    </form>

                </div>

            </div>

            <Footer />

            {showPopUp && (
                <div className='popup-box'>
                    <div className='popup-content'>
                        <h1 style={{color: 'green'}}>Account Registration Cancelled</h1>
                        <p>Returning to homepage...</p>
                    </div>
                </div>
            )}

        </div>
    )
}