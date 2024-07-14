import { Header } from "../Components/Navbar and Footer/Header"
import { Footer } from "../Components/Navbar and Footer/Footer"
import passwordIcon from '../Images/Sign Up Pics/password.png';
import personIcon from '../Images/Sign Up Pics/person.png';
import { Link } from 'react-router-dom';
import { useState } from "react";
import '../App.css';
import axios from "axios";
import * as repl from "repl";

export const SignInpage = () => {

    //Adding pop up for the cancel button
    const [showPopUp, setShowPopUp] = useState(false);

    //We need states for username and password
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //We are going to add some states for the pop up message and color
    //This will be for displaying the messages as a pop up instead of an alert
    const [popupMessage, setPopupMessage] = useState("");
    const [popupColor, setPopupColor] = useState("");

    //Handling cancel button
    const handleCancel = () => {

        //Adding the popup for cancelling the sign in
        setPopupMessage("Log In Cancelled.<br/>Returning to homepage...");
        setPopupColor("green");
        setShowPopUp(true);
        setTimeout(() => {
            setShowPopUp(false);
            window.location.href = '/';
        }, 2000);
    }

    //We need a method for handling the log in (authenticate)
    const handleLogin = async (event: { preventDefault: () => void; }) => {

        event.preventDefault();

        //We need to create a user instance and initialize it
        const user = { username, password };

        //we need an axios request to validate the username and password
        try {

            //have withCredentials: true in Axios request to send cookies
            const response = await axios.post(
                "http://localhost:8080/api/users/authenticate",
                user,
                {
                    headers: {'Content-Type': 'application/json'},
                    //withCredentials: true
                });

            //If the code is 200, we authenticated the user
            if(response.status === 200){
                setPopupMessage("Authentication Successful.<br/>Redirecting to dashboard...");
                setPopupColor("green");
                setShowPopUp(true);
                // alert("Authentication Successful");
                setTimeout(() => {
                    setShowPopUp(false);
                    window.location.href = '/dashboard';
                }, 2000);
            } else {
                // alert("Authentication NOT Successful");
                setPopupMessage("Authentication NOT Successful");
                setPopupColor("red");
                setShowPopUp(true);
                setTimeout(() => {
                    setShowPopUp(false);
                }, 2000);
            }
        } catch (error) {
            console.log("Error:" + error);
            // alert("Error occurred during Authentication");
            setPopupMessage("Error occurred during Authentication");
            setPopupColor("red");
            setShowPopUp(true);
            setTimeout(() => {
                setShowPopUp(false);
            }, 2000);
        }
    }


    return (

        <div className='App'>

            <Header />

            <div className='create-account-container'>
                <div className='create-account-header'>
                    <div className='create-account-text '>Sign In</div>
                    <div className='underline'></div>

                    {/* For handling the text input for username, email, and password */}
                    <div className='inputs'>

                        <div className='input'>
                            <img src={personIcon} alt='Person Icon' />
                            <input type='text' placeholder="Username"
                                   value={username}
                                   onChange={(e) => setUsername(e.target.value)} />
                        </div>

                        <div className='input'>
                            <img src={passwordIcon} alt='Password Icon' />
                            <input type='password' placeholder="Password"
                                   value={password}
                                   onChange={(e)=> setPassword(e.target.value)} />
                        </div>

                    </div>
                    <div className="forgot-password">Forgot username or password? <span>Click Here!</span></div>
                    <div className="forgot-password">Need an account? <span>Join Us</span></div>
                    <div className='submit-container'>
                        {/* <div className='submit'>Log In</div> */}
                        <button
                            // className='submit sign-in-create-account-button-scaling no-focus-outline'
                            className='submit sign-in-create-account-button-scaling'
                            // style={{ textDecoration: 'none' }}
                            onClick={handleLogin}>
                            Log In
                        </button>

                        <div
                            className='submit dark-red sign-in-create-account-button-scaling'
                            onClick={handleCancel}>
                            Cancel
                        </div>
                    </div>

                </div>

            </div>

            <Footer />

            {showPopUp && (
                <div className='popup-box'>
                    <div className='popup-content'>
                        <h1 style={{ color: popupColor }} dangerouslySetInnerHTML={{ __html: popupMessage }}></h1>
                        {/*<h1 style={{ color: 'green' }}>Log In Cancelled</h1>*/}
                        {/*<p>Returning to homepage...</p>*/}
                    </div>
                </div>
            )}

        </div>
    )
}