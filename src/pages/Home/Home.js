import React from 'react'
import { Link } from 'react-router-dom'
import app from './firebase'
import './Home.css'
// import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Home({user, setUser}) {
// const [user, setuser] = React.useState(null);
    const provider = new GoogleAuthProvider();

const auth = getAuth();
const popup = () => signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(result.user);
    setUser(result.user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log(error.message);
  });

    return (
        <>
        <div className='home-container'>
            <div className='home-header'>
                <h1 className='home-heading'>Yoga Guru</h1>
                <Link to='/about'>
                    <button 
                        className="btn btn-secondary" 
                        id="about-btn"
                    >
                        About
                    </button>
                </Link>
                {/* <Link to='/'> */}
                    <button 
                        className="btn btn-secondary" 
                        id="about-btn"
                        onClick={()=>popup()}
                    >
                        {user!==null ?"Hi " + user?.displayName?.split(' ')[0]:"Login"}
                    </button>
                {/* </Link> */}
            </div>

            <h1 className="description">Yoga Trainer powered by AI</h1>
            <div className="home-main">
                <div className="btn-section">
                    {user?<Link to='/start'>
                        <button
                            className="btn start-btn"
                        >Let's Start</button>
                    </Link>:
                    <Link to='/tutorials'>
                        <button
                            className="btn start-btn"
                        >Tutorials</button>
                    </Link>}

                </div>
            </div>
        </div>
        <footer style={{display: 'block',color: 'white', background: "rgba(0,0,0,0.5)", margin : 'auto', 'text-align': 'center'}}>
            Copyright 2022 mini project @IIITM Gwalior
        </footer>
        </>
    )
}
