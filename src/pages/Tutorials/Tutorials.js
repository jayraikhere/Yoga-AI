import React from 'react'

import './Tutorials.css'

import { tutorials, fixCamera } from '../../utils/data'

export default function Tutorials() {
    return (
        <div className="tutorials-container">
            <h1 className="tutorials-heading">Basic Tutorials</h1>
            <div className="tutorials-content-container">
                {tutorials.map((tutorial) => (
                    <p className="tutorials-content">{tutorial}</p>
                ))}
            </div>
            <h1 className="tutorials-heading">Camera Not Working?</h1>
            <div className="tutorials-content-container">
            <h4 className="possible-solutions">
                    Possible Solutions
            </h4>
                {fixCamera.map((points) => (
                    <p className="tutorials-content">{points}</p>
                ))}
            </div>
            
        </div>
    )
}
